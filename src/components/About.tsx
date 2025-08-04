import { Heart, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Oferecemos um ambiente seguro e acolhedor para seu desenvolvimento pessoal."
    },
    {
      icon: Users,
      title: "Humanização",
      description: "Tratamento personalizado respeitando a individualidade de cada pessoa."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Profissionais qualificados com formação continuada e abordagens modernas."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a Bem Star
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma clínica especializada em psicologia, dedicada a promover o bem-estar 
            e a saúde mental através de um atendimento humanizado e de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-foreground mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Acreditamos que cada pessoa possui recursos internos únicos para superar 
              desafios e alcançar uma vida mais plena e significativa. Nossa missão é 
              acompanhar você nessa jornada de autoconhecimento e crescimento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com uma abordagem integrativa e baseada em evidências científicas, 
              oferecemos suporte psicológico especializado para diversas demandas, 
              sempre priorizando o respeito, a ética e a confidencialidade.
            </p>
          </div>
          
          <div className="grid gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="bg-primary p-3 rounded-full">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;