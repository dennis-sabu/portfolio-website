"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-purple-500 text-3xl font-bold tracking-wider">
          LOGO
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-white hover:text-purple-400 tracking-widest font-medium">
            HOME
          </Link>
          <Link href="/about" className="text-white hover:text-purple-400 tracking-widest font-medium">
            ABOUT
          </Link>
          <Link href="/works" className="text-white hover:text-purple-400 tracking-widest font-medium">
            WORK&apos;S
          </Link>
          <Link href="/contact" className="text-white hover:text-purple-400 tracking-widest font-medium">
            CONTACT
          </Link>
          <Link
            href="/signin"
            className="bg-purple-500 hover:bg-purple-600 px-6 py-2 text-white tracking-widest font-medium"
          >
            SIGN IN
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-zinc-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-purple-400 tracking-widest font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-purple-400 tracking-widest font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/works"
              className="text-white hover:text-purple-400 tracking-widest font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              WORK&apos;S
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-purple-400 tracking-widest font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/signin"
              className="bg-purple-500 hover:bg-purple-600 px-6 py-2 text-white tracking-widest font-medium inline-block w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              SIGN IN
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

