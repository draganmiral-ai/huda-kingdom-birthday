import { useCallback, useEffect, useRef } from 'react'

// Accessible modal lightbox: focus trap, ESC to close, arrow-key navigation,
// backdrop click to dismiss. Body scroll is locked while open.
export default function Lightbox({ photos, index, onClose, onNavigate }) {
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const open = index !== null && index >= 0
  const photo = open ? photos[index] : null

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + photos.length) % photos.length)
  }, [index, photos.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % photos.length)
  }, [index, photos.length, onNavigate])

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement
    document.body.classList.add('no-scroll')
    // Focus the close button once mounted.
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0)

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'Tab') {
        // Simple focus trap within the dialog.
        const focusable = dialogRef.current?.querySelectorAll(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable || focusable.length === 0) return
        const list = Array.from(focusable)
        const first = list[0]
        const last = list[list.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('no-scroll')
      window.clearTimeout(t)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open, onClose, goPrev, goNext])

  if (!open || !photo) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title ? `${photo.title}. ${photo.alt}` : photo.alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="lightbox__inner" ref={dialogRef}>
        <button
          type="button"
          className="lightbox__close"
          onClick={onClose}
          ref={closeBtnRef}
          aria-label="Close image viewer"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={goPrev}
          aria-label="Previous image"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15 5l-7 7 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <figure className="lightbox__figure">
          <img
            className="lightbox__img"
            src={photo.src}
            alt={photo.alt}
            decoding="async"
          />
          {(photo.title || photo.caption) && (
            <figcaption className="lightbox__caption">
              {photo.title && <span className="lightbox__title">{photo.title}</span>}
              {photo.caption && <span className="lightbox__text">{photo.caption}</span>}
            </figcaption>
          )}
        </figure>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={goNext}
          aria-label="Next image"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <p className="lightbox__counter" aria-live="polite">
          {index + 1} / {photos.length}
        </p>
      </div>
    </div>
  )
}
