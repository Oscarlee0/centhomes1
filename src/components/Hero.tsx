import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFirstProject = () => {
    const grid = document.getElementById("projects");
    if (grid) {
      const firstCard = grid.querySelector(".grid > *");
      if (firstCard) {
        (firstCard as HTMLElement).scrollIntoView({ behavior: "smooth" });
      } else {
        grid.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className='min-h-screen relative flex items-center justify-center overflow-hidden bg-background pr-4 sm:pr-8'>
      {/* Grid Pattern Background */}
      <div className='absolute inset-0 grid-pattern opacity-30'></div>

      <div className='container mx-auto px-6 py-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8 animate-slide-in-left'>
            {/* Geometric Dots */}
            <div className='relative dots-pattern w-8 h-8 mb-8 animate-float'></div>

            <div className='space-y-6 sm:pr-8'>
              <h1 className='text-display animate-fade-in'>
                MODERN
                <br />
                <span className='text-muted-foreground'>ARCHITECTURE</span>
              </h1>

              <div className='relative'>
                <h2 className='text-heading line-accent animate-slide-up'>
                  CENT'S HOMES
                </h2>
              </div>

              <p className='text-subheading max-w-md animate-slide-up'>
                Creating spaces that inspire. We blend innovative design with
                functional architecture to craft environments that enhance human
                experience.
              </p>
            </div>

            <div className='flex items-center space-x-6 pt-8'>
              <Button
                onClick={scrollToProjects}
                className='bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm tracking-wide'
              >
                VIEW PROJECTS
              </Button>

              <button
                onClick={scrollToAbout}
                className='text-sm tracking-wide border-b border-primary pb-1 hover:border-primary/60 transition-colors'
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative animate-slide-in-right'>
            <div className='aspect-[4/3] overflow-hidden bg-muted rounded-lg shadow-2xl transition-transform duration-700 hover:scale-105'>
              <img
                src={heroImage}
                alt='Modern architectural interior'
                className='w-full h-full object-cover transition-transform duration-700 hover:scale-110'
              />
            </div>

            {/* Floating Info Card */}
            <div
              className='absolute -bottom-6 -left-6 bg-card p-6 shadow-2xl border border-border rounded-lg animate-scale-in transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 cursor-pointer'
              onClick={scrollToFirstProject}
            >
              <div className='text-sm tracking-wide text-muted-foreground'>
                FEATURED PROJECT
              </div>
              <div className='text-lg font-light mt-1'>
                Minimalist Residence
              </div>
              <div className='text-sm text-muted-foreground mt-2'>2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
