"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: 1,
    title: "Consulta Inicial",
    description: "Cuéntanos sobre tu evento, objetivos y necesidades de branding.",
  },
  {
    step: 2,
    title: "Propuesta Personalizada",
    description: "Diseñamos una propuesta a la medida con opciones y precios claros.",
  },
  {
    step: 3,
    title: "Diseño y Preparación",
    description: "Creamos plantillas y overlays con tu branding corporativo.",
  },
  {
    step: 4,
    title: "Ejecución Impecable",
    description: "Nuestro equipo profesional llega puntual y maneja todo el evento.",
  },
]

export function CorporateProcess() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Nuestro Proceso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Un proceso claro y profesional de principio a fin.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{item.step}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
