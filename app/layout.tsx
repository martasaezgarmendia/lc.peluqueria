import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LC Peluquería — Donostia / San Sebastián',
  description:
    'Salón de peluquería en Donostia por Laura. Especialistas en rubios nórdicos, balayage, método curly y estilismo editorial.',
  openGraph: {
    title: 'LC Peluquería — Estilismo Editorial & Especialistas en Color',
    description:
      'Peluquería en San Sebastián. Rubios Nórdicos · Balayage · Método Curly · Eventos y Novias.',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF8F5',
}

function DemoProtection() {
  return (
    <>
      {/* Marca de Agua Transparente Flotante */}
      <div className="pointer-events-none fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden opacity-15 select-none">
        <p className="-rotate-[30deg] font-mono text-5xl font-black uppercase tracking-widest text-[#1A1A1A] sm:text-7xl md:text-8xl">
          DEMO NO OFICIAL — NEXTLEVEL
        </p>
      </div>

      {/* Script optimizado para desactivar clic derecho */}
      <Script id="disable-right-click" strategy="afterInteractive">
        {`document.addEventListener('contextmenu', function(e) { e.preventDefault(); });`}
      </Script>
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${geistMono.variable} bg-[#FAF8F5]`}
    >
      <body className="font-sans antialiased relative">
        <DemoProtection />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}