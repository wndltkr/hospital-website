'use client';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';

// 임시 데이터
const popupItems = [
  {
    id: 1,
    title: '3월 건강검진 이벤트',
    image: '/images/popup/popup1.jpg',
    date: '2024.03.15',
    category: '이벤트'
  },
  {
    id: 2,
    title: '척추 건강 강좌 안내',
    image: '/images/popup/popup2.jpg',
    date: '2024.03.10',
    category: '강좌'
  },
  {
    id: 3,
    title: '진료시간 변경 안내',
    image: '/images/popup/popup3.jpg',
    date: '2024.03.05',
    category: '공지'
  },
  {
    id: 4,
    title: '봄맞이 건강 상담의 날',
    image: '/images/popup/popup4.jpg',
    date: '2024.03.01',
    category: '이벤트'
  },
  {
    id: 5,
    title: '의료진 특별 세미나',
    image: '/images/popup/popup5.jpg',
    date: '2024.02.28',
    category: '세미나'
  },
  {
    id: 6,
    title: '새해 건강검진 프로모션',
    image: '/images/popup/popup6.jpg',
    date: '2024.02.25',
    category: '이벤트'
  }
];

export default function PopupPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPopups = popupItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      {/* Banner Section */}
      <PageBanner
        title="이달의 팝업"
        description={[
          "세강병원에서 다양한",
          "소식을 팝업으로 알려드립니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">이달의 소식</h2>
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

          {/* Popup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPopups.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
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
          {filteredPopups.length === 0 && (
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