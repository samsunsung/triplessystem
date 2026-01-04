
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a0f] selection:bg-[#41AED9]/30 selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <section id="services" className="relative z-10 pt-32 pb-24">
            <Services />
          </section>

          <section id="technology" className="relative z-10 py-32 bg-[#080d14]/50">
            <TechStack />
          </section>

          <section id="contact" className="relative z-10 py-40 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
              <div className="inline-block px-4 py-1 mb-8 rounded-full border border-[#41AED9]/30 bg-[#41AED9]/5 text-[#41AED9] text-[10px] uppercase tracking-[0.3em] font-bold">
                Get in Touch
              </div>
              <h2 className="text-5xl md:text-7xl font-serif mb-10 text-white leading-tight">
                Ready to Decode <br />
                <span className="italic text-gradient">Your Biological Data?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                트리플에스 시스템은 데이터의 본질을 꿰뚫는 통찰력으로 
                당신의 연구와 비즈니스를 한 단계 더 진화시킵니다.
              </p>
              <button className="group relative px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10">프로젝트 문의하기</span>
                <div className="absolute inset-0 bg-[#41AED9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#41AED9]/10 blur-[100px] rounded-full"></div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
