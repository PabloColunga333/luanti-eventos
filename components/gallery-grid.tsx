"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play } from "lucide-react"
import type { GalleryItem } from "@/lib/site-data"

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => setSelectedItem(item)}
            className="relative aspect-square rounded-2xl overflow-hidden group"
          >
            <Image
              src={item.thumbnail || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              {item.type === "video" && (
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              )}
              {item.type === "image" && <span className="text-foreground font-medium">{item.title}</span>}
            </div>
            {item.type === "video" && (
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center">
                <Play className="w-4 h-4 text-foreground" />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted/50 transition-colors"
              onClick={() => setSelectedItem(null)}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={selectedItem.url || "/placeholder.svg"}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-card">
                  <iframe
                    src={selectedItem.url}
                    title={selectedItem.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <p className="text-center mt-4 text-lg font-medium">{selectedItem.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
