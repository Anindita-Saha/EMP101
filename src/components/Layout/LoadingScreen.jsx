import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night text-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="font-mono text-sm text-data mb-4">$ booting portfolio.exe</div>
          <div className="flex items-baseline gap-1 font-display text-4xl sm:text-6xl">
            <span>Anindita</span>
            <span className="text-signal">.</span>
            <motion.span
              className="inline-block w-[3px] h-9 sm:h-12 bg-signal ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </div>
          <motion.div
            className="mt-8 h-[2px] w-48 bg-white/10 overflow-hidden rounded-full"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-signal to-data"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
