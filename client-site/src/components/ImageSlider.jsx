import { useState } from 'react'
import './ImageSlider.css'

/**
 * reusable image slider
 * Props: images (we'll use an array), title
 * State used will be currentIndex
 */

export default function ImageSlider({ images = [], title = ''}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    if (!images.length) {
        return (
            <div className="empty-slider">
                <p> There are no photos yet - Check back later :3 </p>
            </div>
        )
    }

    const prev = () => setCurrentIndex(i => (i - 1 + images.length) % images.length)
    const next = () => setCurrentIndex(i => (i + 1) % images.length)

    return (
        <div className="slider-wrap">
            {title && <h3 className="slider-title">{title}</h3>}
            <div className="slider-stage">
                <button className="slider-button prev" onClick={prev} aria-label="Previous">‹</button>
                <div className="slider-frame">
                    {images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img.src}
                          alt={img.alt || title}
                          className={`slider-img ${idx === currentIndex ? 'active' : ''}`}
                          onError={e => { e.target.src = `https://placehold.co/600x400/152336/f0c040?text=${encodeURIComponent(title)}` }}
                        />
                    ))}
                </div>
                <button className="slider-button next" onClick={next} aria-label="Next">›</button>
            </div>
            {/* used AI for the slider-dots as a template */}
            <div className="slider-dots">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
            <p className="slider-counter">{currentIndex + 1} / {images.length}</p>
        </div>
    )
}