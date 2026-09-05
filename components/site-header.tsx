'use client'

import { Menu, X, Phone, MessageCircle, ChevronDown, Sparkles } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCitaDropdownOpen, setIsCitaDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCitaDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: 'Concepto', href: '#concepto' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'El Salón', href: '#equipo' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Ubicación & Contacto', href: '#ubicacion' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#E8DFD8] bg-[#FAF8F5]/95 shadow-sm backdrop-blur-md py-3'
          : 'border-b border-white/10 bg-[#FAF8F5]/80 backdrop-blur-md py-4'
      } text-[#1A1A1A]`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
        
        {/* LOGO EN IMAGEN WEBP REDONDA */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#C29B88]/40 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C29B88]">
            <img
              src="logo.webp" 
              alt="LC Peluquería Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-wider text-[#1A1A1A]">
              LC
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#C29B88] uppercase">
              Peluquería
            </span>
          </div>
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-[#594E46] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="group relative py-1 transition-colors hover:text-[#C29B88]"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#C29B88] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* BOTÓN CITA DESPLEGABLE */}
        <div className="relative hidden md:block" ref={dropdownRef}>
          <button
            onClick={() => setIsCitaDropdownOpen(!isCitaDropdownOpen)}
            className="group inline-flex items-center gap-2 border border-[#C29B88] bg-[#C29B88] px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:bg-[#1A1A1A] hover:border-[#1A1A1A] hover:shadow-md cursor-pointer"
          >
            <Sparkles size={14} className="text-amber-200 transition-transform group-hover:rotate-12" />
            <span>Pedir Cita</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                isCitaDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isCitaDropdownOpen && (
            <div className="absolute right-0 mt-3 w-64 border border-[#E8DFD8] bg-[#FAF8F5] p-3 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 z-50">
              <div className="mb-2 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B] border-b border-[#E8DFD8]">
                Canal de Reserva
              </div>
              <a
                href="https://wa.me/34943274103?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20LC%20Peluquería"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsCitaDropdownOpen(false)}
                className="flex items-center gap-3 px-3 py-3 font-mono text-xs uppercase tracking-wider text-[#1A1A1A] transition-all hover:bg-[#C29B88]/15 hover:text-[#C29B88] cursor-pointer"
              >
                <div className="flex h-8 w-8 items-center justify-center bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold">WhatsApp</span>
                  <span className="text-[10px] text-[#8C7A6B] lowercase">Respuesta rápida</span>
                </div>
              </a>
              <a
                href="tel:943274103"
                onClick={() => setIsCitaDropdownOpen(false)}
                className="flex items-center gap-3 px-3 py-3 font-mono text-xs uppercase tracking-wider text-[#1A1A1A] transition-all hover:bg-[#C29B88]/15 hover:text-[#C29B88] cursor-pointer"
              >
                <div className="flex h-8 w-8 items-center justify-center bg-[#C29B88]/10 text-[#C29B88]">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold">Llamar Ahora</span>
                  <span className="text-[10px] text-[#8C7A6B]">943 27 41 03</span>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* BOTÓN MÓVIL */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-[#1A1A1A] transition-transform active:scale-95 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="border-b border-[#E8DFD8] bg-[#FAF8F5] px-6 py-8 shadow-xl animate-in slide-in-from-top-full duration-300 md:hidden">
          <nav className="flex flex-col gap-5 font-mono text-xs uppercase tracking-[0.2em] text-[#594E46]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="border-b border-[#E8DFD8]/50 pb-2 transition-colors hover:text-[#C29B88]"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-3 pt-2">
              <span className="font-mono text-[10px] text-[#8C7A6B] tracking-widest">
                RESERVA DIRECTA:
              </span>
              <a
                href="https://wa.me/34943274103?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20LC%20Peluquería"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C29B88] py-3.5 text-center font-mono text-xs text-white shadow-md active:scale-98"
              >
                <MessageCircle size={18} />
                <span>Escribir por WhatsApp</span>
              </a>
              <a
                href="tel:943274103"
                className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A] bg-transparent py-3.5 text-center font-mono text-xs text-[#1A1A1A] active:scale-98"
              >
                <Phone size={18} />
                <span>Llamar al 943 27 41 03</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}