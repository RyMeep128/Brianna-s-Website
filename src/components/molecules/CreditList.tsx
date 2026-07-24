import type { ProjectCredit } from '../../types/project'

export function CreditList({ credits }: { credits: ProjectCredit[] }) {
  return (
    <dl className="credit-list">
      {credits.map((credit) => (
        <div key={`${credit.role}-${credit.name}`}>
          <dt>{credit.role}</dt>
          <dd>{credit.name}</dd>
        </div>
      ))}
    </dl>
  )
}
