import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { App } from './App'

Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true })

describe('portfolio routes', () => {
  it('lists the example project and links to its route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('link', { name: 'App Design' }),
    ).toHaveAttribute('href', '/projects/flare-app-design')
  })

  it('renders project sections in their declared order', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/projects/flare-app-design']}>
        <App />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /we are flare/i,
      }),
    ).toBeVisible()
    const sectionIds = [
      'welcome-to-flare',
      'community-screen',
      'interface-details',
      'visual-language',
      'food-scanner',
    ]
    const renderedIds = Array.from(
      container.querySelectorAll('.project-sections > *'),
    ).map((element) => element.getAttribute('data-section-id'))

    expect(renderedIds).toEqual(sectionIds)
  })

  it('renders a not-found page for an unknown project', () => {
    render(
      <MemoryRouter initialEntries={['/projects/not-real']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: /isn’t part/i })).toBeVisible()
  })
})
