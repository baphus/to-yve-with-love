'use client';
import { useState } from 'react';
import { Heart, MessageSquare, Smile, Star, Sun, BrainCircuit } from 'lucide-react';

const letters = [
  {
    icon: <Sun className="h-6 w-6 text-yellow-500" />,
    title: 'You Light Up My World',
    content:
      'Seriously, your presence is like sunshine on a cloudy day. Your energy is infectious, and you make everything better just by being you. The world feels brighter and full of color with you in it.',
  },
  {
    icon: <Smile className="h-6 w-6 text-pink-500" />,
    title: 'Your Breathtaking Beauty',
    content:
      "I know you sometimes don't see it, but you are the most beautiful person I've ever known, inside and out. It's not just your smile or your eyes, but the way you carry yourself with grace and kindness.",
  },
  {
    icon: <Star className="h-6 w-6 text-purple-500" />,
    title: 'Your Incredible Ambition',
    content:
      "Watching you chase your dreams is one of my favorite things. You're so driven, passionate, and intelligent. You inspire me every single day to be a better person. I have no doubt you'll achieve everything you set your mind to.",
  },
    {
    icon: <BrainCircuit className="h-6 w-6 text-teal-500" />,
    title: 'Your Creative Mind',
    content:
      "Your creativity knows no bounds, and the way your mind works constantly surprises and amazes me. From your brilliant ideas to your unique perspective on life, you make the world a far more interesting place.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
    title: 'The Way You Talk... A Lot!',
    content:
      "And I wouldn't have it any other way. I love listening to you talk about your day, your passions, or even just random thoughts. Your voice is my favorite sound, and your stories are my favorite tales. Please never stop sharing your world with me.",
  },
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: 'Your Heart of Gold',
    content:
      "You care so deeply for the people around you. Your compassion and empathy are boundless. You have a way of making everyone feel seen and loved, and I'm the luckiest of all to be the main recipient of that love.",
  },
];

function LoveLetter({
  letter,
  isOpen,
  onClick,
}: {
  letter: (typeof letters)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="w-full h-56 perspective-1000"
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full cursor-pointer transition-transform duration-700 ease-in-out transform-style-3d ${isOpen ? '[transform:translateY(4rem)]' : ''}`}
      >
        {/* The Letter Itself - High z-index to appear on top */}
        <div className="absolute top-0 left-0 w-full h-full bg-card/95 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-accent/40 p-6 flex flex-col justify-center transition-transform duration-1000 ease-out z-20"
            style={{ transform: isOpen ? 'translateY(-60%) rotateX(0deg)' : 'translateY(0%) rotateX(90deg)' }}>
          <div className="flex items-center gap-4 mb-4">
            {letter.icon}
            <h3 className="font-headline text-xl text-primary-foreground">{letter.title}</h3>
          </div>
          <p className="font-body text-base text-foreground/90">{letter.content}</p>
        </div>
        
        {/* Envelope Back */}
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-accent/60 z-0"></div>

        {/* Envelope Front */}
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-secondary shadow-lg flex items-center justify-center p-4 border-2 border-primary/50 overflow-hidden z-10">
            <div className={`font-headline text-xl text-primary-foreground text-center px-4 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-sm font-body mt-2 opacity-80">(Tap to open)</p>
            </div>
        </div>

        {/* Envelope Flap */}
        <div 
          className="absolute top-0 left-0 w-full h-1/2 bg-accent/80 transition-transform duration-500 ease-in-out origin-bottom z-10" 
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
            backfaceVisibility: 'hidden',
          }}>
        </div>
      </div>
    </div>
  );
}


export function LoveLettersSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleLetterClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section id="love-letters" className="relative w-full py-20 lg:py-32 bg-primary/20 overflow-hidden">
      <Heart className="sticker top-16 left-12 rotate-[-20deg]" />
      <Star className="sticker bottom-24 right-16 rotate-[15deg]" />
      <div className="container mx-auto max-w-3xl px-4 z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground">Things I Love About You</h2>
          <p className="mt-2 font-body text-lg text-foreground/80">Just a few of the countless reasons...</p>
        </div>
         <div className="space-y-16">
          {letters.map((letter, index) => (
             <LoveLetter 
                key={index} 
                letter={letter} 
                isOpen={openIndex === index}
                onClick={() => handleLetterClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
