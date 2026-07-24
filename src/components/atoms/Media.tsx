import type { CSSProperties } from 'react'
import type { MediaAsset, MediaFit } from '../../types/project'

interface MediaProps {
  media: MediaAsset
  fit?: MediaFit
  loading?: 'eager' | 'lazy'
}

export function Media({ media, fit = 'cover', loading = 'lazy' }: MediaProps) {
  const classes = [
    'media',
    `media--${media.aspectRatio ?? 'landscape'}`,
    !media.src && `media--placeholder media--${media.placeholder ?? 'paper'}`,
  ]
    .filter(Boolean)
    .join(' ')

  if (media.src) {
    return (
      <img
        className={classes}
        src={media.src}
        alt={media.alt}
        loading={loading}
        style={{ objectFit: fit } as CSSProperties}
      />
    )
  }

  return (
    <div
      className={classes}
      role="img"
      aria-label={media.alt}
      data-placeholder-label="Sample artwork"
    >
      <span aria-hidden="true">Sample artwork</span>
    </div>
  )
}
