import { Preloader } from '@/components/preloader'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { About } from '@/components/about'
import { Specialties } from '@/components/specialties'
import { Artists } from '@/components/artists'
import { IdeaCta } from '@/components/idea-cta'
import { Location } from '@/components/location'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <Preloader />
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Specialties />
        <Artists />
        <IdeaCta />
        <Location />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
