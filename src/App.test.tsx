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
      screen.getByRole('link', { name: /material studies no\. 01/i }),
    ).toHaveAttribute('href', '/projects/material-studies')
  })

  it('renders project sections in their declared order', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/projects/material-studies']}>
        <App />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /material studies/i,
      }),
    ).toBeVisible()
    const sectionIds = [
      'opening-statement',
      'hero-artwork',
      'editorial-spread',
      'quiet-pause',
      'paired-details',
      'process',
      'closing-image',
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
