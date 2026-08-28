```jsx
import React from 'react';
import { motion } from 'framer-motion';

import {
  SiJava,
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiFigma,
  SiVite,
  SiPostman,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'PROGRAMMING',
    skills: [
      { name: 'Java', icon: SiJava },
      { name: 'Python', icon: SiPython },
      { name: 'C', icon: SiC },
    ],
  },

  {
    title: 'FRONTEND',
    skills: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },

  {
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },

  {
    title: 'DATABASE',
    skills: [
      { name: 'MySQL', icon: SiMysql },
    ],
  },

  {
    title: 'TOOLS',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Figma', icon: SiFigma },
      { name: 'Vite', icon: SiVite },
    ],
  },
];

/* =========================================
   SKILL CARD
========================================= */

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className="
        group
        relative
        flex
        h-[105px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-3
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-purple-400/40
        hover:bg-purple-500/[0.05]
        hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]
      "
    >

      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-20
          w-20
          rounded-full
          bg-purple-500/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-purple-500/20
        "
      />

      {/* Logo */}

      <Icon
        className="
          relative
          z-10
          mb-2
          text-[32px]
          text-gray-300
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-purple-300
        "
      />

      {/* Name */}

      <span
        className="
          relative
          z-10
          text-center
          text-xs
          font-medium
          tracking-wide
          text-gray-400
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {skill.name}
      </span>

    </motion.div>
  );
};

/* =========================================
   SKILL GROUP
========================================= */

const SkillGroup = ({ group, groupIndex }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: groupIndex * 0.06,
      }}
      className="relative"
    >

      {/* Category Heading */}

      <div className="mb-4 flex items-center gap-3">

        <span className="h-px w-6 bg-purple-500/80" />

        <h3
          className="
            font-mono
            text-[10px]
            font-semibold
            tracking-[0.22em]
            text-purple-300
          "
        >
          {group.title}
        </h3>

        <div className="h-px flex-1 bg-white/[0.06]" />

      </div>

      {/* Logos */}

      <div
        className="
          grid
          grid-cols-2
          gap-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        "
      >
        {group.skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>

    </motion.div>
  );
};

/* =========================================
   MAIN SKILLS SECTION
========================================= */

export default function SkillsTesseract() {
  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        px-5
        py-20
        sm:px-8
        lg:px-16
      "
    >

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.05]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-12"
        >

          <div className="mb-3 flex items-center gap-3">

            <span className="h-px w-8 bg-purple-500" />

            <span
              className="
                font-mono
                text-[10px]
                tracking-[0.28em]
                text-purple-400
              "
            >
              MY TOOLKIT
            </span>

          </div>

          <h2
            className="
              text-5xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            Skills
            <span className="text-purple-500">.</span>
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-gray-500
              sm:text-base
            "
          >
            Technologies and tools I use to build interactive,
            responsive and practical digital experiences.
          </p>

        </motion.div>

        {/* ================= SKILLS ================= */}

        <div className="space-y-10">

          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              groupIndex={index}
            />
          ))}

        </div>

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-14 flex items-center gap-3"
        >

          <div className="h-px flex-1 bg-white/[0.07]" />

          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.28em]
              text-gray-600
            "
          >
            ALWAYS LEARNING
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />

        </motion.div>

      </div>
    </section>
  );
}
```
