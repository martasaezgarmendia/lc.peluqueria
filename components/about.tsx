'use client'

import { useEffect, useState } from 'react'

const REVIEWS = [
  {
    text: 'Para mí la única opción posible cuando pienso en tatuarme. Todos los tatuajes que tengo me los ha hecho él. Aúna la experiencia, las mejores técnicas, y sobre todo un trato exquisito y una ética profesional inmejorables. Su lista de espera es larga pero sin duda merece la pena.',
  },
  {
    text: 'No solo es de los mejores tatuadores, desde la preparación hasta el resultado final hace que sea todo súper fácil y sencillo.',
  },
  {
    text: 'Hace 20 años que tuve el placer de conocer a este gran artista y profesional y espero, en breve, volver a tener la ocasión de tener otra obra de este gran tatuador.',
  },
  {
    text: 'Sigo encantada con su trabajo después de 18 años. ¡Es un gran profesional! Gracias por compartir tu gran talento como tatuador.',
  },
  {
    text: 'Si tienes alguna duda de cómo hacerte el Tattoo, él te aconseja y te dice exactamente cómo hacerlo para que quede perfecto.',
  },
]

export function About() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((current) =>
        current === REVIEWS.length - 1 ? 0 : current + 1,
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const previousReview = () => {
    setCurrentReview((current) =>
      current === 0 ? REVIEWS.length - 1 : current - 1,
    )
  }

  const nextReview = () => {
    setCurrentReview((current) =>
      current === REVIEWS.length - 1 ? 0 : current + 1,
    )
  }

  const review = REVIEWS[currentReview]

  return (
    <section
      id="estudio"
      className="scroll-mt-20 border-y border-border bg-card"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:py-24 md:px-10 md:py-32">
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* Etiqueta Superior */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
              03 — Historia y filosofía
            </p>
          </div>

          {/* Título Esparcido De Extremo a Extremo */}
          <h2 className="text-balance text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
            Más que tinta: décadas de trayectoria y dedicación al arte en la piel.
          </h2>

          {/* Imagen Centrada */}
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-sm border border-border">
            <img
              src="/sobrefelix.jpg"
              alt="Félix Plano en el estudio"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Párrafos Informativos */}
          <div className="grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-2 sm:pt-10">
            <div className="space-y-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              <p>
                Tattoo Félix nace de la mano de Félix Plano Eceiza, pionero del tatuaje en Gipuzkoa y uno de los primeros profesionales en abrir un estudio en la provincia. Tras años de aprendizaje previo, en 1996 abrió las puertas de su espacio en Ordizia, marcando el inicio de una trayectoria marcada por el rigor, el respeto por el oficio y la dedicación constante.
              </p>
              <p>
                A lo largo de estas décadas, ha sido testigo directo del cambio de mentalidad de la sociedad hacia el tatuaje: una expresión antes minoritaria que hoy se entiende como un arte integrado y valorado por personas de todas las edades y ámbitos.
              </p>
            </div>

            <div className="space-y-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              <p>
                El trabajo se orienta al tatuaje personalizado. Más allá de aplicar tinta, la prioridad es aconsejar con honestidad y prudencia, guiando al cliente para reflexionar antes de dar el paso. Una idea, una letra o una fotografía pueden transformarse en una obra única cuando se abordan con la técnica adecuada y el tiempo necesario.
              </p>
              <p>
                Con el máximo compromiso con las medidas de higiene y seguridad, el objetivo sigue siendo el mismo que el primer día: ofrecer un trato cercano, un asesoramiento sincero y un tatuaje pensado para perdurar.
              </p>
            </div>
          </div>
        </div>

        {/* Bloque de Reseñas */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:mt-20 sm:gap-12 md:grid-cols-12 md:gap-16">
          <div className="flex flex-col items-center text-center md:col-span-4">
            <p className="text-6xl font-extrabold tracking-tight md:text-7xl">
              4,9
            </p>

            <div
              className="mt-3 flex justify-center gap-1 text-lg text-accent"
              aria-label="4,9 de 5 estrellas"
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Valoración media sobre 107 opiniones reales en Google Maps.
            </p>

            <a
              href="https://www.google.com/search?q=tattoo+felix+rese%C3%B1as"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              Ver reseñas en Google
            </a>
          </div>

          <div className="md:col-span-8">
            <div className="md:min-h-[220px]">
              <p className="text-base leading-relaxed text-foreground sm:text-lg md:text-xl">
                “{review.text}”
              </p>

              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Opinión de cliente de Tattoo Félix
              </p>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-border pt-5 sm:mt-8">
              <p className="font-mono text-xs tracking-widest text-muted-foreground">
                {String(currentReview + 1).padStart(2, '0')} /{' '}
                {String(REVIEWS.length).padStart(2, '0')}
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousReview}
                  aria-label="Reseña anterior"
                  className="flex h-11 w-11 items-center justify-center border border-border text-lg transition-colors hover:bg-secondary"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Siguiente reseña"
                  className="flex h-11 w-11 items-center justify-center border border-border text-lg transition-colors hover:bg-secondary"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}