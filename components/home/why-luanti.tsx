"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Palette, Camera, Users, Star } from "lucide-react"
import { whyLuanti } from "@/lib/site-data"

const iconMap = {
  award: CheckCircle,
  clock: Clock,
  palette: Palette,
  zap: Camera,
  users: Users,
  trophy: Star,
}

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
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Award
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
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
