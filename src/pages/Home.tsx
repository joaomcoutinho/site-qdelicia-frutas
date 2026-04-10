import { ContactForm } from '../components/home/ContactForm'
import { ConversionStrip } from '../components/home/ConversionStrip'
import { Differentials } from '../components/home/Differentials'
import { EventsDistribution } from '../components/home/EventsDistribution'
import { Hero } from '../components/home/Hero'
import { ProductPreview } from '../components/home/ProductPreview'
import { QualityProcess } from '../components/home/QualityProcess'

export function HomePage() {
  return (
    <>
      <Hero />
      <QualityProcess />
      <EventsDistribution />
      <ProductPreview />
      <Differentials />
      <ConversionStrip />
      <ContactForm />
    </>
  )
}
