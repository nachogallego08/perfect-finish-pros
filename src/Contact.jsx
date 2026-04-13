import { useState } from 'react';

const services = [
  'Drywall Installation',
  'Drywall Repair',
  'Interior Painting',
  'Exterior Painting',
  'Demolition / Dump Services',
  'Masonry',
  'Carpentry',
  'Other / Not Sure',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            LET&apos;S TALK
            <br />
            <span className="text-orange-500">ABOUT YOUR PROJECT</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
            Free estimates, no obligation. Fill out the form below or contact us directly — we respond quickly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2
                className="text-2xl font-black text-white mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                CONTACT INFORMATION
              </h2>

              <div className="space-y-5">
                <a
                  href="tel:+15551234567"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-orange-500/30 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-semibold">Call Us Directly</p>
                    <p className="text-white font-bold text-lg">(843) 368-5085</p>
                    <p className="text-neutral-400 text-sm mt-0.5">Mon–Sat, 7AM–7PM</p>
                  </div>
                </a>

                <a
                  href="mailto:Perfectfinishpro26@gmail.com"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-orange-500/30 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-semibold">Email Us</p>
                    <p className="text-white font-semibold">Perfectfinishpro26@gmail.com</p>
                    <p className="text-neutral-400 text-sm mt-0.5">We reply within 24 hours</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/perfectfinishprosllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-orange-500/30 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth={2} />
                      <path strokeWidth={2} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-semibold">Instagram</p>
                    <p className="text-white font-semibold">@perfectfinishprosllc</p>
                    <p className="text-neutral-400 text-sm mt-0.5">Follow us and see our latest projects</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900 border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-semibold">Service Area</p>
                    <p className="text-white font-semibold">Savannah, GA & Surroundings</p>
                    <p className="text-neutral-400 text-sm mt-1">
                      Pooler · Richmond Hill · Hinesville · Rincon · Guyton · Statesboro
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-white/5 aspect-video bg-neutral-900 flex flex-col items-center justify-center gap-3">
              <div className="text-5xl">📍</div>
              <p className="text-neutral-500 text-sm">Savannah, GA & Surrounding Areas</p>
              <a
                href="https://maps.google.com/?q=Savannah,GA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 text-sm font-semibold underline underline-offset-2"
              >
                View on Google Maps →
              </a>
            </div>

            {/* Response time */}
            <div className="p-5 rounded-2xl border border-orange-500/20 bg-orange-500/5">
              <p className="text-orange-400 font-bold mb-1">⚡ Fast Response Guaranteed</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We typically respond to quote requests within a few hours during business hours. For urgent needs, call us directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-3xl bg-neutral-900 border border-white/5">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-5">✅</div>
                  <h3
                    className="text-3xl font-black text-white mb-3"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    MESSAGE SENT!
                  </h3>
                  <p className="text-neutral-400 text-lg mb-8">
                    Thank you, <span className="text-white font-semibold">{form.name}</span>! We&apos;ve received your request and will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', service: '', message: '' });
                    }}
                    className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    className="text-3xl font-black text-white mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    REQUEST A FREE ESTIMATE
                  </h2>
                  <p className="text-neutral-400 text-sm mb-8">All fields marked with * are required.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none"
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-neutral-800">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project — what you need done, approximate size, timeline, and anything else that's helpful."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-white font-black text-lg rounded-xl transition-all hover:scale-[1.02] shadow-xl shadow-orange-500/30 hover:shadow-orange-400/40"
                    >
                      Send My Request → Free Estimate
                    </button>

                    <p className="text-neutral-600 text-xs text-center">
                      By submitting this form, you agree to be contacted by Perfect Finish Pros LLC regarding your project.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
