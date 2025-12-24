/**
 * Experience Section Component
 * Professional work experience timeline
 */

import { Briefcase, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Part-Time Consultant, Software Engineer",
      company: "VizuaMatix",
      period: "June 2025 – August 2025",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Continued development of a financial risk management system (FRMS) with Spring Boot APIs",
        "Enhanced system stability by identifying and fixing critical issues in existing modules",
        "Implemented remaining major backend functionalities for complex database interactions",
        "Prepared application for production deployment with improved system reliability",
      ],
      technologies: ["Spring Boot", "PostgreSQL", "Next.js", "REST APIs"],
    },
    {
      title: "Software Engineer Intern",
      company: "VizuaMatix",
      period: "Nov 2024 – Apr 2025",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Built core features for three enterprise projects across financial and tourism sectors",
        "Developed major components including Audit Trail, Dashboard, Configuration Management, and Graphical Analysis module",
        "Led backend implementation and took responsibility for deployment and UAT release",
        "Implemented backend-to-backend communication for approval workflow between Spring Boot and FastAPI services",
        "Authored comprehensive API Specification Document for QA and maintenance",
      ],
      technologies: ["Spring Boot", "FastAPI", "PostgreSQL", "Next.js", "Vue.js"],
    },
    {
      title: "Pre-Intern, Software Engineer",
      company: "VizuaMatix",
      period: "May 2024 – September 2024",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Developed Backend for Frontend (BFF) using Spring Boot for loyalty program component",
        "Designed PostgreSQL database ensuring secure API integration and efficient data management",
        "Contributed to QA efforts for government institution project using FastAPI",
        "Focused on testing, bug fixing, and improving system performance and reliability",
      ],
      technologies: ["Spring Boot", "PostgreSQL", "FastAPI", "API Integration"],
    },
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto text-pretty">
            Professional journey building enterprise solutions and full-stack applications
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 bg-surface border-border hover:border-primary transition-all duration-300 hover:shadow-lg relative"
            >
              {/* Timeline Connector */}
              {index !== experiences.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -bottom-8 w-0.5 h-8 bg-border" />
              )}

              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-1">
                    <div className="flex items-center gap-2 text-foreground-secondary">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-tertiary">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground-secondary">
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span className="text-sm lg:text-base leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
