import { Caption } from '../atoms/Caption'
import { Media } from '../atoms/Media'
import type { MediaAsset, MediaFit } from '../../types/project'

export function LabeledMedia({
  media,
  fit,
}: {
  media: MediaAsset
  fit?: MediaFit
}) {
  return (
    <figure className="labeled-media">
      <Media media={media} fit={fit} />
      {media.caption && <Caption>{media.caption}</Caption>}
    </figure>
  )
}
