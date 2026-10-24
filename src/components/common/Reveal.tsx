import type { ReactNode } from 'react'
import { motion } from 'motion/react'

// Fades + lifts its children into view once, when scrolled near.
// Reused across every section so the reveal feels consistent.
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' as const, delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
