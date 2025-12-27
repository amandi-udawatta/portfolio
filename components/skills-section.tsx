/**
 * Skills Section Component
 * Display of technical skills organized by category
 */

import { Code, Database, Wrench, Brain, Users, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "PHP", "R", "HTML/CSS"],
    },
    {
      icon: Wrench,
      title: "Frameworks & Technologies",
      skills: ["Spring Boot", "FastAPI", "Node.js", "Express", "React", "Next.js", "Vue.js", "Tailwind CSS", "Flutter"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      icon: Brain,
      title: "ML & Data Science",
      skills: ["TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "GitLab", "Postman", "Figma", "Docker"],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        "Communication",
        "Research",
        "Creative Thinking",
        "Collaborative Teamwork",
        "Time Management",
        "Problem Solving",
      ],
    },
  ]

  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      event: "Duothon 3.0",
      year: "2023",
      category: "Web Development",
    },
    {
      icon: Trophy,
      title: "Finalist",
      event: "InspiHER{tech}v2.0",
      year: "2024",
      category: "MATLAB & Coding",
    },
    {
      icon: Trophy,
      title: "Multiple Finalist",
      event: "Codefest Algothon",
      year: "2022, 2023",
      category: "Competitive Programming",
    },
    {
      icon: Trophy,
      title: "Finalist",
      event: "SLIoT Challenge",
      year: "2023",
      category: "IoT Competition",
    },
  ]

  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto text-pretty">
            Technical expertise and competitive achievements that drive my development journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-surface border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1.5 bg-surface-elevated text-foreground-secondary rounded-full border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
