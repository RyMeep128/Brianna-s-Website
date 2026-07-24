import { Route, Routes } from 'react-router-dom'
import { SiteHeader } from './components/organisms/SiteHeader'
import { SiteFooter } from './components/organisms/SiteFooter'
import { NotFoundPage } from './pages/NotFoundPage'
import { PortfolioIndexPage } from './pages/PortfolioIndexPage'
import { ProjectPage } from './pages/ProjectPage'

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<PortfolioIndexPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </>
  )
}
