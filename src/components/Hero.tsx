import marthaImg from '../../images/martha_ss_bg.jpeg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="avatar-ring">
          <div className="avatar">
            <img src={marthaImg} alt="Martha May Washington" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', transform: 'scale(1.5) translateY(-15%)', transformOrigin: 'center top' }} />
          </div>
        </div>
        <div className="hero-eyebrow">The fluffiest long girl on the internet</div>
        <h1>Martha May <em>Washington</em></h1>
        <p className="hero-subtitle">
          Longhair miniature dachshund. Professional treat tester, couch occupier, and sock thief.
        </p>
        <div className="hero-tags">
          {['Dachshund Lifestyle', 'Treat Reviews', 'Hiking Queen', 'Nap Goals', 'Long Live the Long'].map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="hero-btns">
          <a href="https://www.instagram.com/marthamaywashington" target="_blank" rel="noreferrer" className="btn btn-primary">Follow Me on Instagram</a>
          <a href="#contact" className="btn btn-outline">Send Me Treats</a>
        </div>
      </div>
    </section>
  )
}
