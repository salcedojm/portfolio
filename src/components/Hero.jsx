import { useEffect, useState } from 'react'
import meImg from '../assets/me.png'

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
          <span className="eyebrow">available for work</span>
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

        <div className="hero-visual">
          <div className="photo-frame">
            <img
              className="photo"
              src={meImg}
              width="663"
              height="1000"
              alt="John Marie Salcedo"
            />
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
              <p className="out">{typed || ' '}</p>
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
      </div>

      <style>{`
        .hero {
          padding-top: 120px;
          padding-bottom: 100px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
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
        .hero-visual {
          position: relative;
          padding-bottom: 150px;
        }
        .photo-frame {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .photo-frame::before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 105%;
          aspect-ratio: 1;
          transform: translateX(-50%);
          background: radial-gradient(
            circle at 50% 55%,
            var(--accent-glow) 0%,
            rgba(86, 101, 232, 0.08) 45%,
            transparent 70%
          );
        }
        .photo-frame::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 78%;
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, var(--border-strong), transparent);
        }
        .photo {
          position: relative;
          height: 520px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: bottom;
          filter: drop-shadow(0 24px 45px rgba(0, 0, 0, 0.55));
          -webkit-mask-image: linear-gradient(180deg, #000 95%, transparent 100%);
          mask-image: linear-gradient(180deg, #000 95%, transparent 100%);
        }
        .hero-visual .terminal {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 92%;
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
          .hero-visual {
            padding-bottom: 0;
            display: grid;
            gap: 28px;
          }
          .hero-visual .terminal {
            position: static;
            width: 100%;
          }
          .photo {
            height: 380px;
          }
        }
      `}</style>
    </section>
  )
}
