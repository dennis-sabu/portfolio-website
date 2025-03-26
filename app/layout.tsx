import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import SideIdentifier from "@/components/side-identifier"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dennis Sabu | Portfolio",
  description: "Portfolio website of Dennis Sabu, developer and designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen`}>
        <Navbar />
        <main className="relative">
          <SideIdentifier leftSide />
          {children}
          <SideIdentifier rightSide />
        </main>
      </body>
    </html>
  )
}



import './globals.css'