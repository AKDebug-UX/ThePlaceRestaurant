import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { MenuAccordion } from "@/components/menu-accordion"
import { GallerySection } from "@/components/gallery-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuAccordion />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
