import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface FeedbackCardProps {
  name: string
  role: string
  company: string
  feedback: string
  rating: number
}

export function FeedbackCard({ name, role, company, feedback, rating }: FeedbackCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 bg-card-gradient border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{feedback}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role} - {company}</p>
        </div>
      </CardContent>
    </Card>
  )
}