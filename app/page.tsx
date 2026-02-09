import { HeroSection } from "@/components/home/hero-section"
import dynamic from "next/dynamic"
import { SocialProofStrip } from "@/components/home/social-proof-strip"

const ServicesPreview = dynamic(() => import("@/components/home/services-preview"))
const PackagesPreview = dynamic(() => import("@/components/home/packages-preview"))
const WhyLuanti = dynamic(() => import("@/components/home/why-luanti"))
const GalleryTeaser = dynamic(() => import("@/components/home/gallery-teaser"))
const TestimonialsCarousel = dynamic(() => import("@/components/testimonials-carousel"))
const HowItWorks = dynamic(() => import("@/components/home/how-it-works"))
const CoverageArea = dynamic(() => import("@/components/home/coverage-area"))
const CTASection = dynamic(() => import("@/components/cta-section"))

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
