'use client'

import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react'

// Icono personalizado para Instagram
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

// Icono personalizado para TikTok
function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5 6.13 6.34 6.34 0 0 0 10.7 4.5 6.34 6.34 0 0 0 1.83-4.5V9.08a8.27 8.27 0 0 0 4.58 1.41V7.04a4.83 4.83 0 0 1-2-.35z"/>
    </svg>
  )
}

export function Location() {
  const direccion = "San Francisco Kalea, 46, 20002 Donostia, Gipuzkoa"
  const telefono = "943274103"
  const whatsappLink = "https://wa.me/34943274103?text=Hola,%20me%20gustaría%20pedir%20cita%20o%20saber%20cómo%20llegar%20a%20San%20Francisco%20Kalea%2046"
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("LC Peluquería San Francisco Kalea 46 Donostia")}`

  return (
    <section id="contacto" className="relative bg-[#FAF8F5] py-20 md:py-32 text-[#1A1A1A]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* CABECERA EDITORIAL */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-[#E8DFD8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C29B88]">
              UBICACIÓN &amp; CONTACTO
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1A1A1A]">
              Ven a <span className="italic text-[#C29B88]">visitarnos.</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-[#594E46] font-light leading-relaxed">
            Te esperamos en pleno barrio de Gros (San Sebastián). Reserva tu cita previa para garantizarte una atención 100% personalizada.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y HORARIOS (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              
              {/* DIRECCIÓN CON TRAYECTO */}
              <div className="group flex items-start gap-5 border-b border-[#E8DFD8] pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#C29B88] bg-[#C29B88]/10 text-[#C29B88] transition-colors group-hover:bg-[#C29B88] group-hover:text-white">
                  <MapPin size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                    Dirección en Gros
                  </span>
                  <span className="mt-1 font-serif text-xl font-normal text-[#1A1A1A]">
                    LC Peluquería
                  </span>
                  <span className="font-sans text-sm text-[#594E46] mt-0.5">
                    {direccion}
                  </span>
                  <span className="font-mono text-[11px] text-[#C29B88] mt-1">
                    A 3 min de la Playa de Zurriola
                  </span>
                </div>
              </div>

              {/* HORARIO DE ATENCIÓN */}
              <div className="group flex items-start gap-5 border-b border-[#E8DFD8] pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#C29B88] bg-[#C29B88]/10 text-[#C29B88] transition-colors group-hover:bg-[#C29B88] group-hover:text-white">
                  <Clock size={22} />
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                    Horario de Atención
                  </span>
                  
                  <div className="mt-2 flex flex-col gap-1.5 font-sans text-xs">
                    <div className="flex justify-between text-[#1A1A1A]">
                      <span className="font-medium">Martes a Viernes:</span>
                      <span className="font-mono">09:30 – 18:00</span>
                    </div>
                    <div className="flex justify-between text-[#1A1A1A]">
                      <span className="font-medium">Sábados:</span>
                      <span className="font-mono">09:00 – 13:00</span>
                    </div>
                    <div className="flex justify-between text-[#8C7A6B] pt-1">
                      <span>Lunes y Domingos:</span>
                      <span className="italic">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FILA EN 2 COLUMNAS: TELÉFONO + REDES SOCIALES */}
              <div className="group flex items-start gap-5 border-b border-[#E8DFD8] pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#C29B88] bg-[#C29B88]/10 text-[#C29B88] transition-colors group-hover:bg-[#C29B88] group-hover:text-white">
                  <Phone size={22} />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {/* Columna Teléfono */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                      Llámanos
                    </span>
                    <a
                      href={`tel:${telefono}`}
                      className="mt-1 font-mono text-xl font-light text-[#1A1A1A] hover:text-[#C29B88] transition-colors"
                    >
                      943 27 41 03
                    </a>
                  </div>

                  {/* Columna Redes Sociales */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                      Síguenos
                    </span>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <a
                        href="https://instagram.com/lc.peluqueria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-[#1A1A1A] hover:text-[#C29B88] transition-colors"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 text-[#C29B88]" />
                        <span>@lc.peluqueria</span>
                      </a>
                      <a
                        href="https://tiktok.com/@laurita_palomita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-[#1A1A1A] hover:text-[#C29B88] transition-colors"
                      >
                        <TikTokIcon className="w-3.5 h-3.5 text-[#C29B88]" />
                        <span>@laurita_palomita</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* BOTONES DE ACCIÓN */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#1A1A1A] bg-[#1A1A1A] px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition-all hover:bg-[#C29B88] hover:border-[#C29B88]"
              >
                <Navigation size={16} />
                <span>Cómo Llegar</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#25D366] bg-[#25D366]/10 px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-[#1A1A1A] transition-all hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle size={16} className="text-[#25D366] group-hover:text-white" />
                <span>Pedir Cita WhatsApp</span>
              </a>
            </div>

          </div>

          {/* COLUMNA DERECHA: MAPA */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-full overflow-hidden border border-[#E8DFD8] bg-[#F4EFEA] shadow-sm">
            <iframe
              title="Ubicación LC Peluquería Gros"
              src="https://maps.google.com/maps?q=San%20Francisco%20Kalea%2046%20Donostia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />

            <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-[#FAF8F5]/95 p-6 border border-[#E8DFD8] backdrop-blur-md shadow-xl max-w-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#C29B88]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                  Gros — Donostia
                </span>
              </div>
              <h3 className="font-serif text-lg font-medium text-[#1A1A1A]">
                San Francisco Kalea, 46
              </h3>
              <p className="font-sans text-xs text-[#594E46] mt-1">
                20002 Donostia / San Sebastián, Gipuzkoa
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#C29B88] hover:underline"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}