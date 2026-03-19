import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import uwImg from '../../images/UW.jpg'
import saywoof from '../../images/martha_saywoof_blue.jpeg'
import pride from '../../images/martha_pride.jpeg'
import marthaImg from '../../images/martha.jpg'
import pumpkin from '../../images/martha_pumpkin.jpeg'
import run from '../../images/martha_run.jpeg'
import bench from '../../images/Martha_bench.jpeg'
import marthaUW from '../../images/Martha_UW.png'
import saywoof2 from '../../images/martha_saywoof.jpeg'
import sw1 from '../../images/martha_sw1.jpeg'

interface FeedCardData {
  bg: string
  emoji: string
  emojiSize?: string
  likes: string
  caption: string
  img?: string
  imgPosition?: string
  video?: string
  videoThumb?: string
}

const cards: FeedCardData[] = [
  { bg: 'bg-1', emoji: '🐶', emojiSize: '5rem', img: uwImg, likes: '♥ 42,810 likes', caption: 'As a champion, I require my own security detail.' },
  { bg: 'bg-2', emoji: '🧸', img: saywoof, imgPosition: '30% center', likes: '♥ 31,204 likes', caption: 'The life of a model. Say Woof!' },
  { bg: 'bg-3', emoji: '🌿', img: marthaImg, imgPosition: '80% center', likes: '♥ 28,945 likes', caption: 'When the fit slays but the treats are lacking, 5/10.' },
  { bg: 'bg-4', emoji: '☀️', img: pride, likes: '♥ 19,332 likes', caption: 'Every day is puppy day. Martha day every day.' },
  { bg: 'bg-5', emoji: '🍰', img: pumpkin, likes: '♥ 24,601 likes', caption: '10/10 muddy adventure at the pumpkin patch.' },
  { bg: 'bg-6', emoji: '🛏️', img: run, likes: '♥ 37,229 likes', caption: 'Fastest wiener in the west. Catch me if you can!' },
  { bg: 'bg-1', emoji: '🐾', img: bench, imgPosition: '10% 60%', likes: '♥ 21,445 likes', caption: 'just a girl, living her best life, one treat at a time.' },
  { bg: 'bg-3', emoji: '🎬', emojiSize: '4rem', img: marthaUW, likes: '♥ 58,120 likes', caption: 'Director\'s cut. Oscar worthy, obviously.' },
  { bg: 'bg-2', emoji: '🐾', img: saywoof2, likes: '♥ 33,871 likes', caption: 'Looking at greatness. (It\'s me. I\'m the greatness.)' },
  { bg: 'bg-5', emoji: '🌅', img: sw1, likes: '♥ 27,654 likes', caption: 'Sweater weather and hair goals for days.' },
]

function FeedCard({ card, index }: { card: FeedCardData; index: number }) {
  const ref = useFadeIn<HTMLDivElement>(index * 80)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  return (
    <>
      {lightboxOpen && card.img && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
        >
          <img src={card.img} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '12px', objectFit: 'contain' }} />
        </div>
      )}
      {videoOpen && card.video && (
        <div
          onClick={() => setVideoOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <video
              src={card.video}
              controls
              autoPlay
              style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '12px', display: 'block' }}
            />
            <button
              onClick={() => setVideoOpen(false)}
              style={{ position: 'absolute', top: '-14px', right: '-14px', background: '#fff', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}
            >×</button>
          </div>
        </div>
      )}
      <div
        ref={ref}
        className="feed-card fade-in"
        onClick={card.video ? () => setVideoOpen(true) : card.img ? () => setLightboxOpen(true) : undefined}
        style={card.video || card.img ? { cursor: 'pointer' } : undefined}
      >
        <div className="feed-img">
          {card.videoThumb
            ? <>
                <img src={card.videoThumb} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
                <span style={{ position: 'absolute', fontSize: '2.5rem', opacity: 0.9, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))' }}>▶</span>
              </>
            : card.img
              ? <img src={card.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: card.imgPosition ?? 'center' }} />
              : <>
                  <div className={`feed-img-bg ${card.bg}`} />
                  <span className="feed-emoji" style={card.emojiSize ? { fontSize: card.emojiSize } : undefined}>{card.emoji}</span>
                </>
          }
        </div>
        <div className="feed-meta">
          <div className="feed-likes">{card.likes}</div>
          <div className="feed-caption">{card.caption}</div>
        </div>
      </div>
    </>
  )
}

export default function Feed() {
  const headerRef = useFadeIn<HTMLDivElement>()

  return (
    <section className="feed" id="feed">
      <div className="feed-inner">
        <div ref={headerRef} className="feed-header fade-in">
          <div className="section-label">Latest & Greatest</div>
          <h2 className="section-title">The Content Throne</h2>
          <p className="section-desc">Curated chaos. Impeccable taste. Zero apologies.</p>
        </div>
        <div className="feed-grid">
          {cards.map((card, i) => (
            <FeedCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
