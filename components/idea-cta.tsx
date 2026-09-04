export function IdeaCta() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      {/* Imagen de fondo a pantalla completa sin capas oscuras encimad */}
      <img
        src="/cuentametuidea.jpg"
        alt="Boceto e idea para tatuaje en Tattoo Félix"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Contenido principal con sombra de texto (drop-shadow) para garantizar legibilidad */}
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-start gap-8 px-5 py-20 sm:py-24 md:px-10 md:py-32">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent drop-shadow-md">
            04 — Asesoramiento y contacto
          </p>
        </div>

        <h2 className="max-w-4xl text-balance text-4xl font-extrabold uppercase leading-none tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
          ¿Tienes una idea en mente?
        </h2>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-white drop-shadow-md sm:text-lg md:text-xl">
          Cuéntanos tu proyecto sin compromiso. Te orientaremos sobre el diseño, la viabilidad y el enfoque ideal para convertir tu idea en una pieza única hecha a tu medida.
        </p>

        <a
          href="#contacto"
          className="mt-2 inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-8 py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
        >
          Cuéntanos tu idea
        </a>
      </div>
    </section>
  )
}