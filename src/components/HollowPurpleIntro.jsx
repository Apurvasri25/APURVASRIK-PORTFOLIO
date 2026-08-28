
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HollowPurpleIntro({ onComplete }) {
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timers = [];

    timers.push(
      setTimeout(() => setStep(1), 500)
    );

    timers.push(
      setTimeout(() => setStep(2), 1200)
    );

    timers.push(
      setTimeout(() => setStep(3), 1900)
    );

    timers.push(
      setTimeout(() => setStep(4), 2600)
    );

    timers.push(
      setTimeout(() => setStep(5), 3300)
    );

    timers.push(
      setTimeout(() => {
        setShow(false);
        onComplete?.();
      }, 4400)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-[#050507] flex items-center justify-center overflow-hidden"
    >

      {/* =========================================
          SUBTLE BACKGROUND GLOW
      ========================================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/[0.06] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.07),transparent_60%)]" />

      </div>

      {/* =========================================
          SUBTLE GRID
      ========================================= */}

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* =========================================
          TERMINAL
      ========================================= */}

      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-[90%] max-w-[620px] rounded-xl border border-white/[0.08] bg-[#09090c]/90 backdrop-blur-xl shadow-[0_0_80px_rgba(139,92,246,0.12)] overflow-hidden"
      >

        {/* =====================================
            TERMINAL HEADER
        ===================================== */}

        <div className="h-11 flex items-center px-4 border-b border-white/[0.07] bg-white/[0.025]">

          <div className="flex gap-1.5">

            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />

          </div>

          <div className="absolute left-1/2 -translate-x-1/2 text-[10px] text-gray-500 font-mono tracking-wider">
            apurvasri@portfolio
          </div>

        </div>

        {/* =====================================
            TERMINAL CONTENT
        ===================================== */}

        <div className="p-6 sm:p-8 font-mono text-sm sm:text-[15px] min-h-[270px]">

          {/* LINE 1 */}

          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-2 mb-4"
              >
                <span className="text-purple-400">
                  $
                </span>

                <span className="text-gray-300">
                  initializing portfolio...
                </span>

                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                  }}
                  className="text-purple-400"
                >
                  ▌
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LINE 2 */}

          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-2 mb-4"
              >
                <span className="text-purple-400">
                  $
                </span>

                <span className="text-gray-400">
                  loading components...
                </span>

                <span className="text-green-400 text-xs">
                  [OK]
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LINE 3 */}

          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-2 mb-4"
              >
                <span className="text-purple-400">
                  $
                </span>

                <span className="text-gray-400">
                  system ready
                </span>

                <span className="text-green-400 text-xs">
                  [OK]
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LINE 4 */}

          <AnimatePresence>
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-7"
              >

                <div className="flex gap-2 text-purple-400">
                  <span>$</span>

                  <span className="text-gray-200">
                    welcome, Apurvasri.
                  </span>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* =================================
              NAME REVEAL
          ================================= */}

          <AnimatePresence>
            {step >= 5 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                  filter: 'blur(8px)',
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8"
              >

                <h1 className="font-display font-black text-3xl sm:text-4xl tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white uppercase">
                  APURVASRI K
                </h1>

                <div className="mt-3 flex items-center gap-3">

                  <span className="w-8 h-px bg-purple-400/50" />

                  <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gray-500">
                    Computer Science Engineer
                  </p>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* =====================================
            TERMINAL STATUS BAR
        ===================================== */}

        <div className="h-8 border-t border-white/[0.06] px-4 flex items-center justify-between text-[8px] font-mono text-gray-600 uppercase tracking-wider">

          <span>
            portfolio.exe
          </span>

          <span>
            v1.0.0
          </span>

        </div>

      </motion.div>

      {/* =========================================
          BOTTOM LOADING INDICATOR
      ========================================= */}

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-32">

        <div className="h-px bg-white/[0.08] overflow-hidden">

          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 4.2,
              ease: 'linear',
            }}
            className="h-full bg-purple-400/70"
          />

        </div>

        <p className="mt-3 text-center text-[8px] uppercase tracking-[0.35em] text-gray-600 font-mono">
          Loading
        </p>

      </div>

    </motion.div>
  );
}

