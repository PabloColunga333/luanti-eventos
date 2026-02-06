"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-data"
import Link from "next/link"

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryCta?: string
  primaryHref?: string
  secondaryCta?: string
  secondaryHref?: string
  variant?: "default" | "compact"
}

export function CTASection({
  title = "¿Listo para hacer tu evento inolvidable?",
  subtitle = "Cotiza ahora y aparta tu fecha. Respuesta en menos de 2 horas.",
  primaryCta = "Cotizar por WhatsApp",
  primaryHref,
  secondaryCta = "Ver paquetes",
  secondaryHref = "/paquetes",
  variant = "default",
}: CTASectionProps) {
  const whatsappUrl =
    primaryHref ||
    `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, me interesa cotizar para mi evento")}`

  if (variant === "compact") {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center border border-primary/20"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3 text-balance">{title}</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  {primaryCta}
                </a>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-border hover:bg-muted/50 hover:text-foreground bg-transparent"
                >
                  <Link href={secondaryHref}>
                    {secondaryCta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Fechas limitadas
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-lg px-8 py-6"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-5 h-5 mr-2" />
                {primaryCta}
              </a>
            </Button>
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-border hover:bg-muted/50 hover:text-foreground text-lg px-8 py-6 bg-transparent"
                >
                  <Link href={secondaryHref}>
                    {secondaryCta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
