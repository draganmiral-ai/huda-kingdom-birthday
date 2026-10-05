import { useEffect, useRef, useState } from 'react'
import Reveal from './components/Reveal.jsx'
import { instagram, escapeStatus, intelligence, translations, expeditions, campaign, rules, person } from './data/sumie.js'
import assets from './data/sumie-assets.json'
import './styles/sumie.css'

function Photo({ id, alt, eager = false, caption, className = '' }) {
  const asset = assets[id]
  return <figure className={`sf-photo ${className}`}><img src={asset.src} srcSet={asset.srcSet} sizes="(max-width: 700px) 92vw, (max-width: 1100px) 70vw, 680px" width={asset.width} height={asset.height} loading={eager ? 'eager' : 'lazy'} decoding="async" {...(eager ? { fetchpriority: 'high' } : {})} alt={alt} />{caption && <figcaption>{caption}</figcaption>}</figure>
}
function Section({ number, title, children, className = '', id }) {
  return <section className={`sf-section ${className}`} id={id || `file-${number}`} aria-labelledby={`title-${number}`}><header className="sf-section-head"><span className="sf-number">{number}</span><h2 id={`title-${number}`}>{title}</h2></header>{children}</section>
}
function List({ items }) { return <ul className="sf-list">{items.map(item => <li key={item}>{item}</li>)}</ul> }
function Metadata({ pairs }) { return <dl className="sf-metadata">{pairs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> }
function Stamp({ children }) { return <Reveal className="sf-stamp-wrap"><span className="sf-stamp">{children}</span></Reveal> }
function Arabic({ children }) { return <span className="sf-arabic" lang="ar" dir="rtl">{children}</span> }

export default function Sumie() {
  const [denied, setDenied] = useState(false)
  const dialog = useRef(null)
  useEffect(() => { document.title = 'The House of Futteisha | Non Fasting Queens' }, [])
  useEffect(() => { if (denied) dialog.current.showModal() }, [denied])
  function close() { dialog.current.close(); setDenied(false) }
  return <div className="sf-site">
    <a className="skip-link" href="#file-02">Skip to content</a>
    <nav className="sf-nav" aria-label="Birthday experience"><a href="/">NON FASTING QUEENS <span aria-hidden="true">↗</span></a><a href="#sumie-top">TOP ↑</a></nav>
    <main>
      <section className="sf-arrival" id="sumie-top" aria-labelledby="sumie-title">
        <div className="sf-arrival-copy"><p className="sf-eyebrow">HASHEMITE KINGDOM OF JORDAN</p><p className="sf-eyebrow sf-department">DEPARTMENT OF CONTROLLED EXPLOSIONS</p><p className="sf-world">THE HOUSE OF FUTTEISHA</p><h1 id="sumie-title">SUMIE</h1><p className="sf-arrival-title">THE FUTTEISHA</p><p className="sf-arrival-description">Small in administrative classification.<br />Unclear in actual blast radius.</p><div className="sf-arrival-bottom"><span className="sf-status"><i aria-hidden="true" /> STATUS: ACTIVE</span><a href="#file-02" className="sf-button">OPEN THE FILE <span aria-hidden="true">↓</span></a></div></div>
        <Photo id="portrait" alt="A portrait of Sumie in warm afternoon sunlight." eager className="sf-arrival-photo" />
      </section>
      <div className="sf-filebar"><span>THE HOUSE OF FUTTEISHA</span><span>NON FASTING QUEENS</span></div>
      <Section number="02" title="Official identity file" className="sf-parchment">
        <div className="sf-split"><Photo id="jordan" alt="Sumie representing her Jordanian heritage." /><div className="sf-copy"><Metadata pairs={[[ 'NAME', 'SUMIE' ], [ 'CLASSIFICATION', 'FUTTEISHA' ], [ 'ORIGIN', 'COMPLICATED' ]]} /><p className="sf-eyebrow">DECLARED COMPOSITION</p><div className="sf-composition"><p><strong>50%</strong> Jordanian</p><p><strong>25%</strong> Filipino</p><p><strong>25%</strong> Japanese</p></div><p>Additional nationalities may be declared without prior notice.</p><p className="sf-note">Percentages subject to change depending on the conversation.</p></div></div>
      </Section>
      <Section number="03" title="According to Instagram" className="sf-dark">
        <div className="sf-gallery-heading"><span className="sf-eyebrow">INSTAGRAM VS REALITY</span><div className="sf-gallery-controls"><button aria-label="Previous Instagram photo" onClick={() => document.getElementById('instagram-track').scrollBy({ left: -document.getElementById('instagram-track').clientWidth, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>←</button><button aria-label="Next Instagram photo" onClick={() => document.getElementById('instagram-track').scrollBy({ left: document.getElementById('instagram-track').clientWidth, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>→</button></div></div>
        <div className="sf-gallery" id="instagram-track" tabIndex="0" role="region" aria-label="Instagram photographs, swipe or use arrow buttons">{instagram.map(([id, caption, alt], i) => <div className="sf-gallery-item" key={id}><Photo id={id} alt={alt} caption={caption} /><span className="sf-note">0{i + 1} / 04</span></div>)}</div>
        <div className="sf-internal"><p className="sf-eyebrow">ACCORDING TO INTERNAL RECORDS</p><h3>Still employed at<br /><em>SeaWorld Abu Dhabi.</em></h3><p>The investigation continues.</p></div>
      </Section>
      <Section number="04" title="Current mission" className="sf-parchment">
        <div className="sf-split"><div className="sf-copy"><h3 className="sf-statement">Get this woman promoted.</h3><div className="sf-escape">{escapeStatus.map(name => <div key={name}><span>{name}</span><strong className={name === 'SUMIE' ? 'sf-inside' : ''}>{name === 'SUMIE' ? 'STILL INSIDE' : 'ESCAPED'}</strong></div>)}</div><Metadata pairs={[[ 'PRIMARY ASSET', 'Resume photograph' ], [ 'OBJECTIVE', 'Significant promotion' ], [ 'SECONDARY OBJECTIVE', 'Any building that does not contain marine mammals' ]]} /><p>This photograph represents our best remaining chance.</p><Stamp>EVACUATION PENDING</Stamp></div><Photo id="resume" alt="Sumie’s professional resume portrait." /></div>
        <Photo id="certificate" alt="Sumie and a colleague holding a certificate at work." caption="WORKING 24/7 AND ALL SHE GETS" className="sf-support-photo" />
      </Section>
      <Section number="05" title="How the Non Fasting Queens began" className="sf-forest">
        <div className="sf-centered-copy"><p>Five people went to work at SeaWorld Abu Dhabi.</p><p>Nobody expected this to happen.</p><p>Years later, four have escaped.</p><p>One remains behind to maintain continuity.</p></div><Photo id="queens" alt="Members of the Non Fasting Queens together at SeaWorld Abu Dhabi." className="sf-wide-photo" /><Reveal className="sf-big-moment"><h3>The Non Fasting Queens</h3><p>Questionable decisions.<br />Unquestionable friendship.</p></Reveal>
      </Section>
      <Section number="06" title="Gossip & intelligence services" className="sf-dark">
        <div className="sf-split"><Photo id="mitch" alt="Sumie and Mitch posing together." /><div className="sf-copy"><Metadata pairs={[[ 'JOINT DIRECTORS', 'MITCH & SUMIE' ]]} /><p className="sf-eyebrow">RESPONSIBILITIES</p><List items={intelligence} /><blockquote>We are not gossiping.<br /><em>We are maintaining situational awareness.</em></blockquote></div></div>
      </Section>
      <Section number="07" title="Sumie translation services" className="sf-parchment">
        <div className="sf-split"><div className="sf-copy"><List items={translations} /><p className="sf-eyebrow">WORD OF THE DAY</p><dl className="sf-word"><div><dt>English</dt><dd>Firecracker</dd></div><div><dt>Arabic</dt><dd><Arabic>مُفَرْقِعَة</Arabic></dd></div><div><dt>Jordanian Arabic</dt><dd><Arabic>فتيشة</Arabic></dd></div><div><dt>Our Jordanian Arabic</dt><dd>SUMIE</dd></div></dl><p>Huda, for once you do not need to ask Sumie for the English translation.</p></div><Photo id="translation" alt="Sumie and Huda sitting together during a translation moment." /></div>
      </Section>
      <Section number="08" title="Community outreach program" className="sf-forest">
        <Photo id="quiz" alt="Friends gathered together for quiz night." className="sf-wide-photo" /><div className="sf-centered-copy"><p className="sf-eyebrow">OPERATION: RELATABLE</p><p>On selected evenings, the Non Fasting Queens were temporarily released into the general population to mingle with frontline colleagues and participate in ordinary civilian activities such as quiz nights.</p><Metadata pairs={[[ 'STATUS', 'Moderately convincing.' ], [ 'LOCATION', 'Yas Village' ]]} /></div>
      </Section>
      <Section number="09" title="The great Mussafah expeditions" className="sf-parchment">
        <p className="sf-section-intro">Weekend cultural enrichment.</p><div className="sf-photo-pair"><Photo id="mussafah-1" alt="Friends together during a weekend trip to Mussafah." /><Photo id="mussafah-2" alt="Mr D and friends taking a selfie on another Mussafah expedition." /></div><div className="sf-centered-copy"><List items={expeditions} /></div><Reveal className="sf-big-moment"><h3>Other people booked brunches.<br /><em>We went to Mussafah.</em></h3></Reveal>
      </Section>
      <Section number="10" title="The evidence locker" className="sf-dark">
        <div className="sf-evidence-grid">
          <article className="sf-case"><p className="sf-eyebrow">CASE 01</p><h3>The disappearance of Mr D</h3><Photo id="missing" alt="Four Queens posing together, with Mr D absent." /><p>Four Queens present.</p><Metadata pairs={[[ 'MR D', 'MISSING' ], [ 'INVESTIGATION STATUS', 'ONGOING' ], [ 'PRIMARY SUSPECTS', 'Everybody pictured.' ]]} /></article>
          <article className="sf-case"><p className="sf-eyebrow">CASE 02</p><h3>Important clarification</h3><Photo id="glow" alt="Sumie dressed for an evening out." /><p>We make many jokes.</p><p>But unfortunately...</p><h4>She does know how to serve.</h4><p className="sf-note">Evidence admitted without objection.</p></article>
          <article className="sf-case"><p className="sf-eyebrow">CASE 03</p><h3>Project: find Sumie a husband</h3><Photo id="tinder" alt="Sumie’s photograph used while testing a Tinder profile." /><Metadata pairs={[[ 'PLATFORM', 'Tinder' ], [ 'PROJECT SPONSOR', 'Mr D' ], [ 'CANDIDATE ENTHUSIASM', 'Limited' ], [ 'IMPLEMENTATION STATUS', 'Obstructed by Sumie' ]]} /><button className="sf-button" onClick={() => setDenied(true)} aria-haspopup="dialog">LAUNCH TINDER <span aria-hidden="true">↗</span></button></article>
          <article className="sf-case"><p className="sf-eyebrow">CASE 04</p><h3>Agricultural interests</h3><Photo id="eggplants" alt="Sumie holding eggplants." /><p>The archive declines further comment.</p></article>
        </div>
      </Section>
      <Section number="11" title="The Baby EID custody dispute" className="sf-parchment">
        <div className="sf-split"><div><Photo id="baby-eid" alt="Sumie holding Baby EID." /><Photo id="baby-shower" alt="The friends celebrating together at a baby shower." /></div><div className="sf-copy"><Metadata pairs={[[ 'SUBJECT', 'Baby EID' ], [ 'CURRENT ABILITY TO PROVIDE INDEPENDENT TESTIMONY', 'None' ]]} /><p>The Non Fasting Queens have spent considerable time competing for Baby EID’s affection.</p><p>Unfortunately, Sumie has adopted an aggressive strategy involving:</p><List items={campaign} /><div className="sf-legal"><p className="sf-eyebrow">IMPORTANT LEGAL NOTICE</p><p>Baby EID still cannot speak.</p><p>Therefore all claims regarding his preferred Queen remain:</p><strong>UNVERIFIED</strong><p className="sf-eyebrow">CASE TO BE REOPENED WHEN THE WITNESS CAN TALK</p><p>The court reserves the right to hear Mr D’s appeal at that time.</p></div></div></div>
      </Section>
      <Section number="12" title="Rare documented event" className="sf-soft">
        <div className="sf-split"><Photo id="surprise" alt="A photograph documenting a surprise for Sumie from her friends." /><div className="sf-copy"><h3>Temporary safe mode</h3><p>On rare occasions, the Futteisha stops exploding.</p><p className="sf-eyebrow">POSSIBLE SYMPTOMS</p><List items={['Silence', 'Tears', 'Unexpected softness', 'Immediate attempts to recover dignity']} /><blockquote>Beneath all that fire is somebody who still lets friendship surprise her.</blockquote></div></div>
      </Section>
      <Section number="13" title="The place where it started" className="sf-forest">
        <div className="sf-memory"><Photo id="goodbye" alt="Sumie and friends on Huda’s last day at SeaWorld." /><div><h3>The first goodbye</h3><p>Eventually, the place where we met started becoming the place we left.</p><p className="sf-after-pause">Sumie remained employed.</p></div></div><div className="sf-memory sf-memory-reverse"><Photo id="reunion" alt="Former colleagues reunited at the place where their friendship began." /><div><h3>Former employees & one hostage</h3><p>For a little while, everyone was sitting together again exactly where it began.</p><p className="sf-after-pause">Sumie remained on active duty.</p></div></div><Photo id="coffee" alt="The friends together for a late night coffee date." caption="LATE NIGHT COFFEE DATES" className="sf-support-photo" />
      </Section>
      <Section number="14" title="Operation: look poor" className="sf-parchment">
        <div className="sf-split"><div className="sf-copy"><Metadata pairs={[[ 'MISSION OBJECTIVE', 'Secure affordable housing for Mr D.' ]]} /><blockquote>“Make sure you look poor so they don’t give us expensive rent.”</blockquote><p className="sf-eyebrow">MR D ARRIVED.</p><h3 className="sf-statement">Mission failed immediately.</h3><p>Despite considerable effort, he continued to look financially irresponsible rather than financially disadvantaged.</p><p className="sf-sincere">Sumie still came with him, walked through apartments, helped him adjust, and made a difficult transition feel less lonely.</p></div><Photo id="apartment" alt="Mr D and Sumie together while looking for an apartment." /></div>
      </Section>
      <Section number="15" title="So you’re thinking of marrying Sumie." className="sf-manual">
        <div className="sf-centered-copy"><p className="sf-section-intro">Mandatory orientation for eligible bachelors.</p><p>Please be aware that you are not dealing with an ordinary woman.</p><p>You are dealing with an original Jordanian Futteisha.</p></div><div className="sf-rules">{rules.map((rule, i) => <Reveal as="article" className="sf-rule" key={`rule-${i + 1}`}><span className="sf-eyebrow">RULE 0{i + 1}</span><div><h3>{rule.lead}</h3>{rule.arabic && <p className="sf-rule-arabic"><Arabic>{rule.arabic}</Arabic></p>}{rule.statement && i !== 4 && <p className="sf-rule-statement">{rule.statement}</p>}{rule.paragraphs?.map((line, index) => <p key={line}>{line}{rule.endingArabic && index === 0 && <> <Arabic>{rule.endingArabic}</Arabic>.</>}</p>)}{i === 4 && <p className="sf-rule-statement">{rule.statement}</p>}{rule.list && <List items={rule.list} />}</div></Reveal>)}</div><div className="sf-certification"><p className="sf-eyebrow">FINAL CERTIFICATION</p><p>If you successfully survive one complete year...</p><h3>Congratulations.</h3><p>You are no longer simply a husband.</p><p>You are now a certified explosives specialist of the Hashemite Kingdom of Jordan.</p><Stamp>APPROVED</Stamp><p className="sf-eyebrow">SUMIE™<br />FUTTEISHA<br />HANDLE WITH LOVE</p></div>
      </Section>
      <Section number="16" title="The person behind the file" className="sf-person sf-soft">
        <div className="sf-split"><Photo id="portrait" alt="A portrait of Sumie in warm afternoon sunlight." /><div className="sf-person-copy">{person.map(line => <p key={line}>{line}</p>)}<p className="sf-person-final">We are very lucky that SeaWorld gave us you.</p></div></div>
      </Section>
      <section className="sf-finale" aria-labelledby="finale-title"><p className="sf-eyebrow">THE HOUSE OF FUTTEISHA</p><h2 id="finale-title">Happy birthday,<br /><em>Futteisha.</em></h2><p>Now please get that promotion.</p><p>We are running out of ways to explain why you are still there.</p><a className="sf-button" href="/">BACK TO THE QUEENS <span aria-hidden="true">↗</span></a></section>
    </main>
    <dialog className="sf-dialog" ref={dialog} aria-labelledby="denied-title" onCancel={() => setDenied(false)} onClose={() => setDenied(false)} onClick={e => { if (e.target === e.currentTarget) close() }}><button className="sf-dialog-close" aria-label="Close request response" onClick={close} autoFocus>×</button><p className="sf-eyebrow">PROJECT: FIND SUMIE A HUSBAND</p><h2 id="denied-title">Request denied by Sumie</h2><p>Management will continue to appeal this decision.</p><button className="sf-button" onClick={close}>CLOSE FILE</button></dialog>
  </div>
}
