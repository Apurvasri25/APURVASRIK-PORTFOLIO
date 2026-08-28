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
      {/* Intro sequence Overlay - Unmounted completely when finished */}
      {!introFinished && <HollowPurpleIntro onComplete={handleIntroComplete} />}

      {/* Main Content (only mounted and animated in after intro finishes) */}
      <AnimatePresence>
        {introFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Horizontal Top Navigation Bar */}
            <Navbar />

            {/* Page Sections */}
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


