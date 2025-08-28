import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { ProjectCard } from "@/components/ProjectCard"
import { TechIcon, TechIcons } from "@/components/TechIcon"
import { ContactForm } from "@/components/ContactForm"
import { FeedbackCard } from "@/components/FeedbackCard"
import { AchievementsList } from "@/components/AchievementsList"
import { CertificateCard } from "@/components/CertificateCard"
import { EbookCard } from "@/components/EbookCard"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

// Import images
import profilePhoto from "@/assets/profile-photo.jpg"
import project1 from "@/assets/project-1.jpg"
import project2 from "@/assets/project-2.jpg"
import project3 from "@/assets/project-3.jpg"
import uniasselviLogo from "@/assets/uniasselvi-logo.jpg"
import metaLogo from "@/assets/meta-logo.jpg"
import ebookCover from "@/assets/ebook-cover.jpg"

const projects = [
  {
    title: "Dashboard Analytics",
    description: "Painel completo de análise de dados com Vue.js, gráficos interativos e visualizações em tempo real.",
    image: project1,
    technologies: ["Vue.js", "TypeScript", "Chart.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-commerce Modern",
    description: "Plataforma de e-commerce responsiva com React.js, carrinho de compras e integração de pagamentos.",
    image: project2,
    technologies: ["React", "Redux", "Stripe", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sistema Empresarial",
    description: "Aplicação corporativa Angular para gestão de tarefas, com interface robusta e funcionalidades avançadas.",
    image: project3,
    technologies: ["Angular", "RxJS", "Material UI", "NestJS"],
    isPrivate: true,
  },
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

const feedbacks = [
  {
    name: "Ana Silva",
    role: "Tech Lead",
    company: "TechCorp",
    feedback: "Excelente desenvolvedor frontend, sempre entrega código limpo e bem estruturado. Sua expertise em Vue.js foi fundamental para nosso projeto.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "Product Manager", 
    company: "StartupXYZ",
    feedback: "Profissional dedicado e proativo. Sempre busca as melhores soluções e tem ótima comunicação com toda a equipe.",
    rating: 5
  },
  {
    name: "Marina Costa",
    role: "CTO",
    company: "DevSolutions",
    feedback: "Desenvolvedor excepcional com grande conhecimento técnico. Contribuiu significativamente para a melhoria da performance dos nossos sistemas.",
    rating: 5
  }
]

const countries = [
  { name: "Brasil", flag: "🇧🇷" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Espanha", flag: "🇪🇸" },
  { name: "França", flag: "🇫🇷" },
  { name: "Holanda", flag: "🇳🇱" },
  { name: "Alemanha", flag: "🇩🇪" },
  { name: "República Tcheca", flag: "🇨🇿" },
  { name: "Áustria", flag: "🇦🇹" },
  { name: "Itália", flag: "🇮🇹" },
  { name: "Argentina", flag: "🇦🇷" },
]

const certificates = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UNIASSELVI",
    status: "Cursando",
    logo: uniasselviLogo,
    type: "course" as const
  },
  {
    title: "Frontend Developer",
    institution: "Meta",
    logo: metaLogo,
    type: "certification" as const
  }
]

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-primary transition-colors">
              Habilidades
            </button>
            <button onClick={() => scrollToSection("achievements")} className="text-sm hover:text-primary transition-colors">
              Feitos
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection("feedbacks")} className="text-sm hover:text-primary transition-colors">
              Feedbacks
            </button>
            <button onClick={() => scrollToSection("certificates")} className="text-sm hover:text-primary transition-colors">
              Certificados
            </button>
            <button onClick={() => scrollToSection("ebook")} className="text-sm hover:text-primary transition-colors">
              E-book
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-primary transition-colors">
              Contato
            </button>
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-hero-gradient">
        <div className="container mx-auto text-center">
          <div className="animate-fade-up">
            <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-glow animate-float">
              <img 
                src={profilePhoto} 
                alt="Foto de perfil" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Desenvolvedor de Software
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Com 4 anos de experiência. Nos últimos 12 meses, viajei por 10 países conhecendo novas culturas e desenvolvendo soluções interessantes para pessoas e empresas.
            </p>
            
            <div className="mb-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Países visitados:</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-1 text-sm bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/50 hover:shadow-glow transition-all duration-300"
                    title={country.name}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="transition-all duration-300 hover:shadow-glow"
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="transition-all duration-300 hover:shadow-glow"
              >
                Entrar em Contato
              </Button>
            </div>

            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:shadow-glow transition-all duration-300">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:shadow-glow transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:shadow-glow transition-all duration-300">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Minhas Habilidades</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especializado em frontend com Vue.js e experiência sólida em React.js e Angular.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meus Feitos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principais conquistas e contribuições ao longo da minha carreira.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meus Projetos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e interessantes.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Feedbacks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que colegas e clientes dizem sobre meu trabalho.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Certificados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Formação acadêmica e certificações profissionais.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">E-book Gratuito</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compartilho minha experiência para ajudar novos desenvolvedores.
            </p>
          </div>
          
          <div className="animate-scale-in">
            <EbookCard 
              title="Como conseguir o primeiro emprego na programação"
              description="Um guia completo com dicas práticas, estratégias de estudo e insights valiosos para quem está começando na área de desenvolvimento de software."
              coverImage={ebookCover}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades interessantes.
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
          <p>&copy; 2024 Portfolio. Desenvolvido com ❤️ usando React e Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}