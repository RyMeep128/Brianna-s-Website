import type { Project } from '../../types/project'
import { flareAppDesign } from './flare-app-design'

/**
 * Register every project here. Its array position controls the portfolio order
 * and next-project navigation.
 */
export const projects = [flareAppDesign] satisfies Project[]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  if (projects.length < 2) return undefined
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return undefined
  return projects[(index + 1) % projects.length]
}
