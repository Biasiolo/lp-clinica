import { Brain, Users2, Baby, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psicoterapia Individual",
      description: "Atendimento personalizado para adultos, autoconhecimento e desenvolvimento pessoal.",
      features: ["Terapia Cognitivo-Comportamental", "Abordagem Humanística", "Sessões de 50 minutos"]
    },
    {
      icon: Heart,
      title: "Terapia de Casal",
      description: "Fortalecimento de vínculos e resolução de conflitos para relacionamentos mais saudáveis.",
      features: ["Comunicação efetiva", "Resolução de conflitos", "Planejamento conjunto"]
    },
    {
      icon: Users2,
      title: "Terapia Familiar",
      description: "Dinâmicas familiares, comunicação e harmonização do ambiente familiar.",
      features: ["Mediação familiar", "Orientação parental", "Dinâmicas sistêmicas"]
    },
    {
      icon: Baby,
      title: "Psicologia Infantil",
      description: "Acompanhamento especializado para crianças e adolescentes em desenvolvimento.",
      features: ["Ludoterapia", "Orientação escolar", "Desenvolvimento emocional"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos diferentes modalidades de atendimento psicológico para atender 
            suas necessidades específicas com qualidade e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;