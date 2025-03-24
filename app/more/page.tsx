
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MorePage() {
  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-6">More</h1>
      <div className="space-y-2">
        <Link href="/submit" className="w-full">
          <Button variant="outline" className="w-full justify-start">Submit</Button>
        </Link>
        <Link href="/about" className="w-full">
          <Button variant="outline" className="w-full justify-start">About</Button>
        </Link>
        <Link href="/rules" className="w-full">
          <Button variant="outline" className="w-full justify-start">Rules</Button>
        </Link>
      </div>
    </div>
  )
}
