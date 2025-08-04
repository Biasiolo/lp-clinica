import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Síria, 25 - São José dos Campos",
      action: () => window.open("https://maps.google.com/?q=Rua+Síria,+25+São+José+dos+Campos", "_blank")
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(12) 99999-9999",
      action: () => window.open("tel:+5512999999999")
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@bemstarpsicologia.com.br",
      action: () => window.open("mailto:contato@bemstarpsicologia.com.br")
    }
  ];

  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos localizados em São José dos Campos, em um ambiente 
            acolhedor e de fácil acesso para seu conforto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground mb-8">
              Informações de Contato
            </h3>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className={`shadow-soft hover:shadow-card transition-all duration-300 border-0 ${
                    info.action ? 'cursor-pointer hover:-translate-y-1' : ''
                  }`}
                  onClick={info.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary p-3 rounded-full">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground mb-8">
              Como Chegar
            </h3>
            
            <Card className="shadow-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.845!2d-45.884!3d-23.179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzQ0LjQiUyA0NcKwNTMnMDIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Bem Star Psicologia"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <div className="bg-accent-soft p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">
                Facilidades de Acesso
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Estacionamento gratuito no local
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Próximo ao transporte público
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Acessibilidade para pessoas com deficiência
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;