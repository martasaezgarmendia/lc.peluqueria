'use client'

const BIOGRAPHY_HIGHLIGHTS = [
  {
    tag: 'Origen & Pasión',
    title: 'El tatuador: nace y se hace',
    description:
      'Desde muy joven demostró afición por el dibujo. Tras su paso por la decoración y talleres libres, perfeccionó la técnica de la aerografía en un taller mecánico de motos, abriendo su mente hacia el arte del tatuaje.',
  },
  {
    tag: 'Carácter Pionero',
    title: 'Autodidacta & Viajes',
    description:
      'Tras viajar por Bélgica y Francia para adquirir el mejor equipo y "hacer las cosas bien", apostó por abrir su local en Egia, convirtiéndose en un pionero autodidacta de esta disciplina en Euskadi.',
  },
  {
    tag: 'Garantía & Método',
    title: 'Higiene & Personalización',
    description:
      'Años de trabajo enfocados en la pieza única frente a las reproducciones genéricas. Aplicando los más estrictos protocolos de esterilización y legislación para garantizar una experiencia de máxima fiabilidad.',
  },
  {
    tag: 'Comunidad & Amigos',
    title: 'Clientes y Celebrities',
    description:
      'Desde los primeros clientes moteros hasta figuras conocidas de la música y el deporte como Mikel Erentxun, Dany Torres, Nerea Garmendia, Allan Davis o Edu Ruiz.',
  },
]

const PRESS_NEWS = [
  {
    title: '«La gente se calienta bastante con los tatuajes»',
    subtitle: 'El Diario Vasco',
    date: 'Febrero 2024',
    summary:
      'Entrevista sobre el auge de la cultura del tatuaje en Donostia y su visión artesanal tras dos décadas de experiencia.',
    image: '/images/fotonoticia1.jpg',
    url: 'https://www.diariovasco.com/suplementos/protagonistas/felix-tatto-tatuador-donostiarra-exito-gente-calienta-20240228105955-nt.html',
  },
  {
    title: 'De jubilado ciego a aerografista y tatuador de referencia',
    subtitle: 'El Diario Vasco',
    date: 'Octubre 2025',
    summary:
      'Un recorrido por la fascinante trayectoria vital y artística de Félix: de la pintura y la aerografía a convertirse en un referente de la tinta.',
    image: '/images/fotonoticia2.webp',
    url: 'https://www.diariovasco.com/san-sebastian/tatoo-felix-jubilado-ciego-aerografista-tatuador-20251024065508-nt.html',
  },
]

export function Artists() {
  return (
    <section
      id="artistas"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:py-24 md:px-10 md:py-32">
        {/* Cabecera de la sección */}
        <div className="mb-10 flex flex-col gap-5 border-b border-border pb-8 sm:mb-12 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-accent">
              04 — Trayectoria & Biografía
            </p>

            <h2 className="text-balance text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
              Félix Plano
            </h2>
          </div>

          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Más de dos décadas de historia, evolución y dedicación al arte en la piel desde el barrio de Egia.
          </p>
        </div>

        {/* Tarjetas biográficas organizadas */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BIOGRAPHY_HIGHLIGHTS.map((item, i) => (
            <article
              key={item.title}
              className="flex flex-col justify-between border border-border bg-background p-6 transition-colors hover:border-accent/50"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Sección de Prensa */}
        <div className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Prensa & Reportajes
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PRESS_NEWS.map((news) => (
              <a
                key={news.url}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden border border-border bg-background transition-colors hover:border-accent hover:bg-secondary/40"
              >
                <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-black/40 p-4 sm:p-6">
                  <img
                    src={news.image}
                    alt={news.title}
                    loading="lazy"
                    className="h-full w-full object-contain grayscale transition-all duration-700 ease-out group-hover:scale-102 group-hover:grayscale-0"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                      <span className="uppercase tracking-widest text-accent">
                        {news.subtitle}
                      </span>
                      <span>{news.date}</span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                      {news.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {news.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground">
                    <span>Leer reportaje completo</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}