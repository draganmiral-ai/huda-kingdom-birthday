import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

// A very light, performance-conscious gold sparkle field drawn on a canvas.
// - Only a few dozen particles.
// - Pauses when the tab is hidden.
// - Renders nothing at all when the user prefers reduced motion.
export default function Sparkles({ density = 46 }) {
  const reduced = useReducedMotion()
  const canvasRef = useRef(null)

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles = []
    let raf = 0
    let running = true

    const colors = ['#F2D890', '#D7AE57', '#F8F1E7']

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(18, Math.round((width * density) / 1440))
      particles = new Array(count).fill(0).map(makeParticle)
    }

    function makeParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.4,
        baseA: Math.random() * 0.5 + 0.15,
        tw: Math.random() * Math.PI * 2,
        twSpeed: Math.random() * 0.02 + 0.006,
        vy: Math.random() * 0.12 + 0.02,
        vx: (Math.random() - 0.5) * 0.06,
        color: colors[(Math.random() * colors.length) | 0],
      }
    }

    function frame() {
      if (!running) return
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.tw += p.twSpeed
        p.y -= p.vy
        p.x += p.vx
        if (p.y < -4) {
          p.y = height + 4
          p.x = Math.random() * width
        }
        if (p.x < -4) p.x = width + 4
        if (p.x > width + 4) p.x = -4
        const alpha = p.baseA * (0.55 + 0.45 * Math.sin(p.tw))
        ctx.globalAlpha = alpha
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }

    function onVisibility() {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        raf = requestAnimationFrame(frame)
      }
    }

    resize()
    frame()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduced, density])

  if (reduced) return null
  return <canvas ref={canvasRef} className="sparkles" aria-hidden="true" />
}
