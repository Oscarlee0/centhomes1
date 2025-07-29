import me1 from "@/assets/me1.jpg";

const About = () => {
  return (
    <section id='about' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-3 gap-16 items-center'>
          {/* Left Content */}
          <div className='space-y-8 animate-slide-in-left'>
            <div className='relative dots-pattern w-8 h-8 animate-float'></div>

            <div className='space-y-6'>
              <div className='relative'>
                <h2 className='text-heading line-accent animate-fade-in'>
                  ABOUT US
                </h2>
              </div>

              <p className='text-subheading animate-slide-up'>
                Creating functional, sustainable, and visually compelling spaces
                that reflect the needs and identity of each client.
              </p>

              <div className='space-y-4 text-m leading-relaxed text-muted-foreground'>
                <p>
                  I am Anadile Obinze Pascal the CEO and the Architect of Cent's Homes a passionate and detail-oriented architect with a strong
                  foundation in design, technical drawing, and project
                  management. With a deep appreciation for both modern
                  innovation and timeless architecture, I specialize in creating
                  functional, sustainable, and visually compelling spaces that
                  reflect the needs and identity of each client.
                </p>

                <p>
                  My approach blends creativity with practicality, ensuring that
                  every project I undertake balances aesthetic value with
                  structural integrity and efficiency. I thrive in collaborative
                  environments and am always driven by a commitment to
                  excellence, continuous learning, and delivering meaningful
                  architectural experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className='flex justify-center animate-scale-in'>
            <div className='relative'>
              <div className='aspect-square w-80 overflow-hidden rounded-lg shadow-2xl'>
                <img
                  src={me1}
                  alt='Architect'
                  className='w-full h-full object-cover transition-transform duration-700 hover:scale-110'
                />
              </div>

              {/* Floating Info Card */}
              <div className='absolute -bottom-4 -right-4 bg-card p-4 shadow-2xl border border-border rounded-lg animate-float'>
                <div className='text-xs tracking-wide text-muted-foreground'>
                  ARCHITECT
                </div>
                <div className='text-sm font-light mt-1'>Professional</div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className='grid grid-cols-2 gap-8 animate-slide-in-right'>
            <div className='text-center space-y-4 p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in'>
              <div className='text-4xl font-light'>85+</div>
              <div className='text-sm tracking-wide text-muted-foreground'>
                PROJECTS COMPLETED
              </div>
            </div>

            <div
              className='text-center space-y-4 p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in'
              style={{ animationDelay: "0.1s" }}
            >
              <div className='text-4xl font-light'>2</div>
              <div className='text-sm tracking-wide text-muted-foreground'>
                AWARDS WON
              </div>
            </div>

            <div
              className='text-center space-y-4 p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in'
              style={{ animationDelay: "0.2s" }}
            >
              <div className='text-4xl font-light'>12</div>
              <div className='text-sm tracking-wide text-muted-foreground'>
                TEAM MEMBERS
              </div>
            </div>

            <div
              className='text-center space-y-4 p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in'
              style={{ animationDelay: "0.3s" }}
            >
              <div className='text-4xl font-light'>8</div>
              <div className='text-sm tracking-wide text-muted-foreground'>
                YEARS EXPERIENCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
