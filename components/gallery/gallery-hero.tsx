"use client"

import { motion } from "framer-motion"

export function GalleryHero() {
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
            Nuestra <span className="text-primary">Galería</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Explora los momentos que hemos capturado en bodas, XV años, cumpleaños y eventos corporativos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
