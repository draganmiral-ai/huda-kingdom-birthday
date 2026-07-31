import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Ornament from './Ornament.jsx'
import VideoMessage from './VideoMessage.jsx'
import GhostIcon from './GhostIcon.jsx'
import { council, naz, sumie, mrD, mitch } from '../data/content.js'

function NazLetter() {
  return (
    <Reveal as="article" className="council-card council-card--letter">
      <div className="council-card__badge">Naz</div>
      <h3 className="council-card__heading">{naz.heading}</h3>
      <p className="council-card__subheading">{naz.subheading}</p>
      <div className="letter">
        {naz.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="letter__signoff">{naz.signoff}</p>
      </div>
    </Reveal>
  )
}

function VideoTribute({ person, align }) {
  return (
    <Reveal as="article" className={`council-card council-card--video council-card--${align}`}>
      <div className="council-card__badge">{person.name}</div>
      <h3 className="council-card__heading">{person.heading}</h3>
      <p className="council-card__intro">{person.intro}</p>
      <VideoMessage src={person.video} poster={person.poster} label={person.videoLabel} />
      <p className="council-card__closing">{person.closing}</p>
    </Reveal>
  )
}

function MitchTransmission() {
  const [revealed, setRevealed] = useState(false)
  return (
    <Reveal as="article" className="council-card council-card--mitch">
      <div className="council-card__badge">Mitch</div>
      <div className="mitch__grid">
        <div className="mitch__portrait-col">
          <div className="framed-photo framed-photo--tall">
            <img
              className="mitch__portrait"
              src={mitch.image}
              alt={mitch.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <GhostIcon className="mitch__ghost" />
        </div>

        <div className="mitch__body">
          <div className="mitch__signal" aria-hidden="true">
            <span />
            <span />
            <span />
            <em>transmission incoming</em>
          </div>
          <h3 className="council-card__heading">{mitch.heading}</h3>
          <div className="letter letter--ghost">
            {mitch.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="letter__signoff">
              {mitch.signoff.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < mitch.signoff.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <button
            type="button"
            className="btn btn--ghost"
            aria-expanded={revealed}
            onClick={() => setRevealed((v) => !v)}
          >
            {mitch.revealButton}
          </button>

          <div className={`reveal-panel ${revealed ? 'reveal-panel--open' : ''}`} aria-hidden={!revealed}>
            <p>{mitch.revealText}</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Council() {
  return (
    <section className="section section--council" id="royal-council" aria-labelledby="council-title">
      <div className="container">
        <SectionHeading eyebrow={council.eyebrow} title={council.title} id="council-title" />
        <Reveal className="section-intro">
          <p>{council.intro}</p>
        </Reveal>

        <div className="council">
          <NazLetter />
          <VideoTribute person={sumie} align="left" />
          <Ornament className="ornament--between" />
          <VideoTribute person={mrD} align="right" />
          <MitchTransmission />
        </div>
      </div>
    </section>
  )
}
