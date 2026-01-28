"use client"

import { motion } from "framer-motion"
import { Check, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { packages, siteConfig } from "@/lib/site-data"

export function PackageTable() {
  const getWhatsAppUrl = (packageName: string) =>
    `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola, me interesa cotizar el paquete ${packageName}`)}`

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[600px] md:min-w-0">
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
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                Más Popular
              </div>
            )}

            <div className={`p-6 ${pkg.popular ? "pt-12" : ""}`}>
              <h3 className="font-serif text-2xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{pkg.hours}</p>
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">Desde</span>
                <p className="text-3xl font-bold text-primary">{pkg.priceFrom}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {typeof feature.included === "boolean" ? (
                      feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )
                    ) : (
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                <a href={getWhatsAppUrl(pkg.name)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {pkg.cta}
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
