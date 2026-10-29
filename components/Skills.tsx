'use client'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
      <h3 className="sectionTitle">Skills</h3>
      <p className="text-center text-nude/60 mt-3 text-sm">What I work with day to day</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {skills.map((g, i) => (
          <motion.div
            key={g.group}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="bg-card rounded-xl p-5 border border-pink/15 shadow-sm shadow-pink/10"
          >
            <p className="font-serif text-lg font-bold text-pink">{g.group}</p>
            <ul className="flex flex-wrap gap-2 mt-3">
              {g.items.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
