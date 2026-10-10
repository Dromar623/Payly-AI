import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Sample Audit', path: '/sample-audit' },
    { name: 'Book a Demo', path: '/book-demo' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/40' 
          : 'bg-zinc-950/60 backdrop-blur-lg border-b border-zinc-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Left */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-105">
              <img src="/logo.jpg" alt="Payly AI Logo" className="w-full h-full rounded-xl object-cover shadow-lg shadow-violet-500/20 ring-1 ring-white/10" />
              {/* Ping status dot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border-2 border-zinc-950"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-100">
                  Payly
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-md bg-gradient-to-r from-violet-600/30 to-cyan-500/30 text-cyan-300 border border-cyan-500/30 font-mono tracking-wider">
                  AI
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                Spend Defense
              </span>
            </div>
          </Link>

          {/* Navigation Links Center (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-indigo-600/20 to-cyan-600/30 border border-violet-500/40 rounded-full shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/product"
              className="px-3.5 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              How It Works
            </Link>

            <Link
              to="/book-demo"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-500 shadow-lg shadow-violet-600/25 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/10 group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/book-demo"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-violet-600/80 text-white border border-violet-400/30"
            >
              Demo
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              <div className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider mb-2">
                Navigation
              </div>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-violet-600/20 text-white border border-violet-500/40'
                        : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-violet-400' : 'text-zinc-600'}`} />
                    </>
                  )}
                </NavLink>
              ))}

              <div className="pt-4 mt-4 border-t border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-400 px-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>SOC 2 Type II Certified • 256-bit Encryption</span>
                </div>
                <Link
                  to="/book-demo"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 shadow-lg shadow-violet-600/25 border border-white/10"
                >
                  <span>Schedule Free Spend Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
