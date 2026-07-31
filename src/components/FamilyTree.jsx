import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { familyTree } from '../data/content.js'

export default function FamilyTree() {
  const [understood, setUnderstood] = useState(false)

  return (
    <section className="section section--tree" id="family-tree" aria-labelledby="tree-title">
      <div className="container container--narrow">
        <SectionHeading eyebrow={familyTree.eyebrow} title={familyTree.title} id="tree-title" />

        <Reveal className="tree-card">
          <ul className="tree-lines">
            {familyTree.lines.map((line, i) => (
              <li key={i} className={i === familyTree.lines.length - 1 ? 'tree-lines__punch' : ''}>
                {line}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="btn btn--outline"
            aria-expanded={understood}
            onClick={() => setUnderstood(true)}
            disabled={understood}
          >
            {familyTree.button}
          </button>

          <div className={`reveal-panel reveal-panel--center ${understood ? 'reveal-panel--open' : ''}`} aria-hidden={!understood}>
            <p className="tree-reveal">{familyTree.reveal}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
