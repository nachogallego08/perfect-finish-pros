import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
              P
            </div>
            <div className="leading-tight">
              <div className="font-black text-white tracking-tight text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '-0.01em' }}>
                PERFECT FINISH
              </div>
              <div className="text-orange-400 text-xs font-semibold tracking-[0.18em] uppercase -mt-0.5">
                Pros LLC
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive(to)
                    ? 'text-orange-400 bg-orange-500/10'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-400/40 hover:scale-105"
            >
              Get Free Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-neutral-950/98 backdrop-blur-md border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                isActive(to) ? 'text-orange-400 bg-orange-500/10' : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 px-4 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm rounded-lg text-center transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
