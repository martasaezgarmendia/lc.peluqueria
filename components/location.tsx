export function Location() {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-5 py-20 sm:py-24 md:px-10 md:py-32"
    >
      <div className="mb-10 border-b border-border pb-8 sm:mb-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-accent">
          05 — Contacto
        </p>

        <h2 className="text-balance text-4xl font-semibold leading-none tracking-tight sm:text-5xl md:text-6xl">
          Visítanos en Egia
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-4">
        <div className="relative overflow-hidden rounded-sm border border-border lg:col-span-3">
          <div className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <iframe
              title="Tattoo Félix en Donostia - San Sebastián"
              src="https://www.google.com/maps?q=Calle+Ametzaga%C3%B1a+18,+20012+Donostia-San+Sebasti%C3%A1n&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-sm border border-border bg-card p-6 sm:p-8 lg:col-span-2">
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Dirección
              </h3>

              <address className="mt-3 not-italic text-base leading-relaxed text-foreground sm:text-lg">
                Tattoo Félix
                <br />
                Calle Ametzagaña 18 (Egia)
                <br />
                20012 Donostia — San Sebastián
                <br />
                Gipuzkoa, España
              </address>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Teléfono Fijo
              </h3>

              <a
                href="tel:+34943290236"
                className="mt-3 inline-block text-base text-foreground transition-colors hover:text-accent sm:text-lg"
              >
                943 29 02 36
              </a>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Instagram
              </h3>

              <a
                href="https://www.instagram.com/tattoo_felix/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-base text-foreground transition-colors hover:text-accent sm:text-lg"
              >
                @tattoo_felix
              </a>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Horario
              </h3>

              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Lunes, Miércoles y Jueves · 15:30 — 21:00
                <br />
                Martes y Viernes · 9:30 — 15:00
                <br />
                Sábado y Domingo · Cerrado
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle+Ametzaga%C3%B1a+18%2C+20012+Donostia-San+Sebasti%C3%A1n"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-border px-7 py-3.5 text-center font-mono text-xs uppercase tracking-widest transition-colors hover:bg-secondary sm:mt-10 sm:w-auto"
          >
            Cómo llegar ↗
          </a>
        </div>
      </div>
    </section>
  )
}