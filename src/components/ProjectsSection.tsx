import { projects } from '../data/portfolioData'

export default function ProjectsSection() {
  return (
    <section className="section reveal" id="projects">
      <div className="section-title">
        <p className="eyebrow">Projects</p>
        <h2>Featured work</h2>
      </div>
      <div className="cards project-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.title}>
            <div className="project-thumb">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="card-header">
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="link-row">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
