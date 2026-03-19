import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import marthaImg from '../../images/Martha_point.jpeg'

const facts = [
  { icon: '🐶', text: <><strong>Breed:</strong> Longhair Black and Tan Dappled Miniature Dachshund</> },
  { icon: '🍕', text: <><strong>Hobbies:</strong> Treat testing, competitive sunbathing, barking at the front door, hiking, and scentwork</> },
  { icon: '💪', text: <><strong>Special talent:</strong> Finding any and all treats</> },
  { icon: '❤️', text: <><strong>Cause:</strong> Proud ambassador for dachshund athletics, back health and IVDD awareness</> },
]

export default function About() {
  const contentRef = useFadeIn<HTMLDivElement>()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section className="about" id="about">
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
        >
          <img src={marthaImg} alt="Martha" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '12px', objectFit: 'contain' }} />
        </div>
      )}
      <div className="about-inner">
        <div className="about-visual">
          <div className="about-card" onClick={() => setLightboxOpen(true)} style={{ cursor: 'zoom-in' }}>
            <img src={marthaImg} alt="Martha" className="about-card-dog" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '55% 20%', borderRadius: '20px', transform: 'scale(5.0)', transformOrigin: '55% 20%' }} />
          </div>
        </div>
        <div ref={contentRef} className="about-content fade-in">
          <div className="section-label">The world's fluffiest wiener</div>
          <h2 className="section-title">Meet King Martha</h2>
          <p className="section-desc">
            Born to be iconic, Martha is a fluffy longhair miniature dachshund with big personality energy packed into a very, very long body. She loves long walks (short ones are also fine),
            digging in the couch, and judging anyone who eats without sharing. She is known for her striking blue eyes, clown personality, and obession with food.
          </p>
          <div className="about-facts">
            {facts.map((f, i) => (
              <div key={i} className="fact">
                <div className="fact-icon">{f.icon}</div>
                <div className="fact-text">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
