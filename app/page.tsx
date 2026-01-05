import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { MenuAccordion } from "@/components/menu-accordion"
import { GallerySection } from "@/components/gallery-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MenuAccordion />
      <GallerySection />
      <LocationSection />
      <ContactSection />
    </main>
  )
}
