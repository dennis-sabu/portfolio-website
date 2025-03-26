import PixelHeading from "@/components/pixel-heading"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="container mx-auto text-center">
        <PixelHeading>ABOUT</PixelHeading>

        <div className="mt-12 max-w-2xl mx-auto">{/* About content would go here */}</div>
      </div>

      <div className="absolute bottom-20 w-full flex justify-center items-center gap-20">
        <Link href="/challenges" className="text-zinc-500 hover:text-zinc-300 text-xl font-mono tracking-wider">
          EXPLORE
        </Link>

        <div className="flex justify-center">
          <ArrowDown className="animate-bounce" size={24} />
        </div>

        <Link href="/works" className="text-zinc-500 hover:text-zinc-300 text-xl font-mono tracking-wider">
          WORK&apos;S
        </Link>
      </div>
    </div>
  )
}

