'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function HollowPurpleIntro({ onComplete }) {
  const [show, setShow] = useState(true);

  const ringControls = useAnimation();
  const monogramControls = useAnimation();
  const nameControls = useAnimation();
  const roleControls = useAnimation();
  const lineControls = useAnimation();
  const overlayControls = useAnimation();

  useEffect(() => {
    let cancelled = false;

    const wait = (ms) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    async function sequence() {
      // Initial state
      ringControls.set({
        scale: 0.55,
        opacity: 0,
        rotate: -25,
      });

      monogramControls.set({
        scale: 0.7,
        opacity: 0,
        y: 12,
      });

      nameControls.set({
        opacity: 0,
        y: 20,
        letterSpacing: '0.5em',
      });

      roleControls.set({
        opacity: 0,
        y: 12,
      });

      lineControls.set({
        scaleX: 0,
        opacity: 0,
      });

      overlayControls.set({
        opacity: 1,
      });

      // 1. Ring reveal
      await ringControls.start({
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      if (cancelled) return;

      // 2. AK monogram
      await monogramControls.start({
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      if (cancelled) return;

      // Small pause
      await wait(250);

      // 3. Horizontal line
      lineControls.start({
        scaleX: 1,
        opacity: 1,
        transition: {
          duration: 0.65,
          ease: 'easeOut',
        },
      });

      // 4. Name reveal
      await nameControls.start({
        opacity: 1,
        y: 0,
        letterSpacing: '0.22em',
        transition: {
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      if (cancelled) return;

      // 5. Role
      await roleControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
      });

      if (cancelled) return;

      await wait(900);

      // 6. Exit
      await Promise.all([
        ringControls.start({
          scale: 1.15,
          opacity: 0,
          transition: {
            duration: 0.55,
            ease: 'easeInOut',
          },
        }),

        monogramControls.start({
          scale: 1.08,
          opacity: 0,
          y: -8,
          transition: {
            duration: 0.45,
            ease: 'easeInOut',
          },
        }),

        nameControls.start({
          opacity: 0,
          y: -12,
          transition: {
            duration: 0.4,
            ease: 'easeInOut',
          },
        }),

        roleControls.start({
          opacity: 0,
          y: -8,
          transition: {
            duration: 0.35,
            ease: 'easeInOut',
          },
        }),

        lineControls.start({
          scaleX: 0,
          opacity: 0,
          transition: {
            duration: 0.35,
            ease: 'easeInOut',
          },
        }),
      ]);

      if (cancelled) return;

      await overlayControls.start({
        opacity: 0,
        transition: {
          duration: 0.45,
          ease: 'easeInOut',
        },
      });

      if (cancelled) return;

      setShow(false);

      if (onComplete) {
        onComplete();
      }
    }

    sequence();

    return () => {
      cancelled = true;
    };
  }, [
    ringControls,
    monogramControls,
    nameControls,
    roleControls,
    lineControls,
    overlayControls,
    onComplete,
  ]);

  if (!show) return null;

  return (
    <motion.div
      animate={overlayControls}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black select-none"
    >
      {/* Very subtle background glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.10)_0%,rgba(0,0,0,0)_48%)]
          pointer-events-none
        "
      />

      {/* Subtle grain / depth */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.65)_100%)]
          pointer-events-none
        "
      />

      {/* Main Identity */}
      <div className="relative flex flex-col items-center justify-center">

        {/* Monogram Ring */}
        <motion.div
          animate={ringControls}
          className="
            relative
            w-28 h-28
            md:w-36 md:h-36
            rounded-full
            flex items-center justify-center
          "
        >
          {/* Outer thin ring */}
          <div
            className="
              absolute inset-0
              rounded-full
              border border-white/20
            "
          />

          {/* Purple accent ring */}
          <div
            className="
              absolute inset-[5px]
              rounded-full
              border border-purple-400/50
              shadow-[0_0_35px_rgba(139,92,246,0.22)]
            "
          />

          {/* Inner glass circle */}
          <div
            className="
              absolute inset-[14px]
              rounded-full
              bg-white/[0.025]
              border border-white/10
              backdrop-blur-sm
            "
          />

          {/* AK */}
          <motion.div
            animate={monogramControls}
            className="
              relative z-10
              font-display
              font-black
              text-3xl
              md:text-4xl
              tracking-[0.08em]
              text-white
            "
          >
            AK
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          animate={lineControls}
          className="
            mt-8
            h-px
            w-20 md:w-28
            origin-center
            bg-gradient-to-r
            from-transparent
            via-purple-400
            to-transparent
          "
        />

        {/* Name */}
        <motion.h1
          animate={nameControls}
          className="
            mt-7
            font-display
            font-black
            text-white
            text-2xl
            md:text-4xl
            uppercase
            text-center
            tracking-[0.22em]
            pl-[0.22em]
            whitespace-nowrap
          "
        >
          APURVASRI K
        </motion.h1>

        {/* Role */}
        <motion.p
          animate={roleControls}
          className="
            mt-4
            font-mono
            text-[9px]
            md:text-xs
            uppercase
            tracking-[0.32em]
            text-white/45
            text-center
            pl-[0.32em]
          "
        >
          Software Developer
        </motion.p>
      </div>

      {/* Bottom tiny indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          font-mono
          text-[8px]
          uppercase
          tracking-[0.35em]
          text-white/30
        "
      >
        Welcome
      </motion.div>
    </motion.div>
  );
}
