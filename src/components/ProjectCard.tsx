import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl 
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 bg-card-gradient border-border/50">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-2">
              {liveUrl && (
                <Button size="sm" className="bg-background/90 text-foreground hover:bg-background">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </Button>
              )}
              {githubUrl && (
                <Button size="sm" variant="outline" className="bg-background/90 hover:bg-background">
                  <Github className="w-4 h-4 mr-1" />
                  Código
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}