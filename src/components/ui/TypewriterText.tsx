import React, { useEffect, useState, useCallback } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export function TypewriterText({ text, delay = 100 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create an audio context and buffer for better performance
  const playTypeSound = useCallback(() => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        playTypeSound();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, text, playTypeSound]);

  return (
    <div className="font-mono">
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
} 