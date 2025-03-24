"use client"

import { Header } from "@/components/Header"
import { RoseCounter } from "@/components/RoseCounter"
import { Button } from "@/components/ui/button"
import { SongDiscussion } from "@/components/SongDiscussion"
import { RosePurchaseModal } from "@/components/RosePurchaseModal"
import { SurpriseBoxModal } from "@/components/SurpriseBoxModal"
import { TopRankings } from "@/components/TopRankings"
import { WeeklyTimer } from "@/components/WeeklyTimer"
import { theme } from "@/config/theme"
import { MobileLayout } from "@/components/mobile/MobileLayout"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Home() {
  const comments = [
    {
      id: 1,
      username: "kpopfan1",
      avatar: "/placeholder.svg",
      text: "This song is amazing!",
      timestamp: "2023-06-01T12:00:00Z",
      roses: 50,
      replies: [],
    },
    {
      id: 2,
      username: "musiclover",
      avatar: "/placeholder.svg",
      text: "I can't stop listening to it!",
      timestamp: "2023-06-01T12:30:00Z",
      roses: 30,
      replies: [],
    },
    {
      id: 3,
      username: "straykidslover",
      avatar: "/placeholder.svg",
      text: "Stray Kids never disappoints!",
      timestamp: "2023-06-01T13:00:00Z",
      roses: 40,
      replies: [],
    },
  ]

  const topRankings = [
    { rank: 1, song: "Lose My Breath", artist: "Stray Kids", roses: 10000, image: "/placeholder.svg" },
    { rank: 2, song: "Dynamite", artist: "BTS", roses: 9500, image: "/placeholder.svg" },
    { rank: 3, song: "How You Like That", artist: "BLACKPINK", roses: 9000, image: "/placeholder.svg" },
    { rank: 4, song: "Fancy", artist: "TWICE", roses: 8500, image: "/placeholder.svg" },
    { rank: 5, song: "Growl", artist: "EXO", roses: 8000, image: "/placeholder.svg" },
  ]

  const isMobile = useIsMobile()
  const isDevelopment = process.env.NODE_ENV === 'development'

  // Allow access in development mode regardless of device
  if (!isMobile && !isDevelopment) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Please access this application through our mobile app</h1>
      </div>
    )
  }

  return (
    <MobileLayout>
      <div style={{ backgroundColor: theme.colors.background }} className="min-h-screen">
        <Header theme={theme} />
        <WeeklyTimer />
        <main className="container mx-auto p-4">
          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <div>
              {topRankings.length > 0 && (
                <SongDiscussion
                  song={topRankings[0].song}
                  artist={topRankings[0].artist}
                  image={topRankings[0].image}
                  rank={topRankings[0].rank}
                  roses={topRankings[0].roses}
                  comments={comments}
                />
              )}
            </div>
            <div className="space-y-6">
              <RoseCounter />
              <div className="flex space-x-2">
                <RosePurchaseModal />
                <SurpriseBoxModal />
              </div>
              <TopRankings rankings={topRankings} />
              <div className="mt-4">
                <Button 
                  onClick={() => window.location.href = '/rankings'}
                  className="w-full"
                  variant="outline"
                >
                  Previous Rankings
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MobileLayout>
  )
}