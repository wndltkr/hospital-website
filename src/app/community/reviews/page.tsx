'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';

// 임시 데이터
const videoReviews = [
  {
    id: 1,
    title: '목디스크 치료 후기 - 김OO 환자',
    thumbnail: '/images/reviews/review1.jpg',
    date: '2024.03.15',
    views: 128
  },
  {
    id: 2,
    title: '척추관협착증 수술 후기 - 이OO 환자',
    thumbnail: '/images/reviews/review2.jpg',
    date: '2024.03.10',
    views: 256
  },
  {
    id: 3,
    title: '허리디스크 치료 후기 - 박OO 환자',
    thumbnail: '/images/reviews/review3.jpg',
    date: '2024.03.05',
    views: 312
  },
  {
    id: 4,
    title: '어깨 통증 치료 후기 - 최OO 환자',
    thumbnail: '/images/reviews/review4.jpg',
    date: '2024.03.01',
    views: 189
  },
  {
    id: 5,
    title: '목통증 치료 후기 - 정OO 환자',
    thumbnail: '/images/reviews/review5.jpg',
    date: '2024.02.28',
    views: 245
  },
  {
    id: 6,
    title: '척추측만증 치료 후기 - 강OO 환자',
    thumbnail: '/images/reviews/review6.jpg',
    date: '2024.02.25',
    views: 167
  }
];

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredVideos = videoReviews.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            src="/images/community/reviews-bg.jpg"
            alt="후기 배경"
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
              <h1 className="text-white text-5xl font-bold mb-8">후기영상</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6 }}
            >
              <p className="text-white text-2xl font-medium">
                세강병원을 이용하신<br />
                환자분들의 생생한 이야기를 들려드립니다.
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
              <h2 className="text-2xl font-bold text-gray-900">치료후기 영상</h2>
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