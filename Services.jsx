import { Link } from 'react-router-dom';

const services = [
  {
    id: 'drywall-installation',
    emoji: '🧱',
    title: 'Drywall Installation',
    subtitle: 'New Construction & Full Remodels',
    description:
      'Whether you\'re building from the ground up or finishing a renovation, our drywall installation team delivers smooth, level walls ready for the perfect finish. We work with all drywall types and thicknesses, ensuring your walls are structurally sound, energy-efficient, and beautifully finished.',
    bullets: [
      'New construction framing and hanging',
      'Basement and room conversions',
      'Moisture-resistant drywall for bathrooms & kitchens',
      'Soundproofing drywall solutions',
      'Fire-rated drywall installation',
      'Smooth and texture finish options',
      'Commercial and residential projects',
    ],
  },
  {
    id: 'drywall-repair',
    emoji: '🔧',
    title: 'Drywall Repair',
    subtitle: 'Seamless Patching & Restoration',
    description:
      'Cracks, holes, water damage — no drywall issue is too big or too small for our team. We specialize in repairs that blend seamlessly with your existing wall, so no one will ever know it was there. We handle everything from nail pops to full panel replacements.',
    bullets: [
      'Small hole and nail pop repairs',
      'Large section patching and replacement',
      'Water and moisture damage restoration',
      'Crack repair and prevention',
      'Ceiling repairs and sagging drywall',
      'Texture matching for seamless blends',
      'Insurance claim work accepted',
    ],
  },
  {
    id: 'painting',
    emoji: '🎨',
    title: 'Interior & Exterior Painting',
    subtitle: 'Premium Coatings. Lasting Protection.',
    description:
      'A fresh coat of paint is the fastest way to transform a space — and our painters do it right. We use premium paints, proper surface preparation, and meticulous technique to deliver smooth, even coverage that lasts for years. Inside or outside, we make your property look its absolute best.',
    bullets: [
      'Interior walls, ceilings, and trim',
      'Exterior siding, fascia, and shutters',
      'Full surface prep, patching, and priming',
      'Cabinet and door refinishing',
      'Deck and fence staining',
      'Commercial painting services',
      'Color consultation available',
    ],
  },
  {
    id: 'demolition',
    emoji: '🏗️',
    title: 'Demolition / Dump Services',
    subtitle: 'Efficient Teardown. Clean Removal.',
    description:
      'Safe, efficient demolition is the foundation of a great renovation. Our team handles everything from selective interior demo to full room teardowns, with complete debris removal and responsible disposal. We leave your site clean and ready for the next phase of your project.',
    bullets: [
      'Interior selective demolition',
      'Wall and partition removal',
      'Flooring and tile teardown',
      'Debris hauling and dumpster services',
      'Kitchen and bathroom gut-outs',
      'Garage and shed demolition',
      'Same-day dump services available',
    ],
  },
  {
    id: 'masonry',
    emoji: '🪨',
    title: 'Masonry',
    subtitle: 'Built to Last. Crafted to Impress.',
    description:
      'Our masonry work combines traditional craftsmanship with modern technique to create structures that are as durable as they are beautiful. From new brick installations to restoration work, we handle every masonry project with precision and care.',
    bullets: [
      'Brick and block installation',
      'Stone veneer and natural stone work',
      'Concrete work and flatwork',
      'Retaining walls and landscape borders',
      'Tuckpointing and mortar repair',
      'Chimney repair and rebuilding',
      'Steps, patios, and walkways',
    ],
  },
  {
    id: 'carpentry',
    emoji: '🪚',
    title: 'Carpentry',
    subtitle: 'Custom Woodwork. Precision Craftsmanship.',
    description:
      'From structural framing to fine finish carpentry, our carpenters bring skill and attention to detail that transforms raw lumber into beautiful, functional spaces. We handle everything from door installations and trim work to custom built-ins and cabinetry.',
    bullets: [
      'Interior and exterior trim work',
      'Door and window installation',
      'Custom shelving and built-ins',
      'Crown molding and baseboard installation',
      'Deck framing and construction',
      'Structural framing and repairs',
      'Closet organization systems',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            OUR SERVICES
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From drywall to demolition, we bring professional-grade results to every trade. One team, total accountability.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-start p-8 md:p-10 rounded-3xl bg-neutral-900 border border-white/5 hover:border-orange-500/20 transition-all"
            >
              <div>
                <div className="text-5xl mb-4">{s.emoji}</div>
                <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">{s.subtitle}</p>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {s.title}
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-6">{s.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
                >
                  Request a Quote →
                </Link>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-600 uppercase tracking-widest mb-4 font-semibold">What's included</p>
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-neutral-300 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              NOT SURE WHAT YOU NEED?
            </h2>
            <p className="text-orange-100 mb-8 text-lg">
              Call us or send a message — we'll assess your project and give you an honest recommendation and free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-3 bg-white text-orange-600 font-black rounded-xl hover:bg-orange-50 transition-all">
                Contact Us Today
              </Link>
              <a href="tel:+15551234567" className="px-8 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all border border-white/20">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
