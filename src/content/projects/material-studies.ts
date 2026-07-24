import type { Project } from '../../types/project'

export const materialStudies: Project = {
  slug: 'material-studies',
  title: 'Material Studies No. 01',
  summary:
    'A fictional identity study exploring how tactility, repetition, and imperfect systems can give a small publication its voice.',
  year: '2026',
  disciplines: ['Art Direction', 'Editorial Design', 'Print'],
  fictional: true,
  cover: {
    alt: 'Abstract cobalt and cream forms representing a fictional publication cover',
    placeholder: 'cobalt',
    aspectRatio: 'landscape',
  },
  credits: [
    { role: 'Art direction', name: 'Brianna (sample)' },
    { role: 'Photography', name: 'Placeholder imagery' },
  ],
  sections: [
    {
      id: 'opening-statement',
      type: 'text',
      eyebrow: 'The premise',
      heading: 'A system made to show its seams.',
      body: [
        'Material Studies is an imagined independent journal about process. Its visual language treats registration marks, crop lines, and paper edges as meaningful parts of the composition.',
        'This page demonstrates how one project can have its own pace and personality while staying inside a reusable portfolio system.',
      ],
      width: 'narrow',
      spacingBefore: 'xlarge',
      spacingAfter: 'large',
    },
    {
      id: 'hero-artwork',
      type: 'fullBleedMedia',
      media: {
        alt: 'Wide sample composition in ochre, coral, cream, and charcoal',
        caption: 'Sample key visual — replace with Brianna’s artwork.',
        placeholder: 'ochre',
        aspectRatio: 'wide',
      },
      width: 'full',
      spacingAfter: 'xlarge',
    },
    {
      id: 'editorial-spread',
      type: 'splitMediaText',
      heading: 'Pacing the story',
      body: [
        'A generous image field sits beside a compact note. On larger screens the asymmetrical columns create tension; on smaller screens they become a deliberate vertical sequence.',
      ],
      media: {
        alt: 'Tall coral sample composition standing in for an editorial spread',
        caption: 'Placeholder editorial spread',
        placeholder: 'coral',
        aspectRatio: 'portrait',
      },
      mediaPosition: 'left',
      ratio: '2:1',
      width: 'wide',
      spacingAfter: 'xlarge',
    },
    {
      id: 'quiet-pause',
      type: 'spacer',
      size: 'large',
    },
    {
      id: 'paired-details',
      type: 'mediaGrid',
      media: [
        {
          alt: 'Square charcoal sample detail with a circular paper shape',
          caption: 'Study A — scale and interruption',
          placeholder: 'charcoal',
          aspectRatio: 'square',
        },
        {
          alt: 'Square cream sample detail with a cobalt geometric form',
          caption: 'Study B — repetition and rhythm',
          placeholder: 'paper',
          aspectRatio: 'square',
        },
      ],
      columns: 2,
      gap: 'medium',
      width: 'wide',
      spacingAfter: 'xlarge',
    },
    {
      id: 'process',
      type: 'processGallery',
      heading: 'Process fragments',
      introduction:
        'Small artifacts can be arranged as evidence of exploration rather than polished outcomes.',
      media: [
        {
          alt: 'Cobalt process placeholder',
          placeholder: 'cobalt',
          aspectRatio: 'portrait',
        },
        {
          alt: 'Ochre process placeholder',
          placeholder: 'ochre',
          aspectRatio: 'portrait',
        },
        {
          alt: 'Coral process placeholder',
          placeholder: 'coral',
          aspectRatio: 'portrait',
        },
      ],
      columns: 3,
      width: 'wide',
      background: 'mist',
      spacingBefore: 'large',
      spacingAfter: 'large',
    },
    {
      id: 'closing-image',
      type: 'mediaWithCaption',
      media: {
        alt: 'Final wide charcoal placeholder artwork with a cream form',
        caption: 'End matter — a sample closing gesture.',
        placeholder: 'charcoal',
        aspectRatio: 'wide',
      },
      captionPosition: 'side',
      width: 'standard',
      align: 'end',
      spacingBefore: 'xlarge',
      spacingAfter: 'xlarge',
    },
  ],
}
