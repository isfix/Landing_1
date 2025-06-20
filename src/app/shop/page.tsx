import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/lib/products';
import type { Product } from '@/lib/types';

export default async function ShopPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 md:mb-16 font-headline">
        Our Collection
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          No products available at the moment. Please check back soon!
        </p>
      )}
    </div>
  );
}
