'use client'

import { useState } from 'react'
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react'

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1A1A1A] text-white selection:bg-[#C29B88] selection:text-white">
      
      {/* 1. Imagen de Fondo */}
      <img
        src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1600&auto=format&fit=crop"
        alt="LC Peluquería — Corte y Estilo"
        className="absolute inset-0 h-full w-full object-cover object-center brightness-75"
      />

      {/* 2. Degradado cálido */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#1A1A1A]/90 z-0" />

      {/* 3. Contenido Póster */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between max-w-[1600px] mx-auto px-6 py-12 md:px-12 md:py-16">
        
        {/* Texto Póster Central */}
        <div className="my-auto py-12 max-w-5xl">
          <h1 className="text-balance text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white leading-[0.95] drop-shadow-md">
            Tu estilo, <br />
            <span className="font-serif italic font-normal text-[#C29B88]">
              tu mejor versión.
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Especialistas en cortes personalizados, tratamientos de hidratación profunda y mechas de alta precisión.
          </p>
        </div>

        {/* PIE DEL HERO */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-t border-white/20 pt-6">
          
          {/* Tags estilo minimalista */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-neutral-300">
            <span>CORTE</span>
            <span className="text-[#C29B88]">/</span>
            <span>COLORIMETRÍA</span>
            <span className="text-[#C29B88]">/</span>
            <span>TRATAMIENTOS</span>
            <span className="text-[#C29B88]">/</span>
            <span>PEINADOS</span>
          </div>

          {/* Botones principales */}
          <div className="flex items-center gap-4">
            {/* BOTÓN QUE ABRE EL MODAL PANTALLA COMPLETA/FLOTANTE */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex min-h-12 items-center justify-center bg-[#FAF8F5] px-8 py-3 font-mono text-xs uppercase tracking-widest text-[#1A1A1A] transition-all hover:bg-[#C29B88] hover:text-white cursor-pointer"
            >
              Reserva tu Cita
            </button>
            <a
              href="#servicios"
              className="inline-flex min-h-12 items-center justify-center border border-white/40 bg-black/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:border-white hover:bg-black/60"
            >
              Ver Carta
            </a>
          </div>

        </div>

      </div>

      {/* MODAL / PANTALLA EMERGENTE ELEGANTE DE RESERVA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md border border-[#E8DFD8] bg-[#FAF8F5] p-8 text-[#1A1A1A] shadow-2xl animate-in zoom-in-95 duration-200">
            
            {/* Botón Cerrar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#594E46] hover:text-[#1A1A1A] transition-colors"
            >
              <X size={20} />
            </button>

            {/* Cabecera del Modal */}
            <div className="text-center mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center border border-[#C29B88] bg-[#C29B88]/10 text-[#C29B88] mb-3">
                <Sparkles size={20} />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">Reserva tu Experiencia</h3>
              <p className="font-mono text-xs text-[#8C7A6B] uppercase tracking-wider mt-1">
                Selecciona tu vía preferida
              </p>
            </div>

            {/* Opciones de Reserva */}
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/34943274103?text=Hola,%20me%20gustaría%20reservar%20una%20cita%20en%20LC%20Peluquería"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="group flex items-center justify-between border border-[#25D366]/30 bg-[#25D366]/5 p-4 transition-all hover:bg-[#25D366] hover:text-white"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#25D366] text-white group-hover:bg-white group-hover:text-[#25D366]">
                    <MessageCircle size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">WhatsApp</span>
                    <span className="text-[11px] opacity-80 font-sans">Mensaje inmediato</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold">→</span>
              </a>

              <a
                href="tel:943274103"
                onClick={() => setIsModalOpen(false)}
                className="group flex items-center justify-between border border-[#C29B88]/40 bg-[#C29B88]/10 p-4 transition-all hover:bg-[#C29B88] hover:text-white"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#C29B88] text-white group-hover:bg-white group-hover:text-[#C29B88]">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">Llamada Directa</span>
                    <span className="text-[11px] opacity-80 font-sans">943 27 41 03</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold">→</span>
              </a>
            </div>

            {/* Nota al pie */}
            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B]">
              Atención personalizada — San Sebastián
            </p>
          </div>
        </div>
      )}

    </section>
  )
}