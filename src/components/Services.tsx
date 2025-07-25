const Services = () => {
  const services = [
    {
      title: "ARCHITECTURAL DESIGN",
      description:
        "Complete architectural solutions from concept to construction, tailored to your vision and needs.",
    },
    {
      title: "INTERIOR DESIGN",
      description:
        "Sophisticated interior spaces that blend functionality with aesthetic excellence.",
    },
    {
      title: "PLANNING CONSULTATION",
      description:
        "Expert guidance through the planning process, ensuring compliance and optimal outcomes.",
    },
    {
      title: "PROJECT MANAGEMENT",
      description:
        "Comprehensive project oversight from initial design through final construction delivery.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='services' className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <div className='relative dots-pattern w-8 h-8 mx-auto mb-8 animate-float'></div>
          <h2 className='text-heading mb-4 animate-slide-up'>OUR SERVICES</h2>
          <p className='text-subheading max-w-2xl mx-auto animate-slide-up'>
            We offer comprehensive architectural services designed to bring your
            vision to life with precision and creativity.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group p-8 border border-border hover:bg-muted/50 transition-all duration-300 rounded-lg hover:shadow-lg hover:-translate-y-2 animate-scale-in'
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className='space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-lg font-light tracking-wide group-hover:text-accent transition-colors'>
                    {service.title}
                  </h3>
                  <div className='text-2xl font-light text-muted-foreground group-hover:text-accent transition-colors'>
                    0{index + 1}
                  </div>
                </div>

                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {service.description}
                </p>

                <div className='pt-2'>
                  <button
                    className='text-xs tracking-wide border-b border-primary pb-1 hover:border-primary/60 transition-all duration-300 hover:translate-x-2'
                    onClick={scrollToContact}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
