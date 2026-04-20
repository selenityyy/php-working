import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import Header from '../components/Header'
import './Homepage.css'

const quickLinks = [
  { to: '/about',   label: 'Meet the E-Board', icon: '👥', desc: 'Learn about our leadership team' },
  { to: '/asa',     label: 'Events & Memories', icon: '📅', desc: 'Upcoming events & the Beacon' },
  { to: '/pga',     label: 'PGA Dance Group',   icon: '💃', desc: 'Our performance art collective' },
  { to: '/socials', label: 'Follow Us',          icon: '📱', desc: 'Instagram, TikTok & GroupMe' },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow fade-up">University of Rhode Island</span>
          <h1 className="hero-title fade-up fade-up-1">
            Asian Students<br />
            <span className="hero-accent">Association</span>
          </h1>
          <p className="hero-sub fade-up fade-up-2">
            Celebrating Asian culture, building community, and creating lasting memories at URI.
          </p>
          <div className="hero-actions fade-up fade-up-3">
            <Link to="/join" className="btn btn-primary">Join Us!</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
        <div className="hero-deco" aria-hidden="true">
          <div className="deco-circle c1" />
          <div className="deco-circle c2" />
        </div>
      </section>

      <div className="page-wrapper">
        {/* Quick links grid */}
        <section className="quick-links fade-up fade-up-2">
          <h2 className="section-title">Explore ASA</h2>
          <div className="quick-grid">
            {quickLinks.map(({ to, label, icon, desc }) => (
              <Link key={to} to={to} className="quick-card">
                <span className="quick-icon">{icon}</span>
                <strong className="quick-label">{label}</strong>
                <span className="quick-desc">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <hr />

        {/* Sliders */}
        <section className="sliders-section fade-up fade-up-3">
          <div className="slider-col">
            <h2 className="section-title">ASA</h2>
            <p className="slider-tagline">Asian Students Association — events, culture & community.</p>
            <ImageSlider images={asaSlides} title="ASA Photos" />
            <Link to="/asa" className="btn btn-outline" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
              ASA Events →
            </Link>
          </div>

          <div className="slider-col">
            <h2 className="section-title">PGA</h2>
            <p className="slider-tagline">People Generally Asian — our dance & performance group.</p>
            <ImageSlider images={pgaSlides} title="PGA Photos" />
            <Link to="/pga" className="btn btn-outline" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
              PGA Page →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
