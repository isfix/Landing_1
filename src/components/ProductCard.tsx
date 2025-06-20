import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl transform transition-all duration-300 hover:shadow-subtle hover:-translate-y-1 h-full flex flex-col animate-fadeIn bg-background/50 shadow-xl hover:shadow-2xl">
      <Link href={`/shop/${product.slug}`} className="block group h-full flex flex-col">
        <CardHeader className="p-0 relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={800}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="fashion model clothing"
          />
        </CardHeader>
        <CardContent className="p-4 sm:p-6 flex-grow">
          <CardTitle className="text-lg md:text-xl font-medium text-foreground mb-1 transition-colors">
            {product.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 sm:p-6 pt-0 flex justify-between items-center">
          <p className="text-xl font-semibold text-primary-foreground">
            ${product.price.toFixed(2)}
          </p>
          <Button variant="ghost" size="sm" className="text-primary-foreground">
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
