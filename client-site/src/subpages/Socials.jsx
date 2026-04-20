import Header from '../components/Header'
import './Socials.css'

// Social platform data — rendered with .map()
const socials = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@uri_asa',
    url: 'https://www.instagram.com/uri_asa',
    icon: '📸',
    color: '#e1306c',
    description: 'Follow us on Instagram for event photos, announcements, and behind-the-scenes content!',
    // Elfsight widget will load inside the container below
    hasWidget: true,
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@uri_asa',
    url: 'https://www.tiktok.com/@uri_asa',
    icon: '🎵',
    color: '#69c9d0',
    description: 'Watch our TikToks — dances, events, and fun moments from ASA life!',
    qrImage: '/images/ASA-pics/asa-tiktok.png',
    hasWidget: false,
  },
  {
    id: 'groupme',
    platform: 'GroupMe',
    handle: 'ASA URI GroupMe',
    url: '#',
    icon: '💬',
    color: '#00aff0',
    description: 'Join our GroupMe to stay in the loop with event updates and announcements.',
    qrImage: '/images/ASA-pics/groupme-code.jpeg',
    hasWidget: false,
  },
]

export default function Socials() {
  return (
    <div className="page-wrapper">
      <PageHeader
        tag="Stay Connected"
        title="Follow Us!"
        subtitle="Stay up to date with ASA on all our social media platforms."
      />
      <hr />

      <div className="socials-grid">
        {socials.map(social => (
          <div key={social.id} className="social-card fade-up">
            <div className="social-card-header" style={{ borderColor: social.color }}>
              <span className="social-icon">{social.icon}</span>
              <div>
                <h2 className="social-platform">{social.platform}</h2>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-handle"
                  style={{ color: social.color }}
                >
                  {social.handle}
                </a>
              </div>
            </div>
            <p className="social-desc">{social.description}</p>

            {/* Instagram Elfsight widget */}
            {social.hasWidget && (
              <div className="elfsight-wrap">
                <script src="https://elfsightcdn.com/platform.js" async></script>
                <div
                  className="elfsight-app-ce5b4ce7-9742-4b95-ad82-0f2509e1bbfc"
                  data-elfsight-app-lazy
                />
              </div>
            )}

            {/* QR code for TikTok / GroupMe */}
            {social.qrImage && (
              <div className="social-qr">
                <p className="qr-label">Scan to {social.id === 'groupme' ? 'join' : 'follow'}:</p>
                <img
                  src={social.qrImage}
                  alt={`${social.platform} QR code`}
                  className="qr-img"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
            )}

            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline social-btn"
              style={{ borderColor: social.color, color: social.color }}
            >
              Visit {social.platform} →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
