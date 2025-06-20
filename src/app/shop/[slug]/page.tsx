
'use client';

import { useEffect, useState, use } from 'react';
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
  const { slug } = use(params);

  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!slug) {
      return;
    }

    async function fetchProduct() {
      try {
        const fetchedProduct = await getProductBySlug(slug);
        setProduct(fetchedProduct);
        if (fetchedProduct?.imageUrl) {
          setSelectedImage(fetchedProduct.imageUrl);
        }
        // Set a default size if available and none is selected
        if (fetchedProduct?.sizes && fetchedProduct.sizes.length > 0 && !selectedSize) {
          // setSelectedSize(fetchedProduct.sizes[0]); // Optionally pre-select first size
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProduct(null);
        toast({
          title: "Error",
          description: "Could not load product details. Please try again later.",
          variant: "destructive",
        });
      }
    }
    fetchProduct();
  }, [slug, toast, selectedSize]);

  if (product === undefined) {
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
      <Button asChild variant="outline" className="mb-8 animate-fadeIn" style={{ animationDelay: '0s' }}>
        <Link href="/shop">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
        </Link>
      </Button>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Image Gallery */}
        <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border bg-white shadow-lg">
            <Image
              key={selectedImage} 
              src={selectedImage || product.imageUrl}
              alt={product.name}
              width={800}
              height={1000}
              className="object-cover w-full h-full animate-fadeIn transition-opacity duration-300"
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
                  className={`group aspect-square overflow-hidden rounded-lg border-2 bg-white transition-all
                              ${selectedImage === img ? 'border-primary ring-2 ring-primary ring-offset-background' : 'border-muted hover:border-primary/50'}`}
                >
                  <div className="overflow-hidden w-full h-full rounded-md">
                    <Image
                      src={img}
                      alt={`${product.name} - view ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                      data-ai-hint="product detail thumbnail"
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-headline animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            {product.name}
          </h1>
          <p className="text-3xl font-semibold text-primary-foreground animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            ${product.price.toFixed(2)}
          </p>
          <Separator className="animate-fadeIn" style={{ animationDelay: '0.25s' }}/>
          <div className="prose prose-lg text-muted-foreground max-w-none animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-xl font-semibold text-foreground mb-2">Description</h2>
            <p>{product.description}</p>
          </div>
          
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-3 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
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
                      className={`flex items-center justify-center rounded-md border-2 px-4 py-2.5 text-sm font-medium
                                  hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all
                                  border-muted bg-transparent 
                                  peer-data-[state=checked]:bg-primary-foreground peer-data-[state=checked]:text-primary 
                                  peer-data-[state=checked]:border-primary-foreground 
                                  peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary-foreground 
                                  peer-data-[state=checked]:ring-offset-2 peer-data-[state=checked]:ring-offset-background`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {product.sizes.length > 0 && !selectedSize && <p className="text-sm text-destructive mt-2">Please select a size.</p>}
            </div>
          )}
          
          <div className="animate-fadeIn" style={{animationDelay: '0.5s'}}>
            <WhatsAppButton
              productName={product.name}
              selectedSize={selectedSize}
              productPrice={product.price}
            />
            <div className="flex items-center text-sm text-muted-foreground mt-2">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              <span>Secure ordering via WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
