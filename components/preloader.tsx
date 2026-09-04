'use client'

import { useEffect, useState } from 'react'

const PALABRAS_CLAVE = [
  'COLORIMETRÍA',
  'CORTE & ESTILO',
  'TRATAMIENTOS',
  'TEXTURA & BRILLO',
  'LC PELUQUERÍA',
]

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Rotación de conceptos
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % PALABRAS_CLAVE.length)
    }, 450)

    // Porcentaje de carga
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          clearInterval(wordInterval)
          setTimeout(() => setIsLoaded(true), 300)
          setTimeout(() => setIsDone(true), 1200)
          return 100
        }
        const diff = Math.floor(Math.random() * 12) + 4
        return Math.min(prev + diff, 100)
      })
    }, 80)

    return () => {
      clearInterval(progressInterval)
      clearInterval(wordInterval)
    }
  }, [])

  if (isDone) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-[#FAF8F5] p-6 sm:p-12 text-[#1A1A1A] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isLoaded ? '-translate-y-full opacity-90' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* LÍNEAS DE GUÍA FINAS TIPO RETÍCULA EDITORIAL */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-12 opacity-30">
        <div className="h-full w-[1px] bg-[#E8DFD8]" />
        <div className="h-full w-[1px] bg-[#E8DFD8]" />
        <div className="h-full w-[1px] bg-[#E8DFD8]" />
      </div>

      {/* CABECERA SUPERIOR */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-[#C29B88]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#C29B88] animate-ping" />
          <span>ESTUDIO DE ESTILO</span>
        </div>
        <span>SAN SEBASTIÁN</span>
      </div>

      {/* CENTRO: ILUSTRACIÓN DE TIJERAS ANIMADAS + LOGO EN BEIGE */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
        
        {/* LOGO DE LA CLIENTA CON ANILLO CÁLIDO */}
        <div className="relative mb-6 flex h-32 w-32 items-center justify-center">
          
          {/* Anillo de progreso SVG en tono terracota/cobre */}
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              className="stroke-[#E8DFD8] fill-none"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="46"
              className="stroke-[#C29B88] fill-none transition-all duration-200 ease-out"
              strokeWidth="2.5"
              strokeDasharray="289"
              strokeDashoffset={289 - (289 * progress) / 100}
            />
          </svg>

          {/* Imagen Logo WebP de la Clienta */}
          <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-white shadow-xl bg-white p-0.5">
            <img
              src="/logo.webp"
              alt="LC Peluquería Logo"
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          {/* DIBUJO ANIMADO DE TIJERAS DE PELUQUERÍA (FLOTANTE EN LA ESQUINA DEL LOGO) */}
          <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#E8DFD8] shadow-md">
            <svg
              className="h-5 w-5 text-[#C29B88] animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Hoja 1 de la tijera */}
              <circle cx="6" cy="6" r="3" />
              <path d="M8.12 8.12 12 12" />
              <path d="M20 4 8.12 15.88" />
              {/* Hoja 2 de la tijera */}
              <circle cx="6" cy="18" r="3" />
              <path d="M14.8 9.2 20 20" />
            </svg>
          </div>
        </div>

        {/* CONCEPTOS DE PELUQUERÍA ROTATIVOS */}
        <div className="h-6 overflow-hidden mt-2">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#C29B88] transition-all duration-300">
            {PALABRAS_CLAVE[wordIndex]}
          </p>
        </div>

        <h1 className="mt-1 font-serif text-3xl sm:text-4xl font-normal tracking-wide text-[#1A1A1A]">
          LC Peluquería
        </h1>
      </div>

      {/* PIE DE CARGA LUMINOSO Y EDITORIAL */}
      <div className="relative z-10 border-t border-[#E8DFD8] pt-6">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              PREPARANDO EXPERIENCIA
            </span>
            <span className="font-serif italic text-sm text-[#C29B88]">
              Cuidado &amp; Belleza
            </span>
          </div>

          {/* NUMERAL DE CARGA XXL */}
          <div className="flex items-baseline font-mono text-6xl sm:text-7xl font-light tracking-tighter text-[#1A1A1A]">
            <span>{progress.toString().padStart(2, '0')}</span>
            <span className="text-2xl text-[#C29B88] font-normal">%</span>
          </div>
        </div>

        {/* BARRA DE PROGRESO INFERIOR CÁLIDA */}
        <div className="mt-4 h-[2px] w-full bg-[#E8DFD8] overflow-hidden">
          <div
            className="h-full bg-[#C29B88] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}