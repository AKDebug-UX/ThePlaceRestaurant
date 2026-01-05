import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="py-24 px-6 md:px-20 bg-primary/5">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6 block">Location</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic">Find us in Ikoyi.</h2>

          <div className="space-y-8 mb-12">
            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-full text-white h-fit">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold text-lg mb-1 italic">Address</p>
                <p className="text-muted-foreground">1A, 1 Alfred Rewane Road, Ikoyi, Lagos 106104, Nigeria</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-full text-white h-fit">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-bold text-lg mb-1 italic">Phone</p>
                <p className="text-muted-foreground">0916 434 4803</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-full text-white h-fit">
                <Clock size={20} />
              </div>
              <div>
                <p className="font-bold text-lg mb-1 italic">Opening Hours</p>
                <p className="text-muted-foreground">Open daily, 8:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
              Get Directions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-full px-8 bg-transparent"
            >
              Send to Phone
            </Button>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
          <Image src="/google-map-ikoyi-lagos-location.jpg" alt="Map Location" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
