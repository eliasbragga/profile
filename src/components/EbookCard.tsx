import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, BookOpen } from "lucide-react"
import ebookPdf from "@/assets/Segredos do primeiro emprego como front-end.pdf"

interface EbookCardProps {
  title: string
  description: string
  coverImage: string
}

export function EbookCard({ title, description, coverImage }: EbookCardProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ebookPdf;      // caminho do arquivo PDF
    link.download = "meu-ebook.pdf"; // nome do arquivo ao baixar
    link.click();
  };
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 bg-card-gradient border-border/50 max-w-md mx-auto">
      <div className="relative">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-64 object-scale-down"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="mb-2 bg-primary/90">
            <BookOpen className="w-3 h-3 mr-1" />
            E-book Gratuito
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <Button onClick={() => handleDownload()} className="w-full transition-all duration-300 hover:shadow-glow">
          <Download className="w-4 h-4 mr-2" />
          Baixar E-book
        </Button>
      </CardContent>
    </Card>
  )
}
