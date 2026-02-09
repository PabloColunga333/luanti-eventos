"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function SocialProofStrip() {
  return (
    <section className="py-8 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center"
        >
          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="relative w-5 h-5">
                <Star className="w-5 h-5 text-primary/40" />
                <span className="absolute inset-0 overflow-hidden" style={{ width: "70%" }}>
                  <Star className="w-5 h-5 fill-primary text-primary" />
                </span>
              </span>
            </div>
            <span className="text-sm text-muted-foreground">Calificación 4.7</span>
          </div>

          <div className="hidden md:block w-px h-8 bg-border" />

          {/* Trust line */}
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">+500</span> eventos realizados
          </p>

          <div className="hidden md:block w-px h-8 bg-border" />

          {/* Corporate clients */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Confían en nosotros:</span>
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              {/* ICEE Logo */}
              <div className="px-3 py-2 sm:px-4 sm:py-3 bg-background rounded-xl shadow-md border border-border/60 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="/logos/icee-logo.svg"
                  alt="ICEE"
                  width={80}
                  height={32}
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </div>
              {/* DHL Logo */}
              <div className="px-3 py-2 sm:px-4 sm:py-3 bg-background rounded-xl shadow-md border border-border/60 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="/logos/dhl-logo.svg"
                  alt="DHL"
                  width={80}
                  height={32}
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </div>
              {/* BIMBO Logo */}
              <div className="px-3 py-2 sm:px-4 sm:py-3 bg-background rounded-xl shadow-md border border-border/60 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="/logos/bimbo-logo.svg"
                  alt="Grupo BIMBO"
                  width={80}
                  height={32}
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
