import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Hotels",
    description: "Affordable, cosy stays in Lekki, Alausa, and Surulere.",
    image: "/restaurant-interior-ambience-lagos.jpg", // Using existing image as placeholder
    href: "/hotels",
  },
  {
    title: "Night Clubs",
    description: "Ultimate party experience with electrifying music.",
    image: "/happy-customers-dining-lagos-restaurant.jpg", // Using existing image as placeholder
    href: "/nightclubs",
  },
  {
    title: "Lounge",
    description: "Vibrant energy, refreshing drinks, and thrilling views.",
    image: "/prawn-rice-plate-modern.jpg", // Using existing image as placeholder
    href: "/lounge",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 italic text-primary">
            MORE THAN JUST <br /> FOOD.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the full The Place experience. From restful nights to vibrant parties, we have it all.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-background border border-border/50 hover:border-primary/50 transition-colors">
              <div className="absolute inset-0 z-0">
                 <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold uppercase tracking-widest mb-4">{service.title}</h3>
                <p className="text-white/80 mb-8 line-clamp-3">{service.description}</p>
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black bg-transparent">
                  <Link href={service.href}>Explore {service.title}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
