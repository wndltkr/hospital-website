'use client';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';

// 임시 데이터
const healthVideos = [
  {
    id: 1,
    title: '올바른 자세로 예방하는 거북목 증후군',
    thumbnail: '/images/health/health1.jpg',
    date: '2024.03.15',
    views: 245,
    category: '자세교정'
  },
  {
    id: 2,
    title: '허리 건강을 위한 스트레칭 가이드',
    thumbnail: '/images/health/health2.jpg',
    date: '2024.03.10',
    views: 312,
    category: '운동'
  },
  {
    id: 3,
    title: '목디스크 예방을 위한 생활 수칙',
    thumbnail: '/images/health/health3.jpg',
    date: '2024.03.05',
    views: 189,
    category: '생활수칙'
  },
  {
    id: 4,
    title: '척추 건강을 위한 올바른 걷기 방법',
    thumbnail: '/images/health/health4.jpg',
    date: '2024.03.01',
    views: 267,
    category: '운동'
  },
  {
    id: 5,
    title: '사무직 직장인을 위한 허리 스트레칭',
    thumbnail: '/images/health/health5.jpg',
    date: '2024.02.28',
    views: 198,
    category: '운동'
  },
  {
    id: 6,
    title: '수면 자세가 척추 건강에 미치는 영향',
    thumbnail: '/images/health/health6.jpg',
    date: '2024.02.25',
    views: 276,
    category: '생활수칙'
  }
];

export default function HealthInfoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredVideos = healthVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      {/* Banner Section */}
      <PageBanner
        title="건강정보"
        description={[
          "세강병원이 전하는 정보",
          "궁금한 정보를 풀어드립니다"
        ]}
        backgroundImage="/images/info/info-vis.jpg"
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">건강정보 영상</h2>
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

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{video.date}</span>
                    <span>조회수 {video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredVideos.length === 0 && (
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