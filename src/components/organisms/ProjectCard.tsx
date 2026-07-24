import { Link } from 'react-router-dom'
import type { Project } from '../../types/project'
import { Media } from '../atoms/Media'
import { Text } from '../atoms/Text'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`}>
        <Media media={project.cover} />
        <div className="project-card__label">
          <div>
            <Text as="h2" variant="heading">
              {project.title}
            </Text>
            <Text variant="small">{project.disciplines.join(' · ')}</Text>
          </div>
          <Text variant="small">{project.year}</Text>
        </div>
      </Link>
    </article>
  )
}
