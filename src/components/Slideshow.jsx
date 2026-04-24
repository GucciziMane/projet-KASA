import { useState } from 'react'
import './Slideshow.css'

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0)

  if (!pictures || pictures.length === 0) return null

  const hasManyPictures = pictures.length > 1

  function handlePrev() {
    setIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1))
  }

  function handleNext() {
    setIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1}`}
        className="slideshow-img"
      />

      {hasManyPictures && (
        <>
          <button className="slideshow-arrow slideshow-arrow--left" onClick={handlePrev} aria-label="Image précédente">
            &#8249;
          </button>
          <button className="slideshow-arrow slideshow-arrow--right" onClick={handleNext} aria-label="Image suivante">
            &#8250;
          </button>

          <span className="slideshow-counter">
            {index + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow
