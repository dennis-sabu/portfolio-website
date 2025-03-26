import PixelHeading from "@/components/pixel-heading"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export default function Challenges() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="container mx-auto text-center relative">
        <div className="relative inline-block">
          <div className="absolute -z-10 w-[400px] h-[200px] border border-zinc-700 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute -z-10 w-3 h-3 bg-purple-500 rounded-full left-0 top-1/2 -translate-y-1/2"></div>
          <div className="absolute -z-10 w-3 h-3 bg-purple-500 rounded-full right-0 top-1/2 -translate-y-1/2"></div>

          <div className="flex flex-col items-center gap-2">
            <PixelHeading>ACCEPT</PixelHeading>
            <PixelHeading>NEW</PixelHeading>
            <PixelHeading className="text-purple-500">CHALLENGES</PixelHeading>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 w-full flex justify-center items-center gap-20">
        <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-xl font-mono tracking-wider">
          EXPLORE
        </Link>

        <div className="flex justify-center">
          <ArrowDown className="animate-bounce" size={24} />
        </div>

        <Link href="/about" className="text-zinc-500 hover:text-zinc-300 text-xl font-mono tracking-wider">
          ABOUT
        </Link>
      </div>
    </div>
  )
}

