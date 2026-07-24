import { ProjectCard } from '../components/organisms/ProjectCard'
import { projects } from '../content/projects'

export function PortfolioIndexPage() {
  return (
    <main id="main-content" className="portfolio-index">
      <header className="portfolio-index__intro">
        <p className="text text--eyebrow">Portfolio foundation</p>
        <h1 className="portfolio-index__title">
          Art, design, and close attention.
        </h1>
        <p className="portfolio-index__note">
          A flexible home for Brianna’s work. This first project is a fictional
          example of the layout system.
        </p>
      </header>
      <section className="project-list" aria-labelledby="selected-work">
        <h2 className="visually-hidden" id="selected-work">
          Selected work
        </h2>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  )
}
