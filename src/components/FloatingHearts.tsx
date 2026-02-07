import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const EMOJIS = ["💕", "💗", "💖", "🌸", "✨", "💝", "🩷"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 14,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: "-10%",
            fontSize: `${heart.size}px`,
            animation: `rise-heart ${heart.duration}s ease-out ${heart.delay}s infinite`,
            opacity: 0,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
