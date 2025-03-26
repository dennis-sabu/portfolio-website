import PixelHeading from "@/components/pixel-heading"
import Link from "next/link"

export default function Works() {
  const projects = [
    { id: 1, title: "Project 1", link: "/works/1" },
    { id: 2, title: "Project 2", link: "/works/2" },
    { id: 3, title: "Project 3", link: "/works/3" },
    { id: 4, title: "Project 4", link: "/works/4" },
    { id: 5, title: "Project 5", link: "/works/5" },
    { id: 6, title: "Project 6", link: "/works/6" },
  ]

  return (
    <div className="min-h-screen flex flex-col justify-center md:px-4 px-10 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <PixelHeading>WORK&apos;S</PixelHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={project.link}>
              <div className="bg-purple-500 aspect-square rounded-3xl hover:bg-purple-600 transition-colors cursor-pointer">
                {/* Project content would go here */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

