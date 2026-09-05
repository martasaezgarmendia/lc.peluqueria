'use client'

import { Sparkles, ArrowRight } from 'lucide-react'

export function Services() {
  const whatsappLink = "https://wa.me/34943274103"

  const servicios = [
    {
      numero: "01",
      categoria: "Corte & Visajismo",
      titulo: "Diseño & Forma Personalizada",
      descripcion:
        "Cortes creados en base al estudio de tus facciones, la textura natural de tu cabello y tu estilo personal. Buscamos formas limpias que sean fáciles de peinar en tu día a día.",
      detalles: ["Estudio morfológico y de textura", "Lavado con masaje craneal", "Secado y peinado final"],
    },
    {
      numero: "02",
      categoria: "Colorimetría & Balayage",
      titulo: "Iluminación & Tono Multidimensional",
      descripcion:
        "Técnicas avanzadas de aclarado y coloración respetuosas con la fibra capilar. Creamos matices naturales, degradados suaves y puntos de luz que aportan dimensión y brillo.",
      detalles: ["Balayage & Babylights", "Matización y baño de brillo", "Corrección de color y canas"],
    },
    {
      numero: "03",
      categoria: "Salud & Nutrición Capilar",
      titulo: "Tratamientos & Reconstrucción",
      descripcion:
        "Rituales intensivos para reparar cabellos castigados o deshidratados. Restauramos la fuerza interna del tallo capilar, aportando suavidad, sellado de puntas y soltura.",
      detalles: ["Hidratación y nutrición profunda", "Reconstrucción de materia capilar", "Tratamiento de cuero cabelludo"],
    },
    {
      numero: "04",
      categoria: "Estilismo & Forma",
      titulo: "Peinados & Ocasiones Especiales",
      descripcion:
        "Desde un moldeado natural con volumen para tu día a día hasta recogidos sofisticados para eventos. Trabajamos la textura para lograr acabados duraderos y con movimiento.",
      detalles: ["Brushing & Ondas editoriales", "Recogidos y semirecogidos", "Styling para eventos"],
    },
  ]

  return (
    <section id="servicios" className="relative bg-[#FAF8F5] py-24 md:py-36 text-[#1A1A1A] border-t border-[#E8DFD8]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* CABECERA DE LA SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#E8DFD8]">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C29B88]">
              NUESTROS RITUALES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-[#1A1A1A]">
              Servicios diseñados para potenciar tu <span className="italic text-[#C29B88]">esencia.</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm md:text-base text-[#594E46] font-light leading-relaxed">
            Te asesoramos de forma cercana para encontrar la técnica y el estilo que mejor se adapten a tu cabello y tu día a día.
          </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-16">
          {servicios.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border border-[#E8DFD8] bg-white p-8 md:p-12 transition-all duration-500 hover:border-[#C29B88] hover:shadow-xl hover:shadow-[#C29B88]/5"
            >
              <div>
                {/* NÚMERO Y CATEGORÍA */}
                <div className="flex items-center justify-between border-b border-[#E8DFD8] pb-6 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C29B88]">
                    {item.categoria}
                  </span>
                  <span className="font-serif text-2xl font-light text-[#E8DFD8] group-hover:text-[#C29B88] transition-colors">
                    {item.numero}
                  </span>
                </div>

                {/* TÍTULO Y DESCRIPCIÓN */}
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1A1A1A] mb-4">
                  {item.titulo}
                </h3>

                <p className="font-sans text-sm md:text-base text-[#594E46] font-light leading-relaxed mb-8">
                  {item.descripcion}
                </p>

                {/* DETALLES/INCLUYE */}
                <ul className="space-y-2 mb-10 pt-4 border-t border-[#FAF8F5]">
                  {item.detalles.map((detalle, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-sans text-xs md:text-sm text-[#8C7A6B]">
                      <Sparkles size={12} className="text-[#C29B88] shrink-0" />
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ENLACE DIRECTO A WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between border-t border-[#E8DFD8] pt-6 font-mono text-xs uppercase tracking-widest text-[#1A1A1A] transition-colors group-hover:text-[#C29B88]"
              >
                <span>Consultar o Reservar Cita</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}