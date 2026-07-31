import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiGithub, FiStar, FiGitBranch, FiBookOpen } from 'react-icons/fi'
import SectionHeading from '../UI/SectionHeading'
import GlassCard from '../UI/GlassCard'
import { experience, profile } from '../../data/profile'
import { fetchGithubProfile, fetchGithubRepos } from '../../utils/github'

function GithubStats() {
  const [stats, setStats] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [ghProfile, repos] = await Promise.all([
          fetchGithubProfile(profile.githubUsername),
          fetchGithubRepos(profile.githubUsername, 100),
        ])
        if (cancelled) return
        const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
        setStats({
          repos: ghProfile.public_repos,
          followers: ghProfile.followers,
          stars: totalStars,
        })
        setStatus('ready')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const items = [
    { icon: FiBookOpen, label: 'Public Repos', value: stats?.repos },
    { icon: FiStar, label: 'Total Stars', value: stats?.stars },
    { icon: FiGitBranch, label: 'Followers', value: stats?.followers },
  ]

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-mono text-xs text-data">live from github</h3>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="inline-flex items-center gap-1.5 text-xs hover:text-signal"
        >
          <FiGithub size={14} /> @{profile.githubUsername}
        </a>
      </div>

      {status === 'error' ? (
        <p className="text-sm text-muted-light dark:text-muted-dark">
          Couldn't reach the GitHub API right now — check the profile directly.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto text-signal mb-2" size={18} />
              <p className="font-display text-2xl font-semibold">
                {status === 'loading' ? '—' : value}
              </p>
              <p className="text-[11px] text-muted-light dark:text-muted-dark mt-1">{label}</p>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="container-px py-24">
      <SectionHeading
        tab="05 — Experience"
        title="Experience & activity"
        subtitle="Where I've spent my time outside of coursework."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {experience.map((item) => (
            <GlassCard key={item.title + item.organization}>
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 shrink-0 rounded-full glass grid place-items-center text-signal">
                  <FiUsers size={16} />
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    {item.period && (
                      <span className="text-[11px] font-mono text-muted-light dark:text-muted-dark">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-data font-mono">{item.organization}</p>
                  {item.description && (
                    <p className="text-sm text-muted-light dark:text-muted-dark mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GithubStats />
        </motion.div>
      </div>
    </section>
  )
}
