import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import './ASA.css'

// Google Calendar API events
const upcomingEvents = [
  {
    
  }
]

const categories = ['All', 'Meeting', 'Cultural', 'Performance', 'Social']

const categoryColors = {
  Meeting:     { bg: 'rgba(240,192,64,0.12)', text: '#f0c040' },
  Cultural:    { bg: 'rgba(192,57,43,0.15)',  text: '#e74c3c' },
  Performance: { bg: 'rgba(52,152,219,0.15)', text: '#5dade2' },
  Social:      { bg: 'rgba(46,204,113,0.15)', text: '#58d68d' },
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })
}

export default function ASAPage() {
  // useState: filter events by category
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? upcomingEvents
    : upcomingEvents.filter(e => e.category === activeCategory)

  return (
    <div className="page-wrapper">
      <PageHeader
        tag="Asian Students Association"
        title="Events & Memories"
        subtitle="Stay up to date with everything happening in ASA — from GBMs to cultural celebrations."
      />
      <hr />

      {/* Events section */}
      <section className="events-section fade-up fade-up-1">
        <h2 className="section-title">Upcoming Events</h2>

        {/* Category filter — uses .map() to render filter buttons */}
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events list — uses .map() to render cards */}
        {filtered.length > 0 ? (
          <div className="events-list">
            {filtered.map((event, idx) => {
              const color = categoryColors[event.category] || categoryColors.Meeting
              return (
                <div key={event.id} className="event-card fade-up" style={{ animationDelay: `${idx * 0.07}s` }}>
                  <div className="event-date-col">
                    <span className="event-day">{new Date(event.date + 'T00:00:00').getDate()}</span>
                    <span className="event-month">
                      {new Date(event.date + 'T00:00:00').toLocaleString('en-US', { month: 'short' })}
                    </span>
                  </div>
                  <div className="event-body">
                    <div className="event-top">
                      <h3 className="event-title">{event.title}</h3>
                      <span
                        className="event-badge"
                        style={{ background: color.bg, color: color.text }}
                      >
                        {event.category}
                      </span>
                    </div>
                    <p className="event-meta">🕐 {event.time} &nbsp;·&nbsp; 📍 {event.location}</p>
                    <p className="event-desc">{event.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="no-events">No {activeCategory} events right now — check back soon!</p>
        )}
      </section>

      <hr />

      {/* Beacon link */}
      <section className="beacon-section fade-up fade-up-3">
        <div className="beacon-card">
          <div className="beacon-text">
            <h2>📸 The Beacon</h2>
            <p>
              Browse photos, videos, and memories from all of our past and current events.
              Our Beacon is updated regularly with highlights from everything ASA!
            </p>
            <a
              href="https://beacons.ai/uriasa"
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold"
            >
              Visit our Beacon →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
