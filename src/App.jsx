import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HollowPurpleIntro from './components/HollowPurpleIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsTesseract from './components/SkillsTesseract';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Contact from './components/Contact';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroFinished(true);
  }, []);

  return (
    <>
      {!introFinished && (
        <HollowPurpleIntro onComplete={handleIntroComplete} />
      )}

      <AnimatePresence>
        {introFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="portfolio-shell"
          >
            {/* =========================================
                GLOBAL AMBIENT BACKGROUND
            ========================================= */}

            <div className="ambient-background" aria-hidden="true">
              <div className="ambient-grid" />

              <div className="ambient-glow ambient-glow-one" />
              <div className="ambient-glow ambient-glow-two" />
              <div className="ambient-glow ambient-glow-three" />

              <div className="ambient-noise" />
            </div>

            {/* =========================================
                CONTENT
            ========================================= */}

            <div className="portfolio-content">
              <Navbar />

              <main>
                <Hero />
                <SkillsTesseract />
                <Projects />
                <Experience />
                <Highlights />
                <Contact />
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
