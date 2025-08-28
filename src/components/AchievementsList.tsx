import { CheckCircle2 } from "lucide-react"

const achievements = [
  "Melhorei o desempenho do carregamento inicial em 55% na empresa",
  "Criei guidelines para agilizar o desenvolvimento da equipe",
  "Mentorei novos desenvolvedores juniores",
  "Corrigi testes técnicos de desenvolvedores",
  "Realizei entrevistas técnicas com novos devs da empresa",
  "Elaborei novos padrões de desenvolvimento e testes"
]

export function AchievementsList() {
  return (
    <div className="space-y-4">
      {achievements.map((achievement, index) => (
        <div
          key={achievement}
          className="flex items-start gap-3 p-4 rounded-lg bg-card-gradient border border-border/50 transition-all duration-300 hover:shadow-elegant animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
        </div>
      ))}
    </div>
  )
}