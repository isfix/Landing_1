'use client';

import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/products';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  productName: string;
  selectedSize: string | null;
  productPrice: number;
  className?: string;
}

export function WhatsAppButton({ productName, selectedSize, productPrice, className }: WhatsAppButtonProps) {
  const handleOrder = () => {
    if (!selectedSize) {
      alert('Please select a size.'); // Or use a toast notification
      return;
    }

    const message = `Hello Rune, I'd like to order:\n\nProduct: ${productName}\nSize: ${selectedSize}\nPrice: $${productPrice.toFixed(2)}\n\nPlease let me know how to proceed.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleOrder}
      size="lg"
      className={`w-full bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
      disabled={!selectedSize}
      aria-label="Order via WhatsApp"
    >
      <WhatsAppIcon className="mr-2 h-5 w-5" />
      Order via WhatsApp
    </Button>
  );
}
