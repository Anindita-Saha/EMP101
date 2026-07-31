import { motion } from 'framer-motion'
import SectionHeading from '../UI/SectionHeading'
import GlassCard from '../UI/GlassCard'
import { skillGroups } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="container-px py-24">
      <SectionHeading
        tab="03 — Skills"
        title="Tools I work with"
        subtitle="Grouped by category, as listed on my CV."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
          >
            <GlassCard className="h-full">
              <h3 className="font-mono text-xs text-data mb-5">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-signal hover:text-signal transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
