import Reveal from './Reveal.jsx'
import Ornament from './Ornament.jsx'

// Shared eyebrow + serif title used to open each section.
export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <Reveal className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      <Ornament className="ornament--heading" />
    </Reveal>
  )
}
