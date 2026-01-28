"use client"

import { motion } from "framer-motion"

export function PackagesHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-balance">
            Paquetes y <span className="text-primary">Precios</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Elige el paquete que mejor se adapte a tu evento. Todos incluyen operador profesional, props y entrega
            digital instantánea.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
