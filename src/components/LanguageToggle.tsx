import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/TranslationContext"

export function LanguageToggle() {
  const { language, toggleLanguage } = useTranslation()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="relative overflow-hidden transition-all duration-300 hover:shadow-glow"
      title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <span className="absolute -bottom-1 -right-1 text-xs font-bold bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
        {language.toUpperCase()}
      </span>
      <span className="sr-only">
        {language === 'pt' ? 'Alternar idioma' : 'Toggle language'}
      </span>
    </Button>
  )
}