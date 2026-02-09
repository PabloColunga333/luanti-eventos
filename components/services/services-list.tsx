"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Camera, Film, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services, siteConfig } from "@/lib/site-data"

const iconMap = {
  sparkles: Camera,
  video: Film,
  phone: PhoneCall,
}

const imageMap: Record<string, string> = {
  "espejo-magico": "/services/espejo-magico-real.png",
  "cabina-360": "/services/cabina-360-real.png",
  "telefono-dedicatorias": "/services/telefono-dedicatorias-real.jpg",
}

export function ServicesList() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles
            const isReversed = index % 2 === 1
            const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola, me interesa cotizar ${service.name}`)}`

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-background group flex items-center justify-center">
                    <Image
                      src={imageMap[service.slug] || "/placeholder.svg?height=400&width=600"}
                      alt={service.name}
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-2">{service.name}</h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground">• {service.hours} de servicio</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{service.shortDescription}</p>

                  {/* Includes preview */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-foreground">Incluye:</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.includes.slice(0, 6).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Cotizar {service.name}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl border-border hover:bg-muted/50 hover:text-foreground bg-transparent"
                    >
                      <Link href={`/servicios/${service.slug}`}>
                        Ver detalles completos
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
