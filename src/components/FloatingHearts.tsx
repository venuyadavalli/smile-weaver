import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
  opacity: number;
}

const EMOJIS = ["💕", "💗", "💖", "🌸", "✨", "💝", "🩷", "❤️", "💫", "🦋"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 22 + 12,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 15,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      opacity: Math.random() * 0.4 + 0.4,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-rise-heart"
          style={{
            left: `${heart.left}%`,
            bottom: "-5%",
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            filter: `blur(${heart.size > 25 ? 1 : 0}px)`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
