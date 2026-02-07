import { motion } from "framer-motion";
import childhoodPhoto from "@/assets/childhood-photo.jpg";
import Sparkles from "./Sparkles";

interface PhotoSectionProps {
  onContinue: () => void;
}

const PhotoSection = ({ onContinue }: PhotoSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="relative"
      >
        {/* Polaroid card */}
        <div className="animate-float-polaroid">
          <div className="bg-card p-4 pb-16 rounded-sm shadow-polaroid relative">
            <div className="relative overflow-hidden">
              <img
                src={childhoodPhoto}
                alt="Childhood photo"
                className="w-64 h-72 md:w-72 md:h-80 object-cover"
              />
              {/* Sparkles around photo */}
              <Sparkles count={6} />
            </div>

            {/* Caption on polaroid */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-4 left-0 right-0 text-center font-display text-lg text-foreground px-4"
            >
              This smile looks the same even today 🙂
            </motion.p>
          </div>
        </div>

        {/* Floating decorations */}
        <motion.span
          className="absolute -top-6 -right-6 text-3xl"
          animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌸
        </motion.span>
        <motion.span
          className="absolute -bottom-4 -left-6 text-2xl"
          animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          💕
        </motion.span>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        className="mt-12 px-8 py-3 rounded-full bg-gradient-celebration text-primary-foreground font-body font-semibold text-base shadow-romantic transition-all duration-300 hover:shadow-glow"
      >
        Continue 💗
      </motion.button>
    </motion.div>
  );
};

export default PhotoSection;
