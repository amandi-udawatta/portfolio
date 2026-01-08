"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Spline from "@splinetool/react-spline"
import { useState } from "react"

export default function HeroSection() {
  const [isSplineLoading, setIsSplineLoading] = useState(true)

  return (
    // Added h-screen for desktops to keep everything above the fold
    <section id="hero" className="min-h-screen lg:h-screen flex items-center justify-center relative pt-20 lg:pt-16 px-4 lg:px-8 overflow-hidden">
      {/* Added max-w-7xl to prevent content from hitting the very edges of huge screens */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
        {/* Changed to 3 columns: 2 for text, 1 for fish */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Content - Takes up 2 columns */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:col-span-2">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] sm:leading-tight text-balance">
                <span className="text-foreground-secondary"> Hey there! </span>
                <br />
                I&apos;m
                <span className="text-primary"> Amandi</span>
                <span className="text-foreground-secondary"> Udawatta</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-foreground-secondary max-w-2xl mx-auto lg:mx-0 text-pretty">
              I am a <strong className="text-primary font-semibold">Software Engineer</strong> based in Kalutara, specializing in full-stack development. I enjoy crafting seamless, intuitive user experiences, sometimes with a little bit of fun built in.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary max-w-2xl mx-auto lg:mx-0 italic">
              P.S. Meet Puffy — He’s here to welcome you! He’ll keep an eye on things while you check out the rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/about/Amandi_Udawatta_Resume.pdf'
                  link.download = 'Amandi_Udawatta_Resume.pdf'
                  link.click()
                }}
                className="bg-primary hover:bg-primary-dark text-white font-medium shadow-lg hover:shadow-xl transition-all group"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Takes up 1 column */}
          <div className="order-2 lg:col-span-1 flex justify-center lg:justify-end relative">
            {/* 1. Adjusted h-[35vh] to ensure the container isn't too tall on mobile.
              2. Added 'aspect-square' to keep the container perfectly square for the fish.
            */}
            <div className="fish-container w-full max-w-70 sm:max-w-sm lg:max-w-full h-[35vh] lg:h-[45vh] aspect-square flex items-center justify-center overflow-hidden">
              {isSplineLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <div className="fish w-full h-full flex items-center justify-center">
                <Spline
                  scene="https://prod.spline.design/l0ddoCLfaDwftmWb/scene.splinecode"
                  onLoad={() => setIsSplineLoading(false)}
                  // Added style to ensure the canvas fills the container correctly
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}