import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import centsHomesLogo from "@/assets/cents-homes-logo.png";
import logo1 from "@/assets/logo1.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <img src={logo1} alt="Cent's Homes" className='h-8 w-auto' />
            <span className='ml-2 font-semibold text-lg'>CENT'S HOMES</span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => scrollToSection("projects")}
              className='text-sm tracking-wide hover:text-accent transition-colors duration-300 hover:scale-105'
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className='text-sm tracking-wide hover:text-accent transition-colors duration-300 hover:scale-105'
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className='text-sm tracking-wide hover:text-accent transition-colors duration-300 hover:scale-105'
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className='text-sm tracking-wide hover:text-accent transition-colors duration-300 hover:scale-105'
            >
              CONTACT
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className='md:hidden flex items-center space-x-2'>
            <ThemeToggle />
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-border'>
            <div className='flex flex-col space-y-4 pt-4'>
              <button
                onClick={() => scrollToSection("projects")}
                className='text-left text-sm tracking-wide hover:text-accent transition-colors'
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className='text-left text-sm tracking-wide hover:text-accent transition-colors'
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className='text-left text-sm tracking-wide hover:text-accent transition-colors'
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className='text-left text-sm tracking-wide hover:text-accent transition-colors'
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
