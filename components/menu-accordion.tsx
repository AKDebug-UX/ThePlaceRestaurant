"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const menuItems = [
  {
    category: "Signature Rice",
    items: [
      { name: "The Place Jollof Rice", price: "₦2,500", desc: "Our legendary spicy jollof served with plantain." },
      { name: "Special Prawn Rice", price: "₦4,500", desc: "Wok-fired rice with fresh prawns and vibrant veggies." },
    ],
  },
  {
    category: "Stews & Proteins",
    items: [
      { name: "Beef Stew", price: "₦1,800", desc: "Slow-cooked beef in a rich tomato and pepper base." },
      { name: "Boiled Eggs", price: "₦400", desc: "The perfect protein addition to any meal." },
    ],
  },
  {
    category: "Comfort Foods",
    items: [
      { name: "Yam & Egg Sauce", price: "₦3,000", desc: "Fluffy boiled yam with a spicy garden egg sauce." },
      { name: "Pasta Delight", price: "₦2,800", desc: "Italian inspired, Nigerian spiced pasta." },
    ],
  },
]

export function MenuAccordion() {
  return (
    <div id="menu" className="w-full max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 italic text-primary">Featured Menu</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {menuItems.map((group, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-primary/20 rounded-2xl px-6 bg-white/50">
            <AccordionTrigger className="text-xl md:text-2xl font-semibold py-8 hover:no-underline hover:text-accent">
              {group.category}
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <div className="space-y-6">
                {group.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-start gap-4 border-b border-primary/5 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-primary italic">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                    <span className="font-bold text-accent">{item.price}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
