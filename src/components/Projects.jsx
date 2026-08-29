const PLACEHOLDERS = [
  {
    name: 'Project One',
    desc: 'Placeholder description. Swap in a real project once it is ready to share.',
    tags: ['tag', 'tag'],
  },
  {
    name: 'Project Two',
    desc: 'Placeholder description. Swap in a real project once it is ready to share.',
    tags: ['tag', 'tag'],
  },
  {
    name: 'Project Three',
    desc: 'Placeholder description. Swap in a real project once it is ready to share.',
    tags: ['tag', 'tag'],
  },
]

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">work</span>
          <h2>Selected projects</h2>
          <p>Placeholder cards — replace with real projects and links when ready.</p>
        </div>

        <div className="project-grid">
          {PLACEHOLDERS.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-thumb">
                <span>placeholder</span>
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .project-card {
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          background: var(--surface);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .project-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-3px);
        }
        .project-thumb {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: repeating-linear-gradient(
            135deg,
            var(--surface-2),
            var(--surface-2) 10px,
            var(--surface) 10px,
            var(--surface) 20px
          );
          color: var(--text-faint);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .project-body {
          padding: 22px;
        }
        .project-body h3 {
          font-size: 18px;
          margin-bottom: 8px;
        }
        .project-body p {
          font-size: 14px;
          margin: 0 0 16px;
        }
        .project-tags {
          display: flex;
          gap: 8px;
        }
        .project-tags span {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 4px 9px;
          border-radius: 999px;
          border: 1px solid var(--border-strong);
          color: var(--text-muted);
        }
      `}</style>
    </section>
  )
}
