import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { services } from "@/lib/site-data"
import { ServiceDetailHero } from "@/components/services/service-detail-hero"
import { ServiceDetailContent } from "@/components/services/service-detail-content"
import { CTASection } from "@/components/cta-section"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: "Servicio no encontrado",
    }
  }

  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | Luanti Eventos`,
      description: service.shortDescription,
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <CTASection
        title={`¿Listo para reservar ${service.name}?`}
        subtitle="Consulta disponibilidad y recibe tu cotización en minutos."
        primaryCta={`Cotizar ${service.name}`}
      />
    </>
  )
}
