export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} John Marie Salcedo</span>
      </div>
      <style>{`
        .footer {
          padding: 32px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 13px;
          color: var(--text-faint);
        }
        .footer-mono {
          font-family: var(--font-mono);
        }
      `}</style>
    </footer>
  )
}
