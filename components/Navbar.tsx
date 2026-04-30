import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          JP<span className="text-brand-green">.Serrado</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#creative-portfolio" className="hover:text-white transition-colors">Work</a>
          <a href="#work" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <a href="#contact" className="hidden md:block bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-green transition-colors transform hover:-translate-y-0.5">
          BOOK ME
        </a>
      </div>
    </nav>
  );
};