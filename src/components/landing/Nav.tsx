import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Benefits', href: '#benefits' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0B]/80 backdrop-blur-2xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[76px]">
          <a href="#hero" className="group flex items-center gap-2.5">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tight">RB</span>
              </div>
            </div>
            <span className="text-white font-heading font-semibold tracking-tight">RB Payroll</span>
          </a>
          <div className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="relative text-sm text-white/60 hover:text-white transition-colors group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Link to="/login" className="relative overflow-hidden px-5 py-2 text-sm font-medium text-white rounded-lg group">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative">Sign In</span>
            </Link>
          </div>
          <button className="md:hidden text-white/80" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden bg-[#0A0A0B]/95 backdrop-blur-2xl border-b border-white/[0.06]">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="block text-white/70" onClick={() => setMobileOpen(false)}>
                {link.name}
              </a>
            ))}
            <Link to="/login" className="block w-full text-center px-5 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg">
              Sign In
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Nav;
