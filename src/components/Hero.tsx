import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-psychology.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-indigo-900/60 to-purple-900/70"></div>
      </div>
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Logo with subtle animation */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <img 
            src={logo} 
            alt="Logo Bem Star Psicologia" 
            className="mx-auto w-44 md:w-52 drop-shadow-2xl filter brightness-110" 
          />
        </div>
        
        {/* Main Title with improved typography */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Bem Star
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-light opacity-95 tracking-wide text-blue-100">
            Psicologia
          </h2>
        </div>
        
        {/* Subtitle with better spacing */}
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed font-light text-gray-100">
          Cuidando da sua saúde mental com profissionalismo, acolhimento e dedicação.<br/>
          <span className="text-blue-200 font-medium">Sua jornada de bem-estar começa aqui.</span>
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <Button 
            variant="hero" 
            size="lg"
            className="group px-10 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-none shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection('agendamento')}
          >
            <span className="flex items-center gap-2">
              Agendar Consulta
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group px-10 py-4 text-lg font-medium border-2 border-white/70 text-white hover:bg-white hover:text-indigo-700 backdrop-blur-sm bg-white/10 hover:border-white transform hover:scale-105 transition-all duration-300 shadow-xl"
            onClick={() => scrollToSection('sobre')}
          >
            <span className="flex items-center gap-2">
              Saiba Mais
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80 text-blue-100">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>CRP Ativo</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Atendimento Presencial e Online</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Primeira Consulta Disponível</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8   text-white/70 animate-bounce cursor-pointer hover:text-white transition-colors">
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium tracking-wider text-center">ROLE PARA BAIXO</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center items-start relative overflow-hidden">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-16 w-1 h-1 bg-blue-300/50 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-indigo-300/40 rounded-full animate-ping delay-1000"></div>
    </section>
  );
};

export default Hero;