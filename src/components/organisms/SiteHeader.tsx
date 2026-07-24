import { Link, NavLink } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Brianna, home">
        <span>Brianna</span>
        <em>Janean</em>
      </Link>
      <nav aria-label="Primary navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects/flare-app-design">Flare App Design</NavLink>
        <span className="nav-preview" title="Project assets coming later">
          Wild Thing Rebrand
        </span>
        <span className="nav-preview" title="More projects coming later">
          More
        </span>
      </nav>
    </header>
  )
}
