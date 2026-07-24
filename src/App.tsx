import { Route, Routes, useLocation } from 'react-router-dom'
import { SiteHeader } from './components/organisms/SiteHeader'
import { SiteFooter } from './components/organisms/SiteFooter'
import { NotFoundPage } from './pages/NotFoundPage'
import { PortfolioIndexPage } from './pages/PortfolioIndexPage'
import { ProjectPage } from './pages/ProjectPage'
import { AboutPage, ProjectsPage } from './pages/BlankPage'

export function App() {
  const { pathname } = useLocation()
  const isFlareProject = pathname === '/projects/flare-app-design'

  return (
    <div
      className={`site-shell${isFlareProject ? ' site-shell--flare' : ''}`}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<PortfolioIndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}
