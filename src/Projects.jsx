import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Drywall', 'Painting', 'Masonry', 'Carpentry', 'Demolition'];

const projects = [
  { category: 'Drywall', title: 'Full Basement Drywall', location: 'Savannah, GA', emoji: '🧱', color: 'from-blue-950 via-blue-900 to-neutral-800', tag: 'Installation' },
  { category: 'Painting', title: 'Modern Interior Repaint', location: 'Pooler, GA', emoji: '🎨', color: 'from-orange-950 via-orange-900 to-neutral-800', tag: 'Interior' },
  { category: 'Masonry', title: 'Front Porch Stonework', location: 'Richmond Hill, GA', emoji: '🪨', color: 'from-stone-800 via-stone-700 to-neutral-800', tag: 'New Build' },
  { category: 'Drywall', title: 'Water Damage Repair', location: 'Savannah, GA', emoji: '🔧', color: 'from-zinc-800 via-zinc-700 to-neutral-800', tag: 'Repair' },
  { category: 'Painting', title: 'Exterior House Paint', location: 'Hinesville, GA', emoji: '🏡', color: 'from-sky-950 via-sky-900 to-neutral-800', tag: 'Exterior' },
  { category: 'Carpentry', title: 'Custom Built-In Shelving', location: 'Savannah, GA', emoji: '🪚', color: 'from-amber-950 via-amber-900 to-neutral-800', tag: 'Custom' },
  { category: 'Demolition', title: 'Kitchen Gut-Out Demo', location: 'Pooler, GA', emoji: '🏗️', color: 'from-red-950 via-red-900 to-neutral-800', tag: 'Demolition' },
  { category: 'Drywall', title: 'New Construction Hang', location: 'Savannah, GA', emoji: '🏠', color: 'from-indigo-950 via-indigo-900 to-neutral-800', tag: 'New Build' },
  { category: 'Masonry', title: 'Retaining Wall Install', location: 'Guyton, GA', emoji: '🧱', color: 'from-teal-950 via-teal-900 to-neutral-800', tag: 'Landscape' },
  { category: 'Painting', title: 'Commercial Office Suite', location: 'Savannah, GA', emoji: '🏢', color: 'from-violet-950 via-violet-900 to-neutral-800', tag: 'Commercial' },
  { category: 'Carpentry', title: 'Crown Molding & Trim', location: 'Richmond Hill, GA', emoji: '🪵', color: 'from-yellow-950 via-yellow-900 to-neutral-800', tag: 'Finish Work' },
  { category: 'Drywall', title: 'Ceiling Texture Match', location: 'Rincon, GA', emoji: '✨', color: 'from-emerald-950 via-emerald-900 to-neutral-800', tag: 'Repair' },
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Work</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            COMPLETED PROJECTS
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every project is a promise kept. Browse our portfolio and see the quality we bring to homes across the Savannah area.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 border-b border-white/5 sticky top-20 bg-neutral-950/95 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <div
                key={`${p.title}-${p.location}`}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10"
              >
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
                {/* Grid texture */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.3) 19px, rgba(255,255,255,0.3) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255,255,255,0.3) 19px, rgba(255,255,255,0.3) 20px)`
                }} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{p.emoji}</div>
                  <div className="text-center">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white/60 text-xs mb-2 font-medium">{p.tag}</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-base leading-tight">{p.title}</p>
                  <p className="text-neutral-300 text-xs mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {p.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-neutral-600">No projects in this category yet — check back soon!</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-neutral-900 border border-white/5">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            READY TO ADD YOUR PROJECT TO OUR PORTFOLIO?
          </h2>
          <p className="text-neutral-400 mb-8">
            Contact us today for a free estimate. We'd love to show you what Perfect Finish Pros can do for your home.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-orange-500 hover:bg-orange-400 text-white font-black text-lg rounded-xl transition-all hover:scale-105 shadow-xl shadow-orange-500/30"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
