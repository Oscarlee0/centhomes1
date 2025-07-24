import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Geometric Dots */}
            <div className="relative dots-pattern w-8 h-8 mb-8"></div>
            
            <div className="space-y-6">
              <h1 className="text-display">
                MODERN
                <br />
                <span className="text-muted-foreground">ARCHITECTURE</span>
              </h1>
              
              <div className="relative">
                <h2 className="text-heading line-accent">DESIGN STUDIO</h2>
              </div>
              
              <p className="text-subheading max-w-md">
                Creating spaces that inspire. We blend innovative design with 
                functional architecture to craft environments that enhance human experience.
              </p>
            </div>

            <div className="flex items-center space-x-6 pt-8">
              <Button 
                onClick={scrollToProjects}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm tracking-wide"
              >
                VIEW PROJECTS
              </Button>
              
              <button className="text-sm tracking-wide border-b border-primary pb-1 hover:border-primary/60 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img 
                src={heroImage} 
                alt="Modern architectural interior" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-lg border border-border">
              <div className="text-sm tracking-wide text-muted-foreground">FEATURED PROJECT</div>
              <div className="text-lg font-light mt-1">Minimalist Residence</div>
              <div className="text-sm text-muted-foreground mt-2">2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;