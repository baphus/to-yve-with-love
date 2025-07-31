import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Flower2, Sparkles } from 'lucide-react';

const moments = [
  {
    image: "/moments/beach.png",
    title: "Our First Beach Trip",
    description: "Remember how we watched the sunset and you almost got swept away by a wave? Best day ever."
  },
  {
    image: "/moments/city.png",
    title: "That Night in the City",
    description: "The city lights had nothing on the sparkle in your eyes. I'll never forget that dinner."
  },
  {
    image: "/moments/furniture.png",
    title: "Building IKEA Furniture",
    description: "A true test of any relationship. We passed with flying colors (and only a few leftover screws)."
  },
  {
    image: "/moments/hike.png",
    title: "Conquering That Hike",
    description: "You complained for the first hour, but the view from the top (and seeing you proud) was worth it."
  },
  {
    image: "/moments/lazy.png",
    title: "Every Lazy Sunday",
    description: "My favorite moments are often the quiet ones, just being with you, doing nothing at all."
  },
  {
    image: "/moments/kitchen.png",
    title: "The Great Kitchen Disaster",
    description: "We tried to make pasta from scratch. We ended up ordering pizza. 10/10 would do it again."
  }
];

export function MomentsSection() {
  return (
    <section id="moments" className="w-full py-20 lg:py-32 bg-background relative overflow-hidden">
      <Flower2 className="sticker top-24 left-8 opacity-50 -rotate-12" />
      <Sparkles className="sticker bottom-1/4 right-8 opacity-50 rotate-12" />

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
