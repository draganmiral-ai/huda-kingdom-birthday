import { useReducedMotion } from '../hooks/useReducedMotion.js'
import { hero } from '../data/content.js'

export default function Hero({ onEnter }) {
  const reduced = useReducedMotion()

  const handleEnter = () => {
    const next = document.getElementById('meet-the-queen')
    if (next) {
      next.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      // Move focus to the section for keyboard + screen-reader users.
      next.setAttribute('tabindex', '-1')
      next.focus({ preventScroll: true })
    }
    if (onEnter) onEnter()
  }

  return (
    <header className="hero" id="top">
      <div className="hero__media">
        <img
          className="hero__img"
          src={hero.image}
          alt={hero.imageAlt}
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__vignette" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <button type="button" className="btn btn--gold hero__cta" onClick={handleEnter}>
          <span>{hero.cta}</span>
          <svg className="btn__chev" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M4 6l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </header>
  )
}
