export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <span className="eyebrow">about</span>
          <h2>A bit more about me</h2>
        </div>
        <p className="about-text">
          I've spent the past several years building web and mobile applications across fintech,
          government, and e-wallet platforms — from tax-filing automation to serverless payment
          systems. Along the way I've picked up a growing focus on cloud infrastructure and
          DevOps, currently supporting Google Cloud Platform products while continuing to
          build with React, React Native, and Python. I hold a BS in Computer
          Science and am currently completing a Master's in Information Technology.
        </p>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 48px;
          align-items: start;
        }
        .about-text {
          font-size: 17px;
          max-width: 560px;
        }
        @media (max-width: 700px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
