import { Route, Routes, useLocation } from 'react-router-dom'
import { SiteHeader } from './components/organisms/SiteHeader'
import { SiteFooter } from './components/organisms/SiteFooter'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'

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
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}
