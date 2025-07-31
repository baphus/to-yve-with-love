import { HeroSection } from '@/components/sections/HeroSection';
import { LoveLettersSection } from '@/components/sections/LoveLettersSection';
import { MomentsSection } from '@/components/sections/MomentsSection';
import { SongSection } from '@/components/sections/SongSection';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
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
