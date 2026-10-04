import Hero from '@/components/Hero'
import ServicesMarquee from '@/components/ServicesMarquee'
import StatsSection from '@/components/StatsSection'
import WhoWeAre from '@/components/WhoWeAre'
import ServicesGrid from '@/components/ServicesGrid'
import IndustriesSection from '@/components/IndustriesSection'
import ProcessTimeline from '@/components/ProcessTimeline'
import ClientsLogos from '@/components/ClientsLogos'
import GoogleReviews from '@/components/GoogleReviews'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <StatsSection />
      <WhoWeAre />
      <ServicesGrid />
      <IndustriesSection />
      <ProcessTimeline />
      <ClientsLogos />
      <GoogleReviews />
      <ContactSection />
    </>
  )
}
