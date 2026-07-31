import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { meetQueen } from '../data/content.js'

export default function MeetQueen() {
  return (
    <section className="section section--meet" id="meet-the-queen" aria-labelledby="meet-title">
      <div className="container">
        <SectionHeading eyebrow={meetQueen.eyebrow} title={meetQueen.title} id="meet-title" />

        <div className="meet__grid">
          <Reveal className="meet__portrait-wrap">
            <div className="framed-photo">
              <img
                className="meet__portrait"
                src={meetQueen.image}
                alt={meetQueen.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal className="meet__copy" delay={80}>
            {meetQueen.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead' : ''}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <div className="facts">
          {meetQueen.facts.map((fact, i) => (
            <Reveal key={fact.label} as="article" className="fact-card" delay={i * 70}>
              <span className="fact-card__label">{fact.label}</span>
              <span className="fact-card__value">{fact.value}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
