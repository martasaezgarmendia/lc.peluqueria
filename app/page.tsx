import { Preloader } from '@/components/preloader'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Concept } from '@/components/concept'
import { Services } from '@/components/services'
import { Resenas } from '@/components/resenas'
import { Location } from '@/components/location'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'
import { Team } from '@/components/team'
import { Lookbook } from '@/components/lookbook'

export default function Page() {
  return (
    <>
      <Preloader />
      <SiteHeader />
      <main className="relative min-h-screen bg-[#FAF8F5]">
        <Hero />
        <Concept />
        <Services />
        <Lookbook />
        <Team />
        <Resenas />
        <Location />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}


