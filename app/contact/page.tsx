import PixelHeading from "@/components/pixel-heading"
import SocialIcons from "@/components/social-icons"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <PixelHeading>CONTACT ME</PixelHeading>
        </div>

        <form className="flex flex-col gap-6">
          <div className="border border-purple-500 p-4">
            <input type="text" placeholder="NAME" className="w-full bg-transparent outline-none text-center" />
          </div>

          <div className="border border-purple-500 p-4">
            <input type="email" placeholder="EMAIL ID" className="w-full bg-transparent outline-none text-center" />
          </div>

          <div className="border border-purple-500 p-4 h-32">
            <textarea
              placeholder="YOUR MESSAGE"
              className="w-full h-full bg-transparent outline-none text-center resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 py-4 px-8 text-white font-bold tracking-wider mx-auto"
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className="mt-20 bg-purple-500 py-8 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8">
            <p className="text-xl md:text-2xl text-white text-center">
              Success starts with a single step—keep learning, keep creating, and never stop pushing forward!
            </p>
            <p className="text-right text-white font-bold">—DENNIS SABU</p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-white font-bold tracking-wider">FOLLOW ME ON</div>
              <SocialIcons />
            </div>

            <div className="text-center text-white text-sm mt-4">© 2025 Dennis Sabu. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

