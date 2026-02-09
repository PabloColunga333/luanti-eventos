import { MapPin } from "lucide-react"
import { coverageCities } from "@/lib/site-data"

export function CoverageArea() {
  return (
    <section className="py-16 md:py-24 bg-card/50 content-visibility-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Área de Cobertura</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Brindamos servicio en las siguientes ciudades. ¿Tu ciudad no está? Contáctanos para verificar
            disponibilidad.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {coverageCities.map((city) => (
            <div key={city} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
