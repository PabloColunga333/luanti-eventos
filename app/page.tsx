import { HeroSection } from "@/components/home/hero-section"
import dynamic from "next/dynamic"
import { SocialProofStrip } from "@/components/home/social-proof-strip"

const ServicesPreview = dynamic(() => import("@/components/home/services-preview").then((mod) => mod.ServicesPreview))
const PackagesPreview = dynamic(() => import("@/components/home/packages-preview").then((mod) => mod.PackagesPreview))
const WhyLuanti = dynamic(() => import("@/components/home/why-luanti").then((mod) => mod.WhyLuanti))
const GalleryTeaser = dynamic(() => import("@/components/home/gallery-teaser").then((mod) => mod.GalleryTeaser))
const TestimonialsCarousel = dynamic(() => import("@/components/testimonials-carousel").then((mod) => mod.TestimonialsCarousel))
const HowItWorks = dynamic(() => import("@/components/home/how-it-works").then((mod) => mod.HowItWorks))
const CoverageArea = dynamic(() => import("@/components/home/coverage-area").then((mod) => mod.CoverageArea))
const CTASection = dynamic(() => import("@/components/cta-section").then((mod) => mod.CTASection))

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
