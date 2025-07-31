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
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };
  
  useEffect(() => {
    if (isUnlocked && audioRef.current) {
      audioRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.error("Audio autoplay failed:", error);
      });
    }
  }, [isUnlocked]);


  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      {!isUnlocked && <EntryPuzzle onUnlock={handleUnlock} />}
      
      {isClient && (
        <audio ref={audioRef} src="/oursong.mp3" preload="auto" />
      )}

      <div className={`transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sticker images that will float around */}
        <Image src="/stickers/sticker1.png" alt="sticker" width={64} height={64} className="sticker top-[15%] left-[5%] -rotate-12" style={{ animationDelay: '0s' }} />
        <Image src="/stickers/sticker2.png" alt="sticker" width={80} height={80} className="sticker top-[5%] right-[8%]" style={{ animationDelay: '0.2s' }} />
        <Image src="/stickers/sticker3.png" alt="sticker" width={56} height={56} className="sticker top-[30%] right-[15%] rotate-12" style={{ animationDelay: '0.4s' }} />
        <Image src="/stickers/sticker4.png" alt="sticker" width={72} height={72} className="sticker top-[60%] left-[10%]" style={{ animationDelay: '0.6s' }} />
        <Image src="/stickers/sticker5.png" alt="sticker" width={64} height={64} className="sticker top-[85%] right-[5%] -rotate-6" style={{ animationDelay: '0.8s' }} />
        <Image src="/stickers/sticker6.png" alt="sticker" width={88} height={88} className="sticker top-[70%] left-[25%] rotate-6" style={{ animationDelay: '1s' }} />
        <Image src="/stickers/sticker7.png" alt="sticker" width={60} height={60} className="sticker top-[90%] left-[12%]" style={{ animationDelay: '1.2s' }} />
        <Image src="/stickers/sticker4.png" alt="sticker" width={48} height={48} className="sticker top-[45%] right-[5%]" style={{ animationDelay: '1.4s' }} />
        <Image src="/stickers/sticker1.png" alt="sticker" width={52} height={52} className="sticker top-[75%] right-[15%]" style={{ animationDelay: '1.6s' }} />

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
