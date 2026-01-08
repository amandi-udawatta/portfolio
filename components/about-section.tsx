import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-surface rounded-2xl px-4 lg:px-8 ">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Photo Column (Left) */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative w-64 h-64 lg:w-full lg:h-auto rounded-2xl overflow-hidden ">
                  {/* REPLACE WITH YOUR IMAGE PATH */}
                  <img 
                    src="/about/amandi.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Column (Right) */}
              <div className="lg:col-span-8 space-y-6">
                <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  I'm a Fourth-Year Computer Science Undergraduate with over  <span className="text-primary ">1.5 years of industry experience</span>, driven by the challenge of building reliable, scalable systems and seeing them come together end to end. I enjoy working across the stack and have experience delivering <span className="text-primary">full-stack applications</span>, with a strong foundation in backend development.
                </p>
                
                <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  Most of my hands-on work involves designing APIs and data-driven systems using <span className="text-primary">Spring Boot </span>, <span className="text-primary">FastAPI</span>, and <span className="text-primary">PostgreSQL </span>, while also contributing to frontend features that focus on usability and performance. I value clean, maintainable code and systems that scale as requirements grow.
                </p>

                <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed">
                I've also participated in numerous hackathons securing Wins and Finalist spots along the way and am currently exploring <span className="text-primary">VR cybersickness mitigation using Unity</span> for my final-year research.                
                </p>

                <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  When I'm not coding, you'll find me binge-watching series, painting, doomscrolling, or hunting down the best food spots in town. I also enjoy competitive Scrabble (I won't say I'm a pro, but I can definitely hold my own on a triple-word score.)
                </p>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
