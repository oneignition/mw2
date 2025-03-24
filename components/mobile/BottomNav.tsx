
"use client"

import { useRouter } from "next/navigation"
import { Home, Users, User, Star, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function BottomNav() {
  const router = useRouter()
  const { user } = useAuth()

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-around px-4">
        <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
          <Home className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => router.push("/community")}>
          <Users className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => router.push(user ? "/profile" : "/login")}>
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => router.push("/influencers")}>
          <Star className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => router.push("/more")}>
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}
