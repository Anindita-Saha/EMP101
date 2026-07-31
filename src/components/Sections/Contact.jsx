import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiSend, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import SectionHeading from '../UI/SectionHeading'
import GlassCard from '../UI/GlassCard'
import { profile } from '../../data/profile'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="container-px py-24">
      <SectionHeading
        tab="06 — Contact"
        title="Let's build something"
        subtitle="Open to internships, junior roles, and interesting collaborations."
      />

      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="h-full flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <FiMapPin className="text-signal mt-1 shrink-0" />
              <div>
                <p className="text-xs font-mono text-muted-light dark:text-muted-dark">Location</p>
                <p className="text-sm mt-0.5">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiMail className="text-signal mt-1 shrink-0" />
              <div>
                <p className="text-xs font-mono text-muted-light dark:text-muted-dark">Email</p>
                <a href={`mailto:${profile.email}`} className="text-sm mt-0.5 hover:text-signal block">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiPhone className="text-signal mt-1 shrink-0" />
              <div>
                <p className="text-xs font-mono text-muted-light dark:text-muted-dark">Phone</p>
                <a href={`tel:${profile.phone}`} className="text-sm mt-0.5 hover:text-signal block">
                  {profile.phone}
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs font-mono text-muted-light dark:text-muted-dark">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1.5 w-full bg-transparent border-b border-black/15 dark:border-white/20 py-2 text-sm focus:border-signal outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono text-muted-light dark:text-muted-dark">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1.5 w-full bg-transparent border-b border-black/15 dark:border-white/20 py-2 text-sm focus:border-signal outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-mono text-muted-light dark:text-muted-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1.5 w-full bg-transparent border-b border-black/15 dark:border-white/20 py-2 text-sm focus:border-signal outline-none transition-colors resize-none"
                  placeholder="What are you building?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                data-cursor-hover
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-signal text-white text-sm font-medium hover:bg-signal-dim transition-colors disabled:opacity-60"
              >
                <FiSend size={15} />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'sent' && (
                <p className="text-sm text-data">Thanks — your message is on its way.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-signal">
                  Message wasn't sent. Add your EmailJS keys in <code>.env</code>, or email me
                  directly at {profile.email}.
                </p>
              )}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
