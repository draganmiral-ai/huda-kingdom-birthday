// Fine gold filigree divider — a restrained floral flourish used between sections.
export default function Ornament({ className = '' }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <svg viewBox="0 0 240 24" width="240" height="24" preserveAspectRatio="xMidYMid meet">
        <g fill="none" stroke="url(#ornGold)" strokeWidth="1.2" strokeLinecap="round">
          <line x1="8" y1="12" x2="86" y2="12" strokeWidth="1" />
          <path d="M86 12 C98 12 100 5 108 5 C114 5 116 12 120 12" />
          <path d="M154 12 C142 12 140 19 132 19 C126 19 124 12 120 12" />
          <path d="M154 12 C166 12 168 5 176 5" opacity="0.7" />
          <path d="M86 12 C74 12 72 19 64 19" opacity="0.7" />
          <line x1="154" y1="12" x2="232" y2="12" strokeWidth="1" />
        </g>
        <g fill="url(#ornGold)">
          <circle cx="120" cy="12" r="3.4" />
          <circle cx="120" cy="12" r="6.2" fill="none" stroke="url(#ornGold)" strokeWidth="0.8" opacity="0.6" />
          <circle cx="8" cy="12" r="1.6" />
          <circle cx="232" cy="12" r="1.6" />
        </g>
        <defs>
          <linearGradient id="ornGold" x1="0" y1="0" x2="240" y2="0">
            <stop offset="0" stopColor="#D7AE57" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#F2D890" />
            <stop offset="1" stopColor="#D7AE57" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
