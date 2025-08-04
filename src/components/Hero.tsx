import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-psychology.jpg";
import logo from "@/assets/logo.png"; // Importação do logo

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Logo acima do título */}
        <img 
          src={logo} 
          alt="Logo Voia" 
          className="mx-auto mb-6 w-48 md:w-56" 
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Bem Star
          <span className="block text-4xl md:text-6xl font-light opacity-90">
            Psicologia
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Cuidando da sua saúde mental com profissionalismo, acolhimento e dedicação. 
          Sua jornada de bem-estar começa aqui.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            className="px-8 py-6 text-lg"
            onClick={() => scrollToSection('agendamento')}
          >
            Agendar Consulta
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg border-white text-indigo-500 hover:bg-white hover:text-primary"
            onClick={() => scrollToSection('sobre')}
          >
            Saiba Mais
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
