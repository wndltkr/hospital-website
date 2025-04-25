'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';

// 임시 데이터
const photoItems = [
  {
    id: 1,
    title: '세강병원 신년회 현장',
    thumbnail: '/images/photos/photo1.jpg',
    date: '2024.03.15',
    views: 128
  },
  {
    id: 2,
    title: '의료진 정기 컨퍼런스',
    thumbnail: '/images/photos/photo2.jpg',
    date: '2024.03.10',
    views: 95
  },
  {
    id: 3,
    title: '지역사회 의료봉사 활동',
    thumbnail: '/images/photos/photo3.jpg',
    date: '2024.03.05',
    views: 156
  },
  {
    id: 4,
    title: '최신 의료장비 도입식',
    thumbnail: '/images/photos/photo4.jpg',
    date: '2024.03.01',
    views: 142
  },
  {
    id: 5,
    title: '직원 교육 프로그램',
    thumbnail: '/images/photos/photo5.jpg',
    date: '2024.02.28',
    views: 88
  },
  {
    id: 6,
    title: '환자 안전 캠페인',
    thumbnail: '/images/photos/photo6.jpg',
    date: '2024.02.25',
    views: 112
  },
  {
    id: 7,
    title: '병원 시설 리모델링',
    thumbnail: '/images/photos/photo7.jpg',
    date: '2024.02.20',
    views: 134
  },
  {
    id: 8,
    title: '의료진 워크샵',
    thumbnail: '/images/photos/photo8.jpg',
    date: '2024.02.15',
    views: 98
  },
  {
    id: 9,
    title: '환자 만족도 조사',
    thumbnail: '/images/photos/photo9.jpg',
    date: '2024.02.10',
    views: 76
  }
];

export default function PhotosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 검색어로 필터링
  const filteredPhotos = photoItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            alt="사진게시판 배경"
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
              <h1 className="text-white text-5xl font-bold mb-8">사진게시판</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6 }}
            >
              <p className="text-white text-2xl font-medium">
                세강병원의 다양한<br />
                소식과 활동을 사진으로 만나보세요.
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
              <h2 className="text-2xl font-bold text-gray-900">사진게시판</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="제목으로 검색"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // 검색 시 첫 페이지로 이동
                  }}
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

          {/* Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{item.date}</span>
                    <span>조회수 {item.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredPhotos.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  이전
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  다음
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
} 