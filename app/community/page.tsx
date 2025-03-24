import { Header } from "@/components/Header"
import { Community } from "@/components/Community"
import { theme } from "@/config/theme"

export default function CommunityPage() {
  return (
    <div style={{ backgroundColor: theme.colors.background }} className="min-h-screen">
      <Header theme={theme} />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Music Discussion</h1>
        <Community />
      </main>
    </div>
  )
}

