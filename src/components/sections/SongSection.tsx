import { Heart } from "lucide-react";
import Image from 'next/image';
import { LoveLetterGame } from '@/components/LoveLetterGame';

export function SongSection() {
  const spotifySrc = "https://open.spotify.com/embed/track/5TpPSTItCwtZ8Sltr3vdzm?utm_source=generator";
  
  return (
    <section id="song" className="relative w-full py-20 lg:py-32 bg-primary/20 overflow-hidden">
        <Image src="/stickers/sticker9.png" alt="sticker" width={68} height={68} className="sticker bottom-[25%] right-[20%] z-20" style={{ animationDelay: '0.1s' }} />
        <Image src="/stickers/sticker10.png" alt="sticker" width={50} height={50} className="sticker top-[55%] left-[15%] z-20" style={{ animationDelay: '0.3s' }} />
        <Image src="/stickers/sticker2.png" alt="sticker" width={64} height={64} className="sticker top-[10%] right-[5%] rotate-12 z-20" style={{ animationDelay: '0.5s' }} />
        <Image src="/stickers/sticker6.png" alt="sticker" width={80} height={80} className="sticker bottom-[10%] left-[5%] -rotate-12 z-20" style={{ animationDelay: '0.7s' }} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground">Our Song</h2>
          <p className="mt-2 font-body text-lg text-foreground/80">Because it always makes me think of you.</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border-4 border-white/50">
            <iframe
              id="spotify-embed"
              style={{ borderRadius: '8px' }}
              src={spotifySrc}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={false}
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Embed for 'Last Night on Earth' by Green Day"
            ></iframe>
          </div>
        </div>
        <div className="mt-24">
          <LoveLetterGame />
        </div>
      </div>
    </section>
  );
}
