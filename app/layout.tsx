import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Luanti Eventos | Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias",
    template: "%s | Luanti Eventos",
  },
  description:
    "En Luanti Eventos creamos experiencias memorables a través de cabinas fotográficas modernas y elegantes. Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias para bodas, XV años, cumpleaños y eventos corporativos en CDMX, Querétaro y Toluca.",
  keywords: [
    "espejo mágico",
    "cabina 360",
    "photo booth",
    "teléfono de dedicatorias",
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
      "Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias para bodas, XV años, cumpleaños y eventos corporativos. Calidad, puntualidad y atención al detalle.",
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
    description: "Experiencias memorables a través de cabinas fotográficas modernas y elegantes",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon-dark-32x32.png",
    shortcut: "/icon-dark-32x32.png",
    apple: "/apple-icon.png",
  },
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
  return (
    <html lang="es">
      <body className={`${geist.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
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
