import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedCollection } from '@/components/sections/FeaturedCollection';
import { InstagramGrid } from '@/components/sections/InstagramGrid';
import { getFeaturedProducts } from '@/lib/products';
import type { Product } from '@/lib/types';

export default async function HomePage() {
  const featuredProducts: Product[] = await getFeaturedProducts();

  return (
    <>
      <HeroSection />
      <FeaturedCollection products={featuredProducts} />
      <InstagramGrid />
    </>
  );
}
