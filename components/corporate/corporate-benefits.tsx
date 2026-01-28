"use client"

import { motion } from "framer-motion"
import { Palette, Clock, Shield, Zap, Users, FileText } from "lucide-react"

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
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
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
