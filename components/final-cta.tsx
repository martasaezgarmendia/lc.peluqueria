'use client'

import { Phone, MessageCircle } from 'lucide-react'

export function FinalCta() {
  const telefono = "943274103"
  const whatsappLink = "https://wa.me/34943274103"

  return (
    <section className="relative overflow-hidden bg-[#F4EFEA] py-24 md:py-32 text-[#1A1A1A]">
      {/* Detalle decorativo suave de fondo */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#C29B88]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col items-center text-center">

          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C29B88]">
            TU MOMENTO DE CUIDADO
          </span>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-[#1A1A1A]">
            ¿Lista para transformar tu <span className="italic text-[#C29B88]">estilo</span>?
          </h2>

          <p className="mt-6 max-w-xl font-sans text-sm md:text-base text-[#594E46] font-light leading-relaxed">
            Pide tu cita previa en nuestro salón de Gros y déjate asesorar por nuestro equipo profesional.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={`tel:${telefono}`}
              className="inline-flex items-center justify-center gap-3 border border-[#1A1A1A] bg-[#1A1A1A] px-8 py-4 font-mono text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#C29B88] hover:border-[#C29B88]"
            >
              <Phone size={16} />
              <span>Llamar al 943 27 41 03</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[#1A1A1A] bg-transparent px-8 py-4 font-mono text-xs uppercase tracking-widest text-[#1A1A1A] transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle size={16} />
              <span>Pedir Cita por WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}