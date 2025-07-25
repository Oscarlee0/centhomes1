import { useState } from "react";
import project1floorplan from "@/assets/project1-floorplan.png";
import project1exterior1 from "@/assets/project1-exterior1.png";
import project1exterior2 from "@/assets/project1-exterior2.png";
import project1front from "@/assets/project1-front.png";
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
      title: "5-Bedroom Duplex & Penthouse Mansion",
      category: "Luxury Residential", 
      year: "2024",
      images: [project1exterior1, project1exterior2, project1front, project1floorplan],
      description: "5bedroom duplex and a penthouse mansion with different facilities crafted for modern luxury living",
      details: `BUILDING DETAILS:
• Ante room / Restroom
• A void living room  
• Privatized living room
• 2 Dinnings
• Spacious Kitchen/ Store and Laundry area
• 2 Stairs
• 2 Bedrooms all ensuite (ground floor)/ working wardrobes

FIRST FLOOR:
• 3 Bedrooms all ensuite / working wardrobes
• Kitchen
• Private lounge  
• Dining / restrooms (crafted for male and female separately)
• Balcony
• 1 Staircase

PENTHOUSE FLOOR:
• Ante room / Restroom
• Kitchen
• Dining
• Living room
• Lounge / Sit out
• Master Bedroom / restroom / walking wardrobe / Sit out

OTHER FACILITIES:
• 2 garages
• Exclusive Lounge Attached to one of the Garage`
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