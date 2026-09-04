'use client'

import { useState } from 'react'

export function Hero() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <section
      id="top"
      className="relative min-h-svh w-full overflow-hidden bg-tattoo-black"
      aria-label="Tattoo Félix Studio"
    >
      <img
        src="portadanueva.png"
        alt="Trabajo de tatuaje detallado por Félix en estilo black & grey"
        className="absolute inset-0 h-full w-full object-cover opacity-100"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/70"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-svh max-w-[1600px] flex-col justify-end px-5 pb-10 pt-28 sm:pb-16 md:px-10 md:pb-24 md:pt-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-accent">
          Gipuzkoa — Estudio de Tatuajes
        </p>

        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Tinta. Arte. Actitud.
        </h1>

        <div className="mt-7 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:flex-wrap sm:items-center md:mt-8 md:gap-3 md:pt-8">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground sm:mr-auto">
            Black & Grey <span className="text-border">·</span> Realismo{' '}
            <span className="text-border">·</span> Diseños Personalizados{' '}
            <span className="text-border">·</span> Cover Ups
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="min-h-12 w-full rounded-sm bg-primary px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Pedir Cita
            </button>

            <a
              href="#trabajos"
              className="flex min-h-12 w-full items-center justify-center rounded-sm border border-border px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-secondary sm:w-auto"
            >
              Ver Trabajos
            </a>
          </div>
        </div>
      </div>

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
              Reservar Cita
            </p>

            <h2
              id="contact-modal-title"
              className="pr-8 text-2xl font-semibold tracking-tight md:text-3xl"
            >
              ¿Cómo quieres contactar con Tattoo Félix?
            </h2>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href="tel:943290236"
                className="group flex min-h-16 items-center justify-between border border-border px-5 py-4 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl">📞</span>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest">
                      Llamada Directa
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

              <a
                href="https://www.instagram.com/tattoo_felix/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between border border-border px-5 py-4 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl">📸</span>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest">
                      Instagram
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      @tattoo_felix
                    </p>
                  </div>
                </div>

                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Elige tu canal preferido para consultar disponibilidad
            </p>
          </div>
        </div>
      )}
    </section>
  )
}