const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left */}
          <div className="space-y-4">
            <div className="text-2xl font-light tracking-wider">
              ARCH<span className="font-normal">STUDIO</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Creating exceptional architectural experiences through innovative 
              design and meticulous craftsmanship.
            </p>
          </div>

          {/* Center */}
          <div className="space-y-4">
            <div className="text-sm tracking-wide">QUICK LINKS</div>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div><a href="#projects" className="hover:text-primary-foreground transition-colors">Projects</a></div>
              <div><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></div>
              <div><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></div>
              <div><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="text-sm tracking-wide">CONNECT</div>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div>hello@archstudio.com</div>
              <div>+1 (555) 123-4567</div>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-primary-foreground transition-colors">Behance</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50 tracking-wide">
            © 2024 ARCHSTUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;