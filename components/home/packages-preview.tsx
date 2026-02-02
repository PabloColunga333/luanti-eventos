"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const comboImages = [
  {
    src: "/packages/combo-espejo-cabina.png",
    alt: "Paquete Espejo Mágico + Cabina 360 - $10,000 MXN",
    name: "Espejo Mágico + Cabina 360",
    price: "$10,000 MXN",
  },
  {
    src: "/packages/combo-espejo-telefono.png",
    alt: "Paquete Espejo Mágico + Teléfono de Dedicatorias - $9,000 MXN",
    name: "Espejo Mágico + Teléfono de Dedicatorias",
    price: "$9,000 MXN",
  },
]

export function PackagesPreview() {
  const getWhatsAppUrl = (packageName: string) =>
    `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola, me interesa cotizar el paquete ${packageName}`)}`

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Combina y Ahorra</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Obtén el mejor precio combinando nuestros servicios. Aprovecha nuestras promociones especiales.
          </p>
        </motion.div>

        {/* Combo Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {comboImages.map((combo, index) => (
            <motion.div
              key={combo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg border border-primary/20">
                <Image
                  src={combo.src || "/placeholder.svg"}
                  alt={combo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href={getWhatsAppUrl(combo.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Cotizar Paquete
                    </a>
                  </Button>
                </div>
              </div>
              {/* Mobile CTA (always visible on mobile) */}
              <div className="mt-4 md:hidden">
                <Button
                  asChild
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={getWhatsAppUrl(combo.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Cotizar Paquete
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/paquetes" className="inline-flex items-center text-primary hover:underline font-medium">
            Ver todos los paquetes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
