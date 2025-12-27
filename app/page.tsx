"use client"

import { motion } from "framer-motion"
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

// 1. Create a Reusable Wrapper Component
// This handles the "Reveal on Scroll" animation for any section passed to it
function SectionWrapper({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 100 }} // Start invisible and 50px lower
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of section is visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth 0.8s animation
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero doesn't need scroll reveal, it's the first thing seen */}
      <div id="hero">
        <HeroSection />
      </div>

      <SectionWrapper id="about">
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="education">
        <EducationSection />
      </SectionWrapper>

      <SectionWrapper id="experience">
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <ProjectsSection />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper id="awards">
        <AwardsSection />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <ContactSection />
      </SectionWrapper>

      {/* Footer handles its own layout, simple fade in is fine */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Footer />
      </motion.div>
    </main>
  )
}