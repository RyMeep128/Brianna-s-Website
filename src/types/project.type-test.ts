import type { ProjectSection } from './project'

const validSection: ProjectSection = {
  id: 'valid-grid',
  type: 'mediaGrid',
  columns: 3,
  media: [{ alt: 'Valid placeholder', placeholder: 'orange' }],
}

const invalidSection: ProjectSection = {
  id: 'invalid-grid',
  type: 'mediaGrid',
  // @ts-expect-error Media grids only support two, three, or four columns.
  columns: 5,
  media: [{ alt: 'Invalid placeholder', placeholder: 'cream' }],
}

void validSection
void invalidSection
