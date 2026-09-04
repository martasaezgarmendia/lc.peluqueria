'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Historia & Filosofía', href: '#estudio' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Prensa', href: '#artistas' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleReservationClick = () => {
    setShowContactModal(true)
    setOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'border-b border-border bg-background/80 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4 md:px-10">
          <a
            href="#top"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Tattoo Félix — inicio"
          >
            <img
              src="/logo.jpg"
              alt="Tattoo Félix Logo"
              className="h-10 w-10 rounded-full border border-border object-cover"
            />

            <div className="flex flex-col">
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-foreground">
                Tattoo Félix
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Egia — Donostia
              </span>
            </div>
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleReservationClick}
              className="hidden rounded-sm bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
            >
              Pedir Cita
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={`h-px w-6 bg-foreground transition-transform ${
                  open ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
              />

              <span
                className={`h-px w-6 bg-foreground transition-transform ${
                  open ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background md:hidden"
            aria-label="Móvil"
          >
            <ul className="flex flex-col px-4 py-2 sm:px-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center py-3 font-mono text-sm uppercase tracking-widest text-muted-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  onClick={handleReservationClick}
                  className="mb-3 mt-2 block min-h-12 w-full rounded-sm bg-primary px-5 py-3 text-center font-mono text-sm uppercase tracking-widest text-primary-foreground"
                >
                  Pedir Cita
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Modal con llamada obligatoria para citas + acceso a fotos en Instagram */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-background/80 px-4 py-4 backdrop-blur-sm sm:px-5"
          onClick={() => setShowContactModal(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto border border-border bg-background p-6 shadow-2xl sm:p-7 md:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowContactModal(false)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-xl text-muted-foreground transition-colors hover:text-foreground"
            >
              ×
            </button>

            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Reserva & Contacto
            </p>

            <h2
              id="contact-modal-title"
              className="pr-8 text-2xl font-bold uppercase tracking-tight md:text-3xl"
            >
              Pedir Cita
            </h2>

            <div className="mt-7 flex flex-col gap-3">
              {/* Opción para agendar cita: Llamada directa */}
              <a
                href="tel:+34943290236"
                className="group flex min-h-16 items-center justify-between border border-border bg-card px-5 py-4 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center gap-4">
                  <svg
                    className="h-5 w-5 shrink-0 fill-current text-accent"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-foreground">
                      Llamar para Pedir Cita
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      943 29 02 36
                    </p>
                  </div>
                </div>

                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Opción secundaría: Ver contenido en Instagram */}
              <a
                href="https://www.instagram.com/tattoo_felix/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between border border-border bg-card px-5 py-4 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl">📸</span>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-foreground">
                      Ver Contenido y Trabajos
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      @tattoo_felix
                    </p>
                  </div>
                </div>

                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Calle Ametzagaña 18 — Egia, Donostia
            </p>
          </div>
        </div>
      )}
    </>
  )
}