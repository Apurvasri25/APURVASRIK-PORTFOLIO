
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
      {/* =========================================
          INTRO SEQUENCE
      ========================================= */}

      {!introFinished && (
        <HollowPurpleIntro onComplete={handleIntroComplete} />
      )}

      {/* =========================================
          MAIN PORTFOLIO
      ========================================= */}

      <AnimatePresence>
        {introFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="portfolio-content"
          >

            {/* NAVBAR */}
            <Navbar />

            {/* =====================================
                SUBTLE LIGHT SPARKLES
            ===================================== */}

            <div
              className="portfolio-sparkles"
              aria-hidden="true"
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className="sparkle"
                  style={{
                    left: `${(i * 47.3) % 100}%`,
                    top: `${(i * 31.7) % 100}%`,
                    animationDelay: `${(i % 8) * 0.6}s`,
                    animationDuration: `${3 + (i % 5)}s`,
                  }}
                />
              ))}
            </div>

            {/* =====================================
                PAGE SECTIONS
            ===================================== */}

            <main>
              <Hero />

              <SkillsTesseract />

              <Projects />

              <Experience />

              <Highlights />

              <Contact />
            </main>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
