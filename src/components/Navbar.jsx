'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* ব্র্যান্ড লোগো */}
        <a href="#home" className="text-xl font-black tracking-tighter text-white uppercase group">
          PORTFOLIO<span className="text-neon-cyan group-hover:animate-pulse">.</span>
        </a>

        {/* গ্লাস-মরফিজম ডেক্সটপ মেনু */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-md">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* সিটিএ অ্যাকশন বাটন */}
        <a 
          href="https://wa.link/zncqss" 
          className="px-6 py-2.5 rounded-full border border-neon-cyan/30 text-neon-cyan font-bold text-[10px] uppercase tracking-widest hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-500"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  );
}