import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Geist_Mono } from 'next/font/google'
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
  title: 'Tattoo Félix — Tinta, Arte y Actitud · Gipuzkoa',
  description:
    'Estudio de tatuajes con amplia experiencia en Gipuzkoa por Félix Plano Eceiza. Especialistas en Black & Grey, Realismo, diseños personalizados y Cover Ups.',
  openGraph: {
    title: 'Tattoo Félix — Tinta, Arte y Actitud',
    description:
      'Tatuajes con personalidad y trayectoria en Gipuzkoa. Black & Grey · Realismo · Diseños Personalizados · Cover Ups.',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0D0D0D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${geistMono.variable} bg-background dark`}
    >
      <body className="font-sans antialiased grain">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}