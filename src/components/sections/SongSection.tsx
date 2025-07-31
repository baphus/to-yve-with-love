import { Music, Flower } from "lucide-react";

export function SongSection() {
  return (
    <section id="song" className="relative w-full py-20 lg:py-32 bg-primary/20 overflow-hidden">
       <Flower className="sticker top-1/2 left-12 -rotate-12" />
       <Music className="sticker top-1/3 right-12 rotate-6" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground">Our Song</h2>
          <p className="mt-2 font-body text-lg text-foreground/80">Because it always makes me think of you.</p>
          <p className="mt-2 font-body text-sm text-foreground/60">(P.S. You can get the embed code for our actual song from Spotify by clicking Share -&gt; Embed track)</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border-4 border-white/50">
            <iframe
              style={{ borderRadius: '8px' }}
              src="https://open.spotify.com/embed/track/5TpPSTItCwtZ8Sltr3vdzm?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Embed for 'Last Night on Earth' by Green Day"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
