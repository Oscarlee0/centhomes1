import { useState, useEffect } from "react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    year: string;
    images: string[];
    description: string;
  };
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2000); // 2-second autoslide

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div 
      className="project-card group cursor-pointer animate-scale-in rounded-lg overflow-hidden"
      style={{ animationDelay: `${index * 0.2}s` }}
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted mb-6 rounded-lg relative">
        <img 
          src={project.images[currentImageIndex]} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Image indicators */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
            {project.images.map((_, imgIndex) => (
              <div
                key={imgIndex}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-wide text-muted-foreground">
            {project.category}
          </span>
          <span className="text-xs tracking-wide text-muted-foreground">
            {project.year}
          </span>
        </div>
        
        <h3 className="text-xl font-light tracking-wide group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="pt-2">
          <button className="text-xs tracking-wide border-b border-primary pb-1 hover:border-primary/60 transition-all duration-300 hover:translate-x-2">
            VIEW PROJECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;