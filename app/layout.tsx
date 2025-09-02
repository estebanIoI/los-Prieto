import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "700"],
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Barbería Los Prieto - Más de 20 años perfeccionando el arte del corte masculino",
  description: "Barbería Los Prieto - Tradición y calidad desde 2003. Especialistas en cortes clásicos y modernos, afeitado tradicional y cuidado de barba. ¡Refleja tu mejor versión!",
  keywords: "barbería, corte de pelo, afeitado, barba, Los Prieto, barbería tradicional, cortes modernos, WhatsApp",
  authors: [{ name: "Barbería Los Prieto" }],
  creator: "Barbería Los Prieto",
  publisher: "Barbería Los Prieto",
  robots: "index, follow",
  openGraph: {
    title: "Barbería Los Prieto - Tradición y Calidad",
    description: "Refleja tu mejor versión con nuestros servicios profesionales. Más de 20 años de experiencia.",
    url: "https://losprieto.github.io",
    siteName: "Barbería Los Prieto",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/losprieto-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Barbería Los Prieto - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbería Los Prieto - Tradición y Calidad",
    description: "Refleja tu mejor versión con nuestros servicios profesionales",
    images: ["/losprieto-removebg-preview.png"],
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${sourceSansPro.variable} antialiased`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
