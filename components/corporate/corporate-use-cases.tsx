"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const useCases = [
  {
    title: "Lanzamientos de Producto",
    description: "Crea contenido viral con tu nuevo producto como protagonista.",
    image: "/corporativo/casos/al-elmes-ULHxWq8reao-unsplash.jpg",
  },
  {
    title: "Posadas y Fin de Año",
    description: "Celebra con tu equipo y crea recuerdos inolvidables.",
    image: "/corporativo/casos/antenna-ZDN-G1xBWHY-unsplash.jpg",
  },
  {
    title: "Team Building",
    description: "Fortalece la integración de tu equipo con experiencias divertidas.",
    image: "/corporativo/casos/efren-barahona-fAi0qhc1nyE-unsplash.jpg",
  },
  {
    title: "Premiaciones",
    description: "Documenta los logros de tu equipo con fotos profesionales.",
    image: "/corporativo/casos/evangeline-shaw-xRlI-L-kvrw-unsplash.jpg",
  },
  {
    title: "Activaciones de Marca",
    description: "Genera engagement con experiencias interactivas para tu audiencia.",
    image: "/corporativo/casos/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg",
  },
  {
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
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {useCases.map((item, index) => {
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
                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
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
            <CarouselPrevious className="left-2 md:-left-6 lg:-left-10 size-9 sm:size-10 bg-background/90 border border-border/60 shadow-lg shadow-black/10 hover:bg-primary hover:text-primary-foreground hover:border-primary/60" />
            <CarouselNext className="right-2 md:-right-6 lg:-right-10 size-9 sm:size-10 bg-background/90 border border-border/60 shadow-lg shadow-black/10 hover:bg-primary hover:text-primary-foreground hover:border-primary/60" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
