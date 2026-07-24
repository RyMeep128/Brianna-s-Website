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
      type: 'splitMediaText',
      media: {
        src: '/assets/projects/flare-app-design/connectonflare3.avif',
        alt: 'Flare app community interface shown on a mobile phone',
        aspectRatio: 'wide',
      },
      heading: 'Welcome to Flare!',
      body: [
        'Flare is an app designed to help people living with autoimmune conditions find reliable resources, track their health, and connect with others who understand their experiences. The name refers both to autoimmune flare-ups and to emergency flares, representing guidance and support during difficult moments.',
        'The app would provide resources for a variety of autoimmune conditions, helping users feel recognized rather than overlooked. These resources would include articles about managing the physical, mental, and social challenges associated with chronic illness.',
        'Flare would also offer private community spaces available exclusively to app users, allowing people to form connections, share experiences, and support one another. A built-in journal would help users record symptoms, potential triggers, treatments, and changes over time.',
        'Finally, the app would include a customizable AI-powered food scanner. Users could configure the scanner around their specific allergies, dietary restrictions, and known trigger foods. By scanning ingredient lists or food labels, the app could identify potential concerns and help users make more informed decisions.',
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
        caption: 'We are approachable and have an Easy to Navigate UI',
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
        caption: 'we take Safety Seriously.',
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
      heading: 'We use color, gradients, and texture...',
      body: [
        'to show complicated emotions associated with Autoimmune Conditions.',
      ],
      width: 'narrow',
      spacingBefore: 'xlarge',
      spacingAfter: 'xlarge',
    },
  ],
}
