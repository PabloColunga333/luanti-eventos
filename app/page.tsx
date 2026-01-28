import { HeroSection } from "@/components/home/hero-section"
import { SocialProofStrip } from "@/components/home/social-proof-strip"
import { ServicesPreview } from "@/components/home/services-preview"
import { PackagesPreview } from "@/components/home/packages-preview"
import { WhyLuanti } from "@/components/home/why-luanti"
import { GalleryTeaser } from "@/components/home/gallery-teaser"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { HowItWorks } from "@/components/home/how-it-works"
import { CoverageArea } from "@/components/home/coverage-area"
import { CTASection } from "@/components/cta-section"

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
