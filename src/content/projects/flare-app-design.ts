import type { Project } from '../../types/project'

export const flareAppDesign: Project = {
  slug: 'flare-app-design',
  title: 'Flare App Design',
  summary:
    'Flare is an app designed to help people living with autoimmune conditions find reliable resources, track their health, and connect with others who understand their experiences.',
  year: '2026',
  disciplines: ['App Design', 'Brand Identity', 'UX/UI'],
  cover: {
    alt: 'Flare App Design cover artwork to be added',
    placeholder: 'orange',
    aspectRatio: 'landscape',
  },
  credits: [
    { role: 'Design', name: 'Brianna Janean' },
  ],
  sections: [
    {
      id: 'welcome-to-flare',
      type: 'text',
      eyebrow: 'Welcome to Flare!',
      heading: 'Support designed around the whole experience.',
      body: [
        'The name refers both to autoimmune flare-ups and to emergency flares, representing guidance and support during difficult moments.',
        'The app provides resources for a variety of autoimmune conditions, helping users feel recognized rather than overlooked. These resources address the physical, mental, and social challenges associated with chronic illness.',
      ],
      width: 'narrow',
      spacingBefore: 'xlarge',
      spacingAfter: 'large',
      background: 'accent',
    },
    {
      id: 'community-screen',
      type: 'splitMediaText',
      media: {
        alt: 'Flare community screen artwork to be added',
        placeholder: 'white',
        aspectRatio: 'portrait',
      },
      heading: 'Connection without isolation',
      body: [
        'Private community spaces allow people to form connections, share experiences, and support one another. A built-in journal helps users record symptoms, potential triggers, treatments, and changes over time.',
      ],
      mediaPosition: 'left',
      ratio: '1:1',
      width: 'wide',
      background: 'accent',
      spacingAfter: 'xlarge',
    },
    {
      id: 'interface-details',
      type: 'mediaGrid',
      media: [
        {
          alt: 'Flare easy-to-navigate interface artwork to be added',
          caption: 'Approachable, easy-to-navigate UI',
          placeholder: 'cream',
          aspectRatio: 'square',
        },
        {
          alt: 'Flare safety feature artwork to be added',
          caption: 'Safety taken seriously',
          placeholder: 'orange',
          aspectRatio: 'square',
        },
      ],
      columns: 2,
      gap: 'medium',
      width: 'wide',
      background: 'paper',
      spacingAfter: 'xlarge',
    },
    {
      id: 'visual-language',
      type: 'processGallery',
      heading: 'Color, gradients, and texture',
      introduction:
        'A visual language created to communicate the complex emotions associated with autoimmune conditions.',
      media: [
        {
          alt: 'Flare color study artwork to be added',
          placeholder: 'orange',
          aspectRatio: 'portrait',
        },
        {
          alt: 'Flare gradient study artwork to be added',
          placeholder: 'cream',
          aspectRatio: 'portrait',
        },
        {
          alt: 'Flare texture study artwork to be added',
          placeholder: 'white',
          aspectRatio: 'portrait',
        },
      ],
      columns: 3,
      width: 'wide',
      background: 'accent',
      spacingBefore: 'large',
      spacingAfter: 'large',
    },
    {
      id: 'food-scanner',
      type: 'text',
      eyebrow: 'Practical support',
      heading: 'A scanner tailored to the individual.',
      body: [
        'A customizable AI-powered food scanner can be configured around specific allergies, dietary restrictions, and known trigger foods. Scanning ingredient lists helps identify potential concerns and supports more informed decisions.',
      ],
      width: 'narrow',
      spacingBefore: 'xlarge',
      spacingAfter: 'xlarge',
    },
  ],
}
