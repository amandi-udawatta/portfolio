/**
 * Honors & Awards Section
 * Displays hackathon wins and finalist positions with logos
 */

import { Card } from "@/components/ui/card"

export default function AwardsSection() {
  const awards = [
    {
      title: "Duothon 3.0",
      achievement: "Winner",
      achievementColor: "bg-yellow-500/10 text-yellow-600 border-yellow/20", // Gold theme
      description: "Web Development Hackathon",
      logo: "/competitions/duothan.png", // REPLACE WITH YOUR IMAGE PATH
    },
    {
      title: "InspiHER{tech} v2.0",
      achievement: "Finalist",
      achievementColor: "bg-primary/10 text-primary border-primary/20",
      description: "MATLAB, Maths and Coding Hackathon",
      logo: "/competitions/inspiher.png", // REPLACE WITH YOUR IMAGE PATH
    },
    {
      title: "Codefest Algothon 2024",
      achievement: "Finalist",
      achievementColor: "bg-primary/10 text-primary border-primary/20",
      description: "Competitive Programming Hackathon",
      logo: "/competitions/codefest.png", // REPLACE WITH YOUR IMAGE PATH
    },
    {
      title: "Codefest Algothon 2023",
      achievement: "Finalist",
      achievementColor: "bg-primary/10 text-primary border-primary/20",
      description: "Competitive Programming Hackathon",
      logo: "/competitions/codefest.png", // REPLACE WITH YOUR IMAGE PATH
    },
    {
      title: "SLIoT Challenge 2023",
      achievement: "Semi Finalist",
      achievementColor: "bg-emerald-500/10 text-emerald-600 border-emerald/20",
      description: "IoT Competition",
      logo: "/competitions/sliot.png", // REPLACE WITH YOUR IMAGE PATH
    },
    {
      title: "Codefest Designathon",
      achievement: "Finalist",
      achievementColor: "bg-primary/10 text-primary border-primary/20",
      description: "Designathon",
      logo: "/competitions/codefest.png", // REPLACE WITH YOUR IMAGE PATH
    },
    {
      title: "Freshhack 3.0",
      achievement: "Finalist",
      achievementColor: "bg-primary/10 text-primary border-primary/20",
      description: "Competitive Programming Hackathon",
      logo: "/competitions/freshhack.png", // REPLACE WITH YOUR IMAGE PATH
    },
  ]

  return (
    <section id="awards" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Competitions & <span className="text-primary">Awards</span>
          </h2>
      
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {awards.map((item, index) => (
            <Card
              key={index}
              className="relative p-6 flex flex-col bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
                <div className="flex gap-4">
                {/* Logo Container */}
                <div className="w-20 h-20 rounded-2xl bg-background-secondary shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img 
                  src={item.logo} 
                  alt={`${item.title} logo`}
                  className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <span className={`justify-inline-flex w-fit px-3 py-1 rounded-full text-xs font-bold border ${item.achievementColor}`}>
                  {item.achievement}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                  </h3>
                  
                  <p className="text-sm text-foreground-secondary">
                  {item.description}
                  </p>

                  
                </div>
                </div>

              
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}