'use client'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="py-24"
    >
      <h3 className="sectionTitle">Work Experience</h3>
      <p className="text-center text-nude/50 text-sm mt-3">Scroll sideways →</p>
      <div className="rail w-full flex gap-5 overflow-x-auto px-4 md:px-[max(1.5rem,calc((100vw-72rem)/2))] py-10 snap-x snap-mandatory">
        {experience.map((e) => <ExperienceCard key={e.role + e.org} item={e} />)}
      </div>
    </motion.div>
  )
}
