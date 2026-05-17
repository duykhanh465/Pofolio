export default function Header() {
  return (
    <header className="nav reveal">
      <div className="logo">Pofolio</div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="btn ghost" href="mailto:hello@pofolio.dev">
        Contact
      </a>
    </header>
  )
}
