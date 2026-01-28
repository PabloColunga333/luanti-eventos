import type { Metadata } from "next"
import { CorporateHero } from "@/components/corporate/corporate-hero"
import { CorporateUseCases } from "@/components/corporate/corporate-use-cases"
import { CorporateProcess } from "@/components/corporate/corporate-process"
import { CorporateBenefits } from "@/components/corporate/corporate-benefits"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Corporativo",
  description:
    "Servicios de entretenimiento para eventos corporativos: activaciones de marca, lanzamientos, posadas y más. Branding personalizado y servicio profesional.",
}

export default function CorporativoPage() {
  return (
    <>
      <CorporateHero />
      <CorporateUseCases />
      <CorporateProcess />
      <CorporateBenefits />
      <CTASection
        title="¿Planeas un evento corporativo?"
        subtitle="Solicita una propuesta personalizada para tu empresa."
        primaryCta="Solicitar propuesta corporativa"
      />
    </>
  )
}
