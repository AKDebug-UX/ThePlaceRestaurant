import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.jpg" // Placeholder for hotel image
            alt="The Place Hotel"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 w-full px-6 md:px-20 text-center md:text-left pt-20">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mb-6">
            COSY <br />
            <span className="text-accent italic">STAYS.</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-white/90 mb-10 font-medium tracking-tight">
            Escape the hustle and bustle. Experience unmatched hospitality in Lekki, Alausa, and Surulere.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg uppercase tracking-widest"
          >
            Book a Room
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic text-primary leading-none">
              COMFORT & <br /> CONVENIENCE.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              Designed for comfort and convenience, our premium accommodations offer a perfect blend of security, relaxation, and top-notch service.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're traveling for business or leisure, experience unmatched hospitality in a serene and secure setting.
              Our hotels in Lekki, Alausa, and Surulere are positioned to give you the best access to the city while providing a peaceful retreat.
            </p>
          </div>
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/placeholder-logo.png" // Placeholder
              alt="Hotel Room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
