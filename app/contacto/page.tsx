import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para cotizar tu evento. WhatsApp, teléfono, email o formulario de contacto. Respuesta en menos de 2 horas.",
}

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  )
}
