import type { Project } from '../../types/project'
import { Text } from '../atoms/Text'
import { Media } from '../atoms/Media'
import { CreditList } from '../molecules/CreditList'
import { ProjectMetadata } from '../molecules/ProjectMetadata'

export function ProjectIntroduction({ project }: { project: Project }) {
  return (
    <header
      className="project-introduction"
      data-project-slug={project.slug}
    >
      {project.fictional && <p className="sample-flag">Fictional example</p>}
      <div className="project-introduction__hero">
        <h1 className="visually-hidden">{project.title}</h1>
        {project.slug === 'flare-app-design' && (
          <div className="flare-hero__type" aria-hidden="true">
            <span className="flare-hero__hello">Hello!</span>
            <span className="flare-hero__we-are">We are</span>
            <span className="flare-hero__community">
              An AutoImmune Support Community
            </span>
          </div>
        )}
        <Media media={project.cover} fit="contain" loading="eager" />
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
