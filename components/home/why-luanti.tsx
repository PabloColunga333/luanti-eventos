"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { whyLuanti } from "@/lib/site-data"

const featureImages = [
  {
    src: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.34%20PM.jpg",
    alt: "Evento social - foto destacada 1",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.36%20PM.jpg",
    alt: "Evento social - foto destacada 2",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.50%20PM.jpg",
    alt: "Evento social - foto destacada 3",
  },
  {
    src: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.38%20PM.jpg",
    alt: "Evento corporativo - foto destacada 1",
  },
  {
    src: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.02%20PM.jpg",
    alt: "Evento corporativo - foto destacada 2",
  },
  {
    src: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.31%20PM.jpg",
    alt: "Evento corporativo - foto destacada 3",
  },
]

export function WhyLuanti() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">¿Por qué elegir Luanti?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más que entretenimiento: una experiencia premium que hará brillar tu evento.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyLuanti.map((item, index) => {
            const image = featureImages[index % featureImages.length]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-border/60 mb-4">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
