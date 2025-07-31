import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-primary/20">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/hero/background.png"
          alt="Romantic background"
          fill
          priority
          className="object-cover"
          data-ai-hint="ethereal pastel flowers"
        />
      </div>
      
      <div className="container z-10 flex flex-col items-center text-center px-4">
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white/80">
          <Image 
            src="/hero/yve.png" 
            alt="A picture of Yve" 
            fill
            priority
            className="object-cover"
          />
        </div>

        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary-foreground drop-shadow-lg">
          To My Dearest Yve
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg md:text-xl text-foreground/80">
          Happy Girlfriend's Day to the one who fills my world with laughter and light. You are my greatest adventure, and I am so incredibly lucky to walk through life with you. This is just a small token of my love for you.
        </p>
        <div className="mt-8">
          <a href="#love-letters">
            <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
              See Why I Love You
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
       <div className="absolute bottom-10 animate-bounce z-10">
         <a href="#love-letters" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8 text-primary" />
         </a>
       </div>
    </section>
  );
}
