'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

export function Resenas() {
  const [indiceActual, setIndiceActual] = useState(0)

  // Link directo exacto a las reseñas de Google
  const googleReviewsUrl = "https://www.google.com/search?q=lc.peluqueria&si=APenkKn5T4YN59srr511wD6k6Pufj9DEzRUvB1XJSwUeeT5afkEFV5U2uOHlM5DsiC5dqRz_9kSQ8j_ZXauXIUqFnF6ro6Bd3HYBR1VAa4_HGcW-NdURdWk%3D#sv=CAESzQEKuQEStgEKd0FKaVQ0dExXMWlSSmprME5QT1pNaFlyZzZscHBISGVZMURHNDQzNU5hTWdXdlJnRjBUUE1uYTJ2cHJuNXRFYWR4RWI3OTBLZ3IwOExuOWN6TXdHalhsVml5Y2hjYldDMjNnWFdHOWlqaV9IdnNzdm1ueUJRNUZjEhdvdC1iYW91RENxNkI5dThQcmVTUDBBURoiQURzcjlmUzV6N1V0ZVAzZjB6Z29CQjJZSEtWOUNUMU9XQRIEODA1MRoBMyoAMAA4AUAAGAAgi6LcqglKAhAB"

  const opiniones = [
    {
      texto:
        "No es la primera vez que voy y, como siempre, salgo encantada. 💫 Hace un trabajo excelente, con mucha precisión y cuidado, siempre escuchando lo que quiero y aconsejándome lo mejor para mi tipo de cabello. Se nota la experiencia y la dedicación en cada detalle. Además, la atención es inmejorable: muy amable, cercana y profesional.",
      autora: "Clienta en Google",
    },
    {
      texto:
        "Mi peluquera de confianza siempre. No solo hace cambios increíbles sino que te asesora de una manera tan especial que siempre te vas súper contenta. Consigue hacerte sentir la más guapa: no es solo cortar o teñir, son las manos y el trato que recibes. ¡Es la mejor con diferencia!",
      autora: "Clienta en Google",
    },
    {
      texto:
        "Ponerse en manos de Laura es descubrir cómo con su técnica precisa y su gran experiencia consigue resultados sencillamente mágicos. Su profesionalidad y calidez convierten cada visita en una experiencia única. Su manejo del color es magistral… Ponerse en sus manos es un resultado espectacular asegurado.",
      autora: "Clienta en Google",
    },
    {
      texto:
        "Las mejores profesionales que podrás encontrar. Te aconsejan sin pelos en la lengua si algo te viene bien o mal para cuidar la salud de tu pelo. Te cortan exactamente lo que pides y te miman muchísimo. ¡Súper simpáticas y amables!",
      autora: "Clienta en Google",
    },
    {
      texto:
        "Fui la primera vez a cortarme el pelo y me quedé impresionada de lo bien que me lo dejó. La segunda vez fui a hacerme el tinte y una maravilla. Es muy agradable y atenta, ya no quiero otra peluquera. Y el precio me parece totalmente correcto.",
      autora: "Clienta en Google",
    },
  ]

  // Avance automático cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % opiniones.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [opiniones.length])

  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + opiniones.length) % opiniones.length)
  }

  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % opiniones.length)
  }

  return (
    <section id="resenas" className="relative bg-[#FAF8F5] py-24 md:py-36 text-[#1A1A1A] border-t border-[#E8DFD8]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* CABECERA CON PUNTUACIÓN DE GOOGLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#E8DFD8]">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C29B88]">
              VALORACIONES REALES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-[#1A1A1A]">
              Reseñas & <span className="italic text-[#C29B88]">Experiencias.</span>
            </h2>
          </div>

          {/* BLOQUE DE PUNTUACIÓN DESTACADO Y ENLACE A GOOGLE */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-6xl sm:text-7xl font-light tracking-tight text-[#1A1A1A]">
                5.0
              </span>
              <div className="flex flex-col items-start md:items-end gap-1">
                <div className="flex text-[#C29B88] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                  Valoración media
                </span>
              </div>
            </div>
            
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pt-2 font-mono text-xs uppercase tracking-widest text-[#8C7A6B] hover:text-[#1A1A1A] transition-colors"
            >
              <span>Ver más reseñas en Google</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* CARRUSEL DE RESEÑAS */}
        <div className="relative pt-16">
          <div className="mx-auto max-w-4xl bg-white border border-[#E8DFD8] p-8 sm:p-12 md:p-16 relative shadow-sm">
            
            {/* ESTRELLAS DE LA RESEÑA */}
            <div className="flex text-[#C29B88] gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            {/* TEXTO DE LA RESEÑA */}
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#1A1A1A] italic min-h-[160px] sm:min-h-[140px]">
              "{opiniones[indiceActual].texto}"
            </p>

            {/* PIE Y CONTROLES DEL CARRUSEL */}
            <div className="mt-8 pt-8 border-t border-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C29B88]">
                {opiniones[indiceActual].autora}
              </span>

              {/* FLECHAS Y PUNTOS DE NAVEGACIÓN */}
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  {opiniones.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndiceActual(i)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${
                        i === indiceActual ? 'w-6 bg-[#C29B88]' : 'w-1.5 bg-[#E8DFD8]'
                      }`}
                      aria-label={`Ir a reseña ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={anterior}
                    className="p-2 border border-[#E8DFD8] text-[#1A1A1A] hover:border-[#C29B88] hover:text-[#C29B88] transition-colors"
                    aria-label="Reseña anterior"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={siguiente}
                    className="p-2 border border-[#E8DFD8] text-[#1A1A1A] hover:border-[#C29B88] hover:text-[#C29B88] transition-colors"
                    aria-label="Siguiente reseña"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}