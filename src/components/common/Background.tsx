import { useEffect, useRef } from 'react'

// Interactive dot grid on <canvas>: a faint, evenly-spaced grid that reads as
// texture at rest; dots near the cursor light up (brighter, larger, amber) with
// a soft glow, like a light sweeping the field. Static grid for reduced motion;
// paused when the tab is hidden. Purely decorative.
function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0

    const SPACING = 42 // px between dots
    const RADIUS = 115 // cursor light radius (kept small so it stays subtle)
    const BASE_ALPHA = 0.055
    const dots: { x: number; y: number }[] = []

    const target = { x: -9999, y: -9999 }
    const cur = { x: -9999, y: -9999 }
    let active = false

    const build = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      dots.length = 0
      const cols = Math.ceil(width / SPACING)
      const rows = Math.ceil(height / SPACING)
      const offsetX = (width - (cols - 1) * SPACING) / 2
      const offsetY = (height - (rows - 1) * SPACING) / 2
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: offsetX + c * SPACING, y: offsetY + r * SPACING })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // soft amber glow under the cursor
      if (active) {
        const g = ctx.createRadialGradient(cur.x, cur.y, 0, cur.x, cur.y, RADIUS)
        g.addColorStop(0, 'rgba(224,164,59,0.05)')
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, width, height)
      }

      for (const d of dots) {
        let alpha = BASE_ALPHA
        let radius = 0.7
        let amber = 0 // 0 = bone, 1 = amber

        if (active) {
          const dist = Math.hypot(d.x - cur.x, d.y - cur.y)
          if (dist < RADIUS) {
            const tt = 1 - dist / RADIUS // 0..1 (1 = closest)
            alpha = BASE_ALPHA + tt * (0.85 - BASE_ALPHA)
            radius = 0.7 + tt * 0.8
            amber = tt
          }
        }

        // lerp bone -> amber by proximity
        const rC = Math.round(242 + (224 - 242) * amber)
        const gC = Math.round(242 + (164 - 242) * amber)
        const bC = Math.round(239 + (59 - 239) * amber)

        ctx.beginPath()
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rC},${gC},${bC},${alpha.toFixed(3)})`
        ctx.fill()
      }
    }

    let raf = 0
    const loop = () => {
      // ease the lit point toward the cursor for a smooth sweep
      cur.x += (target.x - cur.x) * 0.18
      cur.y += (target.y - cur.y) * 0.18
      draw()
      raf = requestAnimationFrame(loop)
    }

    build()
    if (reduce) draw()
    else raf = requestAnimationFrame(loop)

    const onResize = () => {
      build()
      if (reduce) draw()
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      target.x = e.clientX
      target.y = e.clientY
      if (!active) {
        // jump (don't sweep in from off-screen) on first activation
        cur.x = e.clientX
        cur.y = e.clientY
        active = true
      }
      if (reduce) draw()
    }
    const onLeave = () => {
      active = false
      if (reduce) draw()
    }
    const onVisibility = () => {
      if (reduce) return
      if (document.hidden) {
        cancelAnimationFrame(raf)
        raf = 0
      } else if (!raf) {
        raf = requestAnimationFrame(loop)
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* fade toward the bottom so the grid never competes with content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(10,10,11,0.45) 76%, #0a0a0b)',
        }}
      />
    </div>
  )
}

export default Background
