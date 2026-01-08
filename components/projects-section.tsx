"use client"

import { useState } from "react"
import { Github, Globe, BrainCircuit } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("web")

  const projects = [
    // --- WEB DEVELOPMENT PROJECTS ---
    {
      category: "web",
      title: "Wandr",
      period: "Jun 2024 – Present",
      description:
        "A travel and tourism platform that helps users plan trips with personalized routes, discover nearby places, and explore local businesses. It also allows businesses to promote their services to tourists through the platform.",
      
      technologies: ["Spring Boot", "PostgreSQL", "Next.js", "Flutter", , "FastAPI", "OpenAI API", "Google Maps API", "Places API"],
      github: "https://github.com/amandi-udawatta/wandr-backend",
      image: "/projects/wandr.png", 
    },
    {
      category: "web",
      title: "Pawfect Care",
      period: "Jun 2023 – Apr 2024",
      description:
        "A pet care management platform that helps pet owners easily book vet appointments, schedule daycare, access emergency services, and view their pets’ medical history, while enabling pet care centers to manage bookings, services, and medical records in one place.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      github: "https://github.com/amandi-udawatta/Pawfect-Care",
      image: "/projects/pawfect care.png", 
    },
    {
      category: "web",
      title: "BookWorm",
      period: "Jun 2023 – Oct 2023",
      description:
        "A library management system that helps librarians organize books, authors, genres, and members, while efficiently managing borrowing and returns through a simple and structured system.",
      features: [
        "Catalog Management",
        "Borrower Tracking",
        "Secure Auth (Passport.js)",
        "Librarian Dashboard",
      ],
      technologies: ["Node.js", "React", "MongoDB", "Express"],
      github: "https://github.com/amandi-udawatta/bookworm",
      image: "/projects/bookworm.png", 
    },

    // --- MACHINE LEARNING PROJECTS ---
    {
      category: "ml",
      title: "Breast Cancer Diagnosis",
      period: "Aug 2024",
      description:
        "This project is a machine learning application that uses a neural network to classify breast tumors as benign or malignant, helping demonstrate how data-driven models can support early and accurate medical diagnosis.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
      github: "https://github.com/amandi-udawatta/Breast-Cancer-Classification",
      image: "/projects/breast cancer.png", 
    },
    {
      category: "ml",
      title: "Student Performance Prediction",
      period: "Jun 2024",
      description:
        "This project predicts student performance based on factors such as study habits, prior results, and daily routines, showing how multiple linear regression can be used to understand and analyze the impact of different factors on academic outcomes.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
      github: "https://github.com/amandi-udawatta/Student-Performance-Prediction-Model",
      image: "/projects/student performance.png", 
    },
  ]

  const filteredProjects = projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          
          {/* Responsive Tabs */}
          <div className="inline-flex p-1 bg-surface border border-border rounded-full shadow-sm max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("web")}
              className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === "web"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("ml")}
              className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === "ml"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              <BrainCircuit className="w-3 h-3 sm:w-4 sm:h-4" />
              Machine Learning
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-5xl mx-auto space-y-6 px-4 lg:px-8">
          {filteredProjects.map((project, index) => (
            <a 
              key={index} 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group"
            >
              {/* Card Container with padding */}
              <Card className="p-5 sm:p-6 lg:p-8 bg-surface border border-border transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
                
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  
                  {/* Left Side: Content */}
                  <div className="flex-1 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                      {/* Title & Github Icon */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <Github className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" />
                      </div>
                      
                      <p className="text-sm font-medium text-foreground-tertiary mb-4">
                        {project.period}
                      </p>

                      <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed mb-6">
                        {project.description}
                      </p>

                      
                    </div>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/5 text-primary rounded-full border border-primary/20 transition-colors duration-300 group-hover:bg-primary/10 group-hover:border-primary/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Image 
                      - Mobile: order-1 (Top), Fixed Height (h-48), Full Width
                      - Desktop: order-2 (Right), Auto Height, Fixed Width (w-[350px]) 
                  */}
                  <div className="relative w-full lg:w-87.5 h-48 lg:h-auto shrink-0 rounded-xl overflow-hidden order-1 lg:order-2 border border-border/50">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}