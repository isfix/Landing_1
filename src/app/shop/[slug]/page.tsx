
'use client';

import { useEffect, useState, use } from 'react'; // Imported use
import Image from 'next/image';
import { getProductBySlug } from '@/lib/products';
import type { Product } from '@/lib/types';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';


export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // According to the error, 'params' is a Promise.
  // We use React.use() to unwrap it and get the actual slug.
  // The type annotation { slug: string } refers to the resolved value.
  const { slug } = use(params);

  const [product, setProduct] = useState<Product | null | undefined>(undefined); // undefined for loading state
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // 'slug' is the resolved string value from the params.
    // If slug is not available (e.g., promise resolved to an unexpected structure), don't fetch.
    if (!slug) {
      // Potentially set an error state or log a warning if slug is crucial and missing.
      // For now, if no slug, we simply don't proceed with fetching.
      return;
    }

    async function fetchProduct() {
      try {
        const fetchedProduct = await getProductBySlug(slug); // Use the resolved slug
        setProduct(fetchedProduct);
        if (fetchedProduct?.imageUrl) {
          setSelectedImage(fetchedProduct.imageUrl);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProduct(null); // null indicates error or not found
        toast({
          title: "Error",
          description: "Could not load product details. Please try again later.",
          variant: "destructive",
        });
      }
    }
    fetchProduct();
  }, [slug, toast]); // Use the resolved 'slug' in the dependency array

  if (product === undefined) { // Loading state
    return (
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div>
            <Skeleton className="w-full aspect-square rounded-xl" />
            <div className="grid grid-cols-4 gap-2 mt-4">
              <Skeleton className="w-full aspect-square rounded-lg" />
              <Skeleton className="w-full aspect-square rounded-lg" />
              <Skeleton className="w-full aspect-square rounded-lg" />
              <Skeleton className="w-full aspect-square rounded-lg" />
            </div>
          </div>
          <div className="space-y-6">
            <Skeleton className="h-10 w-3/4 rounded" />
            <Skeleton className="h-6 w-1/4 rounded" />
            <Skeleton className="h-20 w-full rounded" />
            <Skeleton className="h-8 w-1/2 rounded" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Button asChild variant="outline">
          <Link href="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
          </Link>
        </Button>
      </div>
    );
  }

  const allImages = [product.imageUrl, ...(product.images || [])].filter(Boolean) as string[];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/shop">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
        </Link>
      </Button>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl glassmorphic">
            <Image
              src={selectedImage || product.imageUrl}
              alt={product.name}
              width={800}
              height={1000}
              className="object-cover w-full h-full transition-opacity duration-300"
              data-ai-hint="fashion product clothing"
              priority
            />
          </div>
          {allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all
                              ${selectedImage === img ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-transparent hover:border-primary/50'}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} - view ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    data-ai-hint="product detail thumbnail"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-headline">
            {product.name}
          </h1>
          <p className="text-3xl font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>
          <Separator />
          <div className="prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-xl font-semibold text-foreground mb-2">Description</h2>
            <p>{product.description}</p>
          </div>
          
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Select Size:</h2>
              <RadioGroup
                value={selectedSize || ''}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-3"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`flex items-center justify-center rounded-md border-2 border-muted bg-transparent px-4 py-2.5 text-sm font-medium
                                  hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all
                                  peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary 
                                  peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary peer-data-[state=checked]:ring-offset-1`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {!selectedSize && <p className="text-sm text-destructive">Please select a size.</p>}
            </div>
          )}
          
          <WhatsAppButton
            productName={product.name}
            selectedSize={selectedSize}
            productPrice={product.price}
          />
          <div className="flex items-center text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            <span>Secure ordering via WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
