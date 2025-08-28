"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    })
    
    setIsLoading(false)
    
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const handleDownloadCV = () => {
    toast({
      title: "Download iniciado",
      description: "O currículo está sendo baixado...",
    })
    // Aqui você adicionaria a lógica real de download
  }

  return (
    <Card className="w-full max-w-lg mx-auto bg-card-gradient shadow-elegant border-border/50">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl mb-2">
          <Mail className="w-6 h-6 text-primary" />
          Vamos conversar?
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Estou sempre disponível para novos projetos e oportunidades
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Nome *</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Seu nome completo"
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
                placeholder="seu@email.com"
                required 
                className="transition-all duration-300 focus:shadow-glow border-border/50 bg-background/50" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">Assunto</Label>
            <Input 
              id="subject" 
              name="subject" 
              placeholder="Sobre o que gostaria de conversar?"
              className="transition-all duration-300 focus:shadow-glow border-border/50 bg-background/50" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">Mensagem *</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5} 
              placeholder="Conte-me sobre seu projeto ou ideia..."
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
                  Enviando...
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensagem
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
              Download do CV
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}