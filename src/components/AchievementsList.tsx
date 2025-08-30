import { CheckCircle2 } from "lucide-react"
import { useTranslation } from "@/contexts/TranslationContext"

const getAchievements = (language: string) => [
  language === 'pt' 
    ? "Melhorei o desempenho do carregamento inicial em 55% na empresa"
    : "Improved initial loading performance by 55% at the company",
    language === 'pt'
    ? "Fiz a migração de tecnologia do Vue 2 para Vue 3"
    : "Migrated technology from Vue 2 to Vue 3",
  language === 'pt'
    ? "Criei guidelines para agilizar o desenvolvimento da equipe"
    : "Created guidelines to streamline team development",
  language === 'pt'
    ? "Mentorei novos desenvolvedores juniores"
    : "Mentored new junior developers",
  language === 'pt'
    ? "Corrigi testes técnicos de desenvolvedores"
    : "Reviewed technical tests for developers",
  language === 'pt'
    ? "Realizei entrevistas técnicas com novos devs da empresa"
    : "Conducted technical interviews with new company developers",
  language === 'pt'
    ? "Elaborei novos padrões de desenvolvimento e testes"
    : "Developed new development and testing standards"
]

export function AchievementsList() {
  const { language } = useTranslation()
  const achievements = getAchievements(language)
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