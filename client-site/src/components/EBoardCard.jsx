import { useState } from 'react'
import './EBoardCard.css'

/**
 * This component will display the image of the EBoard Member & their bio
 * Props: name, role, imageSrc, and bio
 * Uses the expanded state to toggle the bio
 */

export default function EBoardCard({ name, role, imageSrc, bio }) {
    const [expanded, setExpanded] = useState(false)

    const preview = bio.length > 120 ? bio.slice(0, 120) + 'Show more...' : bio

    // we return here
    return (
        <div className="eboard-card fade-up">
            <div className="eboard-img-wrap">
                <img
                    src={imageSrc}
                    alt={name}
                    /* AI gave me this API idea as a template :)
                    Claude AI if we're being specific */
                    onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=152336&color=f0c040&size=200` }}
                />
            </div>
            <div className="eboard-body">
                <h3 className="eboard-name">{name}</h3>
                {role && <span className="eboard-role">{role}</span>}
                <p className="eboard-bio">{expanded ? bio : preview}</p>
                {bio.length > 120 && (
                  <button className="toggle-bio" onClick={() => setExpanded(p => !p)}>
                    {expanded ? 'Show less ↑' : 'Read more ↓'}
                  </button>
                )}
            </div>
        </div>
    )
}