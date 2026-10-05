import { useEffect } from 'react'
import Sparkles from './components/Sparkles.jsx'
import Hero from './components/Hero.jsx'
import MeetQueen from './components/MeetQueen.jsx'
import Gallery from './components/Gallery.jsx'
import Council from './components/Council.jsx'
import FamilyTree from './components/FamilyTree.jsx'
import FinalTribute from './components/FinalTribute.jsx'

export default function Huda() {
  useEffect(() => { document.title = 'The Kingdom of Huda | Happy 41st Birthday' }, [])
  return (
    <>
      <a className="skip-link" href="#meet-the-queen">
        Skip to content
      </a>

      <a className="queens-return" href="/">BACK TO THE QUEENS</a>
      <Sparkles />

      <main id="main">
        <Hero />
        <MeetQueen />
        <Gallery />
        <Council />
        <FamilyTree />
        <FinalTribute />
      </main>

      <footer className="site-footer">
        <p>Made with love by the Royal Council — Naz, Sumie, Mr&nbsp;D &amp; Mitch.</p>
        <p className="site-footer__small">The Kingdom of Huda · Happy 41st Birthday</p>
      </footer>
    </>
  )
}
