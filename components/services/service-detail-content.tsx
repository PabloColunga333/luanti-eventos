"use client"

import { motion } from "framer-motion"
import { Check, AlertCircle, Plus } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"
import type { Service } from "@/lib/site-data"

interface ServiceDetailContentProps {
  service: Service
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <h2 className="font-serif text-2xl font-semibold mb-4">¿Qué es?</h2>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <h2 className="font-serif text-2xl font-semibold mb-6">¿Qué incluye?</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-primary" />
              Requerimientos
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Espacio mínimo</p>
                <p className="font-medium">{service.requirements.space}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Energía eléctrica</p>
                <p className="font-medium">{service.requirements.power}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tiempo de montaje</p>
                <p className="font-medium">{service.requirements.setupTime}</p>
              </div>
            </div>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
              <Plus className="w-6 h-6 text-primary" />
              Extras disponibles
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.addons.map((addon, i) => (
                <span key={i} className="px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground">
                  {addon}
                </span>
              ))}
            </div>
          </motion.div>

          {/* FAQ for this service */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-2xl font-semibold mb-6">Preguntas frecuentes</h2>
            <FAQAccordion items={service.faqs} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
