import { useEffect, useRef, useState } from 'react'
import { members } from '../data/queens.js'

export default function Queens({ placeholder = false, missing = false }) {
  const [selected, setSelected] = useState(null)
  const dialog = useRef(null)
  useEffect(() => {
    document.title = placeholder ? 'The House of Futteisha | NON-FASTING QUEENS' : 'NON-FASTING QUEENS | The Digital Archive'
  }, [placeholder])
  useEffect(() => {
    if (selected) dialog.current.showModal()
  }, [selected])
  function close() { dialog.current.close(); setSelected(null) }
  return (
    <div className="queens-site">
      <a className="skip-link" href="#queens-content">Skip to content</a>
      <header className="queens-masthead"><a href="/">N · F · Q</a><span>THE FRIENDSHIP ARCHIVE</span><span>EST. IN QUESTIONABLE JUDGMENT</span></header>
      {placeholder || missing ? (
        <main className="queens-placeholder" id="queens-content">
          <p className="queens-eyebrow">NON-FASTING QUEENS</p>
          <h1>{missing ? 'An uncharted realm.' : 'The House of Futteisha'}</h1>
          <p>{missing ? 'There is no archive at this address.' : 'Opening shortly.'}</p>
          {!missing && <p>Please maintain a safe distance.</p>}
          <a className="queens-link" href="/">BACK TO THE QUEENS <span aria-hidden="true">↗</span></a>
        </main>
      ) : (
        <main id="queens-content">
          <section className="queens-hero" aria-labelledby="queens-title">
            <div className="queens-hero-copy">
              <p className="queens-eyebrow">AN ENTIRELY UNNECESSARY DIGITAL ARCHIVE</p>
              <h1 id="queens-title">NON-FASTING<br /><em>QUEENS</em></h1>
              <p className="queens-subtitle">Five friends. One WhatsApp group. Questionable judgment. Remarkably strong survival rates.</p>
              <a className="queens-link" href="#choose">CHOOSE YOUR QUEEN <span aria-hidden="true">↓</span></a>
              <span className="queens-volume">VOL. 01 — AN ALARMING AMOUNT OF EVIDENCE</span>
            </div>
            <figure className="queens-photo"><img src="/assets/queens-group.png" alt="Five friends dressed as fairies posing together in an enchanted forest setting." fetchpriority="high" /><figcaption>THE QUEENS, IN THEIR NATURAL HABITAT. ALLEGEDLY.</figcaption></figure>
          </section>
          <section className="queens-intro" aria-label="Welcome to the archive">
            <span className="queens-symbol" aria-hidden="true">✧</span>
            <p className="queens-welcome">Welcome to the official and completely unauthorized archive of five people who somehow became friends and have been making that everyone else’s problem ever since.</p>
            <p>Within these walls are birthdays, diplomatic incidents, questionable decisions, unnecessary investigations, translation disputes, emotional support, inappropriate levels of commitment, and an alarming amount of evidence.</p>
          </section>
          <section className="queens-selection" id="choose" aria-labelledby="choose-title">
            <div className="queens-section-heading"><p className="queens-eyebrow">FIVE PEOPLE. FIVE WORLDS.</p><h2 id="choose-title">Choose your Queen carefully.</h2></div>
            <div className="queens-portals">{members.map((member, index) => (
              <article className={`queens-portal queens-portal--${member.themeClass}`} key={member.name}>
                <div className="queens-portal-top"><span>0{index + 1}</span><span className="queens-status">{member.status === 'LOCKED' ? '◇ ' : '✦ '}{member.status}</span></div>
                <h3>{member.name}</h3><p>{member.subtitle}</p>
                {member.route ? <a href={member.route}>{member.buttonLabel}<span aria-hidden="true">↗</span></a> : <button onClick={() => setSelected(member)} aria-haspopup="dialog" aria-label={`Inspect ${member.name} locked archive`}>COMING EVENTUALLY<span aria-hidden="true">＋</span></button>}
              </article>
            ))}</div>
          </section>
        </main>
      )}
      <footer className="queens-footer"><p>Five Queens. Questionable decisions.<br /><em>Unquestionable friendship.</em></p><span>NON-FASTING QUEENS · THE PERMANENT RECORD</span></footer>
      <dialog ref={dialog} className="queens-dialog" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) close() }} aria-labelledby="locked-title" aria-describedby="locked-description">
        <div className="queens-dialog-inner"><button className="queens-dialog-close" onClick={close} autoFocus aria-label="Close archive message">×</button><p className="queens-eyebrow">{selected?.name} · FILE PENDING</p><h2 id="locked-title">{selected?.lockedMessage.title}</h2><div id="locked-description">{selected?.lockedMessage.lines.map(line => <p key={line}>{line}</p>)}</div><button className="queens-link" onClick={close}>BACK TO THE QUEENS <span aria-hidden="true">↗</span></button></div>
      </dialog>
    </div>
  )
}
