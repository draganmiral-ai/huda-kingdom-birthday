// Native HTML5 video with controls, a custom poster, and a gold frame.
// No autoplay. preload="none" so the file only downloads when the Queen presses play.
export default function VideoMessage({ src, poster, label }) {
  return (
    <div className="video-frame">
      <video
        className="video-frame__el"
        controls
        preload="none"
        playsInline
        poster={poster}
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. You can download the message
        instead: <a href={src}>{label}</a>.
      </video>
    </div>
  )
}
