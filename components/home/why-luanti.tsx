"use client"

import { motion, useReducedMotion } from "framer-motion"
import { whyLuanti } from "@/lib/site-data"

export function WhyLuanti() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Fondo con patrón y gradientes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      {/* Orbes decorativos animados */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }
        }
        transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[72px] sm:blur-[100px]"
      />
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.15, 0.1],
              }
        }
        transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-primary/15 rounded-full blur-[60px] sm:blur-[80px]"
      />

      <div className="container mx-auto px-4 relative">
        {/* Encabezado mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
            ¿Por qué elegir Luanti?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Más que entretenimiento: una experiencia premium que hará brillar tu evento.
          </p>
        </motion.div>

        {/* Grid de tarjetas mejorado */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {whyLuanti.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Efecto de brillo detrás de la tarjeta */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-7 h-full overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10">
                  {/* Línea decorativa superior */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Círculo decorativo de fondo */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
                  
                  {/* Contenido */}
                  <div className="relative">
                    <h3 className="font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Elemento decorativo inferior */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
