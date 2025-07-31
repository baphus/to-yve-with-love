export function SongSection() {
  return (
    <section id="song" className="w-full py-20 lg:py-32 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground">Our Song</h2>
          <p className="mt-2 font-body text-lg text-foreground/80">Because it always makes me think of you.</p>
          <p className="mt-2 font-body text-sm text-foreground/60">(P.S. You can get the embed code for our actual song from Spotify by clicking Share -&gt; Embed track)</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/1BxfuY_SslJ5eQ6nw5kndh?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Embed for 'Perfect' by Ed Sheeran"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
