import { useEffect, useRef } from 'react'

// Generative flow field on <canvas>: particles drift along smooth invisible
// currents leaving soft fading trails, and curve/orbit around the cursor.
// Artistic but technical. Static scatter for reduced motion; paused when the
// tab is hidden. Purely decorative.
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

    type P = { x: number; y: number; px: number; py: number; speed: number; amber: boolean }
    let particles: P[] = []

    const mouse = { x: -9999, y: -9999, active: false }
    const CURSOR_R = 130 // radius of cursor influence

    // Smooth, mostly-directional flow: a gentle upward base drift with soft
    // waviness, so particles form clean streams rather than chaotic curls.
    const fieldAngle = (x: number, y: number, t: number) =>
      -Math.PI / 2 +
      (Math.cos(x * 0.001 + t * 0.00008) + Math.sin(y * 0.001 - t * 0.00006)) *
        0.5

    const spawn = (): P => {
      const x = Math.random() * width
      const y = Math.random() * height
      return {
        x,
        y,
        px: x,
        py: y,
        speed: Math.random() * 0.35 + 0.25,
        amber: Math.random() < 0.14,
      }
    }

    const build = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // canvas stays transparent so the ambient orbs behind it show through

      const count = Math.min(95, Math.round((width * height) / 18000))
      particles = Array.from({ length: count }, spawn)
    }

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = p.amber ? 'rgba(224,164,59,0.5)' : 'rgba(242,242,239,0.45)'
        ctx.fill()
      }
    }

    const step = (t: number) => {
      // fade previous trails by erasing alpha (keeps the canvas transparent so
      // the ambient orbs behind show through). Higher alpha = shorter trails.
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0,0,0,0.14)'
      ctx.fillRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'source-over'

      for (const p of particles) {
        const angle = fieldAngle(p.x, p.y, t)
        let vx = Math.cos(angle) * p.speed
        let vy = Math.sin(angle) * p.speed

        // cursor: particles stream tangentially around it (a gentle orbit)
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < CURSOR_R && dist > 0.001) {
            const f = (1 - dist / CURSOR_R) * 0.7
            vx += (-dy / dist) * f
            vy += (dx / dist) * f
          }
        }

        p.px = p.x
        p.py = p.y
        p.x += vx
        p.y += vy

        // respawn when it drifts off-screen
        if (p.x < -5 || p.x > width + 5 || p.y < -5 || p.y > height + 5) {
          Object.assign(p, spawn())
          continue
        }

        ctx.beginPath()
        ctx.moveTo(p.px, p.py)
        ctx.lineTo(p.x, p.y)
        ctx.strokeStyle = p.amber
          ? 'rgba(224,164,59,0.55)'
          : 'rgba(242,242,239,0.4)'
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    let raf = 0
    const loop = (t: number) => {
      step(t)
      raf = requestAnimationFrame(loop)
    }

    build()
    if (reduce) drawStatic()
    else raf = requestAnimationFrame(loop)

    const onResize = () => {
      build()
      if (reduce) drawStatic()
    }
    const onMove = (e: PointerEvent) => {
      if (reduce || e.pointerType === 'touch') return
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
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
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Big ambient orbs fill the empty space with soft depth */}
      <div
        className="orb absolute rounded-full"
        style={{
          top: '-18%',
          right: '-12%',
          width: '52vw',
          height: '52vw',
          background:
            'radial-gradient(circle, rgba(224,164,59,0.13), transparent 68%)',
          animation: 'orbDriftA 26s ease-in-out infinite alternate',
        }}
      />
      <div
        className="orb absolute rounded-full"
        style={{
          bottom: '-22%',
          left: '-14%',
          width: '58vw',
          height: '58vw',
          background:
            'radial-gradient(circle, rgba(242,242,239,0.07), transparent 70%)',
          animation: 'orbDriftB 34s ease-in-out infinite alternate',
        }}
      />
      <div
        className="orb absolute rounded-full"
        style={{
          top: '28%',
          left: '38%',
          width: '40vw',
          height: '40vw',
          background:
            'radial-gradient(circle, rgba(224,164,59,0.06), transparent 70%)',
          animation: 'orbDriftA 40s ease-in-out infinite alternate',
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* fade toward the bottom so the flow never competes with content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(10,10,11,0.55) 72%, #0a0a0b)',
        }}
      />
    </div>
  )
}

export default Background
