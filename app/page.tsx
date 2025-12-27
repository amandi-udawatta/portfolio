/**
 * Main Portfolio Page
 * Single-page layout with all sections
 */

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AwardsSection from "@/components/awards-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Header Navigation */}
      <Header />

      {/* Hero Section with 3D Animation */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Education Section */}
      <EducationSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills & Achievements Section */}
      <SkillsSection />

      {/* Competitions & Awards Section */}
      <AwardsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
