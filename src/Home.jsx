import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const services = [
  { icon: '🧱', title: 'Drywall Installation', desc: 'Complete drywall hanging and finishing for new construction and remodels.' },
  { icon: '🔧', title: 'Drywall Repair', desc: 'Seamless patching and repairs — from small holes to full wall sections.' },
  { icon: '🎨', title: 'Interior & Exterior Painting', desc: 'Premium paint work that protects and transforms every surface.' },
  { icon: '🏗️', title: 'Demolition / Dump', desc: 'Safe, efficient teardown and haul-away with zero mess left behind.' },
  { icon: '🪨', title: 'Masonry', desc: 'Expert brickwork, stone, and concrete services built to last a lifetime.' },
  { icon: '🪚', title: 'Carpentry', desc: 'Custom trim, framing, doors, and woodwork crafted with precision.' },
];

const whyUs = [
  { icon: '🛡️', title: 'Licensed & Insured', desc: 'Fully licensed and insured for your complete peace of mind on every job.' },
  { icon: '⚡', title: 'Fast & Reliable', desc: 'We show up on time, work efficiently, and finish when we say we will.' },
  { icon: '✨', title: 'High-Quality Finish', desc: 'We don\'t cut corners. Every surface we touch is treated with craftsmanship.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality at fair, transparent prices — no hidden fees, ever.' },
];

const testimonials = [
  { name: 'Marcus T.', location: 'Savannah, GA', stars: 5, text: 'Perfect Finish Pros transformed our basement. The drywall work was flawless — you would never know it was new. Professional team, clean work site, and done on schedule.' },
  { name: 'Linda R.', location: 'Pooler, GA', stars: 5, text: 'We hired them for a full interior paint job and couldn\'t be happier. The attention to detail was incredible. They even protected all our furniture. Highly recommend!' },
  { name: 'Carlos M.', location: 'Richmond Hill, GA', stars: 5, text: 'Had a demo and drywall installation job that two other companies turned down. Perfect Finish Pros handled it without breaking a sweat. Outstanding communication throughout.' },
  { name: 'Angela B.', location: 'Hinesville, GA', stars: 5, text: 'The masonry work on our front steps was beautiful. You can tell these guys actually take pride in their craft. We\'ve already booked them for our deck project.' },
];

const projects = [
  { label: 'Drywall Installation', color: 'from-blue-900 to-neutral-800', emoji: '🏠' },
  { label: 'Interior Painting', color: 'from-orange-900 to-neutral-800', emoji: '🎨' },
  { label: 'Masonry Work', color: 'from-stone-700 to-neutral-800', emoji: '🪨' },
  { label: 'Drywall Repair', color: 'from-zinc-700 to-neutral-800', emoji: '🔧' },
  { label: 'Carpentry', color: 'from-amber-900 to-neutral-800', emoji: '🪚' },
  { label: 'Exterior Painting', color: 'from-sky-900 to-neutral-800', emoji: '🏡' },
];

export default function Home() {
  const servicesRef = useReveal();
  const whyRef = useReveal();
  const projectsRef = useReveal();
  const testimonialsRef = useReveal();

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(249,115,22,0.15),transparent)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.015) 79px, rgba(255,255,255,0.015) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.015) 79px, rgba(255,255,255,0.015) 80px)`
        }} />
        {/* Diagonal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-sm font-semibold tracking-wide mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Serving Savannah, GA & Surrounding Areas
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            PROFESSIONAL
            <span className="block text-orange-500">DRYWALL, PAINTING</span>
            <span className="block">&amp; HOME SERVICES</span>
            <span className="block text-neutral-400 text-4xl sm:text-5xl md:text-6xl mt-2">YOU CAN TRUST.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Quality craftsmanship, reliable service, and results that speak for themselves. From drywall to demolition — we handle it all with the skill your home deserves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-400/40 hover:scale-105 hover:-translate-y-0.5"
            >
              Get a Free Quote →
            </Link>
            <a
              href="tel:+15551234567"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-lg rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              📞 Call Now: (843)368-5085 
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14 text-sm text-neutral-500">
            <div className="flex items-center gap-2"><span className="text-orange-500">✓</span> Licensed & Insured</div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2"><span className="text-orange-500">✓</span> Free Estimates</div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2"><span className="text-orange-500">✓</span> Satisfaction Guaranteed</div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2"><span className="text-orange-500">✓</span> 10+ Years Experience</div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────── */}
      <section className="py-24 bg-neutral-900" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              FULL-SERVICE HOME IMPROVEMENT
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
              One contractor. Every trade. We bring professional results to every corner of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group p-7 rounded-2xl bg-neutral-950 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 mt-5 text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors"
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────── */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden" ref={whyRef}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(249,115,22,0.06),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Why Us</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                THE STANDARD OTHER<br />
                <span className="text-orange-500">CONTRACTORS</span> SET<br />
                ASIDE — WE KEEP.
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                We built Perfect Finish Pros on a simple belief: every homeowner deserves the same quality of work, every time. That means showing up when we say, finishing strong, and leaving your space cleaner than we found it.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-orange-500/40 text-white font-semibold rounded-xl transition-all hover:bg-orange-500/5"
              >
                Our Story →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((w) => (
                <div key={w.title} className="p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-orange-500/20 transition-all">
                  <div className="text-3xl mb-3">{w.icon}</div>
                  <h3 className="text-white font-bold mb-2">{w.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Preview ──────────────────────── */}
      <section className="py-24 bg-neutral-900" ref={projectsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Portfolio</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                RECENT PROJECTS
              </h2>
            </div>
            <Link to="/projects" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors whitespace-nowrap">
              View All Work →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div
                key={p.label}
                className={`group relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${p.color} overflow-hidden border border-white/5 cursor-pointer`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">{p.emoji}</div>
                  <div className="text-white/30 text-xs uppercase tracking-widest">Project Photo</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-lg">{p.label}</p>
                  <p className="text-neutral-300 text-sm">Perfect Finish Pros LLC</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────── */}
      <section className="py-24 bg-neutral-950" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Reviews</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              WHAT OUR CLIENTS SAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-orange-500/20 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-neutral-300 leading-relaxed mb-6 text-[15px]">"{t.text}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-neutral-500 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────── */}
      <section className="py-24 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)`
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-orange-100 text-xl mb-10 max-w-xl mx-auto">
            Get your free, no-obligation estimate today. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-white text-orange-600 font-black text-lg rounded-xl hover:bg-orange-50 transition-all hover:scale-105 shadow-xl"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+15551234567"
              className="px-10 py-4 bg-orange-600 text-white font-black text-lg rounded-xl hover:bg-orange-700 transition-all border border-white/20"
            >
              (843)368-5085 
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .reveal-section { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .revealed .reveal-section, .revealed { opacity: 1 !important; transform: translateY(0) !important; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease both; }
      `}</style>
    </div>
  );
}
