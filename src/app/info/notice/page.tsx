'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';

// 임시 데이터
const noticeItems = [
  { id: 15, title: '2024년 세강병원 건강검진 프로그램 안내', date: '2024.03.15' },
  { id: 14, title: '3월 진료시간 변경 안내', date: '2024.03.10' },
  { id: 13, title: '코로나19 예방접종 안내', date: '2024.03.05' },
  { id: 12, title: '세강병원 주차장 이용 안내', date: '2024.03.01' },
  { id: 11, title: '신규 의료진 소개', date: '2024.02.28' },
  { id: 10, title: '병원 휴진 안내', date: '2024.02.25' },
  { id: 9, title: '건강보험 검진 안내', date: '2024.02.20' },
  { id: 8, title: '세강병원 홈페이지 리뉴얼 안내', date: '2024.02.15' },
  { id: 7, title: '설 연휴 진료 일정 안내', date: '2024.02.10' },
  { id: 6, title: '의료장비 정기점검 안내', date: '2024.02.05' },
  { id: 5, title: '주말 진료시간 변경 안내', date: '2024.02.01' },
  { id: 4, title: '건강검진 예약 방법 안내', date: '2024.01.25' },
  { id: 3, title: '비급여 진료비용 안내', date: '2024.01.20' },
  { id: 2, title: '주차장 공사 안내', date: '2024.01.15' },
  { id: 1, title: '신년 진료 일정 안내', date: '2024.01.10' }
];

export default function NoticePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 검색 필터링
  const filteredNotices = noticeItems.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
            alt="공지사항 배경"
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
              <h1 className="text-white text-5xl font-bold mb-8">공지사항</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6 }}
            >
              <p className="text-white text-2xl font-medium">
                세강병원의<br />
                공지사항을 알려드립니다.
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
              <h2 className="text-2xl font-bold text-gray-900">공지사항</h2>
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

          {/* Notice List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 w-24">번호</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">제목</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 w-32">등록일</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.map((notice) => (
                  <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-center text-sm text-gray-500">{notice.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <button className="hover:text-blue-600 text-left">{notice.title}</button>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">{notice.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                이전
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                다음
              </button>
            </nav>
          </div>

          {/* Empty State */}
          {filteredNotices.length === 0 && (
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