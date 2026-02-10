import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ComplimentsSectionProps {
  onContinue: () => void;
}

const compliments = [
  { caption: "✨", text: "My heart already chose you, will you choose me too?" },
  { caption: "🌸", text: "I'm not asking for forever... just asking if you'll be mine right now." },
  { caption: "🌟", text: "Will you be the reason behind my smile every single day?" },
  { caption: "💪", text: "I want to be the person who holds you up when the world gets heavy." },
  { caption: "🦋", text: "All I want is your hand in mine, today, tomorrow, and forever." }
];

const ComplimentsSection = ({ onContinue }: ComplimentsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= compliments.length - 1) {
          setIsAutoPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl md:text-4xl font-display text-gradient-romantic mb-12 text-center"
      >
        To the One Who Holds My Heart ✨
      </motion.h2>

      <div className="relative w-full max-w-sm h-48 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: -40, scale: 0.9, rotateX: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <motion.span
              className="text-5xl mb-4 block"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              {compliments[currentIndex].caption}
            </motion.span>
            <p className="text-xl md:text-2xl font-body text-foreground text-center leading-relaxed px-4">
              {compliments[currentIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 mt-8 mb-10">
        {compliments.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setIsAutoPlaying(false);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-primary scale-125"
                : i < currentIndex
                ? "bg-primary/50"
                : "bg-muted-foreground/30"
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: !isAutoPlaying ? 1 : 0.5, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        className="px-8 py-3 rounded-full bg-gradient-celebration text-primary-foreground font-body font-semibold text-base shadow-romantic transition-all duration-300 hover:shadow-glow"
      >
        Continue 💖
      </motion.button>
    </motion.div>
  );
};

export default ComplimentsSection;
