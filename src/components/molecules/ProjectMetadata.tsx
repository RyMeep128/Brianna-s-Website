import type { Project } from '../../types/project'

export function ProjectMetadata({
  year,
  disciplines,
}: Pick<Project, 'year' | 'disciplines'>) {
  return (
    <dl className="project-metadata">
      <div>
        <dt>Year</dt>
        <dd>{year}</dd>
      </div>
      <div>
        <dt>Disciplines</dt>
        <dd>{disciplines.join(', ')}</dd>
      </div>
    </dl>
  )
}
