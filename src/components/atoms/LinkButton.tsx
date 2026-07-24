import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LinkButtonProps {
  to: string
  children: ReactNode
  variant?: 'text' | 'outlined'
}

export function LinkButton({
  to,
  children,
  variant = 'text',
}: LinkButtonProps) {
  return (
    <Link className={`link-button link-button--${variant}`} to={to}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  )
}
