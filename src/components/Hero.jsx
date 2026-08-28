
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowRight, X, Download } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import GlassDock from '@/components/ui/glass-dock';
import CreepyButton from '@/components/ui/CreepyButton';

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const dockItems = [
    {
      title: 'LinkedIn',
      icon: () => null,
      onClick: () => {
        window.open(
          'https://www.linkedin.com/in/apurvasri-k-921876293',
          '_blank'
        );
      },
    },
    {
      title: 'GitHub',
      icon: () => null,
      onClick: () => {
        window.open(
          'https://github.com/Apurvasri25',
          '_blank'
        );
      },
    },
    {
      title: 'Email',
      icon: () => null,
      onClick: () => {
        window.location.href =
          'mailto:apurvasrikanakasabapathi@gmail.com';
      },
    },
  ];

  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 lg:py-0 overflow-hidden dots-bg"
      >
        {/* ================= 3D ROBOT BACKGROUND ================= */}

        <div className="absolute inset-y-0 left-0 w-full lg:w-[150vw] h-full z-0 pointer-events-auto mix-blend-screen opacity-50 sm:opacity-75 lg:opacity-100 transition-opacity duration-300">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
            fallback={
              <div className="absolute inset-0 bg-darkBg flex items-center justify-center">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-neonPurple/20 blur-3xl filter animate-pulse" />

                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-neonBlue/20 blur-3xl filter animate-pulse" />

                <img
                  src="/hero_ai_graphic.png"
                  alt="AI Circuit Graphic"
                  className="max-w-2xl w-full h-auto opacity-45 filter brightness-95 contrast-105 border border-white/5 rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            }
          />
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="w-full max-w-7xl mx-auto z-10 relative pointer-events-none">

          <div className="flex flex-col justify-center text-left w-full lg:w-1/2 pointer-events-none">

            {/* NAME */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2 w-full"
            >
              <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-550 uppercase break-words leading-none">
                APURVASRI K
              </h1>
            </motion.div>

            {/* SUBTITLE */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-bold text-lg sm:text-xl md:text-2xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-550 mb-6"
            >
              Computer Science Engineer
            </motion.p>

            {/* MAIN HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none mb-4"
            >
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                Practical
              </span>{' '}
              Software Solutions
            </motion.h1>

            {/* BIO */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
            >
              I'm a Computer Science Engineering undergraduate at
              V.S.B College of Engineering, passionate about applying
              my technical knowledge to build real-world software
              solutions. My experience spans full-stack web
              development, computer vision, and cloud computing, and
              I enjoy growing my skills through hands-on projects and
              internships that make a meaningful impact.
            </motion.p>

            {/* ================= BUTTONS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center pointer-events-auto"
            >

              {/* GET IN TOUCH */}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white bg-[#18181b] border border-neonPurple/40 hover:border-neonPurple hover:bg-neonPurple/10 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get In Touch

                <ArrowRight className="w-4 h-4 text-neonPurple" />
              </a>

              {/* VIEW RESUME */}

              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="inline-block"
              >
                <CreepyButton
                  coverClassName="bg-[#18181b] border border-white/20 text-gray-200 hover:text-white hover:border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.06)]"
                >
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <FileText className="w-4 h-4 text-neonPurple" />

                    <span className="whitespace-nowrap">
                      View Resume
                    </span>
                  </div>
                </CreepyButton>
              </button>

            </motion.div>

            {/* ================= GLASS DOCK ================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-14 sm:mt-16 pointer-events-auto"
            >
              <GlassDock items={dockItems} />
            </motion.div>

          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none pointer-events-none opacity-85">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gray-300 font-semibold">
            Scroll Down
          </span>

          <div className="w-[1px] h-10 bg-gradient-to-b from-gray-300 via-neonPurple/60 to-transparent" />
        </div>

      </section>

      {/* =====================================================
          RESUME POPUP
      ===================================================== */}

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setResumeOpen(false)}
          >

            {/* RESUME MODAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              className="relative w-full max-w-5xl h-[90vh] rounded-2xl border border-white/10 bg-[#0b0b0f] shadow-[0_0_60px_rgba(139,92,246,0.18)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >

              {/* MODAL HEADER */}

              <div className="flex items-center justify-between h-14 px-4 sm:px-6 border-b border-white/[0.08] bg-[#111116]">

                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />

                  <span className="text-sm font-medium text-gray-200">
                    Apurvasri K — Resume
                  </span>
                </div>

                <div className="flex items-center gap-2">

                  {/* DOWNLOAD */}

                  <a
                    href="/resume.pdf"
                    download="Apurvasri_K_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300 transition-all hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">
                      Download
                    </span>
                  </a>

                  {/* CLOSE */}

                  <button
                    type="button"
                    onClick={() => setResumeOpen(false)}
                    className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 text-gray-400 transition-all hover:border-red-400/30 hover:bg-red-500/10 hover:text-white"
                    aria-label="Close resume"
                  >
                    <X className="w-4 h-4" />
                  </button>

                </div>
              </div>

              {/* PDF VIEWER */}

              <div className="h-[calc(90vh-56px)] w-full bg-[#18181b]">

                <iframe
                  src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  title="Apurvasri K Resume"
                  className="h-full w-full border-0"
                />

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
