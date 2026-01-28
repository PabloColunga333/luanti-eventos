import type { Metadata } from "next"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryContent } from "@/components/gallery/gallery-content"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Mira nuestra galería de fotos y videos de eventos: bodas, XV años, cumpleaños y eventos corporativos con Espejo Mágico y Cabina 360.",
}

export default function GaleriaPage() {
  return (
    <>
      <GalleryHero />
      <GalleryContent />
      <CTASection
        variant="compact"
        title="¿Te gustó lo que viste?"
        subtitle="Haz que tu evento sea el próximo en nuestra galería."
      />
    </>
  )
}
