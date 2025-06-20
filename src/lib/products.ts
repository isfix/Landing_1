import type { Product } from './types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Ethereal White Blouse',
    slug: 'ethereal-white-blouse',
    description: 'A light and airy blouse, perfect for any occasion. Made from the finest organic cotton, its delicate touch and flowing silhouette embody pure elegance.',
    price: 120,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    imageUrl: 'https://placehold.co/600x800.png',
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png'],
    category: 'Tops',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Pastel Dream Skirt',
    slug: 'pastel-dream-skirt',
    description: 'A flowing midi skirt in a soft pastel hue. Crafted with layers of soft tulle, this skirt moves beautifully with every step, creating an aura of whimsical charm.',
    price: 150,
    sizes: ['S', 'M', 'L'],
    imageUrl: 'https://placehold.co/600x800.png',
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png'],
    category: 'Bottoms',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Minimalist Beige Trench',
    slug: 'minimalist-beige-trench',
    description: 'A classic trench coat with a modern minimalist twist. Its clean lines and neutral tone make it a versatile staple for sophisticated layering.',
    price: 280,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://placehold.co/600x800.png',
    images: ['https://placehold.co/800x1200.png'],
    category: 'Outerwear',
  },
  {
    id: '4',
    name: 'Silk Blush Camisole',
    slug: 'silk-blush-camisole',
    description: 'Luxurious silk camisole in a delicate blush pink. Perfect for layering or wearing on its own for an effortlessly chic look.',
    price: 90,
    sizes: ['XS', 'S', 'M', 'L'],
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Tops',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Neutral Knit Cardigan',
    slug: 'neutral-knit-cardigan',
    description: 'A cozy and stylish knit cardigan in a versatile neutral tone. Made with soft, breathable yarn for ultimate comfort and warmth.',
    price: 180,
    sizes: ['One Size'],
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Knitwear',
  },
  {
    id: '6',
    name: 'Flowy Linen Trousers',
    slug: 'flowy-linen-trousers',
    description: 'Relaxed fit linen trousers, perfect for warm weather. Their breathable fabric and elegant drape offer comfort without sacrificing style.',
    price: 130,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Bottoms',
    isFeatured: false,
  },
];

// Simulate API latency
const stall = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts(): Promise<Product[]> {
  await stall(500); // Simulate network delay
  return mockProducts;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await stall(300);
  return mockProducts.filter(product => product.isFeatured);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  await stall(200);
  return mockProducts.find(product => product.slug === slug);
}

// This function would typically interact with Firestore
// For now, it uses the mock data.
export async function getProductById(id: string): Promise<Product | undefined> {
  await stall(200);
  return mockProducts.find(product => product.id === id);
}

export const WHATSAPP_NUMBER = "15550001122"; // Placeholder WhatsApp number
