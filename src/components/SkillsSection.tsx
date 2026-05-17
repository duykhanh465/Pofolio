import { skillGroups } from '../data/portfolioData'

const iconMap: Record<string, string> = {
  Frontend:
    'M4 6h16v12H4V6Zm2 2v8h12V8H6Zm2 10h8v2H8v-2Z',
  Backend:
    'M6 6h12a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6Zm0 8h12a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6Z',
  Database:
    'M6 5c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 4c0 1.66 3.58 3 8 3s8-1.34 8-3v4c0 1.66-3.58 3-8 3s-8-1.34-8-3V9Zm0 8c0 1.66 3.58 3 8 3s8-1.34 8-3v2c0 1.66-3.58 3-8 3s-8-1.34-8-3v-2Z',
  'Tools & Others':
    'M12 3a2 2 0 0 1 2 2v2h2a2 2 0 1 1 0 4h-2v2a2 2 0 1 1-4 0v-2H8a2 2 0 1 1 0-4h2V5a2 2 0 0 1 2-2Z',
}

const getIconPath = (title: string) => iconMap[title] ?? iconMap['Tools & Others']

export default function SkillsSection() {
  return (
    <section className="section reveal" id="skills">
      <div className="section-title">
        <p className="eyebrow">Skills</p>
        <h2>Skills & Tools</h2>
      </div>
      <div className="skill-cards">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-header">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d={getIconPath(group.title)} />
                </svg>
              </div>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
