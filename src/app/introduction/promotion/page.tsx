"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

// 예시 동영상 데이터
const videos = [
  {
    id: 1,
    title: '세강병원 40주년 기념 영상',
    thumbnail: '/images/videos/thumb-1.jpg',
    videoId: 'VIDEO_ID_1',
    date: '2024-02-01',
    views: 1250
  },
  {
    id: 2,
    title: '최신 의료장비 소개',
    thumbnail: '/images/videos/thumb-2.jpg',
    videoId: 'VIDEO_ID_2',
    date: '2024-01-15',
    views: 856
  },
  {
    id: 3,
    title: '세강병원 의료진 인터뷰',
    thumbnail: '/images/videos/thumb-3.jpg',
    videoId: 'VIDEO_ID_3',
    date: '2024-01-10',
    views: 723
  },
  {
    id: 4,
    title: '건강검진 프로그램 안내',
    thumbnail: '/images/videos/thumb-4.jpg',
    videoId: 'VIDEO_ID_4',
    date: '2023-12-28',
    views: 945
  },
  {
    id: 5,
    title: '세강병원 시설 둘러보기',
    thumbnail: '/images/videos/thumb-5.jpg',
    videoId: 'VIDEO_ID_5',
    date: '2023-12-20',
    views: 1102
  },
  {
    id: 6,
    title: '코로나19 예방 수칙 안내',
    thumbnail: '/images/videos/thumb-6.jpg',
    videoId: 'VIDEO_ID_6',
    date: '2023-12-15',
    views: 678
  },
  {
    id: 7,
    title: '세강병원 진료과목 소개',
    thumbnail: '/images/videos/thumb-7.jpg',
    videoId: 'VIDEO_ID_7',
    date: '2023-12-01',
    views: 891
  },
  {
    id: 8,
    title: '건강한 생활습관 가이드',
    thumbnail: '/images/videos/thumb-8.jpg',
    videoId: 'VIDEO_ID_8',
    date: '2023-11-25',
    views: 567
  },
  {
    id: 9,
    title: '세강병원 응급실 안내',
    thumbnail: '/images/videos/thumb-9.jpg',
    videoId: 'VIDEO_ID_9',
    date: '2023-11-15',
    views: 789
  },
  {
    id: 10,
    title: '겨울철 건강관리 꿀팁',
    thumbnail: '/images/videos/thumb-10.jpg',
    videoId: 'VIDEO_ID_10',
    date: '2023-11-01',
    views: 934
  },
  {
    id: 11,
    title: '세강병원 발전사',
    thumbnail: '/images/videos/thumb-11.jpg',
    videoId: 'VIDEO_ID_11',
    date: '2023-10-28',
    views: 1567
  }
];

export default function PromotionPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;

  // 검색 필터링
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 페이지네이션 계산
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Menu />
      <SideMenu />
      <main>
      <PageBanner
        title="홍보영상"
        description={[
          "세강병원 홈페이지를",
          "방문해 주셔서 감사합니다"
        ]}
        backgroundImage="/images/about/about-vis.jpg"
      />

        {/* Video Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-8">
            {/* Search Bar */}
            <div className="mb-12">
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="영상 검색하기"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 shadow-sm"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentVideos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video cursor-pointer group">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5-8-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{video.date}</span>
                      <span>조회수 {video.views.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 