interface SideIdentifierProps {
  leftSide?: boolean
  rightSide?: boolean
}

export default function SideIdentifier({ leftSide, rightSide }: SideIdentifierProps) {
  return (
    <div
      className={`fixed top-0 bottom-0 flex flex-col justify-center items-center gap-2 z-10 ${
        leftSide ? "left-4 md:left-8" : "right-4 md:right-8"
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="text-zinc-500 font-bold tracking-wider rotate-90 origin-center mb-2">#</span>
        <span className="text-purple-500 font-bold tracking-wider rotate-90 origin-center mb-2">D</span>
        <span className="text-purple-500 font-bold tracking-wider rotate-90 origin-center mb-2">E</span>
        <span className="text-purple-500 font-bold tracking-wider rotate-90 origin-center mb-2">N</span>
        <span className="text-purple-500 font-bold tracking-wider rotate-90 origin-center mb-2">N</span>
        <span className="text-purple-500 font-bold tracking-wider rotate-90 origin-center mb-2">I</span>
        <span className="text-purple-500 font-bold tracking-wider rotate-90 origin-center mb-2">S</span>
      </div>
      <div className="flex flex-col items-center mt-4">
        <span className="text-zinc-500 font-bold tracking-wider rotate-90 origin-center mb-2">S</span>
        <span className="text-zinc-500 font-bold tracking-wider rotate-90 origin-center mb-2">A</span>
        <span className="text-zinc-500 font-bold tracking-wider rotate-90 origin-center mb-2">B</span>
        <span className="text-zinc-500 font-bold tracking-wider rotate-90 origin-center mb-2">U</span>
      </div>
    </div>
  )
}

