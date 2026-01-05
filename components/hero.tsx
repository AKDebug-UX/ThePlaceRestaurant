import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="relative h-full border-r border-border/20 grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="/nigerian-jollof-rice-close-up.jpg"
              alt="Delicious Nigerian Jollof"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-full border-r border-border/20 grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="/restaurant-interior-ambience-lagos.jpg"
              alt="The Place Ambience"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-full grayscale hover:grayscale-0 transition-all duration-700">
            <Image src="/prawn-rice-plate-modern.jpg" alt="Signature Prawn Rice" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-20 text-center md:text-left pt-20">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl mb-6">
          TASTY <br />
          <span className="text-accent italic">VIBES.</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-white/90 mb-10 font-medium tracking-tight">
          The ultimate spot in Ikoyi for spicy Nigerian meals, lively atmosphere, and unforgettable moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg uppercase tracking-widest"
          >
            Place an Order
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary rounded-full px-10 py-7 text-lg uppercase tracking-widest bg-transparent cursor-pointer"
          >
            <Link href="#menu">View Menu</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full py-4 bg-primary overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="inline-block animate-marquee text-white/50 text-xs font-bold uppercase tracking-[0.3em]">
          JOLLOF RICE +++ PRAWN RICE +++ COMFORT FOODS +++ GREAT AMBIENCE +++ LIKELY VIBES +++ LAGOS' FINEST +++ OPEN
          DAILY +++ JOLLOF RICE +++ PRAWN RICE +++ COMFORT FOODS +++ GREAT AMBIENCE
        </div>
      </div>
    </section>
  )
}
