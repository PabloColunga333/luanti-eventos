import { HeroSection } from "@/components/home/hero-section"
import dynamic from "next/dynamic"
import { SocialProofStrip } from "@/components/home/social-proof-strip"

const ServicesPreview = dynamic(() => import("@/components/home/services-preview"), { ssr: false })
const PackagesPreview = dynamic(() => import("@/components/home/packages-preview"), { ssr: false })
const WhyLuanti = dynamic(() => import("@/components/home/why-luanti"), { ssr: false })
const GalleryTeaser = dynamic(() => import("@/components/home/gallery-teaser"), { ssr: false })
const TestimonialsCarousel = dynamic(() => import("@/components/testimonials-carousel"), { ssr: false })
const HowItWorks = dynamic(() => import("@/components/home/how-it-works"), { ssr: false })
const CoverageArea = dynamic(() => import("@/components/home/coverage-area"), { ssr: false })
const CTASection = dynamic(() => import("@/components/cta-section"), { ssr: false })

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <ServicesPreview />
      <PackagesPreview />
      <WhyLuanti />
      <GalleryTeaser />
      <TestimonialsCarousel />
      <HowItWorks />
      <CoverageArea />
      <CTASection />
    </>
  )
}
