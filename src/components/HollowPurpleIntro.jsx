
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function HollowPurpleIntro({ onComplete }) {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const logoControls = useAnimation();
  const textControls = useAnimation();
  const overlayControls = useAnimation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function sequence() {
      // Initial positions
      leftControls.set({
        x: -120,
        y: 0,
        scale: 0.7,
        opacity: 0,
      });

      rightControls.set({
        x: 120,
        y: 0,
        scale: 0.7,
        opacity: 0,
      });

      logoControls.set({
        scale: 0.85,
        opacity: 0,
      });

      textControls.set({
        y: 20,
        opacity: 0,
      });

      // ------------------------------------------------
      // 1. A + K enter smoothly
      // ------------------------------------------------

      await Promise.all([
        leftControls.start({
          x: -58,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          },
        }),

        rightControls.start({
          x: 58,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      ]);

      if (cancelled) return;

      // ------------------------------------------------
      // 2. Small breathing movement
      // ------------------------------------------------

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (cancelled) return;

      // ------------------------------------------------
      // 3. A + K move toward center
      // ------------------------------------------------

      await Promise.all([
        leftControls.start({
          x: -12,
          scale: 0.92,
          transition: {
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          },
        }),

        rightControls.start({
          x: 12,
          scale: 0.92,
          transition: {
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          },
        }),
      ]);

      if (cancelled) return;

      // ------------------------------------------------
      // 4. Fade A/K and reveal monogram
      // ------------------------------------------------

      await Promise.all([
        leftControls.start({
          opacity: 0,
          scale: 0.8,
          x: -8,
          transition: {
            duration: 0.35,
            ease: 'easeOut',
          },
        }),

        rightControls.start({
          opacity: 0,
          scale: 0.8,
          x: 8,
          transition: {
            duration: 0.35,
            ease: 'easeOut',
          },
        }),

        logoControls.start({
          scale: [0.8, 1.08, 1],
          opacity: 1,
          transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      ]);

      if (cancelled) return;

      // ------------------------------------------------
      // 5. Reveal name
      // ------------------------------------------------

      await textControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 650));

      if (cancelled) return;

      // ------------------------------------------------
      // 6. Fade entire intro
      // ------------------------------------------------

      await overlayControls.start({
        opacity: 0,
        transition: {
          duration: 0.65,
          ease: 'easeInOut',
        },
      });

      if (!cancelled) {
        setShow(false);
        onComplete?.();
      }
    }

    sequence();

    return () => {
      cancelled = true;
    };
  }, [
    leftControls,
    rightControls,
    logoControls,
    textControls,
    overlayControls,
    onComplete,
  ]);

  if (!show) return null;

  return (
    <motion.div
      animate={overlayControls}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050507] overflow-hidden select-none"
    >
      {/* ------------------------------------------------
          Background Glow
      ------------------------------------------------ */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-purple-500/[0.08] blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_55%)]" />
      </div>

      {/* ------------------------------------------------
          Subtle Grid
      ------------------------------------------------ */}

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '45px 45px',
        }}
      />

      {/* ------------------------------------------------
          A Circle
      ------------------------------------------------ */}

      <motion.div
        animate={leftControls}
        className="absolute w-[88px] h-[88px] md:w-[104px] md:h-[104px] rounded-full flex items-center justify-center border border-white/[0.18] bg-white/[0.035] backdrop-blur-xl shadow-[0_0_45px_rgba(139,92,246,0.12)]"
      >
        <span className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight">
          A
        </span>

        <div className="absolute inset-[7px] rounded-full border border-purple-400/[0.15]" />
      </motion.div>

      {/* ------------------------------------------------
          K Circle
      ------------------------------------------------ */}

      <motion.div
        animate={rightControls}
        className="absolute w-[88px] h-[88px] md:w-[104px] md:h-[104px] rounded-full flex items-center justify-center border border-white/[0.18] bg-white/[0.035] backdrop-blur-xl shadow-[0_0_45px_rgba(139,92,246,0.12)]"
      >
        <span className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight">
          K
        </span>

        <div className="absolute inset-[7px] rounded-full border border-purple-400/[0.15]" />
      </motion.div>

      {/* ------------------------------------------------
          Center Monogram
      ------------------------------------------------ */}

      <motion.div
        animate={logoControls}
        className="relative w-[96px] h-[96px] md:w-[112px] md:h-[112px] rounded-full flex items-center justify-center border border-purple-300/30 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_60px_rgba(139,92,246,0.22)]"
      >
        <span className="font-display font-black text-2xl md:text-3xl tracking-[-0.08em] text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
          AK
        </span>

        <div className="absolute inset-[7px] rounded-full border border-white/[0.08]" />

        <div className="absolute -inset-3 rounded-full border border-purple-400/[0.08]" />
      </motion.div>

      {/* ------------------------------------------------
          Name + Profession
      ------------------------------------------------ */}

      <motion.div
        animate={textControls}
        className="absolute top-[calc(50%+105px)] md:top-[calc(50%+125px)] text-center px-6"
      >
        <h1 className="font-display font-black text-xl md:text-2xl tracking-[0.28em] uppercase text-white">
          APURVASRI K
        </h1>

        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-purple-400/50" />

          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-gray-400 font-mono">
            Computer Science Engineer
          </p>

          <span className="w-8 h-px bg-purple-400/50" />
        </div>
      </motion.div>

      {/* ------------------------------------------------
          Bottom Loading Line
      ------------------------------------------------ */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32">
        <div className="h-px bg-white/[0.08] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 3.8,
              ease: 'easeInOut',
            }}
            className="h-full bg-purple-400/70"
          />
        </div>

        <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-gray-600 text-center font-mono">
          Welcome
        </p>
      </div>
    </motion.div>
  );
}

