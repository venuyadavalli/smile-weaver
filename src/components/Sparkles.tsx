import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
}

const Sparkles = ({ count = 8 }: { count?: number }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generated: Sparkle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 12 + 8,
      delay: Math.random() * 3,
    }));
    setSparkles(generated);
  }, [count]);

  return (
    <>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute animate-sparkle pointer-events-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            fontSize: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        >
          ✨
        </span>
      ))}
    </>
  );
};

export default Sparkles;
