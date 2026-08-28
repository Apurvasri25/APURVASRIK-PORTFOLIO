import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "PROGRAMMING",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
    ],
  },

  {
    title: "FRONTEND",
    skills: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },

  {
    title: "BACKEND",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    ],
  },

  {
    title: "DATABASE",
    skills: [
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },

  {
    title: "TOOLS",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      
    ],
  },
];
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
      }}
      whileHover={{ y: -4 }}
      className="
        group
        relative
        flex
        h-[115px]
        cursor-pointer
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-3
        transition-all
        duration-300
        hover:border-purple-400/40
        hover:bg-purple-500/[0.05]
        hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]
      "
    >
      {/* Logo */}
      <img
        src={skill.logo}
        alt={`${skill.name} logo`}
        className="
          relative
          z-10
          h-10
          w-10
          object-contain
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      {/* Name */}
      <span
        className="
          relative
          z-10
          mt-2
          text-xs
          font-medium
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
const SkillGroup = ({ group, groupIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: groupIndex * 0.08,
      }}
      className="relative"
    >
      {/* Category heading */}
      <div className="mb-6 flex items-center gap-4">
        <span className="h-[1px] w-8 bg-purple-500/80" />

        <h3 className="font-mono text-xs font-semibold tracking-[0.25em] text-purple-300">
          {group.title}
        </h3>

        <div className="h-[1px] flex-1 bg-white/[0.06]" />
      </div>

      {/* Logos */}
      <div
        className="
         grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5
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
        py-24
        sm:px-8
        lg:px-16
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.06]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[1px] w-10 bg-purple-500" />

            <span className="font-mono text-xs tracking-[0.3em] text-purple-400">
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

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Technologies and tools I use to build interactive,
            responsive and practical digital experiences.
          </p>
        </motion.div>

        {/* ================= SKILLS ================= */}

        <div className="space-y-14">
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/[0.07]" />

          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600">
            ALWAYS LEARNING
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />
        </motion.div>

      </div>
    </section>
  );
}
