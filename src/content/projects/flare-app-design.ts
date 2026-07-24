import type { Project } from '../../types/project'

export const flareAppDesign: Project = {
  slug: 'flare-app-design',
  title: 'Flare App Design',
  summary:
    'Flare is an app designed to help people living with autoimmune conditions find reliable resources, track their health, and connect with others who understand their experiences.',
  year: '2026',
  disciplines: ['App Design', 'Brand Identity', 'UX/UI'],
  cover: {
    src: '/assets/projects/flare-app-design/SlideshowFlare.avif',
    alt: 'Flare identity cover introducing the autoimmune support community',
    aspectRatio: 'wide',
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
        src: '/assets/projects/flare-app-design/connectonflare3.avif',
        alt: 'Flare app community interface shown on a mobile phone',
        aspectRatio: 'wide',
      },
      heading: 'Connection without isolation',
      body: [
        'Private community spaces allow people to form connections, share experiences, and support one another. A built-in journal helps users record symptoms, potential triggers, treatments, and changes over time.',
      ],
      mediaPosition: 'left',
      ratio: '1:1',
      fit: 'contain',
      width: 'wide',
      background: 'accent',
      spacingAfter: 'xlarge',
    },
    {
      id: 'approachable-interface',
      type: 'mediaWithCaption',
      media: {
        src: '/assets/projects/flare-app-design/SlideshowFlare9.avif',
        alt: 'Flare interface demonstrating an approachable, easy-to-navigate experience',
        caption: 'Approachable and easy to navigate.',
        aspectRatio: 'wide',
      },
      width: 'full',
      background: 'paper',
      spacingAfter: 'xlarge',
    },
    {
      id: 'safety-interface',
      type: 'mediaWithCaption',
      media: {
        src: '/assets/projects/flare-app-design/SlideshowFlare11.avif',
        alt: 'Flare interface presenting safety and support features',
        caption: 'Safety is treated seriously.',
        aspectRatio: 'wide',
      },
      width: 'full',
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
        'Color, gradients, and texture help communicate the complex emotions associated with autoimmune conditions. A customizable AI-powered food scanner can be configured around specific allergies, dietary restrictions, and known trigger foods.',
      ],
      width: 'narrow',
      spacingBefore: 'xlarge',
      spacingAfter: 'xlarge',
    },
  ],
}
