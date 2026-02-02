"use client"

import type React from "react"
import { siteConfig } from "@/lib/site-data" // Import siteConfig variable

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { services } from "@/lib/site-data"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const eventType = formData.get("eventType") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const city = formData.get("city") as string
    const guests = formData.get("guests") as string
    const location = formData.get("location") as string
    const message = formData.get("message") as string

    // Build WhatsApp message
    let whatsappMessage = `¡Hola! Me gustaría cotizar sus servicios:\n\n`
    whatsappMessage += `*Nombre:* ${name}\n`
    whatsappMessage += `*Tipo de evento:* ${eventType}\n`
    whatsappMessage += `*Fecha:* ${date}\n`
    whatsappMessage += `*Hora aproximada:* ${time}\n`
    whatsappMessage += `*Ciudad:* ${city}\n`
    whatsappMessage += `*Número aproximado de invitados:* ${guests}\n`
    whatsappMessage += `*Ubicación de instalación:* ${location}\n`

    if (selectedServices.length > 0) {
      whatsappMessage += `\n*Servicios de interés:*\n`
      selectedServices.forEach((service) => {
        whatsappMessage += `- ${service}\n`
      })
    }

    if (message) {
      whatsappMessage += `\n*Mensaje adicional:*\n${message}\n`
    }

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/52${siteConfig.whatsapp}?text=${encodedMessage}`

    // Small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    toast.success("Abriendo WhatsApp...", {
      description: "Se ha preparado tu mensaje, solo haz clic en enviar.",
    })

    // Reset form
    ;(e.target as HTMLFormElement).reset()
    setSelectedServices([])
  }

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName) ? prev.filter((s) => s !== serviceName) : [...prev, serviceName],
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl border border-border p-6 md:p-8"
    >
      <div className="space-y-5">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
            className="rounded-xl bg-muted/50 border-border"
          />
        </div>

        {/* Event Type */}
        <div className="space-y-2">
          <Label htmlFor="eventType">Tipo de evento *</Label>
          <select
            id="eventType"
            name="eventType"
            required
            className="w-full rounded-xl bg-muted/50 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Selecciona...</option>
            <option value="boda">Boda</option>
            <option value="xv">XV Años</option>
            <option value="cumpleanos">Cumpleaños</option>
            <option value="corporativo">Evento Corporativo</option>
            <option value="baby-shower">Baby Shower</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <Label htmlFor="date">Fecha del evento *</Label>
          <Input id="date" name="date" type="date" required className="rounded-xl bg-muted/50 border-border" />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <Label htmlFor="time">Hora aproximada del evento *</Label>
          <Input
            id="time"
            name="time"
            type="time"
            required
            className="rounded-xl bg-muted/50 border-border"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="city">Ciudad *</Label>
          <Input
            id="city"
            name="city"
            required
            placeholder="Ej: Ciudad de México"
            className="rounded-xl bg-muted/50 border-border"
          />
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label htmlFor="guests">Número aproximado de invitados *</Label>
          <Input
            id="guests"
            name="guests"
            type="number"
            required
            min="1"
            placeholder="Ej: 100"
            className="rounded-xl bg-muted/50 border-border"
          />
        </div>

        {/* Location Type */}
        <div className="space-y-2">
          <Label htmlFor="location">Ubicación de instalación *</Label>
          <select
            id="location"
            name="location"
            required
            className="w-full rounded-xl bg-muted/50 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Selecciona...</option>
            <option value="Planta baja">Planta baja</option>
            <option value="Se suben escaleras">Se suben escaleras</option>
          </select>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <Label>Servicios de interés</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {services.map((service) => (
              <label
                key={service.slug}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                  selectedServices.includes(service.name)
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <Checkbox
                  checked={selectedServices.includes(service.name)}
                  onCheckedChange={() => toggleService(service.name)}
                />
                <span className="text-sm">{service.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje (opcional)</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Cuéntanos más sobre tu evento..."
            className="rounded-xl bg-muted/50 border-border resize-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Enviar mensaje
            </>
          )}
        </Button>
      </div>
    </motion.form>
  )
}
