import Reveal from './Reveal.jsx'
import Ornament from './Ornament.jsx'
import { finalTribute } from '../data/content.js'

export default function FinalTribute() {
  return (
    <section className="section section--final" id="final-tribute" aria-labelledby="final-title">
      <div className="final__media">
        <img
          className="final__img"
          src={finalTribute.image}
          alt={finalTribute.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <div className="final__scrim" aria-hidden="true" />
      </div>

      <div className="container container--narrow final__content">
        <Reveal>
          <p className="eyebrow">{finalTribute.eyebrow}</p>
          <h2 className="section-title" id="final-title">
            {finalTribute.title}
          </h2>
          <Ornament className="ornament--heading" />
        </Reveal>

        <Reveal className="final__copy" delay={60}>
          {finalTribute.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'lead' : ''}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="final__closing" delay={80}>
          <p className="final__birthday">{finalTribute.closing}</p>
          <p className="final__signoff">
            {finalTribute.signoff.map((line, i) => (
              <span key={i}>
                {line}
                {i < finalTribute.signoff.length - 1 && <br />}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal className="final__finale" delay={120}>
          <Ornament />
          <p className="final__long-live">{finalTribute.finale}</p>
          <Ornament />
        </Reveal>
      </div>
    </section>
  )
}
