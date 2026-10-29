'use client'
import { useState } from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { profile } from '@/lib/data'

export default function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  // No backend needed: the form opens the visitor's email app with the message filled in.
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Hello from your portfolio')}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
      <h3 className="sectionTitle">Contact</h3>
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h4 className="font-serif text-3xl md:text-4xl font-bold text-nude">
            Building AI for banking?{' '}
            <span className="underline decoration-pink/60 underline-offset-8">Let&apos;s talk</span>
          </h4>
          <div className="space-y-4 text-nude/85">
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 hover:text-pink">
              <PhoneIcon className="text-pink h-6 w-6" /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 hover:text-pink">
              <EnvelopeIcon className="text-pink h-6 w-6" /> {profile.email}
            </a>
            <p className="flex items-center gap-4">
              <MapPinIcon className="text-pink h-6 w-6" /> {profile.location}
            </p>
          </div>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-3 w-full">
          <div className="grid sm:grid-cols-2 gap-3">
            <input required placeholder="Name" aria-label="Name" className="contactInput" value={form.name} onChange={set('name')} />
            <input required type="email" placeholder="Email" aria-label="Email" className="contactInput" value={form.email} onChange={set('email')} />
          </div>
          <input placeholder="Subject" aria-label="Subject" className="contactInput" value={form.subject} onChange={set('subject')} />
          <textarea required rows={5} placeholder="Message" aria-label="Message" className="contactInput" value={form.message} onChange={set('message')} />
          <button className="bg-pink hover:bg-blush transition-colors py-4 px-10 rounded-md text-white font-bold text-base">Send message</button>
        </form>
      </div>
      <footer className="mt-24 pt-6 border-t border-plum/40 text-center text-xs text-nude/40">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js, Tailwind CSS and Framer Motion
      </footer>
    </div>
  )
}
