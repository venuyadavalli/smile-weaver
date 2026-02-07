import { motion, type Easing } from "framer-motion";
import Sparkles from "./Sparkles";

const ClosingSection = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 + i * 0.4, duration: 0.8, ease: "easeOut" as Easing },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10"
    >
      <div className="relative max-w-lg w-full text-center">
        <Sparkles count={12} />

        {/* Top emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <motion.span
            className="text-5xl inline-block"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🌸
          </motion.span>
        </motion.div>

        {/* Message card with glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="bg-card/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-romantic border border-border/50 relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.p
              custom={0}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-xl font-body text-foreground leading-relaxed mb-6 italic"
            >
              I know you said we move like friends,
              <br />
              and I respect that.
            </motion.p>

            <motion.p
              custom={1}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-xl font-body text-foreground leading-relaxed mb-6"
            >
              I just wanted to do something special in your life.
            </motion.p>

            <motion.div
              custom={2}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base md:text-xl font-body text-foreground leading-relaxed mb-2">
                All the best for your job search.
              </p>
              <p className="text-base md:text-xl font-body text-foreground leading-relaxed mb-8">
                You will definitely achieve it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, duration: 1, type: "spring" }}
            >
              <motion.p
                className="text-2xl md:text-4xl font-display text-gradient-romantic"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Happy Valentine's Day 🌸
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorations */}
        <motion.span
          className="absolute -top-4 -left-2 md:-left-4 text-xl md:text-2xl"
          animate={{ y: [-5, 5, -5], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          💗
        </motion.span>
        <motion.span
          className="absolute -top-4 -right-2 md:-right-4 text-xl md:text-2xl"
          animate={{ y: [5, -5, 5], rotate: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          ✨
        </motion.span>
        <motion.span
          className="absolute -bottom-4 left-1/4 text-xl"
          animate={{ y: [-3, 5, -3], x: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🩷
        </motion.span>
        <motion.span
          className="absolute -bottom-4 right-1/4 text-xl"
          animate={{ y: [3, -5, 3] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          💫
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ClosingSection;
