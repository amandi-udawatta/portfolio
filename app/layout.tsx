import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amandi Udawatta | Software Engineer & CS Undergraduate",
  description:
    "Portfolio of Amandi Udawatta - Computer Science undergraduate specializing in backend development and machine learning",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  keywords: ["Amandi Udawatta", "Software Engineer", "Sri Lanka", "UCSC", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Amandi Udawatta" }],
  creator: "Amandi Udawatta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amandiudawatta.vercel.app/",
    title: "Amandi Udawatta | Software Engineer",
    description: "Full Stack Developer & CS Undergraduate based in Sri Lanka.",
    siteName: "Amandi Udawatta Portfolio",
    images: [
      {
        url: "/og-image.png", // (Optional) Add a screenshot of your site to /public folder named og-image.jpg
        width: 1200,
        height: 630,
        alt: "Amandi Udawatta Portfolio",
      },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Optional: prevents zooming if you want a strict "app-like" feel
  // careful with userScalable=false as it hurts accessibility, 
  // but it fixes your specific "pinch to see white space" issue immediately.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
