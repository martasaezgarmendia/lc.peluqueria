'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [counter, setCounter] = useState(0)
  const [slideUp, setSlideUp] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const duration = 1600
    const steps = 50
    const stepTime = duration / steps

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, stepTime)

    const slideTimer = setTimeout(() => {
      setSlideUp(true)
    }, 1800)

    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, 2700)

    return () => {
      clearInterval(timer)
      clearTimeout(slideTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3rem 2rem',
        transform: slideUp ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 0.9s cubic-bezier(0.87, 0, 0.13, 1)',
        boxShadow: slideUp ? '0 25px 50px -12px rgba(0, 0, 0, 0.9)' : 'none',
      }}
    >
      {/* Detalle Superior Editorial */}
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-400">
        <span>ESTUDIO DE TATUAJES</span>
        <span className="hidden sm:inline">DONOSTIA — EGIA</span>
        <span>EDICIÓN 2026</span>
      </div>

      {/* Centro: Máquina Animada + Título */}
      <div className="relative flex flex-col items-center text-center">
        
        {/* Máquina de Tatuar Dinámica con animaciones nativas directas */}
        <div className="mb-6 flex h-24 items-center justify-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white animate-bounce"
            style={{ animationDuration: '0.6s' }}
          >
            {/* Conector superior de corriente */}
            <rect x="29" y="4" width="6" height="6" rx="1" fill="currentColor" />
            
            {/* Cuerpo principal de la máquina / Motor */}
            <rect x="25" y="10" width="14" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
            <line x1="28" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" />

            {/* Grip / Empuñadura texturizada */}
            <rect x="27" y="32" width="10" height="14" rx="1" fill="currentColor" />
            <line x1="25" y1="36" x2="39" y2="36" stroke="#0a0a0a" strokeWidth="1.5" />
            <line x1="25" y1="40" x2="39" y2="40" stroke="#0a0a0a" strokeWidth="1.5" />

            {/* Cartucho */}
            <path d="M29 46L32 52L35 46H29Z" fill="currentColor" />

            {/* Aguja Fina en Pulso Rápido */}
            <line 
              x1="32" 
              y1="52" 
              x2="32" 
              y2="60" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              className="animate-ping"
              style={{ animationDuration: '0.3s' }}
            />

            {/* Punto de Tinta Parpadeante */}
            <circle 
              cx="32" 
              cy="61" 
              r="2" 
              fill="white"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Título Principal */}
        <div className="overflow-hidden py-2">
          <h1 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            TATTOO FÉLIX
          </h1>
        </div>

        {/* Subtítulo */}
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.5em] text-neutral-400 sm:text-sm">
          Custom & Direct Author Work
        </p>
      </div>

      {/* Pie: Contador + Barra */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4">
        <div className="flex items-end justify-between font-mono text-xs tracking-widest text-neutral-400">
          <span className="uppercase text-neutral-400">CARGANDO TRAZOS</span>
          <span className="text-xl font-bold text-white">{counter}%</span>
        </div>

        <div className="h-[1px] w-full overflow-hidden bg-neutral-800">
          <div
            className="h-full bg-white transition-all duration-75 ease-out"
            style={{ width: `${counter}%` }}
          />
        </div>
      </div>
    </div>
  )
}