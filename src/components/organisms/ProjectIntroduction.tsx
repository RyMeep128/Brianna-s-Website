import type { Project } from '../../types/project'
import { Text } from '../atoms/Text'
import { CreditList } from '../molecules/CreditList'
import { ProjectMetadata } from '../molecules/ProjectMetadata'

export function ProjectIntroduction({ project }: { project: Project }) {
  return (
    <header className="project-introduction content-width content-width--wide">
      {project.fictional && <p className="sample-flag">Fictional example</p>}
      <Text as="h1" variant="display">
        {project.title}
      </Text>
      <div className="project-introduction__details">
        <Text variant="heading">{project.summary}</Text>
        <div>
          <ProjectMetadata
            year={project.year}
            disciplines={project.disciplines}
          />
          {project.credits && <CreditList credits={project.credits} />}
        </div>
      </div>
    </header>
  )
}
