'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';

// 임시 데이터
const pressItems = [
  {
    id: 1,
    title: '세강병원, 최신 MRI 장비 도입으로 진단 정확성 향상',
    thumbnail: '/images/press/press1.jpg',
    date: '2024.03.15',
    source: '의료신문'
  },
  {
    id: 2,
    title: '세강병원 척추센터, 신경외과 전문의 영입',
    thumbnail: '/images/press/press2.jpg',
    date: '2024.03.10',
    source: '데일리메디'
  },
  {
    id: 3,
    title: '세강병원, 지역사회 의료봉사활동 실시',
    thumbnail: '/images/press/press3.jpg',
    date: '2024.03.05',
    source: '헬스코리아'
  },
  {
    id: 4,
    title: '세강병원, 척추 내시경 수술 1000례 달성',
    thumbnail: '/images/press/press4.jpg',
    date: '2024.03.01',
    source: '메디컬타임즈'
  },
  {
    id: 5,
    title: '세강병원, 환자 중심 진료 시스템 구축',
    thumbnail: '/images/press/press5.jpg',
    date: '2024.02.28',
    source: '병원신문'
  },
  {
    id: 6,
    title: '세강병원 재활센터, 최신 치료장비 도입',
    thumbnail: '/images/press/press6.jpg',
    date: '2024.02.25',
    source: '메디칼뉴스'
  }
];

export default function PressPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPress = pressItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Header />
      <Menu />
      
      {/* Banner Section */}
      <div className="relative h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/info/info-vis.jpg"
            alt="언론보도 배경"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
            >
              <h1 className="text-white text-5xl font-bold mb-8">언론보도</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6 }}
            >
              <p className="text-white text-2xl font-medium">
                세강병원이 전하는<br />
                언론보도 정보를 알려드립니다.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">언론보도</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="제목으로 검색"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Press Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPress.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-blue-500 rounded-full">
                      {item.source}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                      자세히 보기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPress.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
} 