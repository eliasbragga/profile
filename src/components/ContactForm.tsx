"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "@/contexts/TranslationContext"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { language } = useTranslation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: language === 'pt' ? "Mensagem enviada!" : "Message sent!",
      description: language === 'pt' 
        ? "Obrigado pelo contato. Retornarei em breve!" 
        : "Thank you for contacting me. I'll get back to you soon!",
    })
    
    setIsLoading(false)
    
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const handleDownloadCV = () => {
    toast({
      title: language === 'pt' ? "Download iniciado" : "Download started",
      description: language === 'pt' 
        ? "O currículo está sendo baixado..." 
        : "The resume is being downloaded...",
    })
    // Aqui você adicionaria a lógica real de download
  }

  return (
    <Card className="w-full max-w-lg mx-auto bg-card-gradient shadow-elegant border-border/50">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl mb-2">
          <Mail className="w-6 h-6 text-primary" />
          {language === 'pt' ? 'Vamos conversar?' : "Let's talk?"}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {language === 'pt' 
            ? 'Estou sempre disponível para novos projetos e oportunidades'
            : "I'm always available for new projects and opportunities"
          }
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                {language === 'pt' ? 'Nome *' : 'Name *'}
              </Label>
              <Input 
                id="name" 
                name="name" 
                placeholder={language === 'pt' ? 'Seu nome completo' : 'Your full name'}
                required 
                className="transition-all duration-300 focus:shadow-glow border-border/50 bg-background/50" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">E-mail *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder={language === 'pt' ? 'seu@email.com' : 'your@email.com'}
                required 
                className="transition-all duration-300 focus:shadow-glow border-border/50 bg-background/50" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">
              {language === 'pt' ? 'Assunto' : 'Subject'}
            </Label>
            <Input 
              id="subject" 
              name="subject" 
              placeholder={language === 'pt' 
                ? 'Sobre o que gostaria de conversar?' 
                : 'What would you like to talk about?'
              }
              className="transition-all duration-300 focus:shadow-glow border-border/50 bg-background/50" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              {language === 'pt' ? 'Mensagem *' : 'Message *'}
            </Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5} 
              placeholder={language === 'pt' 
                ? 'Conte-me sobre seu projeto ou ideia...' 
                : 'Tell me about your project or idea...'
              }
              required 
              className="transition-all duration-300 focus:shadow-glow resize-none border-border/50 bg-background/50" 
            />
          </div>
          
          <div className="flex flex-col gap-3 pt-2">
            <Button 
              type="submit" 
              disabled={isLoading} 
              size="lg"
              className="w-full transition-all duration-300 hover:shadow-glow"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  {language === 'pt' ? 'Enviando...' : 'Sending...'}
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Enviar mensagem' : 'Send message'}
                </>
              )}
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              size="lg"
              onClick={handleDownloadCV}
              className="w-full transition-all duration-300 hover:shadow-glow border-border/50"
            >
              <Download className="w-4 h-4 mr-2" />
              {language === 'pt' ? 'Download do CV' : 'Download Resume'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}