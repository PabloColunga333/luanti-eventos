"use client"

import { motion } from "framer-motion"
import { SiWhatsapp } from "react-icons/si"
import { siteConfig } from "@/lib/site-data"

export function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, me interesa cotizar para mi evento")}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </motion.a>
  )
}
