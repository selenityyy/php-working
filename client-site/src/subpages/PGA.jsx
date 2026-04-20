import PageHeader from '../components/PageHeader'
import './PGA.css'

// PGA leaders — add bios when you receive them from the leaders
const pgaLeaders = [
  {
    name: 'Selena Cabral',
    role: 'Leader',
    imageSrc: '',
    bio: 'Bio coming soon — stay tuned! 🎉',
  },
  {
    name: 'Kadin Sisavat',
    role: 'Leader',
    imageSrc: '',
    bio: 'Bio coming soon — stay tuned! 🎉',
  },
]

// // PGA videos — replace src with actual YouTube embed URLs or video file paths
// const pgaVideos = [
 
// ]

/**
 * PGAPage is a component that renders the PGA page.
 * It contains a description of PGA, a list of leaders, and a list of videos.
 * The leaders section displays images of the leaders along with their names and roles.
 * The videos section displays thumbnails of the videos along with their titles.
 * If the video has an embed URL, it displays an iframe with the video.
 * Otherwise, it displays an img with the thumbnail.
 * The component also includes a "Coming soon" message for the videos section if there are no videos.
 */
export default function PGAPage() {
  return (
    <div className="page-wrapper">
      <PageHeader
        tag="Performance Group"
        title="People Generally Asian"
        subtitle="PGA is ASA's very own dance and performance group — bringing energy, talent, and culture to the URI stage."
      />
      <hr />

      {/* About PGA */}
      <section className="pga-about fade-up fade-up-1">
        <p>
          <strong>People Generally Asian (PGA)</strong> is the dance and performance arm of ASA at URI.
          Our members come together to learn, rehearse, and perform choreography rooted in Asian and
          Asian-American culture. From K-pop covers to original routines, PGA celebrates artistry and
          community on stage.
        </p>
      </section>

      {/* Leaders */}
      <section className="pga-leaders-section fade-up fade-up-2">
        <h2 className="section-title">Meet the Leaders</h2>
        <div className="pga-leaders-grid">
          {pgaLeaders.map(leader => (
            <div key={leader.name} className="pga-leader-card">
              <div className="pga-leader-img-wrap">
                <img
                  src={leader.imageSrc}
                  alt={leader.name}
                  onError={e => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=152336&color=f0c040&size=200`
                  }}
                />
              </div>
              <div className="pga-leader-body">
                <h3>{leader.name}</h3>
                <span className="eboard-role">{leader.role}</span>
                <p>{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Videos */}
      <section className="pga-videos-section fade-up fade-up-3">
        <h2 className="section-title">Performances</h2>
        <div className="pga-videos-grid">
          {pgaVideos.map(video => (
            <div key={video.id} className="pga-video-card">
              {video.embedUrl ? (
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="pga-iframe"
                />
              ) : (
                <img src={video.thumbnail} alt={video.title} className="pga-thumb" />
              )}
              <p className="pga-video-title">{video.title}</p>
            </div>
          ))}
        </div>
        <p className="pga-coming-soon">
          More videos coming soon — follow us on <a href="/socials">social media</a> for updates! 🎬
        </p>
      </section>
    </div>
  )
}
