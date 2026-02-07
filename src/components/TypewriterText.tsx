import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({ text, delay = 0, speed = 60, className = "", onComplete }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
      // Blink cursor then hide
      const cursorTimeout = setTimeout(() => setShowCursor(false), 2000);
      return () => clearTimeout(cursorTimeout);
    }
  }, [displayedText, started, text, speed, onComplete]);

  useEffect(() => {
    if (!started || displayedText.length >= text.length) return;
    const interval = setInterval(() => setShowCursor((prev) => !prev), 400);
    return () => clearInterval(interval);
  }, [started, displayedText.length, text.length]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayedText}
      {started && displayedText.length < text.length && (
        <span
          className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
          style={{ opacity: showCursor ? 1 : 0 }}
        />
      )}
    </motion.span>
  );
};

export default TypewriterText;
