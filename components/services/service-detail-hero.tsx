"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Sparkles, Video, Phone } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { siteConfig, type Service } from "@/lib/site-data"
import Link from "next/link"

const iconMap = {
  sparkles: Sparkles,
  video: Video,
  phone: Phone,
}

const imageMap: Record<string, string> = {
  "espejo-magico": "/services/espejo-magico-real.png",
  "cabina-360": "/services/cabina-360-real.png",
  "telefono-dedicatorias": "/services/telefono-dedicatorias-real.jpg",
}

interface ServiceDetailHeroProps {
  service: Service
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola, me interesa cotizar ${service.name}`)}`

  return (
    <section className="pt-24 pb-8 md:pt-32 md:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link
            href="/servicios"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a servicios
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">{service.heroTitle}</h1>
            <p className="text-lg text-muted-foreground mb-4">{service.heroSubtitle}</p>
            
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-bold text-primary">{service.price}</span>
              <span className="text-muted-foreground">• {service.hours} de servicio</span>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-lg px-8"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-5 h-5 mr-2" />
                Cotizar ahora
              </a>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-background flex items-center justify-center">
              <Image
                src={imageMap[service.slug] || "/placeholder.svg?height=400&width=600"}
                alt={service.name}
                width={800}
                height={600}
                className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
