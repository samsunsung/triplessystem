
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <div className="text-[#41AED9] font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Core Solutions</div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            Comprehensive <br />Bio-Computing <span className="italic text-gray-500 text-3xl md:text-5xl">Expertise</span>
          </h2>
        </div>
        <p className="text-gray-400 font-light max-w-sm text-sm leading-relaxed">
          유전체 연구의 시작부터 상용화 서비스 구축까지, 
          바이오 데이터 사이언스의 전 영역을 아우르는 트리플에스만의 기술력을 경험하세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id}
            className="group relative p-10 glass-panel rounded-[2rem] transition-all duration-700 hover:-translate-y-4 hover:bg-white/[0.04] overflow-hidden"
          >
            {/* Decorative background number */}
            <div className="absolute -top-4 -right-4 text-9xl font-serif font-bold text-white/[0.02] pointer-events-none group-hover:text-[#41AED9]/5 transition-colors duration-700">
              0{index + 1}
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[#41AED9]/20 to-[#41AED9]/5 flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#41AED9] transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 h-12 overflow-hidden">
                {service.description}
              </p>
              
              <div className="space-y-4 pt-6 border-t border-white/5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#41AED9] mr-3 opacity-40 group-hover:opacity-100 transition-opacity"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#41AED9] transition-all duration-700 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
