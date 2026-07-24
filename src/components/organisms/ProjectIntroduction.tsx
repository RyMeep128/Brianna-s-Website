import type { Project } from '../../types/project'
import { Text } from '../atoms/Text'
import { CreditList } from '../molecules/CreditList'
import { ProjectMetadata } from '../molecules/ProjectMetadata'

export function ProjectIntroduction({ project }: { project: Project }) {
  return (
    <header className="project-introduction">
      {project.fictional && <p className="sample-flag">Fictional example</p>}
      <div className="project-introduction__hero">
        <Text variant="eyebrow">Hello!</Text>
        <Text as="h1" variant="display">We are Flare</Text>
        <Text as="p" variant="eyebrow">An autoimmune support community</Text>
      </div>
      <div className="project-introduction__details content-width content-width--wide">
        <div>
          <Text variant="eyebrow">{project.title}</Text>
          <Text variant="heading">{project.summary}</Text>
        </div>
        <div className="project-introduction__metadata">
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
