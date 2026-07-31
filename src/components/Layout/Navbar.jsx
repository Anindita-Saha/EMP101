import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const links = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(links.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTo(id) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm shadow-black/5' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 sm:h-20">
        <button
          onClick={() => goTo('home')}
          className="font-display text-lg sm:text-xl font-semibold tracking-tight"
          data-cursor-hover
        >
          Anindita<span className="text-signal">.</span>dev
        </button>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-xs">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                data-cursor-hover
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeId === link.id
                    ? 'text-signal'
                    : 'text-muted-light dark:text-muted-dark hover:text-ink dark:hover:text-paper'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            data-cursor-hover
            className="h-9 w-9 grid place-items-center rounded-full border border-black/10 dark:border-white/10 hover:border-signal transition-colors"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden h-9 w-9 grid place-items-center rounded-full border border-black/10 dark:border-white/10"
          >
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass overflow-hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4 font-mono text-sm">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goTo(link.id)}
                    className={`w-full text-left px-2 py-2 rounded-md ${
                      activeId === link.id ? 'text-signal' : ''
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
