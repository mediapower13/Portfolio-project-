import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammed Nurudeen Bolarinwa - Software Developer",
  description:
    "Portfolio of Mohammed Nurudeen Bolarinwa, a Software Developer and Computer Science student at Federal University of Ilorin. Specializing in React, Next.js, and modern web development.",
  keywords: [
    "Mohammed Nurudeen Bolarinwa",
    "Software Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Federal University of Ilorin",
  ],
  authors: [{ name: "Mohammed Nurudeen Bolarinwa" }],
  openGraph: {
    title: "Mohammed Nurudeen Bolarinwa - Software Developer",
    description: "Portfolio of Mohammed Nurudeen Bolarinwa, a Software Developer and Computer Science student.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
