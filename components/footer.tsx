import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10 pt-24 pb-12 px-6 md:px-20 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 max-w-7xl mx-auto">
        <div className="col-span-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-4">
            The Place Newsletter
          </label>
          <div className="flex gap-4 max-w-md">
            <Input
              placeholder="Enter email"
              className="border-0 border-b border-primary/20 bg-transparent rounded-none px-0 focus:ring-0 focus:border-primary transition-colors h-12"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 uppercase tracking-widest text-xs">
              Submit
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary italic">Explore</h4>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Catering
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Locations
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary italic">Follow Us</h4>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Twitter (X)
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="relative select-none pointer-events-none mb-12">
        <h2 className="text-[20vw] md:text-[25vw] leading-none font-bold text-primary italic opacity-20 tracking-tighter">
          THE PLACE
        </h2>
      </div>

      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-t border-primary/5 pt-8 max-w-7xl mx-auto">
        <p>© 2026 THE PLACE RESTAURANT. ALL RIGHTS RESERVED.</p>
        <p className="hidden md:block">IKOYI, LAGOS. DEDICATED TO TASTE, AMBIENCE & VIBES.</p>
      </div>
    </footer>
  )
}
