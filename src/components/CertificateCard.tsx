import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CertificateCardProps {
  title: string
  institution: string
  status?: string
  logo: string
  type: "course" | "certification"
}

export function CertificateCard({ title, institution, status, logo, type }: CertificateCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 bg-card-gradient border-border/50">
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-background shadow-sm">
          <img 
            src={logo} 
            alt={`${institution} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{institution}</p>
        {status && (
          <Badge variant="secondary" className="text-xs">
            {status}
          </Badge>
        )}
        <div className="mt-3">
          <Badge variant={type === "certification" ? "default" : "outline"} className="text-xs">
            {type === "certification" ? "Certificação" : "Curso"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}