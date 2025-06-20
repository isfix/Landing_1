import Image from 'next/image';
import Link from 'next/link';

const instagramImages = [
  { id: 1, src: 'https://placehold.co/400x400.png', alt: 'Instagram Post 1', hint: 'fashion lifestyle flatlay' },
  { id: 2, src: 'https://placehold.co/400x400.png', alt: 'Instagram Post 2', hint: 'clothing detail texture' },
  { id: 3, src: 'https://placehold.co/400x400.png', alt: 'Instagram Post 3', hint: 'model pose aesthetic' },
  { id: 4, src: 'https://placehold.co/400x400.png', alt: 'Instagram Post 4', hint: 'accessory close-up chic' },
  { id: 5, src: 'https://placehold.co/400x400.png', alt: 'Instagram Post 5', hint: 'fashion store interior' },
  { id: 6, src: 'https://placehold.co/400x400.png', alt: 'Instagram Post 6', hint: 'textile pattern design' },
];

export function InstagramGrid() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-headline">
            Follow Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Get inspired by our latest styles and stories on Instagram.
          </p>
          <Link 
            href="https://instagram.com" // Replace with actual Instagram profile URL
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            @RuneEssence
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {instagramImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-subtle group">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
