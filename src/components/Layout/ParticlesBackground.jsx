import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../../context/ThemeContext'

export default function ParticlesBackground() {
  const { theme } = useTheme()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const particleColor = theme === 'dark' ? '#FF5A36' : '#C7431F'

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 36, density: { enable: true, area: 900 } },
          color: { value: particleColor },
          opacity: { value: 0.25 },
          size: { value: { min: 1, max: 2.4 } },
          links: {
            enable: true,
            color: particleColor,
            opacity: 0.12,
            distance: 130,
          },
          move: {
            enable: true,
            speed: 0.35,
            direction: 'none',
            outModes: { default: 'out' },
          },
        },
        interactivity: {
          events: { onHover: { enable: false }, resize: true },
        },
      }}
    />
  )
}
