import { Link, NavLink } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Brianna, home">
        <img
          src="/assets/branding/temp_briannaLogo.png"
          alt="Brianna Janean"
        />
      </Link>
      <nav aria-label="Primary navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects/flare-app-design">Flare App Design</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects" end>Projects</NavLink>
      </nav>
    </header>
  )
}
