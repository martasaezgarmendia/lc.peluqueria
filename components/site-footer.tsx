export function SiteFooter() {
  return (
    <footer className="border-t border-[#E8DFD8] bg-[#FAF8F5]">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-serif text-base font-medium tracking-wider text-[#1A1A1A]">
            LC Peluquería
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[#8C7A6B]">
            Salón de Peluquería en Donostia / San Sebastián
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <p className="font-mono text-xs uppercase tracking-widest text-[#594E46]">
            San Francisco Kalea 46 (Gros) — 943 27 41 03
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-[#8C7A6B]">
            © {new Date().getFullYear()} LC Peluquería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}