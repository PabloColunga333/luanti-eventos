"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Nuestro Proceso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Un proceso claro y profesional de principio a fin.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal timeline */}
          <div className="hidden lg:block relative">
            {/* Connection line */}
            <div className="absolute top-8 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            <div className="grid grid-cols-4 gap-6">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center group"
                >
                  {/* Step number circle */}
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: '2s' }} />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start group"
              >
                {/* Step number and connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/35 transition-all flex-shrink-0">
                    <span className="text-lg font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-primary/40 to-primary/10 mt-2" />
                  )}
                </div>
                
                {/* Content */}
                <div className="bg-card border border-border rounded-xl p-4 flex-1 group-hover:border-primary/30 transition-colors">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
