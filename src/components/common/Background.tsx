import { useEffect, useRef } from 'react'

// Fixed, behind-everything backdrop: a faint dot grid for texture plus a soft
// amber spotlight that follows the cursor. Pointer-only, and it stays still for
// visitors who prefer reduced motion. Purely decorative (aria-hidden).
function Background() {
  const spotlight = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = spotlight.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      el.style.setProperty('--mx', `${e.clientX}px`)
      el.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* dot grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(242,242,239,0.045) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      {/* fade the grid out toward the bottom so it never competes with content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(10,10,11,0.4) 60%, #0a0a0b)',
        }}
      />
      {/* cursor spotlight */}
      <div
        ref={spotlight}
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 25%), rgba(224,164,59,0.06), transparent 70%)',
        }}
      />
    </div>
  )
}

export default Background
