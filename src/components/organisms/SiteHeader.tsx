import { Link, NavLink } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Brianna, home">
        Brianna
      </Link>
      <nav aria-label="Primary navigation">
        <NavLink to="/" end>
          Selected work
        </NavLink>
      </nav>
    </header>
  )
}
