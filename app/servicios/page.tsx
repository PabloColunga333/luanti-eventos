import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce nuestros servicios de entretenimiento para eventos: Espejo Mágico, Cabina 360 y Teléfono de Mensajes. Fotos, videos y recuerdos para tu celebración.",
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
