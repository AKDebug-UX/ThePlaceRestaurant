import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white">
          <Image
            src="/happy-customers-dining-lagos-restaurant.jpg"
            alt="People at The Place"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 italic text-primary leading-none">
            DEDICATED TO <br /> TASTE & VIBES.
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
            The Place Restaurant (CPF) is where food lovers and friends come to celebrate flavors, sharpen their
            cravings, and carve out what's next.
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            We help brands find their voice through storytelling and branding. And we help foodies own theirs —
            because when life and work move in sync, the best ideas don't just happen, they flow. That's why we
            created a space that sparks the thinking that fuels not just meals, but whole ways of being.
          </p>
          <Button
            size="lg"
            variant="link"
            className="text-accent p-0 h-auto text-xl font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Read Our Story →
          </Button>
        </div>
      </div>
    </section>
  )
}
