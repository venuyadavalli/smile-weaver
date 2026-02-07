import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

const ClosingSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10"
    >
      <div className="relative max-w-lg text-center">
        <Sparkles count={10} />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-5xl">🌸</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-romantic border border-border/50"
        >
          <p className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-6 italic">
            I know you said we move like friends,
            <br />
            and I respect that.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-6"
          >
            I just wanted to do something special in your life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-2">
              All the best for your job search.
            </p>
            <p className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-8">
              You will definitely achieve it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <p className="text-3xl md:text-4xl font-display text-gradient-romantic">
              Happy Valentine's Day 🌸
            </p>
          </motion.div>
        </motion.div>

        {/* Floating decorations */}
        <motion.span
          className="absolute -top-4 -left-4 text-2xl"
          animate={{ y: [-5, 5, -5], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          💗
        </motion.span>
        <motion.span
          className="absolute -top-4 -right-4 text-2xl"
          animate={{ y: [5, -5, 5], rotate: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          ✨
        </motion.span>
        <motion.span
          className="absolute -bottom-4 left-1/2 text-2xl"
          animate={{ y: [-3, 5, -3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🩷
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ClosingSection;
