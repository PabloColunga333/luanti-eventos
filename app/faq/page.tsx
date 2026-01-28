import type { Metadata } from "next"
import { FAQHero } from "@/components/faq/faq-hero"
import { FAQContent } from "@/components/faq/faq-content"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas a las preguntas más comunes sobre nuestros servicios de Espejo Mágico, Cabina 360 y Teléfono de Mensajes. Reservaciones, logística, pagos y más.",
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQContent />
      <CTASection
        variant="compact"
        title="¿No encontraste tu respuesta?"
        subtitle="Contáctanos directamente y resolveremos todas tus dudas."
      />
    </>
  )
}
