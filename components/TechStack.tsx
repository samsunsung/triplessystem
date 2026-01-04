
import React from 'react';

const TechStack: React.FC = () => {
  const techs = [
    { name: 'Python', category: 'Analysis & Backend' },
    { name: 'R', category: 'Statistics' },
    { name: 'Django', category: 'Web Framework' },
    { name: 'FastAPI', category: 'Backend API' },
    { name: 'React', category: 'Frontend' },
    { name: 'NGS Pipelines', category: 'Bio-Computing' },
    { name: 'MariaDB', category: 'Data Integrity' },
    { name: 'AWS/Cloud', category: 'Infrastructure' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-[#41AED9] font-semibold tracking-widest uppercase text-xs">Our Arsenal</span>
          <h2 className="text-4xl font-serif font-bold text-white mt-4">
            Advanced Technology for Advanced Science
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-xs md:text-right">
          우리는 가장 안정적이고 최신의 기술 스택을 사용하여 실험실의 효율성을 극대화합니다.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techs.map((tech) => (
          <div key={tech.name} className="p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors bg-white/5">
            <div className="text-white font-semibold mb-1">{tech.name}</div>
            <div className="text-[10px] text-[#41AED9] uppercase tracking-wider">{tech.category}</div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-[#033E8C]/20 to-[#41AED9]/10 border border-white/5 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold text-white mb-2">대용량 데이터 처리가 필요하신가요?</h3>
          <p className="text-gray-400">NGS 분석 파이프라인부터 클라우드 분석 환경 구축까지 지원합니다.</p>
        </div>
        <button className="px-8 py-3 bg-[#41AED9] text-white rounded-full font-bold hover:brightness-110 transition-all">
          기술 상담 예약
        </button>
      </div>
    </div>
  );
};

export default TechStack;
