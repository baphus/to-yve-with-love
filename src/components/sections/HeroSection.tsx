import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-primary/20">
      {/* Stickers Container */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image src="/stickers/sticker1.png" alt="sticker" width={56} height={56} className="sticker top-[5%] left-[10%]" style={{ animationDelay: '0.1s' }} />
        <Image src="/stickers/sticker3.png" alt="sticker" width={72} height={72} className="sticker top-[20%] right-[8%]" style={{ animationDelay: '0.3s' }} />
        <Image src="/stickers/sticker5.png" alt="sticker" width={64} height={64} className="sticker bottom-[15%] left-[12%]" style={{ animationDelay: '0.5s' }} />
        <Image src="/stickers/sticker7.png" alt="sticker" width={60} height={60} className="sticker bottom-[5%] right-[10%]" style={{ animationDelay: '0.7s' }} />
        <Image src="/stickers/sticker8.png" alt="sticker" width={80} height={80} className="sticker top-[50%] right-[5%]" style={{ animationDelay: '0.9s' }} />
        <Image src="/stickers/sticker9.png" alt="sticker" width={68} height={68} className="sticker bottom-[25%] right-[20%]" style={{ animationDelay: '1.1s' }} />
        <Image src="/stickers/sticker10.png" alt="sticker" width={50} height={50} className="sticker top-[55%] left-[15%]" style={{ animationDelay: '1.3s' }} />
        <Image src="/stickers/sticker2.png" alt="sticker" width={64} height={64} className="sticker top-[10%] right-[5%] rotate-12" style={{ animationDelay: '1.5s' }} />
        <Image src="/stickers/sticker6.png" alt="sticker" width={80} height={80} className="sticker bottom-[10%] left-[5%] -rotate-12" style={{ animationDelay: '1.7s' }} />
        <Image src="/stickers/sticker4.png" alt="sticker" width={72} height={72} className="sticker top-[35%] left-[8%]" style={{ animationDelay: '1.9s' }} />
      </div>
      
      <div className="container z-10 flex flex-col items-center text-center px-4">
        <h2 className="font-body text-2xl md:text-3xl text-accent-foreground drop-shadow-md mb-4">
          Happy Girlfriend's Day!
        </h2>
        
        <div className="relative w-full max-w-3xl aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80">
          <Image 
            src="/hero/yve.jpg" 
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
       <div className="absolute bottom-4 animate-bounce z-10">
         <a href="#love-letters" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8 text-primary" />
         </a>
       </div>
    </section>
  );
}
