'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { projects, type Project } from '@/lib/data'

const filters = ['All', 'GenAI & Agents', 'Conversational AI', 'Computer Vision', 'Machine Learning', 'MLOps'] as const

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      layout
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
      className="flex flex-col bg-card rounded-xl p-6 border border-pink/15 shadow-sm shadow-pink/10 hover:border-pink/60 transition-colors"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] uppercase tracking-widest text-gold">{p.category}</span>
        <span className="text-[11px] text-nude/50 whitespace-nowrap">{p.domain} · {p.year}</span>
      </div>
      <h4 className="font-serif text-xl font-bold text-nude mt-2">{p.title}</h4>
      <p className="text-sm text-nude mt-3 leading-relaxed">
        <span className="font-semibold text-blush">In plain words: </span>{p.plain}
      </p>
      <div className="mt-3 rounded-lg bg-petal p-3 text-sm text-nude/90 leading-relaxed">
        <span className="block text-[11px] uppercase tracking-widest text-gold mb-1">Why it matters</span>
        {p.why}
      </div>
      {p.metrics && (
        <ul className="flex flex-wrap gap-2 mt-4">
          {p.metrics.map((m) => (
            <li key={m} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink/15 text-blush">{m}</li>
          ))}
        </ul>
      )}
      <div className="flex-1" />
      <details className="mt-4 text-sm text-nude/70 group">
        <summary className="cursor-pointer text-pink hover:text-blush list-none">
          <span className="group-open:hidden">Technical details +</span><span className="hidden group-open:inline">Technical details −</span>
        </summary>
        <p className="mt-2 leading-relaxed">{p.summary}</p>
        {p.note && <p className="mt-2 text-xs text-nude/50 italic">{p.note}</p>}
        <ul className="flex flex-wrap gap-1.5 mt-3">
          {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
        </ul>
      </details>
      {p.link && (
        <a href={p.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm text-pink hover:text-blush">
          View on GitHub <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      )}
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute top-[30%] left-0 w-full h-[500px] bg-pink/10 -skew-y-12 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="sectionTitle">Projects</h3>
        <p className="text-center text-nude/60 mt-3 max-w-2xl mx-auto text-sm">
          From production AI at a bank to research in materials science: generative AI and agents, conversational AI, computer vision, classic machine learning and MLOps.
        </p>
        <div role="tablist" className="flex flex-wrap justify-center gap-2 mt-8">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border transition-colors ${
                filter === f ? 'bg-pink border-pink text-white font-semibold' : 'border-plum text-nude/70 hover:border-pink hover:text-pink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => <Card key={p.title} p={p} i={i} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
