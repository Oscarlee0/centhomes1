import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Urban Residence",
      category: "Residential",
      year: "2024",
      image: project1,
      description: "Contemporary living space designed for urban professionals"
    },
    {
      id: 2,
      title: "Corporate Center",
      category: "Commercial",
      year: "2023",
      image: project2,
      description: "Modern office building with sustainable design principles"
    },
    {
      id: 3,
      title: "Luxury Interior",
      category: "Interior",
      year: "2024",
      image: project3,
      description: "Sophisticated interior design for high-end residential project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative dots-pattern w-8 h-8 mx-auto mb-8"></div>
          <h2 className="text-heading mb-4">SELECTED PROJECTS</h2>
          <p className="text-subheading max-w-2xl mx-auto">
            A curated collection of our latest architectural achievements, 
            showcasing our commitment to innovative design and exceptional craftsmanship.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-wide text-muted-foreground">
                    {project.category}
                  </span>
                  <span className="text-xs tracking-wide text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-light tracking-wide group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-2">
                  <button className="text-xs tracking-wide border-b border-primary pb-1 hover:border-primary/60 transition-colors">
                    VIEW PROJECT
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

export default ProjectGrid;