
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0 scale-110 md:scale-100">
        <iframe 
          src='https://my.spline.design/cutecomputerfollowcursor-zsin4wOJDakhb40vmp4tci5B/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="pointer-events-auto"
          title="TripleS 3D Interface"
        ></iframe>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-3xl pt-20">
          <div className="inline-flex items-center space-x-3 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-float">
            <div className="w-2 h-2 rounded-full bg-[#41AED9] animate-pulse"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">
              Smart Science Service System
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[1.1] mb-10 pointer-events-auto">
            Innovating <br />
            <span className="text-gradient italic">Bio-Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-light pointer-events-auto">
            유전체 분석 파이프라인부터 지능형 LIMS까지, 
            TripleS System은 복잡한 생물정보 데이터를 
            가장 직관적인 솔루션으로 시각화합니다.
          </p>
          
          <div className="flex flex-wrap gap-6 pointer-events-auto">
            <button className="px-10 py-4 bg-[#41AED9] text-white font-bold rounded-full hover:bg-[#328ec0] transition-all shadow-[0_0_30px_rgba(65,174,217,0.3)]">
              시작하기
            </button>
            <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
              기술 소개서
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/40"></div>
        <span className="text-[10px] uppercase tracking-widest text-white font-medium">Scroll</span>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050a0f] to-transparent z-1"></div>
    </section>
  );
};

export default Hero;
