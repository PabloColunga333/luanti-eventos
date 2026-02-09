import { ArrowRight } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const contactFormUrl = "/contacto#formulario"

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[72px] sm:blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-[60px] sm:blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-balance leading-tight">
              Espejo Mágico, Cabina 360 y Teléfono de Dedicatorias <span className="text-primary">para tu evento</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Creamos experiencias memorables a través de cabinas fotográficas modernas y elegantes. Calidad, puntualidad y atención al detalle.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <Link href={contactFormUrl}>
                  <SiWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="whitespace-nowrap">Consultar fecha</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-border hover:bg-muted/50 hover:text-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent"
              >
                <Link href="/paquetes">
                  Ver paquetes
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-border hover:bg-muted/50 hover:text-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-background/50"
              >
                <Link href="/corporativo">
                  Eventos corporativos
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image / Video placeholder */}
          {/* Render delay: sin animación en la imagen LCP */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero-espejo-magico-560.webp"
                alt="Espejo Mágico en evento"
                fill
                className="object-cover object-center-top"
                style={{ objectPosition: '50% 35%' }}
                fetchPriority="high"
                // LCP: evitar imagen más grande de lo necesario en móvil
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                priority
              />
              {/* Play button overlay for video */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-background/20 hover:bg-background/30 transition-colors group"
                aria-label="Ver video"
              >
                
              </button>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-4 bottom-8 bg-card border border-border rounded-2xl p-4 shadow-lg hidden md:block">
              <p className="text-sm text-muted-foreground">Entrega instantánea</p>
              <p className="font-semibold text-foreground">Fotos y videos por QR</p>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -right-4 top-8 bg-card border border-border rounded-2xl p-4 shadow-lg hidden md:block">
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Puntuales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
