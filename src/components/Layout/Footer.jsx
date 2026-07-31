import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-24">
      <div className="container-px py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg">
            Anindita<span className="text-signal">.</span>dev
          </p>
          <p className="text-xs text-muted-light dark:text-muted-dark mt-1 font-mono">
            © {year} {profile.name}. Built with React & Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            data-cursor-hover
            className="h-10 w-10 grid place-items-center rounded-full border border-black/10 dark:border-white/10 hover:border-signal hover:text-signal transition-colors"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            data-cursor-hover
            className="h-10 w-10 grid place-items-center rounded-full border border-black/10 dark:border-white/10 hover:border-signal hover:text-signal transition-colors"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            data-cursor-hover
            className="h-10 w-10 grid place-items-center rounded-full border border-black/10 dark:border-white/10 hover:border-signal hover:text-signal transition-colors"
          >
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
