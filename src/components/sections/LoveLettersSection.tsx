import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, MessageSquare, Smile, Star, Sun } from "lucide-react";

const letters = [
  {
    icon: <Sun className="h-5 w-5 text-accent-foreground" />,
    title: "You Light Up My World",
    content: "Seriously, your presence is like sunshine on a cloudy day. Your energy is infectious, and you make everything better just by being you. The world feels brighter and full of color with you in it."
  },
  {
    icon: <Smile className="h-5 w-5 text-accent-foreground" />,
    title: "Your Breathtaking Beauty",
    content: "I know you sometimes don't see it, but you are the most beautiful person I've ever known, inside and out. It's not just your smile or your eyes, but the way you carry yourself with grace and kindness."
  },
  {
    icon: <Star className="h-5 w-5 text-accent-foreground" />,
    title: "Your Incredible Ambition",
    content: "Watching you chase your dreams is one of my favorite things. You're so driven, passionate, and intelligent. You inspire me every single day to be a better person. I have no doubt you'll achieve everything you set your mind to."
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-accent-foreground" />,
    title: "The Way You Talk... A Lot!",
    content: "And I wouldn't have it any other way. I love listening to you talk about your day, your passions, or even just random thoughts. Your voice is my favorite sound, and your stories are my favorite tales. Please never stop sharing your world with me."
  },
  {
    icon: <Heart className="h-5 w-5 text-accent-foreground" />,
    title: "Your Heart of Gold",
    content: "You care so deeply for the people around you. Your compassion and empathy are boundless. You have a way of making everyone feel seen and loved, and I'm the luckiest of all to be the main recipient of that love."
  }
];

export function LoveLettersSection() {
  return (
    <section id="love-letters" className="w-full py-20 lg:py-32 bg-primary/10">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground">Things I Love About You</h2>
          <p className="mt-2 font-body text-lg text-foreground/80">Just a few of the countless reasons...</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {letters.map((letter, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card/80 backdrop-blur-sm border-accent/20 rounded-lg shadow-lg transition-all hover:shadow-xl hover:border-accent/40">
              <AccordionTrigger className="p-6 font-headline text-lg hover:no-underline text-primary-foreground">
                <div className="flex items-center gap-4">
                  {letter.icon}
                  {letter.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 font-body text-base text-foreground/90">
                {letter.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
