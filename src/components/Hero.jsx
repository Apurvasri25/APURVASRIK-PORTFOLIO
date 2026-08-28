import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
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
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
        "
      >
        {/* Purple glow */}
        <div
          className="
            absolute
            left-[55%]
            top-[20%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-neonPurple/10
            blur-[120px]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            right-[5%]
            bottom-[10%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-neonBlue/10
            blur-[110px]
          "
        />
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
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
            lg:w-[62%]
            pointer-events-none
          "
        >

          {/* HI, I'M */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
            className="mb-3"
          >
            <span
              className="
                font-mono
                text-sm
                sm:text-base
                tracking-[0.3em]
                text-gray-400
                uppercase
              "
            >
              HI, I'M
            </span>
          </motion.div>

          {/* APURVASRI K */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.05,
              ease: 'easeOut',
            }}
            className="mb-3 w-full"
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
                to-gray-500
                uppercase
                break-words
                leading-none
              "
            >
              APURVASRI K
            </h1>
          </motion.div>

          {/* FULL STACK DEVELOPER */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              ease: 'easeOut',
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
              to-gray-500
              mb-6
            "
          >
            FULL STACK DEVELOPER
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.15,
              ease: 'easeOut',
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
          </motion.h2>

          {/* BIO */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: 'easeOut',
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
            I'm a Computer Science Engineering undergraduate at
            V.S.B College of Engineering, passionate about applying
            my technical knowledge to build real-world software
            solutions. My experience spans full-stack web
            development, computer vision, and cloud computing, and
            I enjoy growing my skills through hands-on projects
            and internships that make a meaningful impact.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.25,
              ease: 'easeOut',
            }}
            className="
              flex
              flex-wrap
              gap-4
              items-center
              pointer-events-auto
            "
          >
            {/* Get In Touch */}
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

              <ArrowRight
                className="
                  w-4
                  h-4
                  text-neonPurple
                "
              />
            </a>

            {/* Download Resume */}
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
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    whitespace-nowrap
                  "
                >
                  <FileText
                    className="
                      w-4
                      h-4
                      text-neonPurple
                    "
                  />

                  <span className="whitespace-nowrap">
                    Download Resume
                  </span>
                </div>
              </CreepyButton>
            </a>
          </motion.div>

          {/* SOCIAL DOCK */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.35,
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

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
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
      </motion.div>
    </section>
  );
}
