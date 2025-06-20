import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Rune Essence. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="/shop"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Shop
          </Link>
        </nav>
      </div>
    </footer>
  );
}
