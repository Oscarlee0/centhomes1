import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Urban Residence",
      category: "Residential", 
      year: "2024",
      images: [project1, project1, project1, project1], // Placeholder - will be updated with actual images
      description: "Contemporary living space designed for urban professionals",
      details: "This modern residential project showcases clean lines, sustainable materials, and smart home integration. The design prioritizes natural light and open spaces while maintaining privacy and comfort."
    },
    {
      id: 2,
      title: "Corporate Center",
      category: "Commercial",
      year: "2023", 
      images: [project2, project2, project2, project2], // Placeholder - will be updated with actual images
      description: "Modern office building with sustainable design principles",
      details: "A state-of-the-art commercial building featuring energy-efficient systems, flexible workspaces, and biophilic design elements that enhance productivity and employee wellbeing."
    },
    {
      id: 3,
      title: "Luxury Interior",
      category: "Interior",
      year: "2024",
      images: [project3, project3, project3, project3], // Placeholder - will be updated with actual images  
      description: "Sophisticated interior design for high-end residential project",
      details: "An elegant interior transformation combining contemporary aesthetics with timeless elements, featuring custom furniture, premium materials, and curated art collections."
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative dots-pattern w-8 h-8 mx-auto mb-8 animate-float"></div>
          <h2 className="text-heading mb-4 animate-slide-up">SELECTED PROJECTS</h2>
          <p className="text-subheading max-w-2xl mx-auto animate-slide-up">
            A curated collection of our latest architectural achievements, 
            showcasing our commitment to innovative design and exceptional craftsmanship.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;