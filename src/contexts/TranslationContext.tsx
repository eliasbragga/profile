import { createContext, useContext, useState, ReactNode, useEffect } from "react"

type Language = 'pt' | 'en'

interface TranslationContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.achievements': 'Feitos',
    'nav.projects': 'Projetos',
    'nav.feedbacks': 'Feedbacks',
    'nav.certificates': 'Certificados',
    'nav.ebook': 'E-book',
    'nav.contact': 'Contato',
    
    // Hero section
    'hero.title': 'Desenvolvedor de Software',
    'hero.description': 'Com 4 anos de experiência. Nos últimos 12 meses, viajei por 10 países conhecendo novas culturas e desenvolvendo soluções interessantes para pessoas e empresas.',
    'hero.countries': 'Países visitados:',
    'hero.viewProjects': 'Ver Projetos',
    'hero.contact': 'Entrar em Contato',
    
    // Skills section
    'skills.title': 'Minhas Habilidades',
    'skills.description': 'Especializado em frontend com Vue.js e experiência sólida em React.js e Angular.',
    
    // Achievements section
    'achievements.title': 'Meus Feitos',
    'achievements.description': 'Principais conquistas e contribuições ao longo da minha carreira.',
    
    // Projects section
    'projects.title': 'Meus Projetos',
    'projects.description': 'Uma seleção dos meus trabalhos mais recentes e interessantes.',
    'projects.private': 'Projeto privado empresarial',
    'projects.viewDemo': 'Ver Demo',
    'projects.viewCode': 'Ver Código',
    
    // Feedbacks section
    'feedbacks.title': 'Feedbacks',
    'feedbacks.description': 'O que colegas e clientes dizem sobre meu trabalho.',
    
    // Certificates section
    'certificates.title': 'Certificados',
    'certificates.description': 'Formação acadêmica e certificações profissionais.',
    
    // E-book section
    'ebook.title': 'E-book Gratuito',
    'ebook.description': 'Compartilho minha experiência para ajudar novos desenvolvedores.',
    
    // Contact section
    'contact.title': 'Vamos Trabalhar Juntos?',
    'contact.description': 'Estou sempre aberto a novos desafios e oportunidades interessantes.',
    
    // Footer
    'footer.text': '2024 Portfolio. Desenvolvido com ❤️ usando React e Tailwind CSS.',
    
    // Countries
    'country.brasil': 'Brasil',
    'country.portugal': 'Portugal',
    'country.espanha': 'Espanha',
    'country.franca': 'França',
    'country.holanda': 'Holanda',
    'country.alemanha': 'Alemanha',
    'country.republica-tcheca': 'República Tcheca',
    'country.austria': 'Áustria',
    'country.italia': 'Itália',
    'country.argentina': 'Argentina',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.achievements': 'Achievements',
    'nav.projects': 'Projects',
    'nav.feedbacks': 'Feedbacks',
    'nav.certificates': 'Certificates',
    'nav.ebook': 'E-book',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Software Developer',
    'hero.description': 'With 4 years of experience. In the past 12 months, I traveled through 10 countries experiencing new cultures and developing interesting solutions for people and companies.',
    'hero.countries': 'Countries visited:',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Get in Touch',
    
    // Skills section
    'skills.title': 'My Skills',
    'skills.description': 'Specialized in frontend with Vue.js and solid experience in React.js and Angular.',
    
    // Achievements section
    'achievements.title': 'My Achievements',
    'achievements.description': 'Key accomplishments and contributions throughout my career.',
    
    // Projects section
    'projects.title': 'My Projects',
    'projects.description': 'A selection of my most recent and interesting work.',
    'projects.private': 'Private enterprise project',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',
    
    // Feedbacks section
    'feedbacks.title': 'Testimonials',
    'feedbacks.description': 'What colleagues and clients say about my work.',
    
    // Certificates section
    'certificates.title': 'Certificates',
    'certificates.description': 'Academic background and professional certifications.',
    
    // E-book section
    'ebook.title': 'Free E-book',
    'ebook.description': 'I share my experience to help new developers.',
    
    // Contact section
    'contact.title': 'Let\'s Work Together?',
    'contact.description': 'I\'m always open to new challenges and interesting opportunities.',
    
    // Footer
    'footer.text': '2024 Portfolio. Developed with ❤️ using React and Tailwind CSS.',
    
    // Countries
    'country.brasil': 'Brazil',
    'country.portugal': 'Portugal',
    'country.espanha': 'Spain',
    'country.franca': 'France',
    'country.holanda': 'Netherlands',
    'country.alemanha': 'Germany',
    'country.republica-tcheca': 'Czech Republic',
    'country.austria': 'Austria',
    'country.italia': 'Italy',
    'country.argentina': 'Argentina',
  }
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language
    return saved || 'pt'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key
  }

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}