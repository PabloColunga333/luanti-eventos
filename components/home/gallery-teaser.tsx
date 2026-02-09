import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { galleryItems } from "@/lib/site-data"

export function GalleryTeaser() {
  const previewItems = galleryItems.slice(0, 4)

  return (
    <section className="py-16 md:py-24 bg-card/50 content-visibility-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Nuestro Trabajo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mira algunos de los momentos que hemos capturado en bodas, XV años y eventos corporativos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {previewItems.map((item) => (
            <div key={item.id} className="relative aspect-square rounded-2xl overflow-hidden group">
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt="Foto de evento"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === "video" && (
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/galeria" className="inline-flex items-center text-primary hover:underline font-medium">
            Ver galería completa
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
