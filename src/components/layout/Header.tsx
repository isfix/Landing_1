'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 glassmorphic",
      isScrolled && "border-b border-white/20"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl sm:text-3xl font-bold text-primary-foreground hover:text-primary transition-colors font-headline">
          Rune
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/shop" aria-label="Shopping Cart">
             <ShoppingBag className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="mb-8 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary-foreground font-headline" onClick={() => setIsMobileMenuOpen(false)}>
                  Rune
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                      <X className="h-6 w-6 text-foreground" />
                      <span className="sr-only">Close menu</span>
                   </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                 <SheetClose asChild>
                    <Link href="/shop" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Shopping Cart
                    </Link>
                  </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
