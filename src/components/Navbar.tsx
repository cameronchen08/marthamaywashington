import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">Martha May Washington</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#feed">Feed</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li>
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 22px', fontSize: '0.78rem' }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
