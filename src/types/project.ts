export type Alignment = 'start' | 'center' | 'end'
export type ContentWidth = 'narrow' | 'standard' | 'wide' | 'full'
export type SectionSpacing = 'none' | 'small' | 'medium' | 'large' | 'xlarge'
export type Background = 'paper' | 'ink' | 'mist' | 'accent'
export type MediaFit = 'cover' | 'contain'
export type ColumnRatio = '1:1' | '2:1' | '1:2' | '3:2' | '2:3'

export interface MediaAsset {
  src?: string
  alt: string
  caption?: string
  placeholder?: 'ochre' | 'cobalt' | 'coral' | 'charcoal' | 'paper'
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
}

interface SectionLayout {
  id: string
  width?: ContentWidth
  align?: Alignment
  spacingBefore?: SectionSpacing
  spacingAfter?: SectionSpacing
  background?: Background
}

export interface TextSection extends SectionLayout {
  type: 'text'
  eyebrow?: string
  heading?: string
  body: string[]
}

export interface FullBleedMediaSection extends SectionLayout {
  type: 'fullBleedMedia'
  media: MediaAsset
  fit?: MediaFit
}

export interface MediaWithCaptionSection extends SectionLayout {
  type: 'mediaWithCaption'
  media: MediaAsset
  captionPosition?: 'below' | 'side'
  fit?: MediaFit
}

export interface MediaGridSection extends SectionLayout {
  type: 'mediaGrid'
  media: MediaAsset[]
  columns?: 2 | 3 | 4
  gap?: SectionSpacing
  fit?: MediaFit
}

export interface SplitMediaTextSection extends SectionLayout {
  type: 'splitMediaText'
  media: MediaAsset
  heading?: string
  body: string[]
  mediaPosition?: 'left' | 'right'
  ratio?: ColumnRatio
  fit?: MediaFit
}

export interface ProcessGallerySection extends SectionLayout {
  type: 'processGallery'
  heading: string
  introduction?: string
  media: MediaAsset[]
  columns?: 2 | 3
  fit?: MediaFit
}

export interface SpacerSection extends SectionLayout {
  type: 'spacer'
  size: Exclude<SectionSpacing, 'none'>
}

export type ProjectSection =
  | TextSection
  | FullBleedMediaSection
  | MediaWithCaptionSection
  | MediaGridSection
  | SplitMediaTextSection
  | ProcessGallerySection
  | SpacerSection

export interface ProjectCredit {
  role: string
  name: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  year: string
  disciplines: string[]
  cover: MediaAsset
  credits?: ProjectCredit[]
  sections: ProjectSection[]
  fictional?: boolean
}
