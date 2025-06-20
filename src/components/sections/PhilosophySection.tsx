
import { Leaf, Feather, Droplets } from 'lucide-react';

export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-headline">
            The Essence of Simplicity
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe in the power of understated elegance. Our pieces are thoughtfully designed to be timeless, versatile, and a true reflection of your inner grace. It's not just fashion; it's a feeling of calm and confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="flex flex-col items-center p-6 rounded-xl transition-all duration-300 bg-background/50 shadow-xl hover:shadow-2xl">
            <div className="mb-4 bg-primary/50 p-4 rounded-full shadow-xl">
              <Leaf className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ethical Materials</h3>
            <p className="text-muted-foreground">Sourced with care for a gentle impact on the earth.</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl transition-all duration-300 bg-background/50 shadow-xl hover:shadow-2xl">
             <div className="mb-4 bg-primary/50 p-4 rounded-full shadow-xl">
              <Feather className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Lightweight Comfort</h3>
            <p className="text-muted-foreground">Crafted for a 'barely there' feel and effortless movement.</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl transition-all duration-300 bg-background/50 shadow-xl hover:shadow-2xl">
            <div className="mb-4 bg-primary/50 p-4 rounded-full shadow-xl">
               <Droplets className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Timeless Design</h3>
            <p className="text-muted-foreground">Versatile pieces that transcend seasons and trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
