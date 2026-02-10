import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Toaster } from "sonner"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"
import { siteConfig } from "@/lib/site-data"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL("https://luantieventos.com"),
  title: {
    default: "Luanti Eventos | Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias",
    template: "%s | Luanti Eventos",
  },
  description:
    "Luanti Eventos crea experiencias memorables con Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias para bodas, XV años, cumpleaños y eventos corporativos en CDMX, Querétaro y Toluca.",
  keywords: [
    "luanti",
    "luanti eventos",
    "espejo mágico",
    "espejo magico",
    "cabina 360",
    "photo booth",
    "teléfono de dedicatorias",
    "telefono de dedicatorias",
    "audio guestbook",
    "bodas CDMX",
    "XV años",
    "eventos corporativos",
    "Querétaro",
    "Toluca",
  ],
  authors: [{ name: "Luanti Eventos" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://luantieventos.com",
    siteName: "Luanti Eventos",
    title: "Luanti Eventos | Experiencias Memorables para tu Evento",
    description:
      "Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias para bodas, XV años, cumpleaños y eventos corporativos. Luanti Eventos en CDMX, Querétaro y Toluca.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luanti Eventos - Experiencias memorables para tu evento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luanti Eventos",
    description: "Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias para tu evento.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    other: [
      { rel: "icon", url: "/icon-dark-32x32.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: "https://luantieventos.com",
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "CDMX",
      addressRegion: "CDMX",
      addressCountry: "MX",
    },
    areaServed: ["CDMX", "Querétaro", "Toluca"],
    description: metadata.description,
    sameAs: [
      siteConfig.socialMedia.instagram,
      siteConfig.socialMedia.facebook,
      siteConfig.socialMedia.tiktok,
    ],
    keywords: metadata.keywords,
  }

  return (
    <html lang="es">
      <body className={`${geist.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
