import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/products';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const directWhatsAppMessage = "Hello Rune Essence, I have a question.";
  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(directWhatsAppMessage)}`;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-headline">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          We'd love to hear from you! Whether you have a question about our products, an order, or just want to say hello, feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 font-headline">Send us a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8 md:mt-[72px]"> {/* Align with form title roughly */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 font-headline">Other Ways to Connect</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl glassmorphic shadow-subtle">
              <h3 className="text-xl font-medium text-foreground mb-3 flex items-center">
                <WhatsAppIcon className="h-6 w-6 mr-3 text-green-500" />
                Chat with Us on WhatsApp
              </h3>
              <p className="text-muted-foreground mb-4">
                For quick inquiries or assistance, send us a message on WhatsApp.
              </p>
              <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <Link href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> Start Chat
                </Link>
              </Button>
            </div>

            <div className="p-6 rounded-xl glassmorphic shadow-subtle">
              <h3 className="text-xl font-medium text-foreground mb-3 flex items-center">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                Email Us
              </h3>
              <p className="text-muted-foreground mb-1">
                Prefer email? Reach out to us at:
              </p>
              <Link href="mailto:hello@runeessence.com" className="text-primary hover:underline font-medium break-all">
                hello@runeessence.com
              </Link>
            </div>
            
            {/* Optional: Phone number if available */}
            {/* 
            <div className="p-6 rounded-xl glassmorphic shadow-subtle">
              <h3 className="text-xl font-medium text-foreground mb-3 flex items-center">
                <Phone className="h-6 w-6 mr-3 text-primary" />
                Call Us
              </h3>
              <p className="text-muted-foreground mb-1">
                Speak to our team directly:
              </p>
              <Link href="tel:+1234567890" className="text-primary hover:underline font-medium">
                +1 (234) 567-890
              </Link>
            </div> 
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
