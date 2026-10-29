'use client'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { profile, stats } from '@/lib/data'
import { asset } from '@/lib/asset'

export default function Hero() {
  const [text] = useTypewriter({ words: profile.typewriter, loop: true, delaySpeed: 2000 })
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center text-center overflow-hidden px-4 py-16">
      <BackgroundCircles />
      <div className="relative z-10 flex flex-col items-center gap-6">
        {profile.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(profile.photo)} alt={profile.name} className="rounded-full h-32 w-32 object-cover ring-2 ring-pink" />
        ) : (
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-pink to-plum flex items-center justify-center font-serif text-4xl font-bold text-white ring-4 ring-petal">
            {profile.initials}
          </div>
        )}
        <h2 className="text-xs md:text-sm uppercase text-blush/70 tracking-[0.4em]">{profile.title}</h2>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-nude min-h-[2.5em] sm:min-h-[1.3em] max-w-4xl">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#D4447E" />
        </h1>
        <p className="text-nude/60 max-w-xl text-sm md:text-base">{profile.org}</p>
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <a href="#about" className="heroButton">About</a>
          <a href="#ai-plain-words" className="heroButton">AI in plain words</a>
          <a href="#projects" className="heroButton">Projects</a>
          <a href={asset(profile.cv)} download className="heroButton border-pink text-pink">Download CV</a>
        </div>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 w-full max-w-4xl">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/90 backdrop-blur rounded-xl p-4 border border-pink/20 shadow-sm shadow-pink/10">
              <dt className="font-serif text-3xl font-bold text-pink">{s.value}</dt>
              <dd className="text-xs text-nude/70 mt-1 leading-snug">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
