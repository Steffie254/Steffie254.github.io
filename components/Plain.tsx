'use client'
import { motion } from 'framer-motion'
import { glossary, priorities } from '@/lib/data'

export default function Plain() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
      <h3 className="sectionTitle">AI in plain words</h3>
      <p className="text-center text-nude/60 mt-3 text-sm max-w-2xl mx-auto">
        New to AI? Six terms that come up on this page, explained with everyday examples.
      </p>
      <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {glossary.map((g, i) => (
          <motion.div
            key={g.term}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-card rounded-xl p-5 border border-pink/15 shadow-sm shadow-pink/10"
          >
            <dt className="font-serif text-lg font-bold text-pink">{g.term}</dt>
            <dd className="text-sm text-nude/80 mt-2 leading-relaxed">{g.text}</dd>
          </motion.div>
        ))}
      </dl>

      <h4 className="font-serif text-2xl md:text-3xl font-bold text-nude mt-20 text-center">
        Where my AI work applies
      </h4>
      <div className="mt-8 overflow-hidden rounded-xl border border-pink/15 shadow-sm shadow-pink/10">
        <div className="hidden md:grid grid-cols-[1fr_1.4fr_1.6fr] bg-pink text-xs uppercase tracking-widest text-white">
          <div className="p-4">Industry</div><div className="p-4">Projects</div><div className="p-4">What the AI does</div>
        </div>
        {priorities.map((r, i) => (
          <div key={r.area} className={`grid md:grid-cols-[1fr_1.4fr_1.6fr] text-sm ${i % 2 ? 'bg-card' : 'bg-petal/50'}`}>
            <div className="p-4 pb-1 md:pb-4 font-semibold text-blush">{r.area}</div>
            <div className="px-4 md:p-4 text-nude/85">{r.work}</div>
            <div className="p-4 pt-1 md:pt-4 text-nude/70">{r.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
