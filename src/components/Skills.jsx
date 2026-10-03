const CATEGORIES = [
  {
    id: 'languages',
    label: 'languages',
    skills: ['JavaScript', 'Python', 'PHP', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'frontend',
    skills: ['React', 'React Native', 'Next.js', 'jQuery'],
  },
  {
    id: 'backend',
    label: 'backend',
    skills: ['Node.js', 'CodeIgniter', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'cloud',
    label: 'cloud & devops',
    skills: ['AWS (Lambda, Elastic Beanstalk, IAM)', 'Google Cloud Platform', 'CI/CD', 'Linux'],
  },
  {
    id: 'tools',
    label: 'tools & integrations',
    skills: ['Git', 'Jira', 'Stripe / Xendit', 'Google Vision API'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">skills</span>
          <h2>What I work with</h2>
          {/* <p>
            A snapshot of the languages, frameworks, and tools in regular rotation. Edit this list
            to match your own stack.
          </p> */}
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((cat, i) => (
            <div className="skill-card" key={cat.id}>
              <div className="skill-card-head">
                <span className="skill-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{cat.label}</h3>
              </div>
              <ul className="skill-list">
                {cat.skills.map((s) => (
                  <li key={s}>
                    <span className="tick">▸</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
        }
        .skill-card {
          background: var(--surface);
          padding: 28px 24px;
          transition: background 0.2s ease;
        }
        .skill-card:hover {
          background: var(--surface-2);
        }
        .skill-card-head {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 18px;
        }
        .skill-index {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent-2);
        }
        .skill-card h3 {
          font-size: 15px;
          font-family: var(--font-mono);
          font-weight: 500;
          color: var(--text);
          text-transform: lowercase;
        }
        .skill-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .skill-list li {
          font-size: 14.5px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .tick {
          color: var(--accent);
          font-size: 12px;
        }
      `}</style>
    </section>
  )
}
