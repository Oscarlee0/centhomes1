import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider">
            ARCH<span className="font-normal">STUDIO</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-sm tracking-wide hover:text-accent transition-colors"
              >
                PROJECTS
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-sm tracking-wide hover:text-accent transition-colors"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-sm tracking-wide hover:text-accent transition-colors"
              >
                SERVICES
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-sm tracking-wide hover:text-accent transition-colors"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;