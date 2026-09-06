'use client'

import { Sparkles, Heart, ShieldCheck, MapPin } from 'lucide-react'

export function Team() {
  const pilares = [
    {
      icon: Heart,
      title: 'Trato Cercano y Exclusivo',
      description:
        'Sin prisas ni dinámicas en cadena. Reservamos el tiempo necesario para escucharte, entender tu estilo de vida y asesorarte personalmente.',
    },
    {
      icon: ShieldCheck,
      title: 'Técnica y Salud Capilar',
      description:
        'Priorizamos siempre la integridad de tu cabello utilizando diagnósticos previos y productos de la más alta gama.',
    },
    {
      icon: Sparkles,
      title: 'Ambiente Cálido y Relajante',
      description:
        'Diseñado para desconectar del ruido diario. Iluminación suave, aromas acogedores y una atención enfocada solo en ti.',
    },
  ]

  return (
    <section id="equipo" className="relative bg-[#F4EFEA] py-20 md:py-32 text-[#1A1A1A]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* CABECERA EDITORIAL */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-[#E8DFD8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C29B88]">
              EL SALÓN &amp; ALMA
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1A1A1A]">
              Tu espacio de autor en <span className="italic text-[#C29B88]">Gros.</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-[#594E46] font-light leading-relaxed">
            LC Peluquería nace de la pasión por el trabajo artesanal, la atención en los pequeños detalles y el deseo de crear un refugio de belleza a medida en San Sebastián.
          </p>
        </div>

        {/* CONTENIDO PRINCIPAL EN 2 COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: IMAGEN DEL SALÓN Y LAURA */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-[#E8DFD8] bg-[#FAF8F5] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200"
                alt="Interior del salón LC Peluquería en Gros"
                className="h-[480px] sm:h-[580px] w-full object-cover grayscale-[15%] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
              
              {/* CARTEL FLOTANTE */}
              <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-[#FAF8F5]/90 p-6 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-[#C29B88]" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                    San Francisco Kalea 46 — Donostia
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-light text-[#1A1A1A]">
                  Laura — <span className="italic text-[#C29B88]">Fundadora y Estilista</span>
                </h3>
              </div>
            </div>

            {/* DETALLE DECORATIVO DETRÁS */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-[#C29B88]/30 hidden sm:block" />
          </div>

          {/* COLUMNA DERECHA: FILOSOFÍA Y PILARES */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C29B88]">
                FILOSOFÍA DE ATENCIÓN
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] leading-snug">
                El poder de la belleza se refleja en <span className="italic text-[#C29B88]">tu sonrisa.</span>
              </h3>
              <p className="font-sans text-sm text-[#594E46] font-light leading-relaxed">
                Entender tu cabello requiere tiempo y sensibilidad. En LC Peluquería combinamos las últimas tendencias en técnicas de color y corte con una experiencia relajante donde el protagonista siempre eres tú.
              </p>
            </div>

            {/* LISTA DE PILARES */}
            <div className="flex flex-col gap-6 pt-4 border-t border-[#E8DFD8]">
              {pilares.map((pilar) => {
                const IconComponent = pilar.icon
                return (
                  <div key={pilar.title} className="group flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C29B88] bg-[#C29B88]/10 text-[#C29B88] transition-colors group-hover:bg-[#C29B88] group-hover:text-white">
                      <IconComponent size={20} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-serif text-lg font-medium text-[#1A1A1A]">
                        {pilar.title}
                      </h4>
                      <p className="font-sans text-xs text-[#594E46] font-light leading-relaxed">
                        {pilar.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* LLAMADA A LA ACCIÓN SECUNDARIA */}
            <div className="pt-4">
              <a
                href="https://wa.me/34943274103?text=Hola%20Laura,%20me%20gustaría%20saber%20más%20sobre%20vuestros%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#1A1A1A] bg-[#1A1A1A] px-8 py-4 font-mono text-xs uppercase tracking-widest text-white transition-all hover:bg-[#C29B88] hover:border-[#C29B88]"
              >
                <span>Conoce la experiencia LC</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}