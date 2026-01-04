
import React from 'react';
import { ServiceItem, NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Technology', href: '#technology' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: '생물정보학 분석 및 연구',
    description: 'Python/R 기반의 고도화된 프로그래밍 기술을 활용하여 유전체·전사체 데이터에서 유의미한 연구 결과를 도출합니다.',
    features: [
      '유전체·전사체 데이터 분석 파이프라인 수행',
      '통계 모델링 및 맞춤형 알고리즘 구현',
      '학술 논문 공저자 참여 및 학술적 전문성 제공'
    ],
    icon: '🧬'
  },
  {
    id: 2,
    title: '대규모 NGS 자동화 개발',
    description: '복잡하고 방대한 NGS(Next-Generation Sequencing) 데이터를 빠르고 정확하게 처리하는 최적화된 엔진을 구축합니다.',
    features: [
      '대용량 데이터 처리용 자동화 파이프라인',
      '엔드투엔드(QC-분석-통계) 통합 프로세스',
      '분석 효율 극대화를 위한 전용 소프트웨어'
    ],
    icon: '⚙️'
  },
  {
    id: 3,
    title: '국가기관급 분석 플랫폼',
    description: '공공기관 및 국가 프로젝트를 위한 대규모 데이터 관리 및 직관적인 웹 기반 분석 서비스를 제공합니다.',
    features: [
      '대용량 생물정보 데이터 기반 분석 도구 개발',
      'Django/FastAPI 기반의 견고한 백엔드 아키텍처',
      '실시간 시각화 및 인터랙티브 UI/UX 설계'
    ],
    icon: '🏛️'
  },
  {
    id: 4,
    title: '실험 보고서 자동화 솔루션',
    description: '실험 Raw Data의 전처리부터 최종 보고서(PDF/Excel) 생성까지 전 과정을 자동화하여 업무 효율을 높입니다.',
    features: [
      '실험 Raw Data 정제 및 가공 로직 개발',
      '멀티 포맷(PDF/Excel) 보고서 자동 생성',
      '반복 업무 프로세스 혁신 및 생산성 강화'
    ],
    icon: '📊'
  },
  {
    id: 5,
    title: 'LIMS 통합 정보 관리',
    description: '실험실의 워크플로우를 완벽하게 제어하고 데이터 무결성을 보장하는 통합 관리 시스템을 설계합니다.',
    features: [
      '실험실 Workflow 반영 업무 프로세스 설계',
      '데이터 무결성(Integrity) 확보 DB 구조 설계',
      '사용자 교육 및 전주기 운영 안정성 지원'
    ],
    icon: '🔬'
  }
];

export const COLORS = {
  primary: '#033E8C',
  secondary: '#41AED9',
  dark: '#050a0f',
  accent: '#AABF5E',
  background: '#050a0f'
};
