"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site-data"

const contactCards = [
  {
    icon: SiWhatsapp,
    title: "WhatsApp",
    description: "Respuesta inmediata",
    value: "Enviar mensaje",
    href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, me interesa cotizar para mi evento")}`,
    highlight: true,
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: "Lun-Sáb 9am-7pm",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Respuesta en 24h",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
]

export function ContactContent() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-colors ${
                    card.highlight
                      ? "bg-primary/10 border-primary/30 hover:bg-primary/20"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      card.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${card.highlight ? "" : "text-primary"}`} />
                  </div>
                  <div>
                    <p className="font-semibold">{card.title}</p>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                    <p className={`text-sm mt-1 ${card.highlight ? "text-primary font-medium" : ""}`}>{card.value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Horario de atención</p>
                  <p className="text-sm text-muted-foreground">Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Domingo: Solo citas previas</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
