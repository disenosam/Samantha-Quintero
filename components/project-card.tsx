import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/cory petite.jpeg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Link href={`/proyecto/${project.id}`}>
              Ver detalles <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xs text-muted-foreground">{project.year}</span>
        <Link href={`/proyecto/${project.id}`} className="text-xs font-medium hover:underline">
          Ver proyecto
        </Link>
      </CardFooter>
    </Card>
  )
}
