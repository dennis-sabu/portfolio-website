import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <Facebook size={20} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <Twitter size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <Linkedin size={20} />
      </a>
    </div>
  )
}

