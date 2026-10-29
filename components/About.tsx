'use client'
import { motion } from 'framer-motion'
import { profile, education, certifications, community } from '@/lib/data'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="max-w-6xl mx-auto px-4 md:px-6 py-24"
    >
      <h3 className="sectionTitle">About</h3>
      <div className="mt-12 grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <div className="space-y-5">
          <h4 className="font-serif text-3xl md:text-4xl font-bold text-nude">
            From AI strategy to <span className="underline decoration-pink/60 underline-offset-8">production code</span>
          </h4>
          {profile.about.map((p) => (
            <p key={p.slice(0, 20)} className="text-nude/80 leading-relaxed">{p}</p>
          ))}
        </div>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-xl p-5 border border-pink/15 shadow-sm shadow-pink/10">
            <p className="text-xs uppercase tracking-widest text-gold mb-3">Education</p>
            {education.map((e) => (
              <div key={e.degree} className="mb-3 last:mb-0">
                <p className="font-semibold text-nude">{e.degree}</p>
                <p className="text-sm text-nude/60">{e.school}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-xl p-5 border border-pink/15 shadow-sm shadow-pink/10">
            <p className="text-xs uppercase tracking-widest text-gold mb-3">Certifications</p>
            <ul className="space-y-2 text-sm text-nude/80">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2"><span className="text-pink">◆</span>{c}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-5 border border-pink/15 shadow-sm shadow-pink/10">
            <p className="text-xs uppercase tracking-widest text-gold mb-3">Teaching &amp; community</p>
            {community.map((c) => (
              <div key={c.role} className="mb-3 last:mb-0">
                <p className="font-semibold text-nude text-sm">{c.role}</p>
                <p className="text-sm text-nude/60">{c.org}{c.dates ? ` · ${c.dates}` : ''}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
