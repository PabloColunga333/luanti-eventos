"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { packages } from "@/lib/site-data"
import Link from "next/link"

export function PackageTable() {
  const contactFormUrl = "/contacto#formulario"

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-card rounded-2xl border overflow-hidden ${
              pkg.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
            }`}
          >
            {pkg.popular && (
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 md:py-2 text-xs md:text-sm font-medium">
                Más Popular
              </div>
            )}

            <div className={`p-4 md:p-6 ${pkg.popular ? "pt-8 md:pt-12" : ""}`}>
              <h3 className="font-serif text-lg md:text-2xl font-semibold mb-1 md:mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">{pkg.hours}</p>
              <div className="mb-4 md:mb-6">
                <span className="text-xs md:text-sm text-muted-foreground">Desde</span>
                <p className="text-2xl md:text-3xl font-bold text-primary">{pkg.priceFrom}</p>
              </div>

              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm">
                    {typeof feature.included === "boolean" ? (
                      feature.included ? (
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )
                    ) : (
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        typeof feature.included === "boolean" && !feature.included ? "text-muted-foreground" : ""
                      }
                    >
                      {feature.name}
                      {typeof feature.included === "string" && (
                        <span className="text-primary ml-1">({feature.included})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-xl ${
                  pkg.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <Link href={contactFormUrl}>
                  <SiWhatsapp className="w-4 h-4 mr-2" />
                  {pkg.cta}
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
