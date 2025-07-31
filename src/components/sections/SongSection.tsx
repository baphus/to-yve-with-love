import { Heart } from "lucide-react";
import Image from "next/image";

export function SongSection() {
  const spotifySrc = "https://open.spotify.com/embed/track/5TpPSTItCwtZ8Sltr3vdzm?utm_source=generator";
  
  return (
    <section id="song" className="relative w-full py-20 lg:py-32 bg-primary/20 overflow-hidden">
       <Image src="/stickers/sticker5.png" alt="sticker" width={64} height={64} className="sticker top-[15%] left-[8%]" style={{ animationDelay: '0.2s' }} />
       <Image src="/stickers/sticker4.png" alt="sticker" width={72} height={72} className="sticker bottom-[20%] right-[10%]" style={{ animationDelay: '0.4s' }} />

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
        <div className="mt-16 text-center">
          <Heart className="mx-auto h-12 w-12 text-accent/80" />
          <p className="font-headline text-2xl text-primary-foreground max-w-3xl mx-auto">
            Thank you for being the incredible person you are. Every day with you is a gift, and I'm endlessly grateful for your love, your laughter, and your beautiful soul.
          </p>
        </div>
      </div>
    </section>
  );
}
