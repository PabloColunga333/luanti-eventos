import type { Metadata } from "next"
import { PackagesHero } from "@/components/packages/packages-hero"
import { PackageTable } from "@/components/package-table"
import { CombosSection } from "@/components/packages/combos-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Paquetes",
  description:
    "Compara nuestros paquetes de Espejo Mágico, Cabina 360 y Teléfono de Mensajes. Básico, Popular y Premium. Combos con descuentos especiales.",
}

export default function PaquetesPage() {
  return (
    <>
      <PackagesHero />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <PackageTable />
        </div>
      </section>
      <CombosSection />
      <CTASection />
    </>
  )
}
