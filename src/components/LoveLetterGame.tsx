'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Loader2, X, Heart } from 'lucide-react';

const gameData = {
    start: {
        image: '/me-neutral.png',
        reply: "Hi bb..., can I talk to you for a second?",
        options: ["Of course! What's up?", "Okay ra ka?"],
        nextStage: 'reassure',
    },
    reassure: {
        image: '/me-shy.png',
        reply: "I just... well, I have something for you.",
        options: ["Oh? For me?", "What is it?"],
        nextStage: 'reveal',
    },
    reveal: {
        image: '/me-blushing.png',
        reply: "I'm not the best with words sometimes, so I wrote this down. It's... it's for you.",
        options: ["Open the letter"],
        nextStage: 'final',
    },
    final: {
        image: '/me-happy.png',
        reply: "Here...",
        options: ["Open the letter"],
        finalLetter: `I made this whole website for you to show how much I truly love you. I will always be there for you, and I hope this little world gives you comfort and makes you feel as appreciated and loved as you deserve.\n\nWith all my love. \n-Josephus`,
        nextStage: 'letter',
    },
    askDate: {
        image: '/me-happy.png',
        reply: "So... since you know how much you mean to me, would you go on a date with me to SM City? We can go laag and have dinner sa City.",
        options: ["YES!!!"],
        nextStage: 'end'
    }
};

type GameStage = keyof typeof gameData | 'letter' | 'end';

function HeartsOverlay() {
    return (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <Heart
                    key={i}
                    className="absolute text-accent fill-accent animate-fall"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 4}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        width: `${Math.floor(Math.random() * 20) + 10}px`,
                        height: `${Math.floor(Math.random() * 20) + 10}px`,
                    }}
                />
            ))}
        </div>
    );
}


export function LoveLetterGame() {
  const [currentStage, setCurrentStage] = useState<GameStage | null>(null);
  const [currentText, setCurrentText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [finalLetter, setFinalLetter] = useState('');
  const [currentImage, setCurrentImage] = useState('/me-neutral.png');

  const handleNextStage = (stage: GameStage) => {
    if (stage === 'letter') {
        setShowLetter(true);
        setIsLoading(false);
        return;
    }
    
    if (stage === 'end') {
        setIsLoading(false);
        setShowHearts(true);
        setCurrentText("Yay! I'm so excited! Let's make it a day to remember. ❤️");
        // Handle game end state if needed
        return;
    }

    const stageKey = stage as keyof typeof gameData;
    const stageData = gameData[stageKey];
    
    setTimeout(() => {
        setCurrentText(stageData.reply);
        setCurrentStage(stageKey);
        setCurrentImage(stageData.image);
        
        if ('finalLetter' in stageData) {
            setFinalLetter(stageData.finalLetter);
        }
        setIsLoading(false);
    }, 500);
  }

  const startGame = () => {
    setIsLoading(true);
    handleNextStage('start');
  };

  const handleOptionClick = () => {
    if (!currentStage || currentStage === 'letter' || currentStage === 'end') return;
    
    const stageKey = currentStage as keyof typeof gameData;
    const nextStageKey = gameData[stageKey].nextStage as GameStage;
    
    if (nextStageKey) {
        setIsLoading(true);
        handleNextStage(nextStageKey);
    }
  };

  const closeLetter = () => {
    setShowLetter(false);
    handleNextStage('askDate');
  }


  if (!currentStage) {
    return (
      <div className="text-center">
        <h3 className="font-headline text-3xl text-primary-foreground mb-4">A little something...</h3>
        <p className="font-body text-lg text-foreground/80 mb-6">Before you go, there's one last thing I want to share with you.</p>
        <Button onClick={startGame} disabled={isLoading} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          What is it?
        </Button>
      </div>
    );
  }

  return (
    <div 
        className="relative w-full max-w-4xl mx-auto h-[600px] bg-card/50 backdrop-blur-sm border-2 border-primary/30 shadow-2xl rounded-lg overflow-hidden flex flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('/vn-background.png')" }}
    >
        {showHearts && <HeartsOverlay />}
        {showLetter && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/50 backdrop-blur-md p-4">
                <Card className="w-full max-w-2xl animate-in fade-in zoom-in-95 relative">
                    <CardHeader>
                        <h3 className="font-headline text-3xl text-primary-foreground text-center">A Letter For You</h3>
                         <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={closeLetter}>
                            <X className="h-5 w-5" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <p className="whitespace-pre-wrap font-body text-base text-foreground leading-relaxed">
                            {finalLetter}
                        </p>
                    </CardContent>
                </Card>
            </div>
        )}

        {/* Character Sprite */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[800px] pointer-events-none">
            <Image src={currentImage} alt="A picture of me" layout="fill" objectFit="contain" objectPosition="bottom" data-ai-hint="portrait person" />
        </div>
        
        {/* Name Tag */}
        <div className="absolute left-8 bottom-[180px] z-10">
          <div className="bg-background/80 backdrop-blur-md border border-primary/50 rounded-md px-4 py-1">
            <p className="font-headline text-xl text-primary-foreground">Josephus</p>
          </div>
        </div>

        {/* Dialog Box */}
        <div className="relative m-4 bg-background/80 backdrop-blur-md border border-primary/50 rounded-lg p-4 z-10">
            <p className="font-body text-lg text-foreground mb-4 min-h-[4rem] md:min-h-0 md:h-12 pt-2">
                {isLoading ? <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" /> : currentText}
            </p>
            
            {!isLoading && currentStage && currentStage !== 'letter' && !showHearts && gameData[currentStage as keyof typeof gameData].options.length > 0 && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {gameData[currentStage as keyof typeof gameData].options.map((option, index) => (
                        <Button key={index} onClick={handleOptionClick} className="w-full" variant="outline">
                            {option}
                        </Button>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
}
