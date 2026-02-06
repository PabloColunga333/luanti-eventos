"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Gift, Users, Rocket, Award, Sparkles, PartyPopper } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const useCases = [
  {
    icon: Rocket,
    title: "Lanzamientos de Producto",
    description: "Crea contenido viral con tu nuevo producto como protagonista.",
    image: "/corporativo/casos/al-elmes-ULHxWq8reao-unsplash.jpg",
  },
  {
    icon: Gift,
    title: "Posadas y Fin de Año",
    description: "Celebra con tu equipo y crea recuerdos inolvidables.",
    image: "/corporativo/casos/antenna-ZDN-G1xBWHY-unsplash.jpg",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Fortalece la integración de tu equipo con experiencias divertidas.",
    image: "/corporativo/casos/efren-barahona-fAi0qhc1nyE-unsplash.jpg",
  },
  {
    icon: Award,
    title: "Premiaciones",
    description: "Documenta los logros de tu equipo con fotos profesionales.",
    image: "/corporativo/casos/evangeline-shaw-xRlI-L-kvrw-unsplash.jpg",
  },
  {
    icon: Sparkles,
    title: "Activaciones de Marca",
    description: "Genera engagement con experiencias interactivas para tu audiencia.",
    image: "/corporativo/casos/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg",
  },
  {
    icon: PartyPopper,
    title: "Aniversarios Empresariales",
    description: "Celebra los hitos de tu empresa con estilo.",
    image: "/corporativo/casos/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg",
  },
]

export function CorporateUseCases() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card/80 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Casos de Uso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestros servicios se adaptan a cualquier tipo de evento corporativo.
          </p>
        </motion.div>

        <div className="relative">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-4">
              {useCases.map((item, index) => {
                const Icon = item.icon
                return (
                  <CarouselItem key={item.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full"
                    >
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                          <div className="absolute left-4 bottom-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
