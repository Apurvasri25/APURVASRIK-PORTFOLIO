
import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Trophy,
  Code2,
  Medal,
  CalendarDays,
} from 'lucide-react';

/* =========================================
   EDUCATION
========================================= */

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

/* =========================================
   CERTIFICATIONS
========================================= */

const certifications = [
  'NPTEL — Computer Networks and Internet Protocol',
  'NPTEL — Cloud Computing',
  'NPTEL — Programming in Java',
  'NPTEL — The Joy of Computing using Python',
  'ServiceNow — Virtual Internship Completion',
  'HackerRank — Frontend Developer (React)',
];

/* =========================================
   ACHIEVEMENTS
========================================= */

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

/* =========================================
   HACKATHONS / ACTIVITIES
========================================= */

const activities = [
  'Women Who Master Hackathon — Logitech & Aspire For Her',
  'TenzorX National AI Hackathon 2026 — Poonawalla Fincorp',
  'Thooral Hackathon — PSG College of Technology',
  'Technical Paper Presentation — GCT, Coimbatore',
  'Technical Paper Presentation — Bannari Amman Institute of Technology',
];

/* =========================================
   SECTION LABEL
========================================= */

function SectionLabel({ icon: Icon, children }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/[0.06]">
        <Icon className="h-4 w-4 text-purple-400" />
      </div>

      <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-purple-400">
        {children}
      </span>

      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

/* =========================================
   EDUCATION CARD
========================================= */

function EducationCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-6
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-purple-400/30
        hover:bg-purple-500/[0.025]
        hover:shadow-[0_0_35px_rgba(168,85,247,0.08)]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-purple-500/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-purple-500/10
        "
      />

      <div className="relative z-10">

        {/* Top */}
        <div className="mb-6 flex items-start justify-between gap-4">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.06]">
              <GraduationCap className="h-5 w-5 text-purple-400" />
            </div>

            <span className="font-mono text-[9px] tracking-[0.18em] text-gray-500">
              {item.duration}
            </span>
          </div>

          <CalendarDays className="h-4 w-4 text-gray-600" />
        </div>

        {/* Degree */}
        <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
          {item.degree}
        </h3>

        {/* Institution */}
        <p className="mt-2 text-sm font-medium text-gray-400">
          {item.institution}
        </p>

        {/* Bottom */}
        <div className="mt-7 flex items-end justify-between border-t border-white/[0.06] pt-5">

          <div>
            <p className="font-mono text-[8px] tracking-[0.2em] text-gray-600">
              {item.scoreLabel}
            </p>

            <p className="mt-1 text-2xl font-extrabold text-purple-300">
              {item.score}
            </p>
          </div>

          <p className="text-right text-[10px] text-gray-600">
            {item.location}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

/* =========================================
   CERTIFICATION ITEM
========================================= */

function CertificationItem({ text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.04,
      }}
      className="
        group
        flex
        items-center
        gap-3
        rounded-lg
        border
        border-white/[0.06]
        bg-white/[0.02]
        px-4
        py-3
        transition-all
        duration-300
        hover:border-purple-400/20
        hover:bg-purple-500/[0.03]
      "
    >
      <Award className="h-3.5 w-3.5 shrink-0 text-purple-400" />

      <span className="text-xs leading-5 text-gray-400 transition-colors group-hover:text-gray-200">
        {text}
      </span>
    </motion.div>
  );
}

/* =========================================
   ACHIEVEMENT ITEM
========================================= */

function AchievementItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
      className="
        group
        rounded-xl
        border
        border-white/[0.06]
        bg-white/[0.02]
        p-4
        transition-all
        duration-300
        hover:border-purple-400/20
        hover:bg-purple-500/[0.03]
      "
    >
      <div className="flex items-start gap-3">

        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-500/[0.07]">
          <Trophy className="h-3.5 w-3.5 text-purple-400" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-200">
            {item.title}
          </h4>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            {item.description}
          </p>

          {item.detail && (
            <p className="mt-2 font-mono text-[9px] tracking-wider text-purple-400/70">
              {item.detail}
            </p>
          )}
        </div>

      </div>
    </motion.div>
  );
}

/* =========================================
   MAIN
========================================= */

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

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.04]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =====================================
            MAIN HEADER
        ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-500" />

            <span className="font-mono text-[10px] tracking-[0.28em] text-purple-400">
              MY JOURNEY
            </span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Education
            <span className="text-purple-500">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Academic background and achievements built throughout my
            computer science journey.
          </p>
        </motion.div>

        {/* =====================================
            EDUCATION — SEPARATE DESIGN
        ===================================== */}

        <div className="mb-20">

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

        {/* =====================================
            HIGHLIGHTS HEADER
        ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-500" />

            <span className="font-mono text-[10px] tracking-[0.28em] text-purple-400">
              BEYOND CODE
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Highlights
            <span className="text-purple-500">.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Certifications, achievements and activities that complement
            my technical skills.
          </p>
        </motion.div>

        {/* =====================================
            CERTIFICATIONS
        ===================================== */}

        <div className="mb-12">

          <SectionLabel icon={Award}>
            CERTIFICATIONS
          </SectionLabel>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <CertificationItem
                key={cert}
                text={cert}
                index={index}
              />
            ))}
          </div>

        </div>

        {/* =====================================
            ACHIEVEMENTS
        ===================================== */}

        <div className="mb-12">

          <SectionLabel icon={Trophy}>
            ACHIEVEMENTS & POSITIONS
          </SectionLabel>

          <div className="grid gap-3 md:grid-cols-2">
            {achievements.map((item, index) => (
              <AchievementItem
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>

        </div>

        {/* =====================================
            HACKATHONS & ACTIVITIES
        ===================================== */}

        <div>

          <SectionLabel icon={Code2}>
            HACKATHONS & ACTIVITIES
          </SectionLabel>

          <div className="grid gap-2 md:grid-cols-2">
            {activities.map((activity, index) => (
              <motion.div
                key={activity}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                className="
                  group
                  flex
                  items-start
                  gap-3
                  rounded-lg
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  px-4
                  py-3
                  transition-all
                  duration-300
                  hover:border-purple-400/20
                  hover:bg-purple-500/[0.03]
                "
              >
                <Medal className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-400" />

                <span className="text-xs leading-5 text-gray-400 group-hover:text-gray-200">
                  {activity}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* =====================================
            BOTTOM
        ===================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex items-center gap-3"
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
