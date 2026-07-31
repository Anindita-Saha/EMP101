import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../../data/profile'
import ParticlesBackground from '../Layout/ParticlesBackground'

export default function Hero() {
  const typedEl = useRef(null)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: profile.roles,
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1400,
      loop: true,
      smartBackspace: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <ParticlesBackground />

      <div className="container-px w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Text side */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-data mb-4"
          >
            $ whoami — {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-mono text-lg sm:text-2xl text-signal min-h-[2em]"
          >
            <span ref={typedEl} />
            <span className="animate-blink text-signal">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-muted-light dark:text-muted-dark"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumeUrl}
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-signal text-white text-sm font-medium hover:bg-signal-dim transition-colors"
            >
              <FiDownload size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              data-cursor-hover
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 dark:border-white/15 text-sm font-medium hover:border-signal hover:text-signal transition-colors"
            >
              Let's talk
            </a>

            <div className="flex items-center gap-3 ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                data-cursor-hover
                className="h-11 w-11 grid place-items-center rounded-full border border-black/10 dark:border-white/15 hover:border-signal hover:text-signal transition-colors"
              >
                <FiGithub size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                data-cursor-hover
                className="h-11 w-11 grid place-items-center rounded-full border border-black/10 dark:border-white/15 hover:border-signal hover:text-signal transition-colors"
              >
                <FiLinkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Code editor / photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-floaty">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-black/5 dark:border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-data/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-light/40" />
                <span className="ml-3 font-mono text-[11px] text-muted-light dark:text-muted-dark">
                  profile.jsx
                </span>
              </div>

              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden border-2 border-signal/40 bg-surfaceLight dark:bg-surface grid place-items-center">
                  {!imgError ? (
                    <img
                      src={profile.photoUrl}
                      alt={profile.name}
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-5xl text-signal">Z</span>
                  )}
                </div>
                <p className="mt-5 font-mono text-xs text-muted-light dark:text-muted-dark">
                  export default function Engineer() {'{'}
                </p>
                <p className="font-mono text-xs text-muted-light dark:text-muted-dark">
                  &nbsp;&nbsp;return <span className="text-signal">"{profile.name.split(' ')[0]}"</span>;
                </p>
                <p className="font-mono text-xs text-muted-light dark:text-muted-dark">{'}'}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-light dark:text-muted-dark hover:text-signal"
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  )
}
