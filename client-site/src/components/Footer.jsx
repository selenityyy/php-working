import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="inner-footer">
                <div className="footer-brand">
                    <span className="footer-badge">ASA</span>
                    <span>Asian Students Association at URI</span>
                </div>
                <div className="footer-contact">
                    <a href="mailto:asa@rhodysenate.org">asa@rhodysenate.org</a>
                </div>
                <p className="copy-footer">@ {year} Asian Students Association. All rights reserved.</p>
            </div>
        </footer>
    )
}