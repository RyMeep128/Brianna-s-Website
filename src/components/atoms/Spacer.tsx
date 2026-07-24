import type { SectionSpacing } from '../../types/project'

export function Spacer({
  size,
}: {
  size: Exclude<SectionSpacing, 'none'>
}) {
  return <div className={`spacer spacer--${size}`} aria-hidden="true" />
}
