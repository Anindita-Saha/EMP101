import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import SectionHeading from '../UI/SectionHeading'
import GlassCard from '../UI/GlassCard'
import { profile } from '../../data/profile'

export default function About() {
  return (
    <section id="about" className="container-px py-24">
      <SectionHeading
        tab="01 — About"
        title="A little about me"
        subtitle="The short version, in plain text."
      />

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard>
            <p className="text-lg leading-relaxed">{profile.bio}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 font-mono text-sm">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-signal shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-signal shrink-0" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <FiMail className="text-signal shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-signal">
                  {profile.email}
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <GlassCard>
            <h3 className="font-mono text-xs text-data mb-4">languages</h3>
            <div className="space-y-3">
              {profile.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-sm">
                  <span>{lang.name}</span>
                  <span className="text-muted-light dark:text-muted-dark">{lang.level}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="font-mono text-xs text-data mb-4">currently</h3>
            <p className="text-sm leading-relaxed">
              B.Sc. in Software Engineering student at Daffodil International University,
              working as a freelance back-end developer alongside coursework.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
