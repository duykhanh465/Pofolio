export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-copy">
        <p className="eyebrow">Designer • Developer</p>
        <h1>Nguyen Dung</h1>
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
            Passionate about clean UI, interactive motion, and consistent design
            systems for scalable products.
          </p>
        </div>
      </div>
      <div className="hero-art">
        <div className="orb" />
        <div className="orb secondary" />
        <div className="hero-panel glass">
          <h3>Slogan</h3>
          <p>Build fast. Look sharp. Stay memorable.</p>
          <div className="divider" />
          <div className="stats">
            <div>
              <span className="label">Experience</span>
              <span className="value">3+ years</span>
            </div>
            <div>
              <span className="label">Projects</span>
              <span className="value">18+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
