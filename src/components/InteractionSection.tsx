import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface InteractionSectionProps {
  onComplete: () => void;
}

const InteractionSection = ({ onComplete }: InteractionSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [noButtonOffset, setNoButtonOffset] = useState({ x: 0, y: 0 });
  const [showRetryMessage, setShowRetryMessage] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const fireConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff69b4", "#ff1493", "#ffb6c1", "#ffc0cb", "#db7093"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff69b4", "#ff1493", "#ffb6c1", "#ffc0cb", "#db7093"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const fireCelebration = useCallback(() => {
    // Big burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff69b4", "#ff1493", "#ffb6c1", "#ffc0cb", "#db7093", "#f0e68c", "#ffd700"],
    });

    // Side bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.5 },
        colors: ["#ff69b4", "#ff1493", "#ffb6c1"],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.5 },
        colors: ["#ff69b4", "#ff1493", "#ffb6c1"],
      });
    }, 500);

    // Stars
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 160,
        origin: { y: 0.4 },
        shapes: ["star"],
        colors: ["#ffd700", "#ffb6c1", "#ff69b4"],
      });
    }, 1000);
  }, []);

  const handleSmilingYes = () => {
    fireConfetti();
    setTimeout(() => setCurrentQuestion(1), 1500);
  };

  const handleSmilingNotYet = () => {
    setShowRetryMessage(true);
    setTimeout(() => {
      setShowRetryMessage(false);
      fireConfetti();
      setTimeout(() => setCurrentQuestion(1), 1500);
    }, 2500);
  };

  const handleNoHover = () => {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 100;
    setNoButtonOffset({ x, y });
  };

  const handleLikeYes = () => {
    fireConfetti();
    setTimeout(() => setCurrentQuestion(2), 1500);
  };

  const handleFinalYes = () => {
    setShowCelebration(true);
    fireCelebration();

    // Multiple celebration waves
    setTimeout(() => fireCelebration(), 2000);
    setTimeout(() => fireCelebration(), 4000);

    setTimeout(() => {
      onComplete();
    }, 6000);
  };

  const questionVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -40, scale: 0.95 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10"
    >
      <AnimatePresence mode="wait">
        {/* Question 1 */}
        {currentQuestion === 0 && !showRetryMessage && (
          <motion.div
            key="q1"
            variants={questionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="text-center max-w-md"
          >
            <motion.p className="text-4xl mb-4">🙂</motion.p>
            <h2 className="text-3xl md:text-4xl font-display text-gradient-romantic mb-8">
              Are you smiling right now?
            </h2>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSmilingYes}
                className="px-8 py-3 rounded-full bg-gradient-celebration text-primary-foreground font-body font-semibold shadow-romantic hover:shadow-glow transition-all duration-300"
              >
                Yes 😊
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSmilingNotYet}
                className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-body font-semibold shadow-romantic hover:shadow-glow transition-all duration-300"
              >
                Not yet 🤔
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Retry message */}
        {showRetryMessage && (
          <motion.div
            key="retry"
            variants={questionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-5xl mb-4">😄</p>
            <p className="text-2xl md:text-3xl font-display text-gradient-romantic">
              Okay wait… trying again 😄
            </p>
            <motion.div
              className="mt-6 flex gap-3 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {["💗", "✨", "🌸", "💕", "🩷"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Question 2 */}
        {currentQuestion === 1 && !showCelebration && !showRetryMessage && (
          <motion.div
            key="q3"
            variants={questionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="text-center max-w-md"
          >
            <motion.p className="text-4xl mb-4">🌟</motion.p>
            <h2 className="text-3xl md:text-4xl font-display text-gradient-romantic mb-8">
              Do you know you are a special person to me?
            </h2>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLikeYes}
              className="px-10 py-4 rounded-full bg-gradient-celebration text-primary-foreground font-body font-semibold text-lg animate-pulse-glow shadow-romantic hover:shadow-glow transition-all duration-300"
            >
              Yes 💝
            </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSmilingNotYet}
                className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-body font-semibold shadow-romantic hover:shadow-glow transition-all duration-300"
              >
                Maybe 😊
              </motion.button>
          </motion.div>
        )}

        {/* Question 3 */}
        {currentQuestion === 2 && !showCelebration && !showRetryMessage && (
          <motion.div
            key="q2"
            variants={questionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="text-center max-w-md"
          >
            <motion.p className="text-4xl mb-4">🌹</motion.p>
            <h2 className="text-3xl md:text-4xl font-display text-gradient-romantic mb-8">
              Will you be my Valentine?
            </h2>
            <div className="flex gap-4 justify-center items-center relative">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFinalYes}
                className="px-8 py-3 rounded-full bg-gradient-celebration text-primary-foreground font-body font-semibold shadow-romantic hover:shadow-glow transition-all duration-300"
              >
                Yes 💖
              </motion.button>
              <motion.button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                animate={{ x: noButtonOffset.x, y: noButtonOffset.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-body font-semibold shadow-romantic transition-all duration-300"
              >
                No 🙈
              </motion.button>
            </div>
            {noButtonOffset.x !== 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-sm text-muted-foreground font-body"
              >
                Hehe, that button is shy! 😄
              </motion.p>
            )}
          </motion.div>
        )}


        {/* Celebration */}
        {showCelebration && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-md"
          >
            <motion.div
              className="flex justify-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {["💗", "🎉", "💖", "✨", "🩷", "🎊", "💕"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-4xl md:text-5xl font-display text-gradient-romantic mb-4"
            >
              This makes me really happy 🙂
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex justify-center gap-2 mt-6"
            >
              {["💕", "💗", "💖", "💝", "🩷"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InteractionSection;
