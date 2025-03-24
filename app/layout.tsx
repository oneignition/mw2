
import type React from "react"
import { Inter } from "next/font/google"
import { Chat } from "@/components/Chat"
import { AuthProvider } from "@/contexts/auth-context"
import { BottomNav } from "@/components/mobile/BottomNav"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col h-[100vh] w-full overflow-hidden">
            <main className="flex-1 relative">
              {children}
              <Chat />
            </main>
            <BottomNav />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
