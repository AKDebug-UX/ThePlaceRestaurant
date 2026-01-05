import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NightClubsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.jpg" // Placeholder for club image
            alt="The Place Night Club"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-20 text-center md:text-left pt-20">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mb-6">
            EPIC <br />
            <span className="text-accent italic">NIGHTS.</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-white/90 mb-10 font-medium tracking-tight">
            Immerse yourself in a high-energy atmosphere filled with electrifying music and nonstop dancing.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg uppercase tracking-widest"
          >
            Join the Party
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-square rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white">
            <Image
              src="/placeholder-logo.png" // Placeholder
              alt="Club Vibe"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic text-primary leading-none">
              THE ULTIMATE <br /> PARTY EXPERIENCE.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              For those who live for the night, our nightclubs offer the ultimate party experience.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're celebrating with friends or looking for a thrilling night out, The Place Nightclubs set the perfect stage for an epic nightlife adventure. 
              Elevate your nightlife—because the best memories are made after dark!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
