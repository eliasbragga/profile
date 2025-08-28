"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { ProjectCard } from "@/components/ProjectCard"
import { TechIcon, TechIcons } from "@/components/TechIcon"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

// Import images
import profilePhoto from "@/assets/profile-photo.jpg"
import project1 from "@/assets/project-1.jpg"
import project2 from "@/assets/project-2.jpg"
import project3 from "@/assets/project-3.jpg"

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
    liveUrl: "#",
    githubUrl: "#",
  },
]

const technologies = [
  { name: "Vue.js", icon: TechIcons.Vue() },
  { name: "React", icon: TechIcons.React() },
  { name: "Angular", icon: TechIcons.Angular() },
  { name: "TypeScript", icon: TechIcons.TypeScript() },
  { name: "JavaScript", icon: TechIcons.JavaScript() },
  { name: "Node.js", icon: TechIcons.NodeJS() },
  { name: "Tailwind", icon: TechIcons.Tailwind() },
  { name: "Git", icon: TechIcons.Git() },
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
            <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition-colors">
              Projetos
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
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Com 4 anos de experiência. Nos últimos 12 meses, viajei por 9 países conhecendo novas culturas e desenvolvendo soluções interessantes para pessoas e empresas.
            </p>
            
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-in-left">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-scale-in"
              >
                <TechIcon name={tech.name} icon={tech.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/50">
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