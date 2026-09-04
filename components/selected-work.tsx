'use client'

type Work = {
  src: string
  alt: string
  span: 'tall' | 'wide' | 'normal'
}

const WORKS: Work[] = [
  { src: '/galeria1.jpg', alt: 'Tatuaje realizado en Tattoo Félix', span: 'normal' },
  { src: '/galeria7.jpg', alt: 'Detalle anatómico', span: 'normal' },
  { src: '/galeria2.jpg', alt: 'Detalle de trabajo en el estudio', span: 'normal' },
  { src: '/galeria10.jpg', alt: 'Tatuaje artesanal en Egia', span: 'normal' },
  { src: '/galeria4.jpg', alt: 'Proyecto realizado en Donostia', span: 'normal' },
  { src: '/galeria13.jpg', alt: 'Pieza sobre piel en Donostia', span: 'normal' },
  { src: '/galeria11.jpg', alt: 'Composición personalizada', span: 'wide' },
  { src: '/galeria5.jpg', alt: 'Pieza de autor en la piel', span: 'normal' },
  { src: '/galeria8.jpg', alt: 'Trabajo finalizado en Tattoo Félix', span: 'tall' },
  { src: '/galeria14.jpg', alt: 'Trabajo personalizado de autor', span: 'wide' },
  { src: '/galeria3.jpg', alt: 'Tatuaje de línea y precisión', span: 'normal' },
  { src: '/galeria6.jpg', alt: 'Tatuaje personalizado en Egia', span: 'tall' },
  { src: '/galeria9.jpg', alt: 'Diseño en tinta en el estudio', span: 'normal' },
  { src: '/galeria12.jpg', alt: 'Detalle de trazado fino', span: 'normal' },
]

const spanClasses: Record<Work['span'], string> = {
  tall: 'sm:row-span-2 aspect-[3/4] sm:aspect-auto',
  wide: 'sm:col-span-2 aspect-[4/3] sm:aspect-[16/10]',
  normal: 'aspect-square',
}

export function SelectedWork() {
  return (
    <section
      id="trabajos"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-5 py-20 sm:py-24 md:px-10 md:py-32"
    >
      {/* Cabecera unificada */}
      <div className="flex flex-col gap-5 border-b border-border pb-8 sm:gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-accent">
            01 — Galería
          </p>

          <h2 className="text-balance text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
            Trabajos Seleccionados
          </h2>
        </div>

        <p className="max-w-lg text-pretty text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
          Una muestra visual de piezas realizadas en el estudio.
        </p>
      </div>

      {/* Mosaico estático */}
      <div className="mt-8 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {WORKS.map((work, index) => (
          <figure
            key={work.src || index}
            className={`relative overflow-hidden rounded-sm border border-border/40 bg-secondary ${spanClasses[work.span]}`}
          >
            <img
              src={work.src}
              alt={work.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>

      {/* Pie de galería */}
      <div className="mt-8 flex flex-col gap-2 border-t border-border/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs leading-relaxed text-muted-foreground">
          Fotografía de trabajos reales en Donostia — Egia.
        </p>

        <a
          href="https://www.instagram.com/tattoo_felix/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent hover:underline"
        >
          <span>Ver catálogo diario en Instagram @tattoo_felix</span>
          <span>↗</span>
        </a>
      </div>
    </section>
  )
}