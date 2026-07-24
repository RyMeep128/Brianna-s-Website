import type {
  Background,
  ContentWidth,
  ProjectSection,
  SectionSpacing,
} from '../../types/project'
import { Media } from '../atoms/Media'
import { Spacer } from '../atoms/Spacer'
import { Text } from '../atoms/Text'
import { LabeledMedia } from '../molecules/LabeledMedia'

function sectionClassName(section: ProjectSection) {
  const width: ContentWidth = section.width ?? 'standard'
  const before: SectionSpacing = section.spacingBefore ?? 'medium'
  const after: SectionSpacing = section.spacingAfter ?? 'medium'
  const background: Background = section.background ?? 'paper'

  return [
    'project-section',
    `content-width content-width--${width}`,
    `align--${section.align ?? 'start'}`,
    `space-before--${before}`,
    `space-after--${after}`,
    `background--${background}`,
  ].join(' ')
}

function TextBlock({
  heading,
  body,
}: {
  heading?: string
  body: string[]
}) {
  return (
    <div className="prose">
      {heading && (
        <Text as="h2" variant="heading">
          {heading}
        </Text>
      )}
      {body.map((paragraph) => (
        <Text key={paragraph}>{paragraph}</Text>
      ))}
    </div>
  )
}

export function ProjectSections({
  sections,
}: {
  sections: ProjectSection[]
}) {
  return (
    <div className="project-sections">
      {sections.map((section) => {
        if (section.type === 'spacer') {
          return (
            <div key={section.id} data-section-id={section.id}>
              <Spacer size={section.size} />
            </div>
          )
        }

        if (section.type === 'text') {
          return (
            <section
              className={`${sectionClassName(section)} text-section`}
              data-section-id={section.id}
              key={section.id}
            >
              {section.eyebrow && (
                <Text variant="eyebrow">{section.eyebrow}</Text>
              )}
              <TextBlock heading={section.heading} body={section.body} />
            </section>
          )
        }

        if (section.type === 'fullBleedMedia') {
          return (
            <section
              className={sectionClassName(section)}
              data-section-id={section.id}
              key={section.id}
            >
              <LabeledMedia media={section.media} fit={section.fit} />
            </section>
          )
        }

        if (section.type === 'mediaWithCaption') {
          return (
            <section
              className={`${sectionClassName(section)} media-caption media-caption--${section.captionPosition ?? 'below'}`}
              data-section-id={section.id}
              key={section.id}
            >
              <LabeledMedia media={section.media} fit={section.fit} />
            </section>
          )
        }

        if (section.type === 'mediaGrid') {
          return (
            <section
              className={`${sectionClassName(section)} media-grid gap--${section.gap ?? 'small'}`}
              data-section-id={section.id}
              style={{ '--columns': section.columns ?? 2 } as React.CSSProperties}
              key={section.id}
            >
              {section.media.map((media, index) => (
                <LabeledMedia
                  key={`${media.alt}-${index}`}
                  media={media}
                  fit={section.fit}
                />
              ))}
            </section>
          )
        }

        if (section.type === 'splitMediaText') {
          return (
            <section
              className={`${sectionClassName(section)} split-layout split-layout--${section.mediaPosition ?? 'left'} split-layout--${section.ratio ?? '1:1'}`}
              data-section-id={section.id}
              key={section.id}
            >
              <LabeledMedia media={section.media} fit={section.fit} />
              <TextBlock heading={section.heading} body={section.body} />
            </section>
          )
        }

        return (
          <section
            className={`${sectionClassName(section)} process-gallery`}
            data-section-id={section.id}
            key={section.id}
          >
            <header>
              <Text as="h2" variant="heading">
                {section.heading}
              </Text>
              {section.introduction && <Text>{section.introduction}</Text>}
            </header>
            <div
              className="process-gallery__grid"
              style={{ '--columns': section.columns ?? 3 } as React.CSSProperties}
            >
              {section.media.map((media, index) => (
                <Media
                  key={`${media.alt}-${index}`}
                  media={media}
                  fit={section.fit}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
