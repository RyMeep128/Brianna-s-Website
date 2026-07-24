import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectIntroduction } from '../components/organisms/ProjectIntroduction'
import { ProjectNavigation } from '../components/organisms/ProjectNavigation'
import { ProjectSections } from '../components/organisms/ProjectSections'
import { getNextProject, getProjectBySlug } from '../content/projects'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    if (project) document.title = `${project.title} — Brianna`
    return () => {
      document.title = 'Brianna — Art & Design'
    }
  }, [project])

  if (!project) return <NotFoundPage />

  return (
    <main id="main-content">
      <ProjectIntroduction project={project} />
      <ProjectSections sections={project.sections} />
      <ProjectNavigation nextProject={getNextProject(project.slug)} />
    </main>
  )
}
