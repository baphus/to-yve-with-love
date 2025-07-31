import { HeroSection } from '@/components/sections/HeroSection';
import { LoveLettersSection } from '@/components/sections/LoveLettersSection';
import { MomentsSection } from '@/components/sections/MomentsSection';
import { SongSection } from '@/components/sections/SongSection';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
       {/* Sticker images that will float around */}
      <Image src="/stickers/sticker1.png" alt="sticker" width={64} height={64} className="sticker top-1/3 left-24 -rotate-12" />
      <Image src="/stickers/sticker2.png" alt="sticker" width={64} height={64} className="sticker top-2/3 right-32 rotate-6" />
      <Image src="/stickers/sticker3.png" alt="sticker" width={64} height={64} className="sticker bottom-1/4 left-16 rotate-12" />
      <Image src="/stickers/sticker4.png" alt="sticker" width={64} height={64} className="sticker bottom-1/2 right-12 -rotate-6" />

      <main className="flex-1">
        <HeroSection />
        <LoveLettersSection />
        <MomentsSection />
        <SongSection />
      </main>
      <footer className="w-full bg-primary/20 py-6">
        <div className="container mx-auto flex items-center justify-center text-center">
          <p className="font-headline text-lg text-primary-foreground">Made with <Heart className="inline-block h-4 w-4 fill-current" /> for Yve</p>
        </div>
      </footer>
    </div>
  );
}
