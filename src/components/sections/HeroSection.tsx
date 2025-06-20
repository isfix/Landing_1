
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-5rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://picsum.photos/1200/800"
        alt="Placeholder image"
        fill
        sizes="100vw"
        className="object-cover brightness-75"
        quality={90}
        priority
        data-ai-hint="fashion model aesthetic"
      />
      <div className="relative z-10 p-4 sm:p-6 max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl animate-slideUp border border-white/20 shadow-lg">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 font-headline" style={{ animationDelay: '0.2s' }}>
          Rune Essence
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl mx-auto" style={{ animationDelay: '0.4s' }}>
          Timeless pieces for the modern woman. Discover elegance in simplicity.
        </p>
        <div style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3">
            <Link href="/shop">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
