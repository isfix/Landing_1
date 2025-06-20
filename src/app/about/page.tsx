import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-10 md:mb-12 font-headline">
          About Rune Essence
        </h1>
        
        <div className="relative aspect-video mb-10 md:mb-12 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="https://picsum.photos/seed/about/1280/720" 
            alt="Rune Essence Brand Aesthetic" 
            layout="fill" 
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint="minimalist fashion moodboard"
          />
        </div>

        <div className="prose prose-lg lg:prose-xl max-w-none text-foreground mx-auto space-y-6 text-justify">
          <p>
            Welcome to Rune Essence, where minimalist design meets feminine grace. Our brand is built on the belief that true style is timeless, effortless, and deeply personal. We craft pieces for the modern woman who values quality, understated elegance, and clothing that speaks to her inner essence.
          </p>
          <p>
            Our aesthetic is inspired by the clean lines of contemporary architecture, the soft hues of a dawn sky, and the serene beauty of nature. We believe in the power of simplicity – that a well-chosen garment can make a profound statement without shouting. Each piece in our collection is thoughtfully designed to be versatile, comfortable, and enduring.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground !mb-4 !mt-10 font-headline">Our Vision</h2>
          <p>
            At Rune, we envision a world where fashion empowers women to feel confident and authentic. We strive to create clothing that is not just worn, but lived in – pieces that become a cherished part of your story. Our commitment is to sustainable practices, ethical production, and the use of high-quality materials that feel as good as they look.
          </p>
          <p>
            We embrace a palette of whites, neutrals, and soft pastels, reflecting a sense of calm and sophistication. The "liquid glass" or "frosted glass" elements in our digital experience mirror the lightness and translucency we aim for in our designs – a gentle strength, a subtle allure.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground !mb-4 !mt-10 font-headline">The Rune Woman</h2>
          <p>
            She is discerning, confident, and appreciates the finer details. She seeks harmony in her life and her wardrobe. She is not swayed by fleeting trends but invests in pieces that resonate with her personal style and values. She is, at her core, effortlessly chic.
          </p>
          <p>
            Join us in celebrating the art of minimalist femininity. Discover Rune Essence.
          </p>
        </div>
      </div>
    </div>
  );
}
