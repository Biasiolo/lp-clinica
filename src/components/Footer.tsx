import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Agendamento", href: "#agendamento" }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      text: "Rua Síria, 25 - São José dos Campos" 
    },
    { 
      icon: Phone, 
      text: "(12) 99999-9999",
      action: () => window.open("tel:+5512999999999")
    },
    { 
      icon: Mail, 
      text: "contato@bemstarpsicologia.com.br",
      action: () => window.open("mailto:contato@bemstarpsicologia.com.br")
    },
    { 
      icon: Clock, 
      text: "Seg-Sex: 8h-18h | Sáb: 8h-12h" 
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">
                Bem Star
              </h3>
              <p className="text-xl font-light opacity-80">
                Psicologia
              </p>
            </div>
            <p className="text-background/80 leading-relaxed max-w-md">
              Cuidando da sua saúde mental com profissionalismo, acolhimento e dedicação. 
              Nossa missão é acompanhar você na jornada de autoconhecimento e crescimento pessoal.
            </p>
            <div className="flex items-center gap-2 text-background/80">
              <Heart className="w-5 h-5 text-red-400" />
              <span>Cuidando do seu bem-estar emocional</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-background transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <div 
                    className={`flex items-start gap-3 text-background/80 ${
                      info.action ? 'cursor-pointer hover:text-background transition-colors duration-200' : ''
                    }`}
                    onClick={info.action}
                  >
                    <info.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      {info.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Bem Star Psicologia. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>CRP: 06/123456</span>
              <span>•</span>
              <span>CNPJ: 12.345.678/0001-90</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;