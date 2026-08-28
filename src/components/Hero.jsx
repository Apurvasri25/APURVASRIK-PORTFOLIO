import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import GlassDock from '@/components/ui/glass-dock';
import CreepyButton from '@/components/ui/CreepyButton';

export default function Hero() {
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
    <section
      id="about"
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        px-6
        py-20
        lg:py-0
        overflow-hidden
        dots-bg
      "
    >

      {/* ================= 3D ROBOT ================= */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full
          lg:w-[150vw]
          h-full
          z-0
          pointer-events-auto
          mix-blend-screen
          opacity-50
          sm:opacity-75
          lg:opacity-100
          transition-opacity
          duration-300
        "
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
          fallback={
            <div className="absolute inset-0 bg-darkBg flex items-center justify-center">

              <div
                className="
                  absolute
                  top-1/4
                  right-1/4
                  w-96
                  h-96
                  rounded-full
                  bg-neonPurple/20
                  blur-3xl
                  filter
                  animate-pulse
                "
              />

              <div
                className="
                  absolute
                  bottom-1/4
                  left-1/4
                  w-96
                  h-96
                  rounded-full
                  bg-neonBlue/20
                  blur-3xl
                  filter
                  animate-pulse
                "
              />

              <img
                src="/hero_ai_graphic.png"
                alt="AI Circuit Graphic"
                className="
                  max-w-2xl
                  w-full
                  h-auto
                  opacity-45
                  filter
                  brightness-95
                  contrast-105
                  border
                  border-white/5
                  rounded-2xl
                "
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          }
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          z-10
          relative
          pointer-events-none
        "
      >

        <div
          className="
            flex
            flex-col
            justify-center
            text-left
            w-full
            lg:w-1/2
            pointer-events-none
          "
        >

          {/* ================= NAME ================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 w-full"
          >
            <h1
              className="
                font-display
                font-black
                text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[5rem]
                tracking-tight
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-white
                via-gray-300
                to-gray-550
                uppercase
                break-words
                leading-none
              "
            >
              APURVASRI K
            </h1>
          </motion.div>

          {/* ================= ROLE ================= */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
            }}
            className="
              font-display
              font-bold
              text-lg
              sm:text-xl
              md:text-2xl
              tracking-wider
              uppercase
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-white
              via-gray-300
              to-gray-550
              mb-6
            "
          >
            Full Stack Developer
          </motion.p>

          {/* ================= MAIN HEADING ================= */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              font-display
              font-extrabold
              text-4xl
              sm:text-5xl
              lg:text-6xl
              tracking-tight
              text-white
              leading-none
              mb-4
            "
          >
            Building{' '}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#6366F1]
                to-[#8B5CF6]
              "
            >
              Practical
            </span>{' '}
            Software Solutions
          </motion.h1>

          {/* ================= BIO ================= */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              text-gray-300
              text-sm
              sm:text-base
              leading-relaxed
              max-w-xl
              mb-8
            "
          >
            I'm a Computer Science Engineering undergraduate at V.S.B
            College of Engineering, passionate about applying my technical
            knowledge to build real-world software solutions. My experience
            spans full-stack web development, computer vision, and cloud
            computing, and I enjoy growing my skills through hands-on
            projects and internships that make a meaningful impact.
          </motion.p>

          {/* ================= BUTTONS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              flex
              flex-wrap
              gap-4
              items-center
              pointer-events-auto
            "
          >

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-lg
                font-medium
                text-sm
                text-white
                bg-[#18181b]
                border
                border-neonPurple/40
                hover:border-neonPurple
                hover:bg-neonPurple/10
                shadow-[0_0_15px_rgba(168,85,247,0.2)]
                transition-all
                duration-300
                transform
                hover:-translate-y-0.5
              "
            >
              Get In Touch

              <ArrowRight className="w-4 h-4 text-neonPurple" />
            </a>

            <a
              href="/resume.pdf"
              download="Apurvasri_K_Resume.pdf"
              className="inline-block"
            >
              <CreepyButton
                coverClassName="
                  bg-[#18181b]
                  border
                  border-white/20
                  text-gray-200
                  hover:text-white
                  hover:border-white/40
                  shadow-[0_0_15px_rgba(255,255,255,0.06)]
                "
              >
                <div className="flex items-center gap-2 whitespace-nowrap">

                  <FileText className="w-4 h-4 text-neonPurple" />

                  <span className="whitespace-nowrap">
                    Download Resume
                  </span>

                </div>
              </CreepyButton>
            </a>

          </motion.div>

          {/* ================= SOCIAL DOCK ================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
            }}
            className="
              mt-14
              sm:mt-16
              pointer-events-auto
            "
          >
            <GlassDock items={dockItems} />
          </motion.div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          select-none
          pointer-events-none
          opacity-85
        "
      >

        <span
          className="
            text-[10px]
            uppercase
            font-mono
            tracking-widest
            text-gray-300
            font-semibold
          "
        >
          Scroll Down
        </span>

        <div
          className="
            w-[1px]
            h-10
            bg-gradient-to-b
            from-gray-300
            via-neonPurple/60
            to-transparent
          "
        />

      </div>

    </section>
  );
}
