import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

// Cycles through `items` with a vertical slide + fade. Shows the first item
// statically when the visitor prefers reduced motion.
function RotatingText({
  items,
  interval = 2200,
  className,
}: {
  items: string[]
  interval?: number
  className?: string
}) {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || items.length < 2) return
    const id = setInterval(() => setI((v) => (v + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval, reduce])

  if (reduce) return <span className={className}>{items[0]}</span>

  return (
    <span className="relative inline-grid align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '0.55em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-0.55em', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`col-start-1 row-start-1 whitespace-nowrap ${className ?? ''}`}
        >
          {items[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RotatingText
