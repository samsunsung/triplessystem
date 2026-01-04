
import React from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#050a0f]/60 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="text-2xl font-serif font-bold tracking-tighter text-white">
              <span className="text-[#41AED9]">S</span>SS
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#41AED9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase">System</div>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#41AED9] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-8 py-2.5 bg-white/5 border border-white/10 hover:border-[#41AED9]/50 text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all hover:bg-white/10">
            Consultation
          </button>
        </div>

        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
