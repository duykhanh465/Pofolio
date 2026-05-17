export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-copy">
        <p className="eyebrow">Designer • Developer</p>
        <h1>Duy Khanh</h1>
        <p className="role">Front-End Engineer</p>
        <p className="lead">
          Crafting modern interfaces with crisp UI, motion, and strong
          storytelling for digital products.
        </p>
        <div className="cta-row">
          <a className="btn primary" href="#contact">
            Contact
          </a>
          <a className="btn ghost" href="#projects">
            View Projects
          </a>
        </div>
        <div className="hero-card glass">
          <h3>About Me</h3>
          <p>
            Hi, my name is Khanh. I am a third-year student at Ho Chi Minh City University of Transport.
          </p>
        </div>
      </div>
      <div className="hero-art">
        <div className="orb" />
        <div className="orb secondary" />
        <div className="hero-panel glass">
          <h3>Slogan</h3>
          <p>No gain No pain</p>
          <div className="divider" />
          <div className="stats">
            <div>
              <span className="label">Experience</span>
              <span className="value">0 years</span>
            </div>
            <div>
              <span className="label">Projects</span>
              <span className="value">6+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
