"use client"

/**
 * Hero Section Component
 * Landing section with animated text, CTA buttons, and 3D Spline animation
 */

import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Spline from "@splinetool/react-spline"
import { useState } from "react"

export default function HeroSection() {
  const [isSplineLoading, setIsSplineLoading] = useState(true)

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            
            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
                Amandi Udawatta
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start text-xl sm:text-2xl lg:text-3xl font-semibold">
                <span className="text-primary">Software Engineer</span>
                <span className="text-foreground-secondary">
                  & CS Undergraduate
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-foreground-secondary max-w-2xl mx-auto lg:mx-0 text-pretty">
              Passionate about building robust backend systems and exploring machine learning. Currently specializing in
              full-stack development with experience at <span className="text-primary font-medium">VizuaMatix</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary-dark text-white font-medium shadow-lg hover:shadow-xl transition-all group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#projects")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium transition-all"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/amandi-udawatta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-primary transition-colors p-2 hover:bg-surface-elevated rounded-lg"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amandi-udawatta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-primary transition-colors p-2 hover:bg-surface-elevated rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:amandiudawatta@gmail.com"
                className="text-foreground-secondary hover:text-primary transition-colors p-2 hover:bg-surface-elevated rounded-lg"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="/Amandi_Udawatta_Resume.pdf"
                download
                className="text-foreground-secondary hover:text-primary transition-colors p-2 hover:bg-surface-elevated rounded-lg"
                aria-label="Download Resume"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - 3D Spline Animation */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="fish-container w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
              {isSplineLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <div className="fish">
                <Spline
                  scene="https://prod.spline.design/l0ddoCLfaDwftmWb/scene.splinecode"
                  onLoad={() => setIsSplineLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}