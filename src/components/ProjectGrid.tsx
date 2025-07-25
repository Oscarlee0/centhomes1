import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import img1 from "@/assets/1/IMG-20250725-WA0020.jpg";
import img2 from "@/assets/1/IMG-20250725-WA0021.jpg";
import img3 from "@/assets/1/IMG-20250725-WA0022.jpg";
import img4 from "@/assets/1/IMG-20250725-WA0023.jpg";
import img2_1 from "@/assets/2/WhatsApp Image 2025-07-25 at 02.07.20_21fd943e.jpg";
import img2_2 from "@/assets/2/WhatsApp Image 2025-07-25 at 02.07.20_7124ecc1.jpg";
import img3_1 from "@/assets/3/WhatsApp Image 2025-07-25 at 02.11.38_dbe55092.jpg";
import img3_2 from "@/assets/3/WhatsApp Image 2025-07-25 at 02.11.38_c4fdfa1a.jpg";
import img3_3 from "@/assets/3/WhatsApp Image 2025-07-25 at 02.11.38_144fae58.jpg";
import img4_1 from "@/assets/4/WhatsApp Image 2025-07-25 at 01.59.10_cac5bef7.jpg";
import img4_2 from "@/assets/4/WhatsApp Image 2025-07-25 at 01.58.22_8dc45d0c.jpg";
import img4_3 from "@/assets/4/WhatsApp Image 2025-07-25 at 01.57.12_5e3cf622.jpg";

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "5-Bedroom Duplex & Penthouse Mansion",
      category: "Luxury Residential",
      year: "2024",
      images: [img1, img2, img3, img4],
      description:
        "5bedroom duplex and a penthouse mansion with different facilities crafted.....",
      details: `BUILDING DETAILS\n* Ante room / Restroom\n* A void living room\n* Privatized living room\n* 2 Dinnings \n* Spacious Kitchen/ Store and Lundary area.\n* 2 Stairs\n* 2 Bedrooms all ensuit (ground floor)/ working worderopes \n\nFIRST FLOOR\n* 3 Bedroom all ensuite / working worderopes \n* Kitchen\n* Private lounge\n* Dinning / restrooms (crafted for male and female separately)\n* Balcony\n* 1 Staircase\n\nPENTH FLOOR\n* Ante room / Restroom\n* Kitchen\n* Dinning\n* Living room\n* Lounge / Sit out\n* Masters Bedroom / restroom / walking worderope / Sit out\n\nOTHER FACILITIES\n* 2 garages\n* Exclusive Lounge Attached to one of the Garage`,
    },
    {
      id: 2,
      title: "Standard Affordable 2-Bedroom Bungalow",
      category: "Affordable Housing",
      year: "2024",
      images: [img2_1, img2_2],
      description: "A standard Affordable 2bedroom bungalow",
      details: `* Living room\n* Dinning\n* Kitchen\n* Bedroom 1\n* Bedroom 2 all ensuit`,
    },
    {
      id: 3,
      title: "6-Bedroom Duplex All Ensuite",
      category: "Luxury Residential",
      year: "2024",
      images: [img3_1, img3_2, img3_3],
      description: "6bedroom duplex all ensuite..",
      details: `* 2 Living rooms\n* 2 Dinnings\n* 2 Kitchens\n* Waiting room/ restroom \n* Visitors room\n* 2 Bedrooms  ground floor\n* 3 Bedroom upstairs\n* Lounge`,
    },
    {
      id: 4,
      title: "5-Bedroom Duplex All Ensuite",
      category: "Luxury Residential",
      year: "2024",
      images: [img4_1, img4_2, img4_3],
      description: "5bedroom duplex all ensuit",
      details: `BUILDING DETAILS\n\n* 5 Bedroom all en-suite \n* Waiting room\n* Living room \n* Lounge \n* Dinning area \n* 2 Stairs \n* Kitchen \n* Store \n* Visitors room semi detached from the building \n* Second bedroom ground floor.. \n\nFIRST FLOOR \n* 3 Bedrooms all ensuit \n* Kitchen  \n* Dinning \n* Lounge for the masters room \n* Balcony for all the rooms`,
    },
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
    <section id='projects' className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <div className='relative dots-pattern w-8 h-8 mx-auto mb-8 animate-float'></div>
          <h2 className='text-heading mb-4 animate-slide-up'>
            SELECTED PROJECTS
          </h2>
          <p className='text-subheading max-w-2xl mx-auto animate-slide-up'>
            A curated collection of our latest architectural achievements,
            showcasing our commitment to innovative design and exceptional
            craftsmanship.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
