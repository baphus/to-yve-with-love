
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Textarea } from './ui/textarea';

const gameData = {
    start: {
        reply: "Hey... um, can I talk to you for a second?",
        options: ["Of course! What's up?", "Is everything okay?"],
        nextStage: 'reassure',
    },
    reassure: {
        reply: "Everything's great! I just... well, I have something for you.",
        options: ["Oh? For me?", "What is it?"],
        nextStage: 'reveal',
    },
    reveal: {
        reply: "I'm not the best with words sometimes, so I wrote this down. It's... it's for you.",
        options: ["A letter? For me?", "You wrote me a letter?"],
        nextStage: 'final',
    },
    final: {
        reply: "Here...",
        options: [],
        finalLetter: `I made this whole website for you to show how much I truly love you. I will always be there for you, and I hope this little world gives you comfort and makes you feel as appreciated and loved as you deserve.\n\nWith all my love.`,
        nextStage: 'end',
    }
};

type GameStage = keyof typeof gameData;

export function LoveLetterGame() {
  const [currentStage, setCurrentStage] = useState<GameStage | null>(null);
  const [currentText, setCurrentText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [finalLetter, setFinalLetter] = useState('');

  const handleNextStage = (stage: GameStage) => {
    const stageData = gameData[stage];
    
    setTimeout(() => {
        setCurrentText(stageData.reply);
        setCurrentStage(stage);
        
        if (stage === 'final') {
            setFinalLetter(stageData.finalLetter);
            setIsFinished(true);
        }
        setIsLoading(false);
    }, 500);
  }

  const startGame = () => {
    setIsLoading(true);
    handleNextStage('start');
  };

  const handleOptionClick = () => {
    if (!currentStage) return;
    setIsLoading(true);
    const nextStageKey = gameData[currentStage].nextStage as GameStage;
    handleNextStage(nextStageKey);
  };

  if (isFinished) {
    return (
        <div className="flex flex-col items-center text-center">
            <h3 className="font-headline text-3xl text-primary-foreground mb-4">A Letter For You</h3>
            <Textarea
                readOnly
                className="w-full max-w-2xl h-64 bg-card/80 backdrop-blur-sm text-base font-body text-foreground p-6 rounded-lg shadow-inner border-primary/50"
                value={finalLetter}
            />
        </div>
    )
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
    <div className="relative w-full max-w-4xl mx-auto h-[500px] bg-card/50 backdrop-blur-sm border-2 border-primary/30 shadow-2xl rounded-lg overflow-hidden flex flex-col justify-end">
        {/* Character Sprite */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full flex items-end justify-center">
            <div className="relative w-[300px] h-[450px]">
                {/* You can replace this placeholder with your own image at public/me.png */}
                <Image src="/me.png" alt="A picture of me" layout="fill" objectFit="contain" objectPosition="bottom" data-ai-hint="portrait person" />
            </div>
        </div>

        {/* Dialog Box */}
        <div className="relative m-4 bg-background/80 backdrop-blur-md border border-primary/50 rounded-lg p-4 z-10">
            <p className="font-body text-lg text-foreground mb-4 h-12">
                {isLoading ? <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" /> : currentText}
            </p>
            
            {!isLoading && !isFinished && currentStage && (
                 <div className="grid grid-cols-2 gap-2">
                    {gameData[currentStage].options.map((option, index) => (
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
