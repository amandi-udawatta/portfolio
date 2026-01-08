import { Calendar, Star } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      institution: "University of Colombo School of Computing",
      degree: "Bachelor of Science (Hons.) in Computer Science",
      period: "2022 – 2026",
      achievements: [
        "Reading GPA: 3.6348",
        "Director’s List - 1st year 2nd semester, 3rd year 1st semester",
        
      ],
    },
    {
      institution: "Devi Balika Vidyalaya",
      degree: "GCE Advanced Level",
      period: "2018 – 2020",
      achievements: [
        "3A's (Combined Mathematics, Physics, Chemistry)",
      ],
    },
    {
      institution: "Panadura Balika Maha Vidyalaya",
      degree: "GCE Ordinary Level",
      period: "2012 – 2017",
      achievements: [
        "9A’s (Core Subjects, ICT, English Literature, Tamil)",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Educational <span className="text-primary">Background</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-12 relative ">
            
            {/* Vertical Line */}
            <div className="absolute left-6.75 top-2 bottom-2 w-0.5 bg-border sm:left-[50%] sm:-translate-x-1/2"></div>

            {education.map((item, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row items-start gap-6 group">
                
                {/* Timeline Dot */}
                <div className="absolute left-4.75 sm:left-1/2 sm:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 group-hover:bg-primary transition-colors duration-300"></div>

                {/* Left Side (Date - Desktop only) */}
                <div className="hidden sm:block sm:w-1/2 sm:text-right sm:pr-12 pt-0.5">
                  <div className="flex items-center justify-end gap-2 text-primary font-semibold mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                   <h3 className="text-xl font-bold text-foreground">{item.institution}</h3>
                </div>

                {/* Right Side (Content) */}
                <div className="pl-16 sm:pl-12 sm:w-1/2 pt-0.5 w-full">
                  
                  {/* Mobile Header (Visible only on small screens) */}
                  <div className="sm:hidden mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                      <Calendar className="w-3 h-3" /> {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{item.institution}</h3>
                  </div>

                  <h4 className="text-lg font-semibold text-foreground-secondary mb-2">
                    {item.degree}
                  </h4>
                  
                

                  {/* Achievements List */}
                  <ul className="space-y-2">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground-secondary">
                        <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}