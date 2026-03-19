import { useFadeIn } from '../hooks/useFadeIn'

interface Achievement {
  year: string
  icon: string
  title: string
  desc: string
}

const achievements: Achievement[] = [
  { year: '2024', icon: '🏆', title: 'Scentwork Superstar', desc: 'Accomplished in nose work — which is just professional treat-finding, but can alert to birch, anise, cardamom, and clove.' },
  { year: '2020', icon: '🛍️', title: 'Brand Ambassador', desc: 'Featured model and ambassador for Sassy Woof and DJANGO Brand. Use discount code MARTHA for 10% off sitewide.' },
  { year: '2025', icon: '🎿', title: 'Alpentykes Yurt Dog', desc: 'Official emotional support ski dog of the Alpentykes Yurt. Rides in a backpack while mom coaches young skiers. ' },
  { year: '2023', icon: '🥾', title: 'Best Hiking Companion', desc: 'Completed many advanced WA state trails on legs that are, statistically speaking, too short for any of it.' },
  { year: '2026', icon: '🏃', title: 'Dachshund Race Champion', desc: 'Winner of Little Stumps Racing University of Washington vs Michigan State Mens Basketball Halftime Race.' },
  { year: '2020', icon: '💖', title: 'IVDD Awareness Ambassador', desc: 'Promotes dachshund athletics and a healthy lifestyle to bring awareness to spinal health in long dogs everywhere.' },
]

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  const ref = useFadeIn<HTMLDivElement>(index * 80)
  return (
    <div ref={ref} className="achievement-card fade-in">
      <div className="achievement-year">{item.year}</div>
      <div className="achievement-icon">{item.icon}</div>
      <div className="achievement-title">{item.title}</div>
      <p className="achievement-desc">{item.desc}</p>
    </div>
  )
}

export default function Achievements() {
  const headerRef = useFadeIn<HTMLDivElement>()

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-inner">
        <div ref={headerRef} className="achievements-header fade-in">
          <div className="section-label">Accolades & Milestones</div>
          <h2 className="section-title">Hall of Fame</h2>
          <p className="section-desc">A distinguished career. An unbothered queen. Here are the receipts.</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
