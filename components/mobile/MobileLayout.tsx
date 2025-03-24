"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Menu, X } from "lucide-react"
import { useMobile } from './useMobile'

interface MobileLayoutProps {
  children: React.ReactNode
  title?: string
  showBackButton?: boolean
  showHomeButton?: boolean
}

export function MobileLayout({ children, title, showBackButton = false, showHomeButton = false }: MobileLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { platform } = useMobile()
  const router = useRouter()

  useEffect(() => {
    // Prevent scrolling on mobile devices
    document.body.style.overflow = 'hidden'
    // Force fullscreen on iOS
    if (platform === 'ios') {
      document.documentElement.style.height = '100vh'
      document.body.style.height = '100vh'
    }
    // Handle Android back button
    if (platform === 'android') {
      window.history.pushState(null, '', window.location.pathname)
      window.addEventListener('popstate', preventBack)
    }

    return () => {
      document.body.style.overflow = 'auto'
      if (platform === 'android') {
        window.removeEventListener('popstate', preventBack)
      }
    }
  }, [platform])

  const preventBack = (e: PopStateEvent) => {
    window.history.pushState(null, '', window.location.pathname)
  }

  if (platform === 'web' && process.env.NODE_ENV === 'production') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Please access this application through our mobile app</p>
      </div>
    )
  }


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleBack = () => {
    router.back()
  }

  const handleHome = () => {
    router.push("/")
  }

  return (
    <div className="flex flex-col min-h-screen h-[100vh] w-full overflow-hidden touch-none">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          {showBackButton && (
            <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}

          {showHomeButton && (
            <Button variant="ghost" size="icon" onClick={handleHome} className="mr-2">
              <Home className="h-5 w-5" />
            </Button>
          )}

          <div className="flex-1 text-center font-semibold">{title || "Roses"}</div>

          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-14">
          <div className="flex flex-col p-4 space-y-4">
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/")
                setIsMobileMenuOpen(false)
              }}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/rankings")
                setIsMobileMenuOpen(false)
              }}
            >
              Rankings
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/community")
                setIsMobileMenuOpen(false)
              }}
            >
              Community
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/world")
                setIsMobileMenuOpen(false)
              }}
            >
              World
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/submit")
                setIsMobileMenuOpen(false)
              }}
            >
              Submit
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/about")
                setIsMobileMenuOpen(false)
              }}
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/influencers")
                setIsMobileMenuOpen(false)
              }}
            >
              Influencers
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/profile")
                setIsMobileMenuOpen(false)
              }}
            >
              Profile
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Mobile Bottom Navigation */}
      <nav className="sticky bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-around px-4">
          <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => router.push("/rankings")}>
            Rankings
          </Button>
          <Button variant="ghost" size="sm" onClick={() => router.push("/community")}>
            Community
          </Button>
          <Button variant="ghost" size="sm" onClick={() => router.push("/profile")}>
            Profile
          </Button>
        </div>
      </nav>
    </div>
  )
}