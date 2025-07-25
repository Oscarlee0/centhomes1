import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import img1 from "@/assets/5int/IMG-20250725-WA0086.jpg";
import img2 from "@/assets/5int/IMG-20250725-WA0085.jpg";
import img3 from "@/assets/5int/IMG-20250725-WA0084.jpg";
import img4 from "@/assets/5int/IMG-20250725-WA0083.jpg";
import img5 from "@/assets/5int/IMG-20250725-WA0082.jpg";
import img6 from "@/assets/5int/IMG-20250725-WA0081.jpg";
import img7 from "@/assets/5int/IMG-20250725-WA0080.jpg";
import img8 from "@/assets/5int/IMG-20250725-WA0079.jpg";
import img9 from "@/assets/5int/IMG-20250725-WA0078.jpg";
import img10 from "@/assets/5int/IMG-20250725-WA0077.jpg";
import img11 from "@/assets/5int/IMG-20250725-WA0076.jpg";
import img12 from "@/assets/5int/IMG-20250725-WA0075.jpg";
import img13 from "@/assets/5int/IMG-20250725-WA0074.jpg";
import img14 from "@/assets/5int/IMG-20250725-WA0073.jpg";
import img15 from "@/assets/5int/IMG-20250725-WA0071.jpg";

const allImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const InteriorDesigns = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id='interior-designs' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16 animate-fade-in'>
          <div className='relative dots-pattern w-8 h-8 mx-auto mb-8 animate-float'></div>
          <h2 className='text-heading mb-4 animate-slide-up'>
            INTERIOR DESIGNS
          </h2>
          <p className='text-subheading max-w-2xl mx-auto animate-slide-up'>
            Where Imagination Meets Space: Explore our curated collection of
            stunning interior transformations that blend comfort, style, and
            innovation.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {allImages.slice(0, 3).map((img, idx) => (
            <div
              key={idx}
              className='overflow-hidden rounded-lg shadow-lg bg-background'
            >
              <img
                src={img}
                alt={`Interior Design ${idx + 1}`}
                className='w-full h-64 object-cover transition-transform duration-700 hover:scale-105'
              />
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <Button
            onClick={() => setOpen(true)}
            className='px-8 py-3 text-sm tracking-wide'
          >
            Show More
          </Button>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className='max-w-5xl w-full p-8 max-h-[90vh] overflow-y-auto'>
            <DialogTitle className='mb-6 text-center'>
              More Interior Designs
            </DialogTitle>
            <DialogClose className='absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
              <span className='sr-only'>Close</span>
            </DialogClose>
            <div className='grid md:grid-cols-3 gap-6'>
              {allImages.slice(3).map((img, idx) => (
                <div
                  key={idx}
                  className='overflow-hidden rounded-lg shadow-lg bg-background'
                >
                  <img
                    src={img}
                    alt={`Interior Design More ${idx + 4}`}
                    className='w-full h-64 object-cover transition-transform duration-700 hover:scale-105'
                  />
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default InteriorDesigns;
