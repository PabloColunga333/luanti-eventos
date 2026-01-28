"use client"

import { motion } from "framer-motion"
import { MessageCircle, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { combos, siteConfig } from "@/lib/site-data"

export function CombosSection() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Percent className="w-4 h-4" />
            Paquetes Promocionales
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Combina y Ahorra</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combina servicios y obtén el mejor precio. Más diversión para tus invitados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {combos.map((combo, index) => {
            const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola, me interesa cotizar el paquete ${combo.name}`)}`

            return (
              <motion.div
                key={combo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-primary/30 p-6 hover:border-primary/50 transition-colors shadow-lg shadow-primary/5"
              >
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                  {combo.discount}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{combo.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {combo.services.map((service) => (
                    <span key={service} className="text-xs px-2 py-1 bg-muted/50 rounded text-muted-foreground">
                      {service}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{combo.description}</p>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <p className="text-2xl font-bold text-primary">{combo.price}</p>
                  <p className="text-sm text-muted-foreground line-through">{combo.originalPrice}</p>
                </div>

                <Button
                  asChild
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Cotizar Paquete
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
