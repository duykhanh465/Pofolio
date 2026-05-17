import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Header from './Header'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'
import TerminalSection from './TerminalSection'

export default function AppSections() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <AboutSection />
      <TerminalSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
