import { Metadata } from "next"
import { privacyPolicy } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Luanti Eventos",
  description: "Aviso de privacidad y protección de datos personales de Luanti Eventos.",
}

export default function PrivacidadPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
            {privacyPolicy.title}
          </h1>
          <p className="text-muted-foreground mb-8">Última actualización: {privacyPolicy.lastUpdated}</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              En Luanti Eventos nos comprometemos a proteger la privacidad de nuestros clientes. Este aviso de
              privacidad describe cómo recopilamos, usamos y protegemos su información personal.
            </p>

            {privacyPolicy.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="font-serif text-xl font-semibold mb-4 text-foreground">{section.title}</h2>
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-12 p-6 bg-card rounded-2xl border border-border">
              <h3 className="font-semibold mb-2 text-foreground">Contacto</h3>
              <p className="text-muted-foreground">
                Si tienes preguntas sobre este aviso de privacidad, puedes contactarnos en:{" "}
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
