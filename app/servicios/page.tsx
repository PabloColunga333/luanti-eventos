import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Servicios de Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias",
  description:
    "Servicios para eventos en CDMX, Querétaro y Toluca: Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias. Fotos, videos y recuerdos para tu celebración.",
  keywords: [
    "espejo mágico",
    "cabina 360",
    "teléfono de dedicatorias",
    "foto cabina",
    "photo booth",
    "eventos CDMX",
    "eventos Querétaro",
    "eventos Toluca",
  ],
}

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CTASection
        variant="compact"
        title="¿Tienes dudas sobre qué servicio elegir?"
        subtitle="Te ayudamos a encontrar la opción perfecta para tu evento."
      />
    </>
  )
}
