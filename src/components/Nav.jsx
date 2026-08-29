const LINKS = [
  { label: 'skills', href: '#skills' },
  // { label: 'work', href: '#work' }, // temporarily hidden
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">
          <span className="dot" />
          john-marie<span className="cursor-blink">_</span>
        </a>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary nav-cta" href="#contact">
          say hi
        </a>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(8, 9, 13, 0.75);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav-brand {
          font-family: var(--font-mono);
          font-size: 15px;
          text-decoration: none;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .cursor-blink {
          color: var(--accent-2);
          animation: blink 1.1s steps(1) infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .nav-links {
          display: flex;
          gap: 28px;
          font-family: var(--font-mono);
          font-size: 14px;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--text);
        }
        .nav-cta {
          padding: 8px 16px;
          font-size: 13px;
        }
        @media (max-width: 700px) {
          .nav-links { display: none; }
        }
      `}</style>
    </header>
  )
}
