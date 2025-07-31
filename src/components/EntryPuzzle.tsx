'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';

export function EntryPuzzle({ onUnlock }: { onUnlock: () => void }) {
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [isMovingUp, setIsMovingUp] = useState(true);
  const [gameActive, setGameActive] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const requestRef = useRef<number>();
  const speed = 1.5; // Controls how fast the indicator moves

  const animate = () => {
    setIndicatorPosition(prevPosition => {
      if (isMovingUp) {
        if (prevPosition >= 100) {
          setIsMovingUp(false);
          return 100;
        }
        return prevPosition + speed;
      } else {
        if (prevPosition <= 0) {
          setIsMovingUp(true);
          return 0;
        }
        return prevPosition - speed;
      }
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (gameActive) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [gameActive, isMovingUp]);

  const handleTap = () => {
    if (!gameActive) return;

    setGameActive(false);
    cancelAnimationFrame(requestRef.current!);

    // Check if the indicator is in the target zone (45% to 55%)
    if (indicatorPosition >= 45 && indicatorPosition <= 55) {
      setShowSuccess(true);
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(onUnlock, 500); // Wait for fade out before calling unlock
      }, 1000); // Show success message for 1 second
    } else {
      // Restart the game after a short delay
      setTimeout(() => {
        setIndicatorPosition(0);
        setIsMovingUp(true);
        setGameActive(true);
      }, 1000);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-background z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleTap}
    >
      <div className="text-center">
        <h2 className="font-headline text-3xl text-primary-foreground mb-2">
          Unlock My Heart
        </h2>
        <p className="font-body text-foreground/80 mb-8">
          Tap when the heart is in the middle to begin.
        </p>
      </div>

      <div className="relative w-24 h-64 bg-primary/20 rounded-full overflow-hidden border-2 border-primary/50 shadow-inner">
        {/* Target Zone */}
        <div
          className="absolute w-full bg-accent/30"
          style={{ top: '45%', height: '10%' }}
        />
        
        {/* Indicator */}
        <div
          className="absolute w-full flex justify-center"
          style={{ top: `calc(${indicatorPosition}% - 12px)` }}
        >
            <Heart className="h-6 w-6 text-accent fill-accent" />
        </div>
      </div>
      
      {showSuccess && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="text-center">
                <Heart className="h-16 w-16 text-accent fill-accent animate-ping" />
                <p className="font-headline text-2xl text-primary-foreground mt-4">Unlocked!</p>
            </div>
        </div>
      )}
    </div>
  );
}
