import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteriorDesigns from "@/components/InteriorDesigns";

const Index = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <Hero />
      <ProjectGrid />
      <InteriorDesigns />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
