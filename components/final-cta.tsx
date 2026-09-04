'use client'

export function FinalCta() {
  return (
    <section
      id="final"
      className="border-t border-border bg-card"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-8 px-5 py-24 text-center sm:gap-10 sm:py-28 md:px-10 md:py-40">
        <div className="flex flex-col items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Asesoramiento personalizado
          </p>
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Tu próximo tatuaje empieza con una idea.
          </h2>
          <p className="max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cuéntanos tu proyecto sin compromiso. Un tatuaje es para siempre y te aconsejamos en cada detalle para hacerlo único. Llámanos o pásate directamente por el estudio en Ametzagaña 18 (Egia).
          </p>
        </div>

        <a
          href="tel:+34943290236"
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-mono text-xs uppercase tracking-widest text-accent-foreground transition-all hover:scale-[1.02] sm:w-auto"
        >
          <svg
            className="h-4 w-4 shrink-0 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Llamar al 943 29 02 36
        </a>
      </div>
    </section>
  )
}