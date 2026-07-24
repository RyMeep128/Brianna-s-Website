import type { ElementType, ReactNode } from 'react'

interface TextProps {
  as?: ElementType
  variant?: 'display' | 'heading' | 'body' | 'small' | 'eyebrow'
  children: ReactNode
  className?: string
}

export function Text({
  as: Component = 'p',
  variant = 'body',
  children,
  className = '',
}: TextProps) {
  return (
    <Component className={`text text--${variant} ${className}`.trim()}>
      {children}
    </Component>
  )
}
