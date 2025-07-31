
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
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [finalLetter, setFinalLetter] = useState('');

  const handleNextStage = (stage: GameStage, userChoice?: string) => {
    if (userChoice) {
        setMessages((prev) => [...prev, { sender: 'user', text: userChoice }]);
    }

    const stageData = gameData[stage];
    
    setTimeout(() => {
        setMessages((prev) => [...prev, { sender: 'ai', text: stageData.reply }]);
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

  const handleOptionClick = (choice: string) => {
    if (!currentStage) return;

    setIsLoading(true);
    const nextStageKey = gameData[currentStage].nextStage as GameStage;
    handleNextStage(nextStageKey, choice);
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
    <Card className="w-full max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl">
      <CardHeader className="flex flex-col items-center text-center">
        <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white/80 shadow-lg mb-4">
            {/* You can replace this placeholder with your own image at public/me.png */}
            <Image src="/me.png" alt="A picture of me" layout="fill" objectFit="cover" data-ai-hint="portrait person" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-6 h-64 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 max-w-[80%] text-base ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
              <p className="font-body">{message.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
            </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4 border-t border-primary/30">
        {!isLoading && !isFinished && currentStage && gameData[currentStage].options.map((option, index) => (
          <Button key={index} onClick={() => handleOptionClick(option)} className="w-full" variant="outline">
            {option}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
