const LINKS = [
  {
    label: 'Email',
    value: 'salcedojm.dev@gmail.com',
    href: 'mailto:salcedojm.dev@gmail.com',
  },
  { label: 'Phone', value: '+63 945 891 5937', href: 'tel:+639458915937' },
  { label: 'Location', value: 'Quezon City, Philippines', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-inner">
        <div className="section-head" style={{ marginBottom: 32 }}>
          <span className="eyebrow">contact</span>
          <h2>Let's talk</h2>
        </div>

        <div className="contact-links">
          {LINKS.map((l) => {
            const Tag = l.href === '#' ? 'div' : 'a'
            return (
              <Tag key={l.label} href={l.href === '#' ? undefined : l.href} className="contact-link">
                <span className="contact-label">{l.label}</span>
                <span className="contact-value">{l.value}</span>
              </Tag>
            )
          })}
        </div>
      </div>

      <style>{`
        .contact-links {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
        }
        .contact-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 4px;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          color: var(--text);
          transition: padding-left 0.2s ease, color 0.2s ease;
        }
        .contact-link:hover {
          padding-left: 12px;
          color: var(--accent-2);
        }
        .contact-label {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-faint);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .contact-value {
          font-size: 16px;
          font-family: var(--font-display);
        }
      `}</style>
    </section>
  )
}
