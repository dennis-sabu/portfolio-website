import type React from "react"
interface PixelHeadingProps {
  children: React.ReactNode
  className?: string
}

export default function PixelHeading({ children, className = "" }: PixelHeadingProps) {
  return (
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white font-mono ${className}`}>
      {children}
    </h2>
  )
}

