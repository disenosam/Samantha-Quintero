import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-10">
        <Button asChild variant="ghost" size="sm" className="mb-8">
          <Link href="/#proyectos">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
          </Link>
        </Button>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-1 h-4 w-4" />
              <span>{project.client}</span>
            </div>
          </div>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-6">
          <div className="prose max-w-none">
            <h2>Descripción del proyecto</h2>
            <p>{project.description}</p>
            <p>{project.longDescription}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold mb-2">Desafío</h3>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Solución</h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Galería</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Imagen ${index + 1}`}
                className="rounded-lg object-cover w-full aspect-[4/3]"
              />
            ))}
          </div>
        </div>

        {project.testimonial && (
          <div className="rounded-lg bg-muted p-6">
            <blockquote className="space-y-2">
              <p className="text-lg italic">"{project.testimonial.quote}"</p>
              <footer className="text-sm font-medium">
                — {project.testimonial.author}, {project.testimonial.role}
              </footer>
            </blockquote>
          </div>
        )}

        <div className="border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Más proyectos</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={`/proyecto/${relatedProject.id}`} className="group block">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-2 font-medium group-hover:text-primary transition-colors">
                    {relatedProject.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
