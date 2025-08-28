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
    <Card className="w-full max-w-lg mx-auto bg-card-gradient shadow-elegant">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Mail className="w-6 h-6 text-primary" />
          Vamos conversar?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input 
              id="name" 
              name="name" 
              required 
              className="transition-all duration-300 focus:shadow-glow" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="transition-all duration-300 focus:shadow-glow" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={4} 
              required 
              className="transition-all duration-300 focus:shadow-glow resize-none" 
            />
          </div>
          
          <div className="flex flex-col gap-3 pt-4">
            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full transition-all duration-300 hover:shadow-glow"
            >
              {isLoading ? (
                "Enviando..."
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
              onClick={handleDownloadCV}
              className="w-full transition-all duration-300 hover:shadow-glow"
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