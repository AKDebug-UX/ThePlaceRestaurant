"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import type React from "react"

export function ContactSection() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly!",
    })
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-20 max-w-4xl mx-auto">
      <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6 block">Contact</span>
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter italic">Ask us anything.</h2>
        <div className="text-muted-foreground">
          <p className="mb-6">
            Are you a company or brand seeking catering services? A food enthusiast looking to join our team? Let's
            connect.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 uppercase tracking-widest">
            Get in Touch
          </Button>
        </div>
      </div>

      <div className="border-t border-primary/20 pt-16">
        <h3 className="text-2xl font-bold italic mb-8">
          Ready to experience our services? <br /> Let's start planning.
        </h3>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                First Name
              </label>
              <Input className="border-0 border-b border-primary/20 bg-transparent rounded-none px-0 py-4 focus:ring-0 focus:border-primary transition-colors h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
              <Input className="border-0 border-b border-primary/20 bg-transparent rounded-none px-0 py-4 focus:ring-0 focus:border-primary transition-colors h-12" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</label>
            <Input
              type="email"
              className="border-0 border-b border-primary/20 bg-transparent rounded-none px-0 py-4 focus:ring-0 focus:border-primary transition-colors h-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Message</label>
            <Textarea className="border-0 border-b border-primary/20 bg-transparent rounded-none px-0 py-4 focus:ring-0 focus:border-primary transition-colors min-h-[100px] resize-none" />
          </div>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-7 text-lg uppercase tracking-widest"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}
