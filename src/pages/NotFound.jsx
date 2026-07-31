import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center container-px">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm text-data mb-4"
      >
        $ curl {typeof window !== 'undefined' ? window.location.pathname : '/unknown'}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-7xl sm:text-9xl font-semibold text-signal"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-muted-light dark:text-muted-dark max-w-sm"
      >
        This route doesn't resolve to anything. Even the best build pipelines throw a 404 now
        and then.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-signal text-white text-sm font-medium hover:bg-signal-dim transition-colors"
        >
          <FiArrowLeft size={16} /> Back to home
        </Link>
      </motion.div>
    </section>
  )
}
