import './PageHeader.css'

// reusable page banner for all pages :)
// props: title, subtitle, accent (basically overriding the color)

export default function Header({ title, subtitle, accent}) {
    return (
        <div className="page-header fade-up">
            {accent && <span className="page-accent">{tag}</span>}
            <h1 className="header-title">{title}</h1>
            {subtitle && <p className="page-sub">{subtitle}</p>}
            <div className="header-bar" />
        </div>
    )
}