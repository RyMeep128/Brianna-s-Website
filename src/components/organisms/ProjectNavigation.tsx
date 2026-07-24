import type { Project } from '../../types/project'
import { LinkButton } from '../atoms/LinkButton'

export function ProjectNavigation({ nextProject }: { nextProject?: Project }) {
  return (
    <nav className="project-navigation" aria-label="Project navigation">
      <LinkButton to="/projects">All projects</LinkButton>
      {nextProject && (
        <LinkButton to={`/projects/${nextProject.slug}`} variant="outlined">
          Next: {nextProject.title}
        </LinkButton>
      )}
    </nav>
  )
}
