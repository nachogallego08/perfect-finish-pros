export default function Gallery() {
  const images = [
    '/gallery/Image 1.jpeg',
    '/gallery/image 2.jpeg',
    '/gallery/image 3.jpeg',
    '/gallery/image 4.jpeg',
    '/gallery/image 5.jpeg',
    '/gallery/image 6.jpeg',
    '/gallery/image 7.jpeg',
    '/gallery/image 8.jpeg',
    '/gallery/image 9.jpeg',
    '/gallery/image 10.jpeg',
    '/gallery/image 11.jpeg',
    '/gallery/image 12.jpeg',
    '/gallery/image 13.jpeg',
    '/gallery/image 14.jpeg',
    '/gallery/image 15.jpeg',
  ]

  return (
    <section className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Gallery
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore some of our recent painting and finishing projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={image}
                alt={`Perfect Finish Pros project ${index + 1}`}
                className="w-full h-72 object-cover hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
