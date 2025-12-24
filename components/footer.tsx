/**
 * Footer Component
 * Site footer with copyright and social links
 */

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-foreground-secondary text-center md:text-left">
            © {currentYear} Amandi Udawatta. Built with <Heart className="inline h-4 w-4 text-primary fill-primary" />{" "}
            using Next.js
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/amandi-udawatta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amandi-udawatta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:amandiudawatta@gmail.com"
              className="text-foreground-secondary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Attribution */}
        <p className="text-xs text-foreground-tertiary text-center mt-4">Designed & Developed by Amandi Udawatta</p>
      </div>
    </footer>
  )
}
