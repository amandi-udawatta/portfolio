/**
 * Projects Section Component
 * Showcase of key projects with technologies and achievements
 */

import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Wandr",
      period: "Jun 2024 – Present",
      description:
        "All-in-one travel application featuring personalized route suggestions, interactive maps, and travel journaling. Includes e-commerce platform for local products and business management tools.",
      features: [
        "Personalized route suggestions using AI",
        "Interactive maps with Google Places API integration",
        "Travel journaling with OpenAI-powered descriptions",
        "E-commerce platform for local products",
        "Business profile management and targeted advertising",
      ],
      technologies: ["Spring Boot", "PostgreSQL", "FastAPI", "Next.js", "Tailwind CSS", "Flutter", "OpenAI API"],
      github: "https://github.com/amandi-udawatta/wandr-backend",
      featured: true,
    },
    {
      title: "Breast Cancer Diagnosis",
      period: "Aug 2024",
      description:
        "Machine learning project utilizing Artificial Neural Networks to classify breast cancer tumors as benign or malignant using the Wisconsin dataset.",
      features: [
        "Complete data pipeline with preprocessing",
        "Neural network using TensorFlow and Keras",
        "Model evaluation with ROC curve and AUC score",
        "Confusion matrix analysis for performance metrics",
      ],
      technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "Matplotlib", "Seaborn"],
      github: "https://github.com/amandi-udawatta/Breast-Cancer-Classification",
      featured: true,
    },
    {
      title: "Pawfect Care",
      period: "Jun 2023 – Apr 2024",
      description:
        "Pet care center management system facilitating appointments, daycare bookings, and comprehensive medical records management for both pet owners and staff.",
      features: [
        "Appointment booking system for vet visits",
        "Daycare scheduling and management",
        "Emergency ambulance service coordination",
        "Medical records accessible to pet owners",
        "Staff dashboard for data management",
        "Administrative reporting tools",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
      github: "https://github.com/amandi-udawatta/Pawfect-Care",
      featured: false,
    },
    {
      title: "BookWorm",
      period: "Jun 2023 – Oct 2023",
      description:
        "Comprehensive library management system enabling efficient management of books, authors, genres, and member operations with secure authentication.",
      features: [
        "Book catalog management",
        "Author and genre organization",
        "Member and borrower tracking",
        "Secure authentication with Passport.js",
        "Librarian dashboard for CRUD operations",
      ],
      technologies: ["Node.js", "Express", "React", "MongoDB", "Passport.js"],
      github: "https://github.com/amandi-udawatta/bookworm",
      featured: false,
    },
    {
      title: "Student Performance Prediction",
      period: "Jun 2024",
      description:
        "Machine learning model using Multiple Linear Regression to predict student performance based on study habits and other factors.",
      features: [
        "Multiple Linear Regression implementation",
        "Gradient Descent optimization",
        "Feature analysis (study hours, previous scores, activities)",
        "Data normalization for accuracy",
        "Residual plots and performance visualization",
      ],
      technologies: ["Python", "NumPy", "Pandas", "scikit-learn", "Matplotlib"],
      github: "https://github.com/amandi-udawatta/Student-Performance-Prediction-Model",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto text-pretty">
            A selection of my technical projects spanning full-stack development and machine learning
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 bg-surface border-border hover:border-primary transition-all duration-300 hover:shadow-xl group ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Project Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-foreground-tertiary font-medium">{project.period}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-foreground-secondary hover:text-primary hover:bg-primary/10"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm lg:text-base text-foreground-secondary leading-relaxed">{project.description}</p>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-foreground-secondary">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1.5 bg-surface-elevated text-foreground-secondary rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a href="https://github.com/amandi-udawatta" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium group bg-transparent"
            >
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
