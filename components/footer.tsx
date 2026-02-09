import Link from "next/link"
import { Sparkles, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { siteConfig } from "@/lib/site-data"

const footerLinks = {
  servicios: [
    { href: "/servicios/espejo-magico", label: "Espejo Mágico" },
    { href: "/servicios/cabina-360", label: "Cabina 360" },
    { href: "/servicios/telefono-dedicatorias", label: "Teléfono de Dedicatorias" },
  ],
  empresa: [
    { href: "/paquetes", label: "Paquetes" },
    { href: "/galeria", label: "Galería" },
    { href: "/corporativo", label: "Corporativo" },
    { href: "/faq", label: "Preguntas Frecuentes" },
    { href: "/contacto", label: "Contacto" },
  ],
}

export function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, me interesa información sobre sus servicios")}`

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/luanti-logo-96.webp" 
                alt="Luanti Eventos" 
                width={120}
                height={40}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md mb-4 leading-6">
              En Luanti Eventos creamos experiencias memorables a través de cabinas fotográficas modernas y elegantes. Nuestro enfoque está en la calidad del servicio, la puntualidad y la atención al detalle, garantizando recuerdos únicos para cada evento.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiWhatsapp className="w-4 h-4 text-primary" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Espejo Mágico Luanti Eventos. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacidad" className="hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-primary transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
