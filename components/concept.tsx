'use client'

import { Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react'

export function Concept() {
  const pilares = [
    {
      icono: HeartHandshake,
      titulo: "Atención Exclusiva",
      descripcion:
        "Trabajamos con cita previa para dedicarte el tiempo y el espacio que mereces, sin prisas ni esperas innecesarias en el salón.",
    },
    {
      icono: ShieldCheck,
      titulo: "Salud Capilar",
      descripcion:
        "Priorizamos la integridad de tu cabello. Cada técnica de coloración o corte está pensada para proteger y nutrir la fibra a largo plazo.",
    },
    {
      icono: Sparkles,
      titulo: "Naturalidad & Estilo",
      descripcion:
        "Buscamos acabados orgánicos, con movimiento y brillo, que potencien tu belleza natural y sean fáciles de mantener en tu día a día.",
    },
  ]

  return (
    <section id="concepto" className="relative bg-[#FAF8F5] py-24 md:py-36 text-[#1A1A1A] border-t border-[#E8DFD8]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* FILOSOFÍA PRINCIPAL CON MÁS ANCHO EN EL TÍTULO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 border-b border-[#E8DFD8]">
          <div className="lg:col-span-6 xl:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C29B88]">
              NUESTRA FILOSOFÍA
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.15] text-[#1A1A1A]">
              Un refugio de calma en el corazón de <span className="italic text-[#C29B88]">Gros.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 xl:col-span-6 space-y-6 font-sans text-base md:text-lg text-[#594E46] font-light leading-relaxed">
            <p className="font-serif text-2xl md:text-3xl text-[#1A1A1A] font-light leading-snug">
              "Entendemos la peluquería como un momento de pausas, cuidado personal y escucha activa."
            </p>
            <p>
              En LC Peluquería huimos de los ritmos acelerados. Nos enfocamos en ofrecer un trato cercano y honesto, analizando detalladamente las necesidades de tu cabello para aconsejarte la técnica que mejor se adapte a tus facciones, estilo de vida y ritmo cotidiano.
            </p>
          </div>
        </div>

        {/* BLOQUES / PILARES DE TRABAJO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16">
          {pilares.map((pilar, index) => {
            const Icono = pilar.icono
            return (
              <div
                key={index}
                className="flex flex-col justify-between bg-white border border-[#E8DFD8] p-8 md:p-10 transition-all duration-300 hover:border-[#C29B88] hover:shadow-lg hover:shadow-[#C29B88]/5"
              >
                <div>
                  <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-full bg-[#FAF8F5] text-[#C29B88] border border-[#E8DFD8]">
                    <Icono size={22} />
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#1A1A1A] mb-4">
                    {pilar.titulo}
                  </h3>

                  <p className="font-sans text-sm md:text-base text-[#594E46] font-light leading-relaxed">
                    {pilar.descripcion}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#FAF8F5] font-mono text-[11px] uppercase tracking-widest text-[#C29B88]">
                  0{index + 1} — LC Salón
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}