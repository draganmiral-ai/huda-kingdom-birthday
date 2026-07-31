import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

// Gently fades + lifts its children into view on scroll.
// Under prefers-reduced-motion it renders fully visible with no animation.
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (reduced) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  const cls = ['reveal', shown ? 'reveal--in' : '', className].filter(Boolean).join(' ')
  const style = delay && !reduced ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  )
}
