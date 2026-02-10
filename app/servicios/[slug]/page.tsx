import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { services, siteConfig } from "@/lib/site-data"
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
    title: `${service.name} en CDMX, Querétaro y Toluca`,
    description: service.shortDescription,
    keywords: [
      service.name.toLowerCase(),
      "espejo mágico",
      "cabina 360",
      "teléfono de dedicatorias",
      "photo booth",
      "eventos CDMX",
      "eventos Querétaro",
      "eventos Toluca",
    ],
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

  const serviceImageMap: Record<string, string> = {
    "espejo-magico": "/services/espejo-magico-real.webp",
    "cabina-360": "/services/cabina-360-real.webp",
    "telefono-dedicatorias": "/services/telefono-dedicatorias-real.webp",
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    areaServed: ["CDMX", "Querétaro", "Toluca"],
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: "https://luantieventos.com",
      telephone: siteConfig.phone,
    },
    image: `https://luantieventos.com${serviceImageMap[service.slug] || ""}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "MXN",
      price: service.price.replace(/[^0-9]/g, ""),
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
