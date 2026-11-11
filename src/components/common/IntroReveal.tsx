import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// A short branded intro that wipes up to reveal the page. Shows once per
// session; skipped entirely for reduced-motion. Click to dismiss early.
function IntroReveal() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    try {
      return !sessionStorage.getItem('iv-intro')
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!show) return
    try {
      sessionStorage.setItem('iv-intro', '1')
    } catch {
      // storage blocked — the intro just won't be remembered
    }
    const t = setTimeout(() => setShow(false), 1400)
    return () => clearTimeout(t)
  }, [show])

  // lock scroll while the intro is up
  useEffect(() => {
    if (!show) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          onClick={() => setShow(false)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-mono text-2xl font-medium tracking-widest text-bone"
          >
            IV<span className="text-accent">.</span>
          </motion.div>
          <div className="mt-5 h-px w-40 overflow-hidden bg-line2">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroReveal
