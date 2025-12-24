"use client"

import type React from "react"

/**
 * Contact Section Component
 * Contact information and email form
 */

import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "amandiudawatta@gmail.com",
      href: "mailto:amandiudawatta@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 77 444 1482",
      href: "tel:+94774441482",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kalutara, Sri Lanka",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/amandi-udawatta",
      username: "@amandi-udawatta",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/amandi-udawatta/",
      username: "Amandi Udawatta",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construct mailto link with form data
    const mailtoLink = `mailto:amandiudawatta@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto text-pretty">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-surface border-border hover:border-primary transition-all duration-300 group"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground-tertiary mb-1">{info.title}</h3>
                          <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground-tertiary mb-1">{info.title}</h3>
                          <p className="text-base font-medium text-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="p-6 bg-surface border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface-elevated transition-colors group"
                    >
                      <social.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </p>
                        <p className="text-xs text-foreground-secondary">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <Card className="p-6 lg:p-8 bg-surface border-border">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground-secondary mb-2 block">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground-secondary mb-2 block">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground-secondary mb-2 block">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground-secondary mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium shadow-lg hover:shadow-xl transition-all group"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
