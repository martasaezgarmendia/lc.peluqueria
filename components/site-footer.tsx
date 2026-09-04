export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
            Tattoo Félix
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Estudio de Tatuajes en Donostia / San Sebastián
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Calle Ametzagaña 18 (Egia) — 943 29 02 36
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Tattoo Félix. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
