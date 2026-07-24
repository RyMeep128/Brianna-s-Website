import { describe, expect, it } from 'vitest'
import { getNextProject, getProjectBySlug, projects } from '.'

describe('project registry', () => {
  it('lists and resolves the example project by slug', () => {
    expect(projects.map((project) => project.slug)).toContain('flare-app-design')
    expect(getProjectBySlug('flare-app-design')?.title).toBe('Flare App Design')
  })

  it('allows optional credits and captions to be absent', () => {
    expect(
      projects.every((project) =>
        project.sections.every((section) =>
          section.type === 'spacer' ? true : Boolean(section.id),
        ),
      ),
    ).toBe(true)
  })

  it('does not offer a next project when only one project exists', () => {
    expect(getNextProject('flare-app-design')).toBeUndefined()
  })
})
