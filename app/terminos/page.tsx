import { Metadata } from "next"
import { termsAndConditions } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Luanti Eventos",
  description: "Términos y condiciones de servicio de Luanti Eventos.",
}

export default function TerminosPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">{termsAndConditions.title}</h1>
          <p className="text-muted-foreground mb-8">Última actualización: {termsAndConditions.lastUpdated}</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {termsAndConditions.sections.map((section, index) => (
              <div key={index} className="mb-8 p-6 bg-card rounded-2xl border border-border">
                <h2 className="font-serif text-lg font-semibold mb-3 text-foreground">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="font-semibold mb-2 text-foreground">Aceptación</h3>
              <p className="text-muted-foreground">
                Al contratar nuestros servicios, confirmas que has leído y aceptas estos términos y condiciones. Si
                tienes preguntas, contáctanos en:{" "}
                <a href="mailto:luantieventos@gmail.com" className="text-primary hover:underline">
                  luantieventos@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
