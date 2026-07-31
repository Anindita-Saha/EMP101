import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-2xl p-6 sm:p-7 flex flex-col h-full overflow-hidden"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-signal/10 blur-2xl group-hover:bg-signal/20 transition-colors" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] text-data mb-2">{project.tagline}</p>
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        </div>
        <FiArrowUpRight
          className="shrink-0 text-muted-light dark:text-muted-dark group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          size={20}
        />
      </div>

      <p className="mt-3 text-sm text-muted-light dark:text-muted-dark flex-1">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] px-2 py-1 rounded-full border border-black/10 dark:border-white/10 text-muted-light dark:text-muted-dark"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 pt-4 border-t border-black/5 dark:border-white/10">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-signal transition-colors"
          >
            <FiGithub size={14} /> Code
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-signal transition-colors"
          >
            <FiExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </motion.article>
  )
}
