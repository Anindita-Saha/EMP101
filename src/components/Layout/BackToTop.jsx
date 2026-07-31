import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          data-cursor-hover
          className="fixed bottom-6 right-6 z-40 h-11 w-11 grid place-items-center rounded-full bg-signal text-white shadow-lg shadow-signal/30 hover:bg-signal-dim transition-colors"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
