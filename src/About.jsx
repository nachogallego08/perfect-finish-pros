import { Link } from 'react-router-dom';

const values = [
  { icon: '🏆', title: 'Quality Without Compromise', desc: 'We hold every project to the same high standard, whether it\'s a small patch job or a full commercial buildout. Our reputation is built one wall at a time.' },
  { icon: '🤝', title: 'Reliability You Can Count On', desc: 'When we commit to a start date and a finish date, we mean it. Clear communication and on-time delivery are non-negotiables for our team.' },
  { icon: '❤️', title: 'Customer-First Mindset', desc: 'Your home is not just a job site — it\'s where you live. We treat every property with respect, clean up after ourselves, and check in throughout the process.' },
  { icon: '📐', title: 'Attention to Detail', desc: 'The details are where good contractors separate from great ones. We take the time to do it right, because corners cut now become problems tomorrow.' },
];

const stats = [
  { num: '10+', label: 'Years of Experience' },
  { num: '500+', label: 'Projects Completed' },
  { num: '6', label: 'Trades Mastered' },
  { num: '100%', label: 'Licensed & Insured' },
];

export default function About() {
  return (
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Who We Are</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            BUILT ON INTEGRITY.<br />
            <span className="text-orange-500">PROVEN BY RESULTS.</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Perfect Finish Pros LLC is a locally owned and operated home improvement company serving Savannah, GA and the surrounding area. We're tradespeople first — people who actually care about the work we produce.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-orange-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl sm:text-5xl font-black text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.num}</div>
                <div className="text-orange-100 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex flex-col items-center justify-center overflow-hidden">
              <div className="text-9xl">🏗️</div>
              <p className="text-neutral-600 mt-4 text-sm uppercase tracking-widest">Company Photo</p>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl bg-orange-500 flex flex-col items-center justify-center text-center shadow-2xl shadow-orange-500/40">
              <div className="text-3xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>10+</div>
              <div className="text-orange-100 text-xs font-semibold leading-tight mt-0.5">Years<br />Experience</div>
            </div>
          </div>

          <div>
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              STARTED WITH A TROWEL.<br />BUILT WITH PURPOSE.
            </h2>
            <div className="space-y-5 text-neutral-400 leading-relaxed">
              <p>
                Perfect Finish Pros LLC was founded by a team of skilled tradespeople who were tired of seeing homeowners settle for subpar work. We started with a single van, a commitment to quality, and a belief that every home deserves a professional finish — no matter the budget.
              </p>
              <p>
                Over the years, we've grown from a small drywall crew into a full-service home improvement company offering six trades under one roof. But our values haven't changed: we show up, we work hard, and we don't leave until the job is right.
              </p>
              <p>
                Today, we're proud to be one of the most trusted home improvement contractors in the Savannah area, with hundreds of completed projects and a reputation built entirely on word-of-mouth referrals.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Work With Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Mission</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              WHAT WE STAND FOR
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-orange-500/20 transition-all">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              LICENSED. INSURED. PROFESSIONAL.
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
              We take the responsibility of working in your home seriously. Every project is carried out by licensed tradespeople with full insurance coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🛡️', title: 'Fully Insured', desc: 'General liability and workers\' comp insurance on every job. Your property is protected.' },
              { icon: '📋', title: 'State Licensed', desc: 'We operate with all required state and local contractor licenses for your area.' },
              { icon: '⭐', title: 'Satisfaction Guarantee', desc: 'We stand behind our work. If you\'re not satisfied, we\'ll make it right — period.' },
            ].map((c) => (
              <div key={c.title} className="p-8 rounded-2xl border border-orange-500/20 bg-orange-500/5 text-center">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{c.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 pb-20">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative">
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              LET'S BUILD SOMETHING GREAT TOGETHER
            </h2>
            <p className="text-orange-100 mb-8">Reach out today for a free estimate on your next project.</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-white text-orange-600 font-black text-lg rounded-xl hover:bg-orange-50 transition-all hover:scale-105">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
