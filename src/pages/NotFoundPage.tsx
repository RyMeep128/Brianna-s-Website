import { LinkButton } from '../components/atoms/LinkButton'

export function NotFoundPage() {
  return (
    <main id="main-content" className="not-found">
      <p className="text text--eyebrow">404</p>
      <h1 className="text text--display">That page isn’t part of the portfolio.</h1>
      <LinkButton to="/" variant="outlined">
        Return to selected work
      </LinkButton>
    </main>
  )
}
