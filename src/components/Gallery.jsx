import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import { gallery } from '../data/content.js'

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section section--gallery" id="royal-archives" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} id="gallery-title" />
        <Reveal className="section-intro">
          <p>{gallery.intro}</p>
        </Reveal>

        <div className="masonry">
          {gallery.photos.map((photo, i) => {
            const spanClass = photo.span ? `masonry__item--${photo.span}` : ''
            return (
              <Reveal
                key={photo.src}
                as="figure"
                className={`masonry__item ${spanClass}`}
                delay={(i % 3) * 60}
              >
                <button
                  type="button"
                  className="masonry__button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={
                    photo.title ? `Open image: ${photo.title}. ${photo.alt}` : `Open image: ${photo.alt}`
                  }
                >
                  <img
                    className="masonry__img"
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="masonry__frame" aria-hidden="true" />
                  {(photo.title || photo.caption) && (
                    <span className="masonry__caption">
                      {photo.title && <span className="masonry__caption-title">{photo.title}</span>}
                      {photo.caption && (
                        <span className="masonry__caption-text">{photo.caption}</span>
                      )}
                    </span>
                  )}
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      <Lightbox
        photos={gallery.photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  )
}
