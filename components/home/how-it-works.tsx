import { howItWorks } from "@/lib/site-data"

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 content-visibility-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">¿Cómo funciona?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contratar es muy sencillo. En 4 pasos estarás listo para disfrutar tu evento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-2xl border border-border p-6 text-center">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
