import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from '../UI/SectionHeading'
import { education } from '../../data/profile'

export default function Education() {
  return (
    <section id="education" className="container-px py-24">
      <SectionHeading
        tab="02 — Education"
        title="Academic timeline"
        subtitle="Ordered chronologically — most recent first."
      />

      <div className="relative max-w-2xl">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-black/10 dark:via-white/10 to-transparent" />

        <div className="space-y-10">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12"
            >
              <span className="absolute left-0 top-0.5 h-8 w-8 rounded-full glass grid place-items-center text-signal">
                <FiBookOpen size={14} />
              </span>
              <p className="font-mono text-[11px] text-data">{item.period}</p>
              <h3 className="font-display text-lg font-semibold mt-1">{item.degree}</h3>
              <p className="text-sm text-muted-light dark:text-muted-dark mt-1">
                {item.institution} · {item.meta}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
