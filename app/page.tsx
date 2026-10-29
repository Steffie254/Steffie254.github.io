import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Plain from '@/components/Plain'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { sections } from '@/lib/data'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="ai-plain-words"><Plain /></section>
        {sections.experience && <section id="experience"><Experience /></section>}
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><ContactMe /></section>
      </main>
    </div>
  )
}
