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
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { language } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    console.log('serviceID', serviceID)


    emailjs.send(
      serviceID,
      templateID,
      { ...formData },
      publicKey
    )
    .then(() => {
      toast({
        title: language === 'pt' ? "Mensagem enviada!" : "Message sent!",
        description: language === 'pt' 
          ? "Obrigado pelo contato. Retornarei em breve!" 
          : "Thank you for contacting me. I'll get back to you soon!",
      })
      setFormData({ name: "", email: "", subject: "", message: ""});
    })
    .catch(() => {
      toast({
        title: language === 'pt' 
          ? "Erro ao enviar a mensagem" 
          : "Message not sent",
        description: language === 'pt' 
          ? "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde." 
          : "There was an error sending your message. Please try again later."
      });
    }).finally(() => {
    setIsLoading(false)
    })

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
            {language === "pt" ? "Nome *" : "Name *"}
          </Label>
          <Input
            disabled={isLoading}
            id="name"
            name="name"
            placeholder={language === "pt" ? "Seu nome completo" : "Your full name"}
            required
            value={formData.name}
            onChange={handleChange}
            className="transition-all duration-300 focus:shadow-glow border-border/50 bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">E-mail *</Label>
          <Input
            disabled={isLoading}
            id="email"
            name="email"
            type="email"
            placeholder={language === "pt" ? "seu@email.com" : "your@email.com"}
            required
            value={formData.email}
            onChange={handleChange}
            className="transition-all duration-300 focus:shadow-glow border-border/50 bg-background/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-medium">
          {language === "pt" ? "Assunto" : "Subject"}
        </Label>
        <Input
          disabled={isLoading}
          id="subject"
          name="subject"
          placeholder={language === "pt" ? "Sobre o que gostaria de conversar?" : "What would you like to talk about?"}
          value={formData.subject}
          onChange={handleChange}
          className="transition-all duration-300 focus:shadow-glow border-border/50 bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          {language === "pt" ? "Mensagem *" : "Message *"}
        </Label>
        <Textarea
          disabled={isLoading}
          id="message"
          name="message"
          rows={5}
          placeholder={language === "pt" ? "Conte-me sobre seu projeto ou ideia..." : "Tell me about your project or idea..."}
          required
          value={formData.message}
          onChange={handleChange}
          className="transition-all duration-300 focus:shadow-glow resize-none border-border/50 bg-background/50"
        />
      </div>

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
    </form>
      </CardContent>
    </Card>
  )
}