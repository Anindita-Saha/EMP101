import { motion } from 'framer-motion'

export default function SectionHeading({ tab, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12"
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs text-data mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-data" />
        {tab}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-muted-light dark:text-muted-dark">{subtitle}</p>
      )}
    </motion.div>
  )
}
