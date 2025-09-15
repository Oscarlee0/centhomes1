import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Ambassador = () => {
  const ambassadors = [
    {
      id: 1,
      name: "Dr. Brendan Chibuike Kenneth",
      title: "Lecturer, Certified Real Estate Agent & Marketing Enthusiast",
      description:
        "A lecturer, certified real estate agent, and enthusiastic marketer, Brendan Chibuike Kenneth, PhD, has a solid foundation in business and strategic communication. He offers a distinctive fusion of knowledge in education, real estate, and branding by fusing his academic background with practical real estate and marketing experience. Dr. Kenneth is dedicated to using knowledge and strategy to empower students, clients, and enterprises. He is well-known for his pragmatic approach and industry-savvy viewpoint.",
      image: "/src/assets/me1.jpg", // Using the existing image from assets
      credentials: "PhD in Business & Strategic Communication",
    },
  ];

  return (
    <section id="ambassadors" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative dots-pattern w-8 h-8 mx-auto mb-8 animate-float"></div>
          <h2 className="text-heading mb-4 animate-slide-up">OUR AMBASSADORS</h2>
          <p className="text-subheading max-w-2xl mx-auto animate-slide-up">
            Meet our distinguished ambassadors who bring expertise and passion to
            our mission of excellence in real estate and architecture.
          </p>
        </div>

        {/* Ambassador Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {ambassadors.map((ambassador, index) => (
                <CarouselItem
                  key={ambassador.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/95 backdrop-blur-sm">
                      <CardContent className="p-6">
                        {/* Ambassador Image */}
                        <div className="relative mb-6 group">
                          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                            <img
                              src={ambassador.image}
                              alt={ambassador.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Ambassador Info */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {ambassador.name}
                            </h3>
                            <p className="text-sm text-accent font-medium mb-2">
                              {ambassador.credentials}
                            </p>
                            <p className="text-sm text-muted-foreground italic">
                              {ambassador.title}
                            </p>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
                            {ambassador.description}
                          </p>

                          {/* Decorative Element */}
                          <div className="pt-4 border-t border-border/50">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <div className="w-1 h-1 bg-accent/60 rounded-full"></div>
                              <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex space-x-2">
              {ambassadors.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-accent/60 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-4">
            Interested in becoming an ambassador?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-xs tracking-wide border-b border-primary pb-1 hover:border-primary/60 transition-all duration-300 hover:translate-x-2"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ambassador;
