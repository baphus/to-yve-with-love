'use client';

import { useState, useRef, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { LoveLettersSection } from '@/components/sections/LoveLettersSection';
import { MomentsSection } from '@/components/sections/MomentsSection';
import { SongSection } from '@/components/sections/SongSection';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { EntryPuzzle } from '@/components/EntryPuzzle';

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = 'auto';
    }
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    if (audioRef.current) {
      audioRef.current.src = '/oursong.mp3';
      audioRef.current.play().catch(error => {
        console.error("Audio autoplay failed:", error);
      });
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      {!isUnlocked && <EntryPuzzle onUnlock={handleUnlock} />}
      
      <div className={`transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
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
    </div>
  );
}
