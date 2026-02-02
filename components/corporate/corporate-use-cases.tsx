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
    <section className="py-16 md:py-24 bg-gradient-to-b from-card/80 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
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
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
