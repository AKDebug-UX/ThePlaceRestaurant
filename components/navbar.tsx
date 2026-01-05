"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Restaurants", href: "/" },
    { name: "Hotels", href: "/hotels" },
    { name: "Night Clubs", href: "/nightclubs" },
    { name: "Lounge", href: "/lounge" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b border-border/40">
      <Link href="/" className="text-xl font-bold tracking-tighter uppercase text-primary">
        The Place
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest italic">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-accent transition-colors">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="hidden sm:inline-flex border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 bg-transparent"
        >
          Order Online
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Menu</span>
          {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed left-0 right-0 top-[65px] bg-background z-40 p-6 md:hidden flex flex-col animate-in slide-in-from-top duration-300">
          <div className="flex flex-col w-full gap-6 text-2xl font-bold uppercase italic tracking-tighter text-primary">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-primary/10 pb-4"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button className="mt-8 bg-primary text-white rounded-full py-8 text-xl uppercase tracking-widest">
            Order Online
          </Button>
        </div>
      )}
    </nav>
  )
}
