// An elegant little ghost rendered in gold line-work — tasteful, not childish.
// It drifts very gently (animation is disabled under prefers-reduced-motion via CSS).
export default function GhostIcon({ className = '' }) {
  return (
    <div className={`ghost ${className}`} aria-hidden="true">
      <svg viewBox="0 0 64 72" width="64" height="72">
        <defs>
          <linearGradient id="ghostGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F2D890" />
            <stop offset="1" stopColor="#D7AE57" />
          </linearGradient>
        </defs>
        <path
          d="M12 34 C12 20 21 12 32 12 C43 12 52 20 52 34 L52 60
             C52 62 49.5 63 48 61.5 L44 57.5 C43 56.5 41.5 56.5 40.5 57.5
             L37 61 C35.8 62.2 33.9 62.2 32.7 61 L29 57.4 C28 56.4 26.5 56.4 25.5 57.4
             L21.5 61.5 C20 63 12 62 12 60 Z"
          fill="rgba(247, 240, 224, 0.06)"
          stroke="url(#ghostGold)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="33" r="2.6" fill="url(#ghostGold)" />
        <circle cx="39" cy="33" r="2.6" fill="url(#ghostGold)" />
        <path
          d="M28 41 C29.6 42.6 34.4 42.6 36 41"
          fill="none"
          stroke="url(#ghostGold)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
