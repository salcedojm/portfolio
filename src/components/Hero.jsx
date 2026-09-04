import { useEffect, useState } from 'react'

const ROLES = ['Full-Stack Developer', 'DevOps Engineer', 'Mobile App Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    const speed = deleting ? 40 : 70
    const pause = 1400

    if (!deleting && typed === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && typed === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
      return
    }

    const t = setTimeout(() => {
      setTyped((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      )
    }, speed)
    return () => clearTimeout(t)
  }, [typed, deleting, roleIndex])

  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          {/* <span className="eyebrow">available for work</span> */}
          <h1 className="hero-title">
            John Marie Salcedo
            <span className="hero-role">
              {typed}
              <span className="cursor-blink">|</span>
            </span>
          </h1>
          <p className="hero-desc">
            Full-stack developer based in Quezon City, Philippines, building scalable web and
            mobile applications across fintech, government, and e-wallet platforms — with Python,
            PHP, React, React Native, and AWS.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#skills">
              View skills
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="tdot" style={{ background: '#ff5f56' }} />
            <span className="tdot" style={{ background: '#ffbd2e' }} />
            <span className="tdot" style={{ background: '#27c93f' }} />
            <span className="terminal-title">about-me.sh</span>
          </div>
          <div className="terminal-body">
            <p>
              <span className="prompt">$</span> whoami
            </p>
            <p className="out">john-marie-salcedo</p>
            <p>
              <span className="prompt">$</span> cat role.txt
            </p>
            <p className="out out-role">{typed || '\u00a0'}</p>
            <p>
              <span className="prompt">$</span> ls focus/
            </p>
            <p className="out">web/ mobile/ cloud/ devops/</p>
            <p>
              <span className="prompt">$</span> <span className="cursor-blink">▍</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 120px;
          padding-bottom: 100px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }
        .hero-title {
          font-size: clamp(38px, 6vw, 60px);
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hero-role {
          font-family: var(--font-mono);
          font-size: clamp(16px, 2.4vw, 22px);
          color: var(--accent-2);
          font-weight: 500;
          min-height: 1.4em;
        }
        .hero-desc {
          margin-top: 22px;
          max-width: 480px;
          font-size: 16px;
        }
        .hero-actions {
          margin-top: 32px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .terminal {
          background: var(--surface);
          border: 1px solid var(--border-strong);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 80px -30px rgba(86, 101, 232, 0.25);
        }
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--surface-2);
          border-bottom: 1px solid var(--border);
        }
        .tdot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .terminal-title {
          margin-left: 10px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-faint);
        }
        .terminal-body {
          padding: 22px 20px;
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.9;
        }
        .terminal-body p {
          margin: 0;
          color: var(--text-muted);
        }
        .prompt {
          color: var(--accent-2);
          margin-right: 8px;
        }
        .out {
          color: var(--text);
          padding-left: 20px;
        }
        .out-role {
          min-height: 1.9em;
        }
        .cursor-blink {
          animation: blink 1.1s steps(1) infinite;
          color: var(--accent-2);
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
