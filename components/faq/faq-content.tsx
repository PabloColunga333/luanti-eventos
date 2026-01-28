"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FAQAccordion } from "@/components/faq-accordion"
import { faqs } from "@/lib/site-data"

export function FAQContent() {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category)

  const activeFAQ = faqs.find((f) => f.category === activeCategory)

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {category.category}
              </button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          {activeFAQ && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FAQAccordion items={activeFAQ.questions} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
