/**
 * About Section Component
 * Personal introduction and background information
 */

import { GraduationCap, Award, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BSc (Hons.) in Computer Science",
      details: "University of Colombo School of Computing",
      metric: "GPA: 3.63",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Director's List",
      details: "1st Year 2nd Semester, 3rd Year 1st Semester",
      metric: "Top Performer",
    },
    {
      icon: Heart,
      title: "Interests",
      description: "Beyond Code",
      details: "Landscape & Portrait Artist, Scrabble Player",
      metric: "Creative Mind",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto text-pretty">
            A glimpse into my journey as a software engineer and computer science enthusiast
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio */}
          <div className="bg-surface rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed mb-4">
              I'm a{" "}
              <span className="text-foreground font-semibold">
                dedicated and creative fourth-year Computer Science undergraduate
              </span>{" "}
              at the University of Colombo School of Computing, specializing in{" "}
              <span className="text-primary font-semibold">backend development</span> and{" "}
              <span className="text-primary font-semibold">database management</span>.
            </p>
            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed mb-4">
              My academic journey has equipped me with a strong foundation in building robust systems, contributing to
              projects ranging from travel applications to financial risk management systems. Throughout my experience
              at <span className="font-semibold text-foreground">VizuaMatix</span>, I've worked with technologies like{" "}
              <span className="font-medium">Spring Boot, FastAPI, PostgreSQL, Next.js,</span> and{" "}
              <span className="font-medium">Vue.js</span>.
            </p>
            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed">
              Beyond my technical skills, I'm an active participant in hackathons and competitions, where I've developed
              strong leadership and collaborative abilities. I'm also a passionate landscape and portrait artist, and I
              enjoy the strategic challenges of Scrabble.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-surface border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-primary">{item.description}</p>
                  <p className="text-sm text-foreground-secondary">{item.details}</p>
                  <span className="text-xs font-semibold text-foreground-tertiary bg-surface-elevated px-3 py-1 rounded-full">
                    {item.metric}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
