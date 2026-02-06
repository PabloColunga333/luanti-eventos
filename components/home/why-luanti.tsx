"use client"

import { motion } from "framer-motion"
import { whyLuanti } from "@/lib/site-data"

export function WhyLuanti() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
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
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card/70 backdrop-blur-sm rounded-2xl border border-border p-6 hover:border-primary/50 hover:bg-card transition-all duration-300"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
