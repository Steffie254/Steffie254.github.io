'use client'
import { motion } from 'framer-motion'
import { EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import { profile, sections } from '@/lib/data'
import { asset } from '@/lib/asset'
import { GitHubIcon } from './Icons'

const links = [
  ['About', '#about'],
  ['AI 101', '#ai-plain-words'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-ink/80 border-b border-pink/15">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
        <motion.a
          href="#hero"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-lg font-bold text-blush whitespace-nowrap"
        >
          {profile.name}
        </motion.a>
        <nav className="hidden md:flex gap-6 text-sm text-nude/70">
          {[...links.slice(0, 2), ...(sections.experience ? [['Experience', '#experience']] : []), ...links.slice(2)].map(([label, href]) => (
            <a key={href} href={href} className="hover:text-pink transition-colors">{label}</a>
          ))}
        </nav>
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-nude/70"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-pink"><GitHubIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-pink"><EnvelopeIcon className="h-5 w-5" /></a>
          <a href={asset(profile.cv)} download className="hidden sm:flex items-center gap-1 text-xs uppercase tracking-widest border border-pink/60 text-pink rounded-full px-3 py-1 hover:bg-pink hover:text-white transition-colors">
            <DocumentArrowDownIcon className="h-4 w-4" /> CV
          </a>
        </motion.div>
      </div>
    </header>
  )
}
