import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 py-20 md:py-0">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex flex-col items-start">
            <div className="text-8xl font-bold text-purple-500">U</div>
            <div className="text-8xl font-bold text-white">I</div>
            <div className="text-8xl font-bold text-purple-500">.</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-purple-500 rounded-full overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              I am <span className="text-purple-500">Dennis Sabu</span>,
            </h1>
            <p className="text-lg text-center md:text-left">
              A B.Tech student, developer, designer, and chess player, passionate about programming, web development,
              and innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-20 border border-zinc-700 p-4 hidden lg:block">
        <div className="text-sm text-zinc-400">SINCE</div>
        <div className="text-3xl font-bold text-purple-500">2005</div>
      </div>

      <div className="mt-12 md:mt-0 md:absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          <span className="text-white font-mono">&gt; HI ,IAM</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-zinc-400 font-mono">A</span>
          <span className="text-purple-500 font-mono">PRO</span>
          <span className="text-white font-mono">BEGINNER</span>
        </div>
      </div>
    </div>
  )
}

