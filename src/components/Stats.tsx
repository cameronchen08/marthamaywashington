import { useCounter, formatStatNumber } from '../hooks/useCounter'

interface StatData {
  target: number
  label: string
}

const stats: StatData[] = [
  { target: 2670, label: 'Followers' },
  { target: 422, label: 'Posts' },
  { target: 100, label: '% Approval Rating' },
  { target: 312, label: 'Treats Reviewed' },
  { target: 5000, label: 'Smiles Created' },
]

function StatItem({ target, label }: StatData) {
  const { ref, value } = useCounter(target)
  return (
    <div className="stat-item">
      <span ref={ref} className="stat-number">{formatStatNumber(value)}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-grid">
        {stats.map(s => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </div>
  )
}
