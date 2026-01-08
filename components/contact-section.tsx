"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Mail, MapPin, Github, Linkedin, MessagesSquare, Loader2, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"
// import { toast } from "sonner" // Uncomment if using toast

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Contact Info Data
  const contactInfo = [
    {
      icon: Mail,
      value: "amandiudawatta@gmail.com",
      href: "mailto:amandiudawatta@gmail.com",
      label: "Drop me a mail",
    },
    {
      icon: MapPin,
      value: "Kalutara, Sri Lanka",
      href: null,
      label: "Based in",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/amandi-udawatta",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/amandi-udawatta/",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Access environment variables
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

    // Optional: Log error if keys are missing (helps debugging)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS keys are missing from .env.local")
      alert("Configuration Error: Email service is not set up correctly.")
      setIsSubmitting(false)
      return
    }

    // Map your form data to the template variables you created in EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text)
          setIsSubmitting(false)
          setIsSuccess(true)
          setFormData({ name: "", email: "", subject: "", message: "" }) // Reset form
          
          // Reset success message after 5 seconds
          setTimeout(() => setIsSuccess(false), 5000)
        },
        (error) => {
          console.log(error.text)
          setIsSubmitting(false)
          alert("Oops! Something went wrong. Please try again.")
        },
      )
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Fun Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
            Let's <span className="text-primary">Chat!</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto font-medium">
            Got a project in mind? Or just want to talk about movies and food?
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Column - Vibe & Info */}
            <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
              
              {/* Coffee Invite Card */}
              <div className="bg-surface p-6 rounded-2xl border-2 border-dashed border-primary/30 transform hover:-rotate-1 transition-transform duration-300">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                  <MessagesSquare className="w-6 h-6 text-primary animate-bounce" />
                  <h3 className="text-xl font-bold text-foreground">Wanna have a chat?</h3>
                </div>
                <p className="text-foreground-secondary">
                  I'm always down to talk tech, share movie recommendations, or just hear your latest crazy idea.
                </p>
              </div>

              {/* Minimal Contact List */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex flex-col lg:flex-row items-center gap-3 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center text-primary shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground-tertiary uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="pt-4">
                <p className="text-sm font-medium text-foreground-secondary mb-4">Stalk my code & career:</p>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-surface rounded-2xl border-2 border-border hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group`}
                    >
                      <social.icon className="w-8 h-8 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - The "Fun" Form */}
            <Card className="p-6 lg:p-8 bg-surface border-border shadow-2xl rounded-2xl order-1 lg:order-2">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground ml-1">
                      What's your name?
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Bla Bla Doe"
                      className="bg-background-secondary border-transparent focus:border-primary rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground ml-1">
                      Your email?
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="blabla@example.com"
                      className="bg-background-secondary border-transparent focus:border-primary rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-foreground ml-1">
                    What's the vibe?
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project proposal / Just saying hi!"
                    className="bg-background-secondary border-transparent focus:border-primary rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground ml-1">
                    Tell me everything
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I have this crazy idea..."
                    rows={4}
                    className="bg-background-secondary border-transparent focus:border-primary rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full font-bold h-12 rounded-xl shadow-lg transition-all duration-300 ${
                    isSuccess 
                      ? "bg-green-500 hover:bg-green-600 text-white" 
                      : "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-primary/25 hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" /> Message Sent!
                    </>
                  ) : (
                    "Shoot Message"
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}