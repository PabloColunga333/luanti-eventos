"use client"

import { motion } from "framer-motion"
import { Palette, Clock, Shield, Zap, Users, FileText, CheckCircle2 } from "lucide-react"

const benefits = [
  {
    icon: Palette,
    title: "Branding Completo",
    description: "Tu logo, colores y mensajes en todas las piezas.",
  },
  {
    icon: Clock,
    title: "Puntualidad Garantizada",
    description: "Llegamos con tiempo de anticipación, siempre.",
  },
  {
    icon: Shield,
    title: "Equipo Profesional",
    description: "Personal capacitado con dress code corporativo.",
  },
  {
    icon: Zap,
    title: "Entrega Inmediata",
    description: "Contenido listo para compartir al instante.",
  },
  {
    icon: Users,
    title: "Alto Volumen",
    description: "Capacidad para atender eventos de gran escala.",
  },
  {
    icon: FileText,
    title: "Facturación",
    description: "Emitimos facturas fiscales (CFDI) para tu empresa.",
  },
]

export function CorporateBenefits() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Beneficios Corporativos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entendemos las necesidades específicas de los eventos empresariales.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-card transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-primary/40 flex-shrink-0 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
