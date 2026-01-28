"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Video, Phone } from "lucide-react"
import type { Service } from "@/lib/site-data"

const iconMap = {
  sparkles: Sparkles,
  video: Video,
  phone: Phone,
}

interface ServiceCardProps {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/servicios/${service.slug}`} className="group block h-full">
        <div className="relative h-full bg-card rounded-2xl border border-border p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-7 h-7 text-primary" />
            </div>

            {/* Content */}
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">
              {service.name}
            </h3>
            <p className="text-lg font-bold text-primary mb-2">{service.price}</p>
            <p className="text-sm text-muted-foreground mb-1">{service.hours} de servicio</p>
            <p className="text-muted-foreground mb-5 line-clamp-2">{service.shortDescription}</p>

            {/* CTA */}
            <div className="flex items-center text-primary font-medium">
              <span>Ver detalles</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
