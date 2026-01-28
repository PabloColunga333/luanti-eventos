"use client"

import { motion } from "framer-motion"
import { Building2, Gift, Users, Star, Camera, Calendar, Rocket, Award, Sparkles, PartyPopper } from "lucide-react"

const useCases = [
  {
    icon: Rocket,
    title: "Lanzamientos de Producto",
    description: "Crea contenido viral con tu nuevo producto como protagonista.",
  },
  {
    icon: Gift,
    title: "Posadas y Fin de Año",
    description: "Celebra con tu equipo y crea recuerdos inolvidables.",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Fortalece la integración de tu equipo con experiencias divertidas.",
  },
  {
    icon: Award,
    title: "Premiaciones",
    description: "Documenta los logros de tu equipo con fotos profesionales.",
  },
  {
    icon: Sparkles,
    title: "Activaciones de Marca",
    description: "Genera engagement con experiencias interactivas para tu audiencia.",
  },
  {
    icon: PartyPopper,
    title: "Aniversarios Empresariales",
    description: "Celebra los hitos de tu empresa con estilo.",
  },
]

export function CorporateUseCases() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Casos de Uso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestros servicios se adaptan a cualquier tipo de evento corporativo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, index) => {
            const Icon = item.icon
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
