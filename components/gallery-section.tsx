import Image from "next/image"

export function GallerySection() {
  return (
    <section className="py-12 bg-white/30">
      <div className="grid grid-cols-2 md:grid-cols-4 h-[400px]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative h-full overflow-hidden group">
            <Image
              src={`/restaurant-food-shot-.jpg?height=800&width=600&query=restaurant+food+shot+${i}`}
              alt={`Gallery Image ${i}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
