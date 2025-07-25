import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const Contact = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id='contact' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Left Content */}
          <div className='space-y-8 animate-slide-in-left'>
            <div className='relative dots-pattern w-8 h-8 animate-float'></div>

            <div className='space-y-6'>
              <div className='relative'>
                <h2 className='text-heading line-accent animate-fade-in'>
                  GET IN TOUCH
                </h2>
              </div>

              <p className='text-subheading animate-slide-up'>
                Ready to start your architectural journey? Let's discuss how we
                can bring your vision to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className='space-y-6 animate-slide-up'>
              <div className='space-y-2 transition-all duration-300 hover:translate-x-2'>
                <div className='text-sm tracking-wide text-muted-foreground'>
                  PHONE
                </div>
                <div className='text-lg font-light'>+234 810-340-4379</div>
              </div>

              <div className='space-y-2 transition-all duration-300 hover:translate-x-2'>
                <div className='text-sm tracking-wide text-muted-foreground'>
                  EMAIL
                </div>
                <div className='text-lg font-light'>Centobinze@gmail.com</div>
              </div>

              <div className='space-y-2 transition-all duration-300 hover:translate-x-2'>
                <div className='text-sm tracking-wide text-muted-foreground'>
                  OFFICE
                </div>
                <div className='text-lg font-light'>
                  No4 Ezeugwuclose off
                  <br />
                  Ofulonu Nsukka Enugu state
                  <br />
                  Nigeria
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className='space-y-6 animate-slide-in-right'>
            <form className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-xs tracking-wide text-muted-foreground'>
                    FIRST NAME
                  </label>
                  <Input
                    placeholder='John'
                    className='border-0 border-b border-border rounded-none bg-transparent px-0 focus:border-primary'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-xs tracking-wide text-muted-foreground'>
                    LAST NAME
                  </label>
                  <Input
                    placeholder='Doe'
                    className='border-0 border-b border-border rounded-none bg-transparent px-0 focus:border-primary'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-xs tracking-wide text-muted-foreground'>
                  EMAIL
                </label>
                <Input
                  type='email'
                  placeholder='john@example.com'
                  className='border-0 border-b border-border rounded-none bg-transparent px-0 focus:border-primary'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs tracking-wide text-muted-foreground'>
                  PROJECT TYPE
                </label>
                <Input
                  placeholder='Residential, Commercial, Interior, etc.'
                  className='border-0 border-b border-border rounded-none bg-transparent px-0 focus:border-primary'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs tracking-wide text-muted-foreground'>
                  MESSAGE
                </label>
                <Textarea
                  placeholder='Tell us about your project...'
                  rows={4}
                  className='border-0 border-b border-border rounded-none bg-transparent px-0 resize-none focus:border-primary'
                />
              </div>

              <div className='pt-6'>
                <Button className='bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className='fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all'
          aria-label='Scroll to top'
        >
          <ChevronUp className='w-6 h-6' />
        </button>
      )}
    </section>
  );
};

export default Contact;
