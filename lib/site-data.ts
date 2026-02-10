// Site Data - Central data file for easy content management

export const siteConfig = {
  name: "Luanti Eventos",
  tagline: "Creamos experiencias memorables a través de cabinas fotográficas modernas y elegantes",
  description:
    "En Luanti Eventos creamos experiencias memorables a través de cabinas fotográficas modernas y elegantes. Nuestro enfoque está en la calidad del servicio, la puntualidad y la atención al detalle, garantizando recuerdos únicos para cada evento.",
  whatsapp: "5568964640",
  phone: "55 6896 4640",
  email: "luantieventos@gmail.com",
  address: "CDMX, Querétaro y Toluca",
  socialMedia: {
    instagram: "https://instagram.com/luantieventos",
    facebook: "https://facebook.com/luantieventos",
    tiktok: "https://tiktok.com/@luantieventos",
  },
}

export interface Service {
  name: string
  slug: string
  shortDescription: string
  description: string
  heroTitle: string
  heroSubtitle: string
  icon: string
  price: string
  hours: string
  includes: string[]
  requirements: {
    space: string
    power: string
    setupTime: string
  }
  addons: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    name: "Espejo Mágico",
    slug: "espejo-magico",
    shortDescription:
      "Experiencia interactiva elegante ideal para bodas, XV años, cumpleaños y eventos corporativos.",
    description:
      "Cabina fotográfica interactiva de cuerpo completo con animaciones y fotos instantáneas. Tus invitados posan frente al espejo, reciben indicaciones en pantalla y se llevan impresiones al momento.",
    heroTitle: "Espejo Mágico",
    heroSubtitle:
      "Experiencia interactiva elegante ideal para bodas, XV años, cumpleaños y eventos corporativos.",
    icon: "sparkles",
    price: "$6,000 MXN",
    hours: "2 horas",
    includes: [
      "2 horas de servicio",
      "Fotos ilimitadas",
      "Impresión instantánea",
      "Accesorios premium",
      "Alfombra roja",
      "Operador profesional",
    ],
    requirements: {
      space: "Mínimo 2x2 m",
      power: "En el apartado de energía eléctrica: Toma eléctrica funcional que este a menos o igual a 20m de distancia de donde se instalará el equipo.",
      setupTime: "30 minutos antes del evento",
    },
    addons: ["Hora extra - $1,500 MXN"],
    faqs: [
      {
        question: "¿Cuántas personas caben en una foto?",
        answer: "El espejo puede capturar hasta 6-8 personas cómodamente en una sola foto de cuerpo completo.",
      },
      {
        question: "¿Las impresiones están incluidas?",
        answer: "Sí, todas las impresiones son ilimitadas durante el tiempo contratado.",
      },
      {
        question: "¿Puedo personalizar el diseño de las fotos?",
        answer:
          "Sí,  personalizamos el marco impreso con el logo de la fiesta o empresa, nombre de la quinceañera o de los novios.\nLas preferencias deben enviarse con dos semanas de anticipación.",
      },
    ],
  },
  {
    name: "Cabina 360",
    slug: "cabina-360",
    shortDescription:
      "La experiencia más moderna para crear videos dinámicos y compartirlos al instante.",
    description:
      "Plataforma giratoria que graba videos en cámara lenta con efectos y música. Ideal para crear clips impactantes y compartirlos en redes al instante.",
    heroTitle: "Cabina 360°",
    heroSubtitle:
      "La experiencia más moderna para crear videos dinámicos y compartirlos al instante.",
    icon: "video",
    price: "$6,000 MXN",
    hours: "2 horas",
    includes: [
      "2 horas de servicio",
      "Videos ilimitados",
      "Diseño personalizado",
      "Música",
      "Accesorios",
      "Descarga inmediata",
      "Operador profesional",
    ],
    requirements: {
      space: "Mínimo 3x3 m",
      power: "En el apartado de energía eléctrica: Toma eléctrica funcional que este a menos o igual a 20m de distancia de donde se instalará el equipo.",
      setupTime: "30 minutos antes del evento",
    },
    addons: ["Hora extra - $1,500 MXN"],
    faqs: [
      {
        question: "¿Cuántas personas pueden subir a la plataforma?",
        answer: "Recomendamos máximo 3-4 personas para videos óptimos y seguros.",
      },
      {
        question: "¿Se puede usar en exteriores?",
        answer: "Sí, siempre que haya un área techada y protegida del viento.",
      },
      {
        question: "¿Se puede personalizar los videos?",
        answer:
          "Sí,  se pueden personalizar con el logo de la empresa o fiesta , nombre de la quinceañera o de los novios, además pueden indicarnos la canción que deseen que se escuche al reproducirse los videos.\n\nLas preferencias de personalización deben enviarlas máximo 2 semanas antes del evento.",
      },
      {
        question: "¿Cómo reciben los videos mis invitados?",
        answer: "El contenido se entrega mediante descargas instantáneas.",
      },
    ],
  },
  {
    name: "Teléfono de Dedicatorias",
    slug: "telefono-dedicatorias",
    shortDescription:
      "Un recuerdo emotivo donde tus invitados dejan mensajes de voz únicos.",
    description:
      "Teléfono vintage para que tus invitados dejen mensajes de voz emotivos. Al finalizar, recibes todos los audios en un enlace para conservarlos siempre.",
    heroTitle: "Teléfono de Dedicatorias",
    heroSubtitle:
      "Un recuerdo emotivo donde tus invitados dejan mensajes de voz únicos que atesorarás por siempre.",
    icon: "phone",
    price: "$5,000 MXN",
    hours: "3 horas",
    includes: [
      "3 horas de servicio",
      "Grabación ilimitada",
      "Código QR con mensajes",
      "Presentación decorativa",
    ],
    requirements: {
      space: "Espacio tipo mesa 1x1 m",
      power: "No requiere contacto eléctrico",
      setupTime: "30 minutos antes del evento",
    },
    addons: ["Hora extra - $1,500 MXN"],
    faqs: [
      {
        question: "¿Necesita operador?",
        answer: "No, el teléfono es autoservicio con instrucciones claras. Incluimos supervisión periódica.",
      },
      {
        question: "¿Cuánto dura cada mensaje?",
        answer: "Cada invitado puede dejar un mensaje de hasta 2 minutos.",
      },
      {
        question: "¿En qué formato recibo los audios?",
        answer: "Recibes todos los audios mediante código QR para descarga digital.",
      },
    ],
  },
]

export interface Package {
  name: string
  popular: boolean
  price: string
  priceFrom: string
  hours: string
  originalPrice?: string
  services: string[]
  description: string
  features: Array<{
    name: string
    included: boolean | string
  }>
  cta: string
}

export const packages: Package[] = [
  {
    name: "Espejo Mágico",
    popular: false,
    price: "$6,000 MXN",
    priceFrom: "$6,000",
    hours: "2 horas",
    services: ["Espejo Mágico"],
    description: "Experiencia interactiva elegante con fotos ilimitadas e impresión instantánea.",
    features: [
      { name: "2 horas de servicio", included: true },
      { name: "Fotos ilimitadas", included: true },
      { name: "Impresión instantánea", included: true },
      { name: "Accesorios premium", included: true },
      { name: "Alfombra roja", included: true },
      { name: "Operador profesional", included: true },
    ],
    cta: "Cotizar Espejo Mágico",
  },
  {
    name: "Cabina 360",
    popular: true,
    price: "$6,000 MXN",
    priceFrom: "$6,000",
    hours: "2 horas",
    services: ["Cabina 360"],
    description: "Videos dinámicos 360° para compartir al instante en redes sociales.",
    features: [
      { name: "2 horas de servicio", included: true },
      { name: "Videos ilimitados", included: true },
      { name: "Diseño personalizado", included: true },
      { name: "Música", included: true },
      { name: "Accesorios", included: true },
      { name: "Descarga inmediata", included: true },
      { name: "Operador profesional", included: true },
    ],
    cta: "Cotizar Cabina 360",
  },
  {
    name: "Teléfono de Dedicatorias",
    popular: false,
    price: "$5,000 MXN",
    priceFrom: "$5,000",
    hours: "3 horas",
    services: ["Teléfono de Dedicatorias"],
    description: "Mensajes de voz emotivos que conservarás para siempre.",
    features: [
      { name: "3 horas de servicio", included: true },
      { name: "Grabación ilimitada", included: true },
      { name: "Código QR con mensajes", included: true },
      { name: "Presentación decorativa", included: true },
      { name: "Supervisión periódica", included: true },
    ],
    cta: "Cotizar Teléfono",
  },
]

export interface Combo {
  name: string
  services: string[]
  price: string
  originalPrice: string
  discount: string
  description: string
}

export const combos: Combo[] = [
  {
    name: "Espejo Mágico + Cabina 360",
    services: ["Espejo Mágico", "Cabina 360"],
    price: "$10,000 MXN",
    originalPrice: "$12,000 MXN",
    discount: "$2,000 de ahorro",
    description: "La combinación perfecta de fotografía y video para eventos que buscan máximo impacto.",
  },
  {
    name: "Espejo Mágico + Teléfono de Dedicatorias",
    services: ["Espejo Mágico", "Teléfono de Dedicatorias"],
    price: "$9,000 MXN",
    originalPrice: "$11,000 MXN",
    discount: "$2,000 de ahorro",
    description: "Diversión y emoción en un solo paquete.",
  },
]

export interface Testimonial {
  name: string
  eventType: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Valencia",
    eventType: "Evento Social",
    quote:
      "Excelente servicio y muy puntuales. Se portaron súper accesibles y considerados. Una forma divertida para tomarnos fotos.",
    rating: 5,
  },
  {
    name: "Yvonne Rmz",
    eventType: "Evento Social",
    quote: "Excelente atención y servicio, son puntuales y muy amables. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Mayela Estrada Lomelí",
    eventType: "Evento Social",
    quote: "Excelente servicio en todos los aspectos. Recomendado al 100%.",
    rating: 5,
  },
  {
    name: "Nat AS",
    eventType: "Bautizo",
    quote:
      "Fue excelente servicio para el bautizo de mi bebé. Mis invitados quedaron encantados, puntuales y muy amables. Recomendable 100%.",
    rating: 5,
  },
]

export interface FAQ {
  category: string
  questions: { question: string; answer: string }[]
}

export const faqs: FAQ[] = [
  {
    category: "Reservaciones",
    questions: [
      {
        question: "¿Con cuánta anticipación debo reservar?",
        answer:
          "Recomendamos reservar con un mes de anticipación para asegurar disponibilidad.",
      },
      {
        question: "¿Cómo se realiza el pago?",
        answer:
          "Se solicita anticipo para reservar la fecha y el pago total debe liquidarse antes del inicio del evento.",
      },
      {
        question: "¿Qué pasa en caso de cancelación?",
        answer: "El anticipo no es reembolsable en cancelaciones por parte del cliente.",
      },
    ],
  },
  {
    category: "Servicios",
    questions: [
      {
        question: "¿Cuánto dura el servicio?",
        answer:
          "La duración estándar es de 2 horas para Espejo Mágico y Cabina 360, y 3 horas para el Teléfono de Dedicatorias.",
      },
      {
        question: "¿El uso es ilimitado?",
        answer: "Sí, durante el tiempo contratado las fotos, videos o mensajes son ilimitados.",
      },
      {
        question: "¿Se puede personalizar el servicio?",
        answer:
          "Sí, personalizamos diseños y música. Las preferencias deben enviarse con dos semanas de anticipación.",
      },
    ],
  },
  {
    category: "Entrega",
    questions: [
      {
        question: "¿Cómo reciben el contenido los invitados?",
        answer: "El contenido se entrega mediante descargas instantáneas.",
      },
      {
        question: "¿Incluye personal durante el evento?",
        answer: "Sí, todos los servicios incluyen operador profesional durante todo el evento.",
      },
      {
        question: "¿A qué hora llegan a instalar?",
        answer:
          "Nuestro equipo llega 30 minutos antes del inicio del servicio para realizar la instalación.",
      },
    ],
  },
  {
    category: "Requisitos",
    questions: [
      {
        question: "¿Qué espacio y requisitos se necesitan para el Espejo Mágico?",
        answer: "Espacio mínimo de 2x2 m y una toma eléctrica funcional.",
      },
      {
        question: "¿Qué espacio y requisitos se necesitan para la Cabina 360?",
        answer: "Espacio mínimo de 3x3 m y una toma eléctrica funcional.",
      },
      {
        question: "¿Qué espacio y requisitos se necesitan para el Teléfono de Dedicatorias?",
        answer: "Espacio tipo mesa 1x1 m y una toma eléctrica funcional.",
      },
    ],
  },
]

export interface GalleryItem {
  id: string
  type: "image" | "video"
  category: "social" | "corporativo"
  url: string
  thumbnail: string
  title: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "2",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.35%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.35%20PM.jpg",
    title: "Evento Social 2",
  },
  {
    id: "3",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.36%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.36%20PM.jpg",
    title: "Evento Social 3",
  },
  {
    id: "4",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.37%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.37%20PM.jpg",
    title: "Evento Social 4",
  },
  {
    id: "5",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.39%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.39%20PM.jpg",
    title: "Evento Social 5",
  },
  {
    id: "6",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.40%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.40.40%20PM.jpg",
    title: "Evento Social 6",
  },
  {
    id: "7",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.50%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.50%20PM.jpg",
    title: "Evento Social 7",
  },
  {
    id: "8",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.58%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.58%20PM.jpg",
    title: "Evento Social 8",
  },
  {
    id: "9",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.59%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.59%20PM.jpg",
    title: "Evento Social 9",
  },
  {
    id: "10",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.60%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.60%20PM.jpg",
    title: "Evento Social 10",
  },
  {
    id: "11",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.61%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.48.61%20PM.jpg",
    title: "Evento Social 11",
  },
  {
    id: "12",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.49.00%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.49.00%20PM.jpg",
    title: "Evento Social 12",
  },
  {
    id: "13",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.5.57%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.5.57%20PM.jpg",
    title: "Evento Social 13",
  },
  {
    id: "14",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.50.57%20P.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.50.57%20P.jpg",
    title: "Evento Social 14",
  },
  {
    id: "15",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.51.35%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.51.35%20PM.jpg",
    title: "Evento Social 15",
  },
  {
    id: "16",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.51.36%20.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.51.36%20.jpg",
    title: "Evento Social 16",
  },
  {
    id: "17",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.51.36%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.51.36%20PM.jpg",
    title: "Evento Social 17",
  },
  {
    id: "18",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.51.37%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.51.37%20PM.jpg",
    title: "Evento Social 18",
  },
  {
    id: "19",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.20%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.20%20PM.jpg",
    title: "Evento Social 19",
  },
  {
    id: "20",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.21%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.21%20PM.jpg",
    title: "Evento Social 20",
  },
  {
    id: "21",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.22%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.22%20PM.jpg",
    title: "Evento Social 21",
  },
  {
    id: "22",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.23%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.23%20PM.jpg",
    title: "Evento Social 22",
  },
  {
    id: "23",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.25%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.25%20PM.jpg",
    title: "Evento Social 23",
  },
  {
    id: "24",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.27%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.27%20PM.jpg",
    title: "Evento Social 24",
  },
  {
    id: "25",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.28%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.28%20PM.jpg",
    title: "Evento Social 25",
  },
  {
    id: "26",
    type: "image",
    category: "social",
    url: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.29%20PM.jpg",
    thumbnail: "/galeria/WhatsApp%20Image%202026-02-05%20at%203.53.29%20PM.jpg",
    title: "Evento Social 26",
  },
  {
    id: "27",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.35%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.35%20PM.jpg",
    title: "Evento Corporativo 1",
  },
  {
    id: "28",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.36%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.36%20PM.jpg",
    title: "Evento Corporativo 2",
  },
  {
    id: "29",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.37%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.37%20PM.jpg",
    title: "Evento Corporativo 3",
  },
  {
    id: "30",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.38%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.38%20PM.jpg",
    title: "Evento Corporativo 4",
  },
  {
    id: "31",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.39%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.39%20PM.jpg",
    title: "Evento Corporativo 5",
  },
  {
    id: "32",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.40%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.40.40%20PM.jpg",
    title: "Evento Corporativo 6",
  },
  {
    id: "33",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.54.58%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.54.58%20PM.jpg",
    title: "Evento Corporativo 7",
  },
  {
    id: "34",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.%20PM.jpg",
    title: "Evento Corporativo 8",
  },
  {
    id: "35",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.00%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.00%20PM.jpg",
    title: "Evento Corporativo 9",
  },
  {
    id: "36",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.01%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.01%20PM.jpg",
    title: "Evento Corporativo 10",
  },
  {
    id: "37",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.02%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.02%20PM.jpg",
    title: "Evento Corporativo 11",
  },
  {
    id: "38",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.06%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.06%20PM.jpg",
    title: "Evento Corporativo 12",
  },
  {
    id: "39",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.07%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.07%20PM.jpg",
    title: "Evento Corporativo 13",
  },
  {
    id: "40",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.09%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.09%20PM.jpg",
    title: "Evento Corporativo 14",
  },
  {
    id: "41",
    type: "image",
    category: "corporativo",
    url: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.31%20PM.jpg",
    thumbnail: "/corporativo/WhatsApp%20Image%202026-02-05%20at%203.55.31%20PM.jpg",
    title: "Evento Corporativo 15",
  },
]

export const coverageCities = ["CDMX", "Querétaro", "Toluca"]

export const corporateClients = [
  { name: "ICEE", logo: "/logos/icee.png" },
  { name: "DHL", logo: "/logos/dhl.png" },
  { name: "BIMBO", logo: "/logos/bimbo.png" },
]

export const whyLuanti = [
  {
    title: "Calidad Premium",
    description: "Cabinas fotográficas modernas y elegantes con la mejor tecnología.",
    icon: "award",
  },
  {
    title: "100% Puntuales",
    description: "Llegamos 30 minutos antes para que todo esté listo. Tu evento empieza sin contratiempos.",
    icon: "clock",
  },
  {
    title: "Diseño Personalizado",
    description: "Personalizamos diseños y música según tu temática.",
    icon: "palette",
  },
  {
    title: "Entrega Instantánea",
    description: "Tus invitados reciben fotos y videos al instante, listos para compartir.",
    icon: "zap",
  },
  {
    title: "Operadores Expertos",
    description: "Personal profesional y amable durante todo el evento.",
    icon: "users",
  },
  {
    title: "Experiencia Corporativa",
    description: "Servicio a marcas como ICEE, DHL y BIMBO en eventos corporativos y activaciones.",
    icon: "trophy",
  },
]

export const howItWorks = [
  {
    step: 1,
    title: "Cotiza",
    description: "Contáctanos por WhatsApp con la fecha y tipo de tu evento.",
  },
  {
    step: 2,
    title: "Reserva",
    description: "Aparta tu fecha con el anticipo y coordinamos los detalles.",
  },
  {
    step: 3,
    title: "Personalizamos",
    description: "Diseñamos plantillas y configuramos todo según tu temática (envía preferencias con 2 semanas de anticipación).",
  },
  {
    step: 4,
    title: "Disfrutamos",
    description: "Llegamos 30 minutos antes, montamos y tus invitados disfrutan creando recuerdos.",
  },
]

// Privacy Policy Content
export const privacyPolicy = {
  title: "Aviso de Privacidad",
  lastUpdated: "2024",
  sections: [
    {
      title: "Datos personales recabados",
      content: [
        "Nombre",
        "Teléfono",
        "Correo electrónico",
        "Fecha y tipo de evento",
        "Ubicación del evento",
        "Información necesaria para la prestación del servicio",
      ],
    },
    {
      title: "Finalidad del uso de los datos",
      content: [
        "Brindar información sobre nuestros servicios",
        "Elaborar cotizaciones",
        "Confirmar y coordinar eventos",
        "Dar seguimiento a la contratación",
        "Cumplir con obligaciones derivadas del servicio contratado",
      ],
    },
    {
      title: "Protección de datos",
      content: [
        "No vender, rentar ni compartir datos personales con terceros",
        "Usar la información únicamente para fines relacionados con el servicio",
        "Proteger los datos mediante prácticas administrativas razonables",
      ],
    },
  ],
}

// Terms and Conditions Content
export const termsAndConditions = {
  title: "Términos y Condiciones",
  lastUpdated: "2024",
  sections: [
    {
      title: "1. Contratación",
      content:
        "La contratación se considera confirmada una vez realizado el anticipo acordado y confirmada la disponibilidad de la fecha por parte de Luanti Eventos.",
    },
    {
      title: "2. Pagos",
      content:
        "Se solicita un anticipo para apartar la fecha. El pago total del servicio debe liquidarse antes del inicio del evento. Los precios se expresan en pesos mexicanos (MXN).",
    },
    {
      title: "3. Duración del servicio",
      content:
        "Espejo Mágico y Cabina 360: 2 horas. Teléfono de Dedicatorias: 3 horas. Las horas extra deberán solicitarse 30 minutos antes de finalizar el servicio y están sujetas a disponibilidad.",
    },
    {
      title: "4. Cancelaciones",
      content:
        "El anticipo no es reembolsable en caso de cancelación por parte del cliente. El anticipo será reembolsado al 100% únicamente si la cancelación es imputable a Luanti Eventos. No hay reembolso por causas externas como fallas eléctricas del recinto o fenómenos meteorológicos.",
    },
    {
      title: "5. Cambios de fecha",
      content:
        "Los cambios de fecha deberán notificarse con mínimo 1 mes de anticipación y están sujetos a disponibilidad.",
    },
    {
      title: "6. Requisitos del lugar",
      content:
        "Espacio adecuado para el servicio: Espejo Mágico (mínimo 2 m x 2 m, superficie plana y lugar techado), Cabina 360 (mínimo 3 m x 3 m), Teléfono de Dedicatorias (espacio tipo mesa). Toma eléctrica funcional cercana. Luanti Eventos no se hace responsable por interrupciones del servicio ocasionadas por fallas en el suministro eléctrico del lugar.",
    },
    {
      title: "7. Instalación y desmontaje",
      content:
        "El equipo de Luanti Eventos llegará 30 minutos antes del inicio del servicio para la instalación y realizará el desmontaje inmediatamente al finalizar el tiempo contratado.",
    },
    {
      title: "8. Seguridad",
      content:
        "Luanti Eventos se reserva el derecho de cancelar el servicio si existen condiciones que pongan en riesgo la seguridad del equipo o del personal, sin que esto implique responsabilidad adicional.",
    },
    {
      title: "9. Uso de material audiovisual",
      content:
        "Las fotos y videos capturados durante el evento podrán ser utilizados por Luanti Eventos con fines promocionales, salvo que el cliente solicite lo contrario por escrito.",
    },
    {
      title: "10. Aceptación",
      content:
        "La contratación del servicio implica la aceptación total de estos términos y condiciones, así como de la información publicada en el sitio web y el contrato firmado.",
    },
  ],
}
