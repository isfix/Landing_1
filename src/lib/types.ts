export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  imageUrl: string;
  images?: string[]; // Additional images for product detail page
  category?: string;
  isFeatured?: boolean;
  slug: string; // For URL-friendly product links
}
