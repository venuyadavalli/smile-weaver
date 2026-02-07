import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import WelcomeSection from "@/components/WelcomeSection";
import PhotoSection from "@/components/PhotoSection";
import ComplimentsSection from "@/components/ComplimentsSection";
import InteractionSection from "@/components/InteractionSection";
import ClosingSection from "@/components/ClosingSection";

type Section = "welcome" | "photo" | "compliments" | "interaction" | "closing";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("welcome");

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {currentSection === "welcome" && (
          <WelcomeSection
            key="welcome"
            onStart={() => setCurrentSection("photo")}
          />
        )}
        {currentSection === "photo" && (
          <PhotoSection
            key="photo"
            onContinue={() => setCurrentSection("compliments")}
          />
        )}
        {currentSection === "compliments" && (
          <ComplimentsSection
            key="compliments"
            onContinue={() => setCurrentSection("interaction")}
          />
        )}
        {currentSection === "interaction" && (
          <InteractionSection
            key="interaction"
            onComplete={() => setCurrentSection("closing")}
          />
        )}
        {currentSection === "closing" && (
          <ClosingSection key="closing" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
