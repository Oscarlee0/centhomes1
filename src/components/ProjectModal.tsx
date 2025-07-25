import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category: string;
    year: string;
    images: string[];
    description: string;
    details?: string;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl w-full h-[90vh] p-0 overflow-hidden'>
        <DialogClose className='absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </DialogClose>

        <DialogTitle className='sr-only'>{project.title}</DialogTitle>

        <div className='grid lg:grid-cols-2 h-full'>
          {/* Left - Image Carousel */}
          <div className='relative bg-muted flex items-center justify-center'>
            <div className='relative w-full h-full'>
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className='w-full h-full object-cover'
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90'
                    onClick={prevImage}
                  >
                    <ChevronLeft className='h-4 w-4' />
                  </Button>

                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90'
                    onClick={nextImage}
                  >
                    <ChevronRight className='h-4 w-4' />
                  </Button>
                </>
              )}

              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-primary"
                          : "bg-background/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right - Project Details */}
          <div className='p-8 flex flex-col justify-center space-y-6 overflow-y-auto'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-sm tracking-wide text-muted-foreground'>
                  {project.category}
                </span>
                <span className='text-sm tracking-wide text-muted-foreground'>
                  {project.year}
                </span>
              </div>

              <h2 className='text-3xl font-light tracking-wide'>
                {project.title}
              </h2>

              <p className='text-muted-foreground leading-relaxed'>
                {project.description}
              </p>

              {project.details && (
                <div className='space-y-4 pt-4 border-t border-border'>
                  <h3 className='text-lg font-light tracking-wide'>
                    Project Details
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {project.details}
                  </p>
                </div>
              )}
            </div>

            {/* <div className="flex space-x-4 pt-6">
              <Button className="flex-1">
                VIEW MORE DETAILS
              </Button>
              <Button variant="outline">
                CONTACT US
              </Button>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
