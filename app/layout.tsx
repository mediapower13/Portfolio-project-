import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammed Nurudeen Bolarinwa - Software Developer & Web3 Developer",
  description:
    "Portfolio of Mohammed Nurudeen Bolarinwa, an Information Technology student at Federal University of Ilorin, Kwara State. Certified Datacom Engineer from Huawei and Web3 Developer specializing in React, Next.js, and blockchain applications.",
  keywords: [
    "Mohammed Nurudeen Bolarinwa",
    "Software Developer",
    "Web3 Developer",
    "React Developer",
    "Next.js",
    "Blockchain",
    "Portfolio",
    "Federal University of Ilorin",
    "Information Technology",
    "Huawei Certified",
    "Datacom Engineer",
  ],
  authors: [{ name: "Mohammed Nurudeen Bolarinwa" }],
  openGraph: {
    title: "Mohammed Nurudeen Bolarinwa - Software Developer & Web3 Developer",
    description: "Portfolio of Mohammed Nurudeen Bolarinwa, an Information Technology student and certified Datacom Engineer specializing in Web3 and modern web development.",
    type: "website",
  },
  generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden transition-all duration-300 ease-in-out`}>
        <div className="min-h-screen animate-fade-in-up">
          <div className="transition-all duration-500 ease-out">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
