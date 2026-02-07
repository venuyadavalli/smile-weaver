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
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        className="relative"
      >
        {/* Glow behind polaroid */}
        <motion.div
          className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Polaroid card */}
        <div className="animate-float-polaroid relative">
          <div className="bg-card p-3 pb-14 md:p-4 md:pb-16 rounded-sm shadow-polaroid relative">
            <div className="relative overflow-hidden rounded-sm">
              <motion.img
                src={childhoodPhoto}
                alt="Childhood photo"
                className="w-56 h-64 md:w-72 md:h-80 object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              />
              {/* Photo overlay shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 1, 0] }}
                transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
              />
              <Sparkles count={8} />
            </div>

            {/* Caption on polaroid */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center font-display text-base md:text-lg text-foreground px-4"
            >
              This smile looks the same even today 🙂
            </motion.p>
          </div>
        </div>

        {/* Floating decorations */}
        <motion.span
          className="absolute -top-8 -right-8 text-2xl md:text-3xl"
          animate={{ y: [-5, 5, -5], rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌸
        </motion.span>
        <motion.span
          className="absolute -bottom-6 -left-8 text-xl md:text-2xl"
          animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          💕
        </motion.span>
        <motion.span
          className="absolute top-1/2 -right-10 text-lg md:text-xl"
          animate={{ x: [0, 5, 0], y: [-3, 3, -3] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          ✨
        </motion.span>
        <motion.span
          className="absolute top-1/4 -left-10 text-lg"
          animate={{ y: [-4, 4, -4], rotate: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🦋
        </motion.span>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        className="mt-10 px-8 py-3 rounded-full bg-gradient-celebration text-primary-foreground font-body font-semibold text-base shadow-romantic transition-all duration-300 hover:shadow-glow"
      >
        Continue 💗
      </motion.button>
    </motion.div>
  );
};

export default PhotoSection;
