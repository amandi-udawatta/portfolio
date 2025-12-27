"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full pt-32 pb-10 overflow-hidden">
      
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* The Aquatic Image */}
        <img
          src="/footer.png" // Ensure your image is named this in the public folder
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay - Makes the text readable while keeping the orange vibe */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          
          {/* THE "BIG FUN THING" */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-3xl">
              Thanks for stopping by!
            </h2>
          
          </div>

          {/* DIVIDER */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* BOTTOM BAR: Copyright & Attribution */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-4 text-sm text-white/50">
            <p>
              © {currentYear} Amandi Udawatta. All rights reserved.
            </p>
            
           
          </div>

        </div>
      </div>
    </footer>
  )
}