export default function Gallery() {
  const images = [
    '/gallery/image-1.jpeg',
    '/gallery/image-2.jpeg',
    '/gallery/image-3.jpeg',
    '/gallery/image-4.jpeg',
    '/gallery/image-5.jpeg',
    '/gallery/image-6.jpeg',
    '/gallery/image-7.jpeg',
    '/gallery/image-8.jpeg',
    '/gallery/image-9.jpeg',
    '/gallery/image-10.jpeg',
    '/gallery/image-11.jpeg',
    '/gallery/image-12.jpeg',
    '/gallery/image-13.jpeg',
    '/gallery/image-14.jpeg',
    '/gallery/image-15.jpeg',
  ]

  return (
    <section className="bg-neutral-950 text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our Work
          </p>
          <h1
            className="text-4xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Gallery
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto mt-4 text-base md:text-lg">
            Take a look at some of our recent painting and finishing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg"
            >
              <img
                src={image}
                alt={`Perfect Finish Pros project ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
