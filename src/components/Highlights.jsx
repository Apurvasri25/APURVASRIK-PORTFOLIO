import React from 'react';
import { motion } from 'framer-motion';

import {
  GraduationCap,
  Award,
  Trophy,
  Code2,
  Medal,
  CalendarDays,
  Sparkles,
} from 'lucide-react';

/* =========================================================
   DATA
========================================================= */

const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'V.S.B College of Engineering Technical Campus',
    score: '8.39',
    scoreLabel: 'CGPA',
    duration: '2023 — 2027',
    location: 'Coimbatore, Tamil Nadu',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Adharsh Vidhyala Matric Hr. Sec. School',
    score: '72.83%',
    scoreLabel: 'PERCENTAGE',
    duration: '2022 — 2023',
    location: 'Erode, Tamil Nadu',
  },
];

const certifications = [
  'NPTEL — Computer Networks and Internet Protocol',
  'NPTEL — Cloud Computing',
  'NPTEL — Programming in Java',
  'NPTEL — The Joy of Computing using Python',
  'ServiceNow — Virtual Internship Completion',
  'HackerRank — Frontend Developer (React)',
];

const achievements = [
  {
    title: 'HybrionX Patent',
    description:
      'Published patent — Hybrid Energy Switching E-Vehicle',
    detail: 'Patent No. 202541016688 A',
  },
  {
    title: 'Technical Symposium Coordinator',
    description:
      'Student Coordinator, Department Technical Symposium',
  },
  {
    title: 'Letter of Recommendation',
    description:
      'Received Letter of Recommendation from Prodigy Infotech',
  },
  {
    title: 'NSS Member',
    description:
      'Member of National Service Scheme at V.S.B College',
  },
];

const activities = [
  'Women Who Master Hackathon — Logitech & Aspire For Her',
  'TenzorX National AI Hackathon 2026 — Poonawalla Fincorp',
  'Thooral Hackathon — PSG College of Technology',
  'Technical Paper Presentation — GCT, Coimbatore',
  'Technical Paper Presentation — Bannari Amman Institute of Technology',
];

/* =========================================================
   SMALL SECTION LABEL
========================================================= */

function SectionLabel({ icon: Icon, children }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.07]">
        <Icon className="h-4 w-4 text-purple-400" />
      </div>

      <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-purple-400">
        {children}
      </span>

      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

/* =========================================================
   EDUCATION CARD
========================================================= */

function EducationCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-gradient-to-br
        from-white/[0.045]
        to-white/[0.015]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-purple-400/30
        hover:shadow-[0_20px_60px_rgba(168,85,247,0.10)]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-purple-500/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-purple-500/10
        "
      />

      <div className="relative z-10">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-purple-400/20
                bg-purple-500/[0.08]
              "
            >
              <GraduationCap className="h-5 w-5 text-purple-400" />
            </div>

            <div>
              <p className="font-mono text-[8px] tracking-[0.2em] text-purple-400/70">
                ACADEMIC
              </p>

              <p className="mt-1 font-mono text-[9px] tracking-wider text-gray-500">
                {item.duration}
              </p>
            </div>

          </div>

          <CalendarDays className="h-4 w-4 text-gray-700" />

        </div>

        {/* DEGREE */}
        <h3
          className="
            mt-7
            text-lg
            font-bold
            leading-snug
            text-white
            sm:text-xl
          "
        >
          {item.degree}
        </h3>

        {/* INSTITUTION */}
        <p className="mt-3 text-sm leading-6 text-gray-400">
          {item.institution}
        </p>

        {/* BOTTOM */}
        <div
          className="
            mt-7
            flex
            items-end
            justify-between
            border-t
            border-white/[0.07]
            pt-5
          "
        >

          <div>
            <p className="font-mono text-[8px] tracking-[0.2em] text-gray-600">
              {item.scoreLabel}
            </p>

            <p className="mt-1 text-2xl font-black text-purple-300">
              {item.score}
            </p>
          </div>

          <div className="text-right">
            <p className="font-mono text-[8px] tracking-[0.15em] text-gray-600">
              LOCATION
            </p>

            <p className="mt-1 text-[10px] text-gray-500">
              {item.location}
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

/* =========================================================
   CERTIFICATION CARD
========================================================= */

function CertificationCard({ text, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
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
        duration: 0.35,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-4
        transition-all
        duration-300
        hover:border-purple-400/25
        hover:bg-purple-500/[0.04]
      "
    >

      <div
        className="
          absolute
          -right-8
          -top-8
          h-20
          w-20
          rounded-full
          bg-purple-500/0
          blur-2xl
          transition-all
          duration-500
          group-hover:bg-purple-500/10
        "
      />

      <div className="relative z-10 flex items-start gap-3">

        <div
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-purple-400/15
            bg-purple-500/[0.07]
          "
        >
          <Award className="h-3.5 w-3.5 text-purple-400" />
        </div>

        <span
          className="
            pt-1
            text-xs
            leading-5
            text-gray-400
            transition-colors
            group-hover:text-gray-200
          "
        >
          {text}
        </span>

      </div>

    </motion.div>
  );
}

/* =========================================================
   ACHIEVEMENT CARD
========================================================= */

function AchievementCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
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
        duration: 0.4,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-gradient-to-br
        from-white/[0.035]
        to-white/[0.015]
        p-5
        transition-all
        duration-300
        hover:border-purple-400/25
        hover:shadow-[0_15px_45px_rgba(168,85,247,0.08)]
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          -bottom-10
          -right-10
          h-28
          w-28
          rounded-full
          bg-purple-500/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-purple-500/10
        "
      />

      <div className="relative z-10 flex items-start gap-4">

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-purple-400/15
            bg-purple-500/[0.07]
          "
        >
          <Trophy className="h-4 w-4 text-purple-400" />
        </div>

        <div>

          <h4 className="text-sm font-bold text-gray-200">
            {item.title}
          </h4>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            {item.description}
          </p>

          {item.detail && (
            <div className="mt-3 inline-flex rounded-md border border-purple-400/10 bg-purple-500/[0.05] px-2 py-1">
              <span className="font-mono text-[8px] tracking-wider text-purple-400/80">
                {item.detail}
              </span>
            </div>
          )}

        </div>

      </div>

    </motion.div>
  );
}

/* =========================================================
   ACTIVITY CARD
========================================================= */

function ActivityCard({ activity, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      whileHover={{
        x: 4,
      }}
      className="
        group
        flex
        items-start
        gap-3
        rounded-xl
        border
        border-white/[0.06]
        bg-white/[0.02]
        px-4
        py-4
        transition-all
        duration-300
        hover:border-purple-400/20
        hover:bg-purple-500/[0.035]
      "
    >

      <Medal className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />

      <span className="text-xs leading-5 text-gray-400 transition-colors group-hover:text-gray-200">
        {activity}
      </span>

    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-20
        sm:px-8
        lg:px-16
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          h-[300px]
          w-[300px]
          rounded-full
          bg-purple-600/[0.025]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =================================================
            MAIN TITLE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mb-12"
        >

          <div className="mb-3 flex items-center gap-3">

            <span className="h-px w-8 bg-purple-500" />

            <span className="font-mono text-[10px] tracking-[0.28em] text-purple-400">
              MY JOURNEY
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
            Education
            <span className="text-purple-500">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Academic background, learning milestones and experiences
            that shaped my journey in computer science.
          </p>

        </motion.div>

        {/* =================================================
            EDUCATION
        ================================================= */}

        <div className="mb-24">

          <SectionLabel icon={GraduationCap}>
            EDUCATION
          </SectionLabel>

          <div className="grid gap-5 md:grid-cols-2">

            {education.map((item, index) => (
              <EducationCard
                key={item.institution}
                item={item}
                index={index}
              />
            ))}

          </div>

        </div>

        {/* =================================================
            HIGHLIGHTS TITLE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mb-12"
        >

          <div className="mb-3 flex items-center gap-3">

            <span className="h-px w-8 bg-purple-500" />

            <span className="font-mono text-[10px] tracking-[0.28em] text-purple-400">
              BEYOND CODE
            </span>

          </div>

          <div className="flex items-center gap-3">

            <h2
              className="
                text-5xl
                font-extrabold
                tracking-tight
                text-white
                sm:text-6xl
              "
            >
              Highlights
              <span className="text-purple-500">.</span>
            </h2>

            <Sparkles className="mt-2 h-6 w-6 text-purple-400 opacity-70" />

          </div>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Certifications, achievements, hackathons and activities
            beyond my core technical skills.
          </p>

        </motion.div>

        {/* =================================================
            CERTIFICATIONS
        ================================================= */}

        <div className="mb-16">

          <SectionLabel icon={Award}>
            CERTIFICATIONS
          </SectionLabel>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert}
                text={cert}
                index={index}
              />
            ))}

          </div>

        </div>

        {/* =================================================
            ACHIEVEMENTS
        ================================================= */}

        <div className="mb-16">

          <SectionLabel icon={Trophy}>
            ACHIEVEMENTS & POSITIONS
          </SectionLabel>

          <div className="grid gap-4 md:grid-cols-2">

            {achievements.map((item, index) => (
              <AchievementCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}

          </div>

        </div>

        {/* =================================================
            HACKATHONS
        ================================================= */}

        <div>

          <SectionLabel icon={Code2}>
            HACKATHONS & ACTIVITIES
          </SectionLabel>

          <div className="grid gap-3 md:grid-cols-2">

            {activities.map((activity, index) => (
              <ActivityCard
                key={activity}
                activity={activity}
                index={index}
              />
            ))}

          </div>

        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

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
          className="mt-16 flex items-center gap-3"
        >

          <div className="h-px flex-1 bg-white/[0.07]" />

          <span className="font-mono text-[9px] tracking-[0.28em] text-gray-600">
            KEEP LEARNING • KEEP BUILDING
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />

        </motion.div>

      </div>
    </section>
  );
}
