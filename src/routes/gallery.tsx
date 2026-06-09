import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    title: 'Alpine Serenity',
    category: 'Landscape',
    w: 800, h: 600,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
    title: 'City at Dusk',
    category: 'Urban',
    w: 800, h: 1067,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9',
    title: 'Fox in the Wild',
    category: 'Nature',
    w: 800, h: 534,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    title: 'Mountain Mist',
    category: 'Landscape',
    w: 800, h: 533,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3',
    title: 'Glass Tower',
    category: 'Architecture',
    w: 800, h: 1200,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    title: 'Forest Light',
    category: 'Nature',
    w: 800, h: 533,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
    title: 'Mountain Lake',
    category: 'Landscape',
    w: 800, h: 600,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e',
    title: 'Urban Geometry',
    category: 'Architecture',
    w: 800, h: 534,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856',
    title: 'Coastal Waves',
    category: 'Nature',
    w: 800, h: 533,
  },
]

const categories = ['All', 'Landscape', 'Urban', 'Architecture', 'Nature']

function netlifyImage(src: string, w: number, h?: number, fit = 'cover') {
  const params = new URLSearchParams({ url: src, w: String(w), fm: 'webp', q: '82' })
  if (h) params.set('h', String(h))
  params.set('fit', fit)
  return `/.netlify/images?${params.toString()}`
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-foreground mb-3">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            A visual journey through landscapes, urban spaces, and natural wonders.
            All images optimized via Netlify Image CDN.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="gallery-item break-inside-avoid rounded-xl overflow-hidden border border-border/40 cursor-pointer group relative"
              onClick={() => setLightbox(item)}
            >
              <img
                src={netlifyImage(item.src, 600)}
                alt={item.title}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.category}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={netlifyImage(lightbox.src, 1200, 900, 'contain')}
              alt={lightbox.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-semibold text-lg">{lightbox.title}</p>
              <p className="text-white/60 text-sm">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
