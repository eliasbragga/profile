import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Award, Github, Linkedin, Mail, BookOpen } from "lucide-react"


interface CertificateCardProps {
  title: string;
  institution: string;
  status?: string;
  logo: string;
  type: "course" | "certification";
  credential?: string; // nova prop opcional
}

export function CertificateCard({
  title,
  institution,
  status,
  logo,
  type,
  credential,
}: CertificateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 bg-card-gradient border-border/50 ${
        isHovered && credential ? "bg-opacity-80" : ""
      }`}
      onMouseEnter={() => {
        console.log('entrou')
        setIsHovered(true)
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 text-center relative">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-background shadow-sm">
          <img
            src={logo}
            alt={`${institution} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{institution}</p>
        {status && (
          <Badge variant="secondary" className="text-xs">
            {status}
          </Badge>
        )}
        <div className="mt-3">
          <Badge
            variant={type === "certification" ? "default" : "outline"}
            className="text-xs"
          >
            {type === "certification" ? "Certificação" : "Curso"}
          </Badge>
        </div>

        {/* Botão aparece só no hover se credential existir */}
        {credential && isHovered && (
          <div className="absolute  inset-0 flex items-center justify-center bg-black/80 rounded-md">
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open(credential, "_blank")}
            >
              <Award className="w-5 h-5" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
