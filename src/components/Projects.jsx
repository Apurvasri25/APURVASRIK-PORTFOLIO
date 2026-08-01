import React from 'react';
import { motion } from 'framer-motion';
import Pattern3DCard from '@/components/ui/Pattern3DCard';

const FEATURED_PROJECTS = [
  {
    id: 1,
    number: '01',
    category: 'CV',
    title: 'Hand Gesture Recognition System',
    description: 'A real-time hand gesture recognition system built with computer vision to enable touchless user interaction. Integrated MediaPipe landmark tracking with OpenCV processing, improving gesture detection accuracy and boosting interaction responsiveness by 30%.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    githubUrl: 'https://github.com/Apurvasri25',
    boxBg: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    textColor: '#ffffff',
    accentBorder: '#60a5fa',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 bg-black dots-bg">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-4">
            Applying full-stack development and computer vision skills to build practical, real-world solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 max-w-xl mx-auto gap-10 lg:gap-12">
          {FEATURED_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <Pattern3DCard
                number={project.number}
                category={project.category}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                boxBg={project.boxBg}
                textColor={project.textColor}
                accentBorder={project.accentBorder}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
