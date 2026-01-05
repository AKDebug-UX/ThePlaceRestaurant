import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LoungePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.jpg" // Placeholder for lounge image
            alt="The Place Lounge"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 w-full px-6 md:px-20 text-center md:text-left pt-20">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mb-6">
            VIBRANT <br />
            <span className="text-accent italic">ENERGY.</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-white/90 mb-10 font-medium tracking-tight">
            Step into a world of vibrant energy and unforgettable moments at our bars and lounges.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg uppercase tracking-widest"
          >
            Explore Lounges
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic text-primary leading-none">
              THRILLING VIEWS <br /> & EXCITEMENT.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              Come enjoy refreshing drinks, experience thrilling views of the city and an atmosphere full of excitement, music, and fun.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Our lounges are the perfect place to unwind after a long day or kickstart your evening. With a wide selection of drinks and a relaxed yet vibrant atmosphere, you're guaranteed a good time.
            </p>
          </div>
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/placeholder-logo.png" // Placeholder
              alt="Lounge Drinks"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
