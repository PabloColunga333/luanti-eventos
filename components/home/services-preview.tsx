"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-data"
import Image from "next/image"
import Link from "next/link"

const serviceImages = [
  {
    src: "/services/espejo-magico-info.png",
    alt: "Espejo Mágico - $6,000 MXN",
    name: "Espejo Mágico",
    slug: "espejo-magico",
  },
  {
    src: "/services/cabina-360-info.png",
    alt: "Cabina 360 - $6,000 MXN",
    name: "Cabina 360",
    slug: "cabina-360",
  },
  {
    src: "/services/telefono-dedicatorias-info.png",
    alt: "Teléfono de Dedicatorias - $5,000 MXN",
    name: "Teléfono de Dedicatorias",
    slug: "telefono-dedicatorias",
  },
]

export function ServicesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceImages.length) % serviceImages.length)
  }

  const getWhatsAppUrl = (serviceName: string) =>
    `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola, me interesa cotizar ${serviceName}`)}`

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tres experiencias únicas para que tus invitados creen recuerdos increíbles y los compartan al instante.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-background flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative w-full"
              >
                <Image
                  src={serviceImages[currentIndex].src || "/placeholder.svg"}
                  alt={serviceImages[currentIndex].alt}
                  width={800}
                  height={800}
                  className="object-contain w-full h-auto"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-background transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-background transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {serviceImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Ver servicio ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href={getWhatsAppUrl(serviceImages[currentIndex].name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Cotizar {serviceImages[currentIndex].name}
              </a>
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {serviceImages.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-background border border-border flex items-center justify-center">
                <div className="relative w-full">
                  <Image
                    src={service.src || "/placeholder.svg"}
                    alt={service.alt}
                    width={800}
                    height={800}
                    className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a
                        href={getWhatsAppUrl(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Cotizar
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl bg-transparent border-white text-white hover:bg-white/20 hover:text-white"
                    >
                      <Link href={`/servicios/${service.slug}`}>
                        Ver detalles
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
