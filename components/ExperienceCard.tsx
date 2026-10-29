import type { Experience } from '@/lib/data'

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="flex flex-col rounded-xl flex-shrink-0 w-[85vw] sm:w-[480px] snap-center bg-card p-6 md:p-8 border border-pink/15 shadow-sm shadow-pink/10 opacity-80 hover:opacity-100 transition-opacity">
      <p className="text-xs uppercase tracking-widest text-gold">{item.dates}</p>
      <h4 className="font-serif text-2xl font-bold text-nude mt-2">{item.role}</h4>
      <p className="text-pink font-semibold mt-1">{item.org}</p>
      <ul className="list-disc space-y-2 ml-5 mt-5 text-sm text-nude/80 marker:text-pink">
        {item.points.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </article>
  )
}
