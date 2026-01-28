"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-data"

export function CorporateHero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, me interesa información sobre servicios corporativos")}`

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-balance">
              Entretenimiento <span className="text-primary">Corporativo</span> de Alto Nivel
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Potencia tu marca con experiencias memorables. Ofrecemos servicios de foto y video personalizados para
              activaciones, lanzamientos, posadas y eventos empresariales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar propuesta
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              <Image
                src="/corporate-espejo-magico-luanti.jpg"
                alt="Espejo Mágico Luanti en evento corporativo con alfombra roja"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
