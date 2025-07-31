import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Flower2, Sparkles } from 'lucide-react';

const moments = [
  {
    image: "/moments/beach.png",
    title: "Beach Dates",
    description: "Those sunsets, the sound of the waves, and you. There's nothing better than our time by the sea.",
    hint: "beach sunset"
  },
  {
    image: "https://placehold.co/600x400.png",
    title: "Watching FNAF at the Cinema",
    description: "Getting scared together was surprisingly romantic. I loved seeing you jump! Best movie date ever.",
    hint: "cinema movie"
  },
  {
    image: "https://placehold.co/600x400.png",
    title: "Eating Out Together",
    description: "Whether it's a fancy restaurant or just street food, sharing a meal with you is always my favorite.",
    hint: "outdoor dining"
  },
  {
    image: "https://placehold.co/600x400.png",
    title: "Karaoke Nights",
    description: "Our karaoke duets are legendary. Singing our hearts out with you is pure joy, even if we're off-key.",
    hint: "karaoke singing"
  },
  {
    image: "https://placehold.co/600x400.png",
    title: "Mall Dates & Spending Time",
    description: "Just walking around, talking, and being with you. It doesn't matter what we do, as long as I'm with you.",
    hint: "shopping mall"
  },
  {
    image: "/moments/kitchen.png",
    title: "Our Quiet Moments",
    description: "Sometimes the best moments are the quiet ones, just enjoying each other's company at home.",
    hint: "couple relaxing"
  }
];

export function MomentsSection() {
  return (
    <section id="moments" className="w-full py-20 lg:py-32 bg-background relative overflow-hidden">
      <Image src="/stickers/sticker2.png" alt="sticker" width={64} height={64} className="sticker top-[10%] right-[5%] rotate-12" style={{ animationDelay: '0.1s' }} />
      <Image src="/stickers/sticker6.png" alt="sticker" width={80} height={80} className="sticker bottom-[10%] left-[5%] -rotate-12" style={{ animationDelay: '0.3s' }} />


      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground">Our Favorite Moments</h2>
          <p className="mt-2 font-body text-lg text-foreground/80">A gallery of our adventures together.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300 bg-card border-accent/20">
              <CardContent className="p-0">
                <div className="aspect-[3/2] w-full relative">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover"
                    data-ai-hint={moment.hint}
                  />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary-foreground">{moment.title}</CardTitle>
                <CardDescription className="font-body text-base text-foreground/90">{moment.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
