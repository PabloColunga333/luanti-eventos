"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GalleryGrid } from "@/components/gallery-grid"
import { galleryItems } from "@/lib/site-data"

const tabs = [
  { id: "all", label: "Todos" },
  { id: "social", label: "Social" },
  { id: "corporativo", label: "Corporativo" },
]

export function GalleryContent() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems = activeTab === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeTab)

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <GalleryGrid items={filteredItems} />
      </div>
    </section>
  )
}
