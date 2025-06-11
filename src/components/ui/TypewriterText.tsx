import React, { useEffect, useState, useCallback, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export function TypewriterText({ text, delay = 100 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playTypeSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioContextRef.current.currentTime);
    gainNode.gain.setValueAtTime(0.025, audioContextRef.current.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.05);

    oscillator.start();
    oscillator.stop(audioContextRef.current.currentTime + 0.05);
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