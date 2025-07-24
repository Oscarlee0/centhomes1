const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="relative dots-pattern w-8 h-8 animate-float"></div>
            
            <div className="space-y-6">
              <div className="relative">
                <h2 className="text-heading line-accent animate-fade-in">ABOUT US</h2>
              </div>
              
              <p className="text-subheading animate-slide-up">
                We are a collective of architects, designers, and visionaries 
                committed to creating spaces that transcend the ordinary.
              </p>
              
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Founded in 2015, our studio has grown from a small team of passionate 
                  architects to a globally recognized design firm. We believe that 
                  architecture should not only shelter but inspire, not only function 
                  but elevate the human spirit.
                </p>
                
                <p>
                  Our approach combines cutting-edge technology with timeless design 
                  principles, ensuring that every project we undertake stands as a 
                  testament to both innovation and enduring beauty.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-8 animate-slide-in-right">
            <div className="text-center space-y-4 p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in">
              <div className="text-4xl font-light">150+</div>
              <div className="text-sm tracking-wide text-muted-foreground">PROJECTS COMPLETED</div>
            </div>
            
            <div className="text-center space-y-4 p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-light">25+</div>
              <div className="text-sm tracking-wide text-muted-foreground">AWARDS WON</div>
            </div>
            
            <div className="text-center space-y-4 p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-light">12</div>
              <div className="text-sm tracking-wide text-muted-foreground">TEAM MEMBERS</div>
            </div>
            
            <div className="text-center space-y-4 p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-light">9</div>
              <div className="text-sm tracking-wide text-muted-foreground">YEARS EXPERIENCE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;