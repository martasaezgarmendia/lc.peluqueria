'use client'

import { useState, useEffect } from 'react'

const SPECIALTIES = [
  {
    num: '01',
    name: 'Custom & Autor',
    src: 'portada.jpg',
    alt: 'Félix diseñando un proyecto a medida en el estudio',
    description:
      'Piezas exclusivas concebidas desde cero. Asesoramiento directo para adaptar tu idea a la anatomía con personalidad única.',
  },
  {
    num: '02',
    name: 'Lettering & Trazo',
    src: 'trazo.jpg',
    alt: 'Tatuaje de tipografía y letras detalladas en la piel',
    description:
      'Nombres, frases y fechas con composición tipográfica cuidada para garantizar legibilidad y fluidez con el paso de los años.',
  },
  {
    num: '03',
    name: 'Línea & Simbología',
    src: 'linea.jpg',
    alt: 'Tatuaje de líneas precisas y pequeños detalles geométricos',
    description:
      'Motivos sintéticos, símbolos y pequeños proyectos trabajados con precisión técnica y delicadeza en el pigmento.',
  },
  {
    num: '04',
    name: 'Cover-Up & Reforma',
    images: ['cover1.jpg', 'cover2.jpg'],
    alt: 'Cover-up detallado transformando un tatuaje antiguo',
    description:
      'Reestructuración y cobertura de trabajos antiguos o desgastados, aplicando técnica para dar una nueva vida a tu piel.',
  },
]

// Componente para el slider de Cover-Up con blanco y negro por defecto y color en hover
function CoverImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} - ${idx === 0 ? 'Antes' : 'Después'}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover grayscale transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Indicador visual "Antes / Después" */}
      <div className="absolute right-3 top-3 z-10 rounded-xs bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-xs">
        {currentIndex === 0 ? 'Antes' : 'Después'}
      </div>
    </>
  )
}

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:py-24 md:px-10 md:py-32">
        {/* Cabecera */}
        <div className="mb-10 flex flex-col gap-5 border-b border-border pb-8 sm:mb-12 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-accent">
              03 — Especialidades
            </p>

            <h2 className="text-balance text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
              Cuatro enfoques del oficio
            </h2>
          </div>

          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Adaptación anatómica, viabilidad técnica y honestidad. Piezas pensadas para perdurar en la piel.
          </p>
        </div>

        {/* Retícula de Tarjetas */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {SPECIALTIES.map((s) => (
            <article
              key={s.name}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-background transition-colors hover:border-accent/50"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                {s.images ? (
                  <CoverImageSlider images={s.images} alt={s.alt} />
                ) : (
                  <img
                    src={s.src || '/placeholder.svg'}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                )}

                <div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"
                  aria-hidden="true"
                />

                <span className="absolute left-4 top-4 font-mono text-xs tracking-widest text-muted-foreground">
                  {s.num}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {s.name}
                </h3>

                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>

              <span
                className="absolute inset-x-0 bottom-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}