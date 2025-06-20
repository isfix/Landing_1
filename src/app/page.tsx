import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedCollection } from '@/components/sections/FeaturedCollection';
import { InstagramGrid } from '@/components/sections/InstagramGrid';
import { getFeaturedProducts } from '@/lib/products';
import type { Product } from '@/lib/types';
import { PhilosophySection } from '@/components/sections/PhilosophySection';

export default async function HomePage() {
  const featuredProducts: Product[] = await getFeaturedProducts();

  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <FeaturedCollection products={featuredProducts} />
      <InstagramGrid />
    </>
  );
}
