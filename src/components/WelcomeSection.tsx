import { useState } from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

interface WelcomeSectionProps {
  onStart: () => void;
}

const WelcomeSection = ({ onStart }: WelcomeSectionProps) => {
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-lg"
      >
        {/* Animated emoji entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.5 }}
          className="text-6xl mb-6"
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            💝
          </motion.span>
        </motion.div>

        {/* Typewriter heading */}
        <h1 className="text-4xl md:text-6xl font-display text-gradient-romantic mb-6 leading-tight min-h-[1.2em]">
          <TypewriterText
            text="Hi Lahari 👋"
            delay={1200}
            speed={80}
            onComplete={() => setShowSubtext(true)}
          />
        </h1>

        {/* Subtext with fade */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={showSubtext ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-base md:text-xl font-body text-muted-foreground leading-relaxed mb-12"
          onAnimationComplete={() => {
            if (showSubtext) setShowButton(true);
          }}
        >
          I built this small space just to make you smile today
        </motion.p>

        {/* Glowing start button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showButton ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px hsl(340 80% 65% / 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="px-10 py-4 rounded-full bg-gradient-celebration text-primary-foreground font-body font-semibold text-lg animate-pulse-glow transition-all duration-300 hover:shadow-glow relative overflow-hidden group"
          >
            <span className="relative z-10">Start ✨</span>
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bouncing arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showButton ? { opacity: 0.6 } : {}}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 animate-gentle-bounce"
      >
        <span className="text-xl text-muted-foreground">↓</span>
      </motion.div>

      {/* Decorative side elements */}
      <motion.span
        className="absolute top-1/4 left-4 md:left-12 text-2xl md:text-3xl opacity-40"
        animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🌸
      </motion.span>
      <motion.span
        className="absolute top-1/3 right-4 md:right-12 text-xl md:text-2xl opacity-40"
        animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        💫
      </motion.span>
      <motion.span
        className="absolute bottom-1/4 left-8 md:left-16 text-xl opacity-30"
        animate={{ y: [-8, 8, -8], x: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        🦋
      </motion.span>
    </motion.div>
  );
};

export default WelcomeSection;
