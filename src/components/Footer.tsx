const Footer = () => {
  return (
    <footer className='py-12 bg-primary text-primary-foreground'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Left */}
          <div className='space-y-4'>
            <div className='text-2xl font-light tracking-wider'>
              CENT'S HOMES
            </div>
            <p className='text-sm text-primary-foreground/70 leading-relaxed'>
              Creating exceptional architectural experiences through innovative
              design and meticulous craftsmanship.
            </p>
          </div>

          {/* Center */}
          <div className='space-y-4'>
            <div className='text-sm tracking-wide'>QUICK LINKS</div>
            <div className='space-y-2 text-sm text-primary-foreground/70'>
              <div>
                <a
                  href='#projects'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Projects
                </a>
              </div>
              <div>
                <a
                  href='#about'
                  className='hover:text-primary-foreground transition-colors'
                >
                  About
                </a>
              </div>
              <div>
                <a
                  href='#services'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Services
                </a>
              </div>
              <div>
                <a
                  href='#contact'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='space-y-4'>
            <div className='text-sm tracking-wide'>CONNECT</div>
            <div className='space-y-2 text-sm text-primary-foreground/70'>
              <div>Centobinze@gmail.com</div>
              <div>+234 810-340-4379</div>
              <div className='flex space-x-4 pt-2'>
                <a
                  href='https://instagram.com/cents_homes'
                  className='hover:text-primary-foreground transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
                <a
                  href='https://www.linkedin.com/in/anadile-obinze-b74925209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                  className='hover:text-primary-foreground transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
                <a
                  href='https://facebook.com/centshomes'
                  className='hover:text-primary-foreground transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
                <a
                  href='http://tiktok.com/@centhomes'
                  className='hover:text-primary-foreground transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-primary-foreground/20 mt-8 pt-8 text-center'>
          <p className='text-xs text-primary-foreground/50 tracking-wide'>
            © 2024 CENT'S HOMES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
