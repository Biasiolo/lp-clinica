import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Appointment from "../components/Appointment";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Appointment />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
