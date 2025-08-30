import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
import { ProjectCard } from "@/components/ProjectCard"
import { TechIcon, TechIcons } from "@/components/TechIcon"
import { ContactForm } from "@/components/ContactForm"
import { FeedbackCard } from "@/components/FeedbackCard"
import { AchievementsList } from "@/components/AchievementsList"
import { CertificateCard } from "@/components/CertificateCard"
import { EbookCard } from "@/components/EbookCard"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail, BookOpen } from "lucide-react"
import { useTranslation } from "@/contexts/TranslationContext"
import flagBrasil from "@/assets/folder/br.svg"

// Import images
import profilePhoto from "@/assets/profile-photo.jpeg"
import project1 from "@/assets/project-1.jpg"
import project2 from "@/assets/project-2.jpg"
import project3 from "@/assets/project-3.jpg"
import project4 from "@/assets/project-4.jpg"
import uniasselviLogo from "@/assets/uniasselvi-logo.jpg"
import metaLogo from "@/assets/meta-logo.jpg"
import udemyLogo from "@/assets/udemy-transparent-logo-free-png.png"

import ebookCover from "@/assets/logo-ebook.jpeg"

const getProjects = (language: string) => [
  {
    title: language === 'pt' 
      ? "Sistema de Gestão Governamental"
      : "Government Management System",
    description: language === 'pt'
      ? "Atuei no desenvolvimento de um sistema privado de compras públicas utilizado por diversos estados brasileiros, contribuindo desde a criação de telas responsivas em Vue.js até integrações com APIs REST e regras de negócio complexas. Fui responsável pelo deploy em produção, correção de hotfixes, mentoria de novos desenvolvedores, condução de entrevistas e análise de testes técnicos, além de escrever guidelines de IA para agilizar o desenvolvimento."
      : "I contributed to the development of a private public procurement system used by several Brazilian states, working from building responsive Vue.js screens to integrating with REST APIs and implementing complex business rules. I was responsible for production deployments, hotfixes, mentoring new developers, conducting interviews and evaluating technical tests, as well as writing AI guidelines to streamline development.",
    image: project2,
    technologies: ["Vue.js", "Vuetify", "Java Spring Boot", "Messaging", "Microservices", "Docker", "IA", "RabbitMQ"],
    liveUrl: "https://www.azi.com.br/",
    githubUrl: null
  },
  {
    title: language === 'pt' 
      ? "Landing Page - Psicologia" 
      : "Landing Page - Psychology",
    description: language === 'pt' 
      ? "Página institucional moderna e acolhedora desenvolvida para psicóloga clínica, com destaque para serviços, agendamento online e design responsivo." 
      : "Modern and welcoming institutional page developed for a clinical psychologist, highlighting services, online scheduling, and responsive design.",
    image: project1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    liveUrl: "https://arieli-psicologa.netlify.app/",
    githubUrl: "https://github.com/eliasbragga/nature-mind-escape",
  },
  {
    title: language === 'pt' ? "FERK - Sistema ERP" : "FERK - ERP System",
    description: language === 'pt'
      ? "Sistema ERP privado desenvolvido para a empresa FERK. O sistema gerenciava usuários LPUs, imóveis, acessos, propriedades e outras entidades. Participei do planejamento inicial projetando fluxos e tecnologias utilizadas, além de realizar encontros com o cliente para entender regras de negócio e validar entregas."
      : "Private ERP system developed for FERK company. The system managed LPU users, properties, access, and other entities. I participated in the initial planning, designing workflows and technologies, and held meetings with the client to understand business rules and validate deliveries.",
    image: project4,
    technologies: ["Vue.js", "PHP", "Docker", "React", "Scrum", "Azure"],
    isPrivate: true,
  },
  {
    title: language === 'pt' ? "Mealuga - Corretor Virtual Inteligente" : "Mealuga - Intelligent Virtual Broker",
    description: language === 'pt'
      ? "Mealuga é um corretor virtual inteligente integrado ao ChatGPT-5, n8n e canais como WhatsApp, e-mail e Alexa. Ele automatiza a busca de imóveis emergenciais, envia opções personalizadas, responde dúvidas, conecta-se com anunciantes e agenda visitas de forma prática e eficiente."
      : "Mealuga is an intelligent virtual real estate broker integrated with ChatGPT-5, n8n, and channels such as WhatsApp, email, and Alexa. It automates the search for urgent properties, sends personalized options, answers questions, connects with advertisers, and schedules visits efficiently.",
    image: project3,
    technologies: ["ChatGPT-5", "n8n", "Node.js", "Docker", "Svelt", "Typscript", "WhatsApp API"],
    githubUrl: "https://github.com/eliasbragga/projeto-mealuga#",
    isPrivate: false,
  }
]

const technologies = [
  { name: "Vue.js", icon: TechIcons.Vue() },
  { name: "React", icon: TechIcons.React() },
  { name: "Angular", icon: TechIcons.Angular() },
  { name: "TypeScript", icon: TechIcons.TypeScript() },
  { name: "JavaScript", icon: TechIcons.JavaScript() },
  { name: "Node.js", icon: TechIcons.NodeJS() },
  { name: "Java", icon: TechIcons.Java() },
  { name: "Spring Boot", icon: TechIcons.Spring() },
  { name: "PostgreSQL", icon: TechIcons.PostgreSQL() },
  { name: "IA", icon: TechIcons.AI() },
  { name: "Tailwind", icon: TechIcons.Tailwind() },
  { name: "Git", icon: TechIcons.Git() },
]

const getFeedbacks = (language: string) => [
  {
    name: "Diego Tauil",
    role: "Software Developer",
    company: "Detran - CE",
    feedback: language === 'pt'
      ? "Elias é um desenvolvedor único, sempre mantendo o código organizado e aplicando boas práticas. Sempre atualizado com as ultimas tecnologias que o mercado dispõe e com prazos excelentes, sua experiência com frontend é vasta e fundamental para a entrega de qualquer projeto"
      : "Elias is a unique developer, always keeping code organized and following best practices. Up-to-date with the latest technologies available in the market and delivering on time, his extensive frontend experience is essential for the success of any project.",
    rating: 5
  },
  {
    name: "Christian Phelipe de Oliveira Andrade",
    role: "Head of Projects",
    company: "Ti Select",
    feedback: language === 'pt'
      ? "Profissional dedicado e proativo. Sempre busca as melhores soluções e tem ótima comunicação com toda a equipe. Entregou o projeto com uma ótima cobertura de testes e2e/integração e todo o código documentado."
      : "A dedicated and proactive professional. Always seeks the best solutions and maintains excellent communication with the entire team. Delivered the project with great E2E and integration test coverage, and all code thoroughly documented",
    rating: 5
  },
  {
    name: "Raí Nobre",
    role: "Mentored Sudent",
    company: "Student",
    feedback: language === 'pt'
      ? "O Elias é um profissional com conhecimento profundo em JavaScript e Vue.js. Durante as aulas, trouxe práticas modernas de desenvolvimento e incentivou sempre a escrita de um código limpo e organizado. Além disso, tem uma didática clara e prática, tornando conceitos complexos fáceis de entender e o aprendizado muito mais motivador. Sua orientação fez toda a diferença no meu aprendizado."
    : "Elias is a professional with deep knowledge in JavaScript and Vue.js. During the classes, he introduced modern development practices and consistently encouraged writing clean and organized code. Additionally, he has a clear and practical teaching style, making complex concepts easy to understand and learning much more motivating. His guidance made a significant difference in my learning.",
      rating: 5
  }
]

const getCountries = (language: string, t: (key: string) => string) => [
  { name: t('country.brasil'), code: 'br' },
  { name: t('country.portugal'), code: 'pt' },
  { name: t('country.espanha'), code: 'es' },
  { name: t('country.franca'), code: 'fr' },
  { name: t('country.holanda'), code: 'nl' },
  { name: t('country.alemanha'), code: 'de' },
  { name: t('country.republica-tcheca'), code: 'cz' },
  { name: t('country.austria'), code: 'at' },
  { name: t('country.italia'), code: 'it' },
  { name: t('country.argentina'), code: 'ar' },
]

const getCertificates = (language: string) => [
  {
    title: language === 'pt' 
      ? "Análise e Desenvolvimento de Sistemas" 
      : "Systems Analysis and Development",
    institution: "UNIASSELVI",
    status: language === 'pt' ? "Cursando" : "In Progress",
    logo: uniasselviLogo,
    type: "course" as const
  },
  {
    title: "Springboot Expert: JPA, REST, JWT, OAUTH2 com Docker e AWS",
    institution: "Meta",
    logo: udemyLogo,
    credential: 'https://www.udemy.com/certificate/UC-5b82fa7f-c16f-4878-95f2-a37ba3d039b4/',
    type: "course" as const
  },
  {
    title: "Advanced React",
    institution: "Meta",
    logo: metaLogo,
    credential: 'https://www.coursera.org/account/accomplishments/verify/N5716EU8C8KK',
    type: "certification" as const
  },
  {
    title: "Frontend Developer",
    institution: "Meta",
    logo: metaLogo,
    credential: 'https://www.coursera.org/account/accomplishments/specialization/7FMPBJ391TO2',
    type: "certification" as const
  },
]

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const { language, t } = useTranslation()
  
  const projects = getProjects(language)
  const feedbacks = getFeedbacks(language)
  const countries = getCountries(language, t)
  const certificates = getCertificates(language)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const redirectToExternalLink = (link: string, modeRedirect: string): void => {
    window.open(link, modeRedirect)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection("hero")} className="text-sm hover:text-primary transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-primary transition-colors">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection("achievements")} className="text-sm hover:text-primary transition-colors">
              {t('nav.achievements')}
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition-colors">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection("feedbacks")} className="text-sm hover:text-primary transition-colors">
              {t('nav.feedbacks')}
            </button>
            <button onClick={() => scrollToSection("certificates")} className="text-sm hover:text-primary transition-colors">
              {t('nav.certificates')}
            </button>
            <button onClick={() => scrollToSection("ebook")} className="text-sm hover:text-primary transition-colors">
              {t('nav.ebook')}
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-primary transition-colors">
              {t('nav.contact')}
            </button>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-hero-gradient" id="hero">
        <div className="container mx-auto text-center">
          <div className="animate-fade-up">
            <div className="relative w-40 h-40 mx-auto mt-5 mb-8 rounded-full overflow-hidden shadow-glow animate-float">
              <img 
                src={profilePhoto} 
                alt="Foto de perfil" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">

              {t('hero.description')}

            </p>
            
            <div className="mb-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">{t('hero.countries')}</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-2 text-sm bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50 hover:shadow-glow transition-all duration-300"
                    title={country.name}
                  >
                    <img
                      src={`/folder/${country.code}.svg`}
                      alt={country.name}
                       className="w-5 h-5 object-contain rounded-sm shadow-sm"
                    />
                    <span className="text-xs text-muted-foreground hidden sm:inline">{country.name}</span>
                  </div>
                ))}
              </div>

            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="transition-all duration-300 hover:shadow-glow"
              >
                {t('hero.viewProjects')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="transition-all duration-300 hover:shadow-glow"
              >
                {t('hero.contact')}
              </Button>
            </div>
              <Button 
                size="lg" 
                onClick={() => redirectToExternalLink("https://eliasbraga-journey.netlify.app/", "_self")}
                className="transition-all mb-3 duration-300 hover:shadow-glow bg-gradient-to-r from-blue-700 to-purple-800 text-white font-bold py-2 px-10 rounded-lg
               transition-all duration-300
               hover:from-blue-600 hover:to-purple-700"
              >
                <BookOpen className="w-5 h-5" />
                {t('hero.viewJourney')}
              </Button>

            <div className="flex justify-center space-x-4">
              <Button onClick={() => redirectToExternalLink("https://github.com/eliasbragga", "_blank")} variant="ghost" size="icon" className="hover:shadow-glow transition-all duration-300">
                <Github className="w-5 h-5" />
              </Button>
              <Button onClick={() => redirectToExternalLink("https://www.linkedin.com/in/elias-braga-069144172/", "_blank")}  variant="ghost" size="icon" className="hover:shadow-glow transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="ghost" size="icon" className="hover:shadow-glow transition-all duration-300">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="absolute left-1/2 animate-bounce">
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('skills.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('skills.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('achievements.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('achievements.description')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <AchievementsList />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projects.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                style={{ animationDelay: `${index * 200}ms` }}
                className="animate-slide-in-right"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section id="feedbacks" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('feedbacks.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('feedbacks.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbacks.map((feedback, index) => (
              <div
                key={feedback.name}
                style={{ animationDelay: `${index * 200}ms` }}
                className="animate-slide-in-right"
              >
                <FeedbackCard {...feedback} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('certificates.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('certificates.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.title}
                style={{ animationDelay: `${index * 200}ms` }}
                className="animate-scale-in"
              >
                <CertificateCard {...certificate} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-book Section */}
      <section id="ebook" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ebook.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('ebook.description')}
            </p>
          </div>
          
          <div className="animate-scale-in">
            <EbookCard 
              title={language === 'pt' 
                ? "Como conseguir o primeiro emprego na programação"
                : "How to get your first programming job"
              }
              description={language === 'pt'
                ? "Um guia completo com dicas práticas, estratégias de estudo e insights valiosos para quem está começando na área de desenvolvimento de software."
                : "A complete guide with practical tips, study strategies and valuable insights for those starting in software development."
              }
              coverImage={ebookCover}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
          
          <div className="animate-scale-in">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {t('footer.text')}</p>
        </div>
      </footer>
    </div>
  )
}