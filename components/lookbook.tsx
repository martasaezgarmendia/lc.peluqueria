'use client'

import { useState } from 'react'
import { Sparkles, ArrowUpRight } from 'lucide-react'

// Categorías con su frase descriptiva editorial
const categories = [
  { 
    id: 'all', 
    label: 'Todos',
    quote: 'Una colección seleccionada de nuestras transformaciones y acabados firmados por LC Peluquería.' 
  },
  { 
    id: 'nordic-blondes', 
    label: 'Nordic & Blondes',
    quote: 'Rubios fríos, luminosos y con matiz ceniza, logrando máxima luminosidad con la máxima salud capilar.' 
  },
  { 
    id: 'white', 
    label: 'White / Ice',
    quote: 'Platinos puros, tonos plata y cristalinos trabajados con técnicas de aclarado de alta precisión.' 
  },
  { 
    id: 'bronde', 
    label: 'Bronde Hair',
    quote: 'El equilibrio entre castaño y rubio. Calidez, dimensión y un efecto aclarado por el sol ultranatural.' 
  },
  { 
    id: 'morena-iluminada', 
    label: 'Morena Iluminada',
    quote: 'Puntos de luz estratégicos en tonos miel, avellana y caramelo sin perder la riqueza de la base oscura.' 
  },
  { 
    id: 'copper', 
    label: 'Copper & Warm',
    quote: 'Cobrizos vibrantes, tonos canela y reflejos cálidos con un acabado sedoso y brillo espejo.' 
  },
  { 
    id: 'curly', 
    label: 'Curly Method',
    quote: 'Cortes en seco, hidratación profunda y definición adaptada al patrón natural de cada rizo.' 
  },
  { 
    id: 'eventos', 
    label: 'Eventos',
    quote: 'Recogidos, semi-recogidos y texturas orgánicas diseñadas a medida para novias e invitadas.' 
  },
]

const lookbookItems = [
  // NORDIC & BLONDES
  { id: 1, category: 'nordic-blondes', categoryLabel: 'Nordic & Blondes', image: '/nordicblonde1.jpg', aspect: 'aspect-[3/4]' },
  { id: 2, category: 'nordic-blondes', categoryLabel: 'Nordic & Blondes', image: '/nordicblonde2.jpg', aspect: 'aspect-[4/5]' },
  { id: 3, category: 'nordic-blondes', categoryLabel: 'Nordic & Blondes', image: '/nordicblonde3.jpg', aspect: 'aspect-[3/4]' },
  { id: 4, category: 'nordic-blondes', categoryLabel: 'Nordic & Blondes', image: '/nordicblonde4.jpg', aspect: 'aspect-[4/5]' },
  { id: 5, category: 'nordic-blondes', categoryLabel: 'Nordic & Blondes', image: '/nordicblonde5.jpg', aspect: 'aspect-[3/4]' },
  { id: 6, category: 'nordic-blondes', categoryLabel: 'Nordic & Blondes', image: '/nordicblonde6.jpg', aspect: 'aspect-[4/5]' },

  // WHITE / ICE
  { id: 7, category: 'white', categoryLabel: 'White / Ice', image: '/white1.jpg', aspect: 'aspect-[3/4]' },
  { id: 8, category: 'white', categoryLabel: 'White / Ice', image: '/white2.jpg', aspect: 'aspect-[4/5]' },
  { id: 9, category: 'white', categoryLabel: 'White / Ice', image: '/white3.jpg', aspect: 'aspect-[3/4]' },

  // BRONDE HAIR
  { id: 10, category: 'bronde', categoryLabel: 'Bronde Hair', image: '/bronde1.jpg', aspect: 'aspect-[4/5]' },
  { id: 11, category: 'bronde', categoryLabel: 'Bronde Hair', image: '/bronde2.jpg', aspect: 'aspect-[3/4]' },
  { id: 12, category: 'bronde', categoryLabel: 'Bronde Hair', image: '/bronde3.jpg', aspect: 'aspect-[4/5]' },
  { id: 13, category: 'bronde', categoryLabel: 'Bronde Hair', image: '/bronde4.jpg', aspect: 'aspect-[3/4]' },
  { id: 14, category: 'bronde', categoryLabel: 'Bronde Hair', image: '/bronde5.jpg', aspect: 'aspect-[4/5]' },
  { id: 15, category: 'bronde', categoryLabel: 'Bronde Hair', image: '/bronde6.jpg', aspect: 'aspect-[3/4]' },

  // MORENA ILUMINADA
  { id: 16, category: 'morena-iluminada', categoryLabel: 'Morena Iluminada', image: '/morena1.jpg', aspect: 'aspect-[3/4]' },
  { id: 17, category: 'morena-iluminada', categoryLabel: 'Morena Iluminada', image: '/morena2.jpg', aspect: 'aspect-[4/5]' },
  { id: 18, category: 'morena-iluminada', categoryLabel: 'Morena Iluminada', image: '/morena3.jpg', aspect: 'aspect-[3/4]' },
  { id: 19, category: 'morena-iluminada', categoryLabel: 'Morena Iluminada', image: '/morena4.jpg', aspect: 'aspect-[4/5]' },
  { id: 20, category: 'morena-iluminada', categoryLabel: 'Morena Iluminada', image: '/morena5.jpg', aspect: 'aspect-[3/4]' },
  { id: 21, category: 'morena-iluminada', categoryLabel: 'Morena Iluminada', image: '/morena6.jpg', aspect: 'aspect-[4/5]' },

  // COPPER & WARM
  { id: 22, category: 'copper', categoryLabel: 'Copper & Warm', image: '/copper1.jpg', aspect: 'aspect-[4/5]' },
  { id: 23, category: 'copper', categoryLabel: 'Copper & Warm', image: '/copper2.jpg', aspect: 'aspect-[3/4]' },
  { id: 24, category: 'copper', categoryLabel: 'Copper & Warm', image: '/copper3.jpg', aspect: 'aspect-[4/5]' },
  { id: 25, category: 'copper', categoryLabel: 'Copper & Warm', image: '/copper4.jpg', aspect: 'aspect-[3/4]' },
  { id: 26, category: 'copper', categoryLabel: 'Copper & Warm', image: '/copper5.jpg', aspect: 'aspect-[4/5]' },
  { id: 27, category: 'copper', categoryLabel: 'Copper & Warm', image: '/copper6.jpg', aspect: 'aspect-[3/4]' },

  // CURLY METHOD
  { id: 28, category: 'curly', categoryLabel: 'Curly Method', image: '/curly1.jpg', aspect: 'aspect-[3/4]' },
  { id: 29, category: 'curly', categoryLabel: 'Curly Method', image: '/curly2.jpg', aspect: 'aspect-[4/5]' },
  { id: 30, category: 'curly', categoryLabel: 'Curly Method', image: '/curly3.jpg', aspect: 'aspect-[3/4]' },
  { id: 31, category: 'curly', categoryLabel: 'Curly Method', image: '/curly4.jpg', aspect: 'aspect-[4/5]' },
  { id: 32, category: 'curly', categoryLabel: 'Curly Method', image: '/curly5.jpg', aspect: 'aspect-[3/4]' },
  { id: 33, category: 'curly', categoryLabel: 'Curly Method', image: '/curly6.jpg', aspect: 'aspect-[4/5]' },

  // EVENTOS & NOVIAS
  { id: 34, category: 'eventos', categoryLabel: 'Eventos & Novias', image: '/eventos1.jpg', aspect: 'aspect-[4/5]' },
  { id: 35, category: 'eventos', categoryLabel: 'Eventos & Novias', image: '/eventos2.jpg', aspect: 'aspect-[3/4]' },
  { id: 36, category: 'eventos', categoryLabel: 'Eventos & Novias', image: '/eventos3.jpg', aspect: 'aspect-[4/5]' },
  { id: 37, category: 'eventos', categoryLabel: 'Eventos & Novias', image: '/eventos4.jpg', aspect: 'aspect-[3/4]' },
  { id: 38, category: 'eventos', categoryLabel: 'Eventos & Novias', image: '/eventos5.jpg', aspect: 'aspect-[4/5]' },
  { id: 39, category: 'eventos', categoryLabel: 'Eventos & Novias', image: '/eventos6.jpg', aspect: 'aspect-[3/4]' },
]

export function Lookbook() {
  const [activeTab, setActiveTab] = useState('all')

  const currentCategory = categories.find((cat) => cat.id === activeTab) || categories[0]

  const filteredItems =
    activeTab === 'all'
      ? lookbookItems
      : lookbookItems.filter((item) => item.category === activeTab)

  return (
    <section id="lookbook" className="relative bg-[#FAF8F5] py-20 md:py-32 text-[#1A1A1A]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* CABECERA */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-[#E8DFD8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C29B88]">
              LOOKBOOK &amp; ESPECIALIDADES
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1A1A1A]">
              Galería de <span className="italic text-[#C29B88]">Trabajos.</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-[#594E46] font-light leading-relaxed">
            Inspiración editorial y trabajos reales realizados en nuestro salón.
          </p>
        </div>

        {/* SELECTOR DE CATEGORÍAS */}
        <div className="mb-6 flex flex-wrap gap-2 md:gap-3">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                    : 'border-[#E8DFD8] bg-[#F4EFEA] text-[#594E46] hover:border-[#C29B88] hover:text-[#1A1A1A]'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* FRASE / DESCRIPCIÓN DE LA CATEGORÍA ACTIVA */}
        <div className="mb-12 min-h-[48px] border-l-2 border-[#C29B88] pl-4 py-1 transition-all duration-300">
          <p className="font-serif italic text-lg md:text-xl text-[#594E46]">
            "{currentCategory.quote}"
          </p>
        </div>

        {/* GALERÍA DE IMÁGENES LIMPÍA (ESTILO EDITORIAL) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden border border-[#E8DFD8] bg-[#F4EFEA] transition-all duration-500 hover:shadow-2xl"
            >
              <div className={`relative w-full overflow-hidden ${item.aspect}`}>
                <img
                  src={item.image}
                  alt={item.categoryLabel}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* DEGRADADO Y OVERLAY HOVER */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* TAG DE CATEGORÍA SUTIL */}
                <span className="absolute top-4 left-4 border border-white/30 bg-[#1A1A1A]/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
                  {item.categoryLabel}
                </span>

                {/* BOTÓN WHATSAPP/CONSULTA */}
                <a
                  href={`https://wa.me/34943274103?text=Hola%20Laura,%20me%20interesa%20un%20acabado%20como%20el%20de%20la%20categoria%20"${item.categoryLabel}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center border border-white/40 bg-white/90 text-[#1A1A1A] opacity-0 transition-all duration-300 hover:bg-[#C29B88] hover:text-white hover:border-[#C29B88] group-hover:opacity-100"
                  title="Consultar por WhatsApp"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER DEL LOOKBOOK */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#E8DFD8] pt-8">
          <div className="flex items-center gap-2 text-[#8C7A6B]">
            <Sparkles size={16} className="text-[#C29B88]" />
            <span className="font-mono text-xs uppercase tracking-wider">
              Diagnóstico personalizado antes de cada trabajo de color
            </span>
          </div>
          <a
            href="https://wa.me/34943274103?text=Hola%20Laura,%20quiero%20consultar%20un%20cambio%20de%20look"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#1A1A1A] underline underline-offset-8 hover:text-[#C29B88] transition-colors"
          >
            <span>Consulta tu caso por WhatsApp</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}