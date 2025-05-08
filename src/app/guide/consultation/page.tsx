'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';
import { FaSearch, FaPen } from 'react-icons/fa';
import PageBanner from '@/components/PageBanner';
import YouTubeSection from '@/components/YouTubeSection';

// 임시 게시글 데이터
const DUMMY_POSTS = [
  { id: 1, title: '진료 상담 문의드립니다', author: '김환자', date: '2024-03-20', views: 45 },
  { id: 2, title: '외래 진료 시간 문의', author: '이상담', date: '2024-03-19', views: 32 },
  { id: 3, title: '건강검진 관련 문의', author: '박검진', date: '2024-03-18', views: 67 },
  { id: 4, title: '진료 예약 방법 문의', author: '최예약', date: '2024-03-17', views: 89 },
  { id: 5, title: '보험 적용 문의드립니다', author: '정보험', date: '2024-03-16', views: 54 },
];

export default function ConsultationPage() {
  const [searchType, setSearchType] = useState('title');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // 검색 결과 필터링
  const filteredPosts = DUMMY_POSTS.filter(post => {
    if (searchType === 'title') {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return post.author.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  // 페이지네이션 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <>
      <Menu />
      <SideMenu />
      <div className="min-h-screen bg-white">
        {/* Banner Section */}
        <PageBanner
        title="진료상담"
        description={[
          "세강병원의",
          "진료상담"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex gap-12">
        

            {/* Main Content */}
            <div className="flex-1">
              {/* Board Section */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">진료 상담 게시판</h2>
                
                {/* Search and Write Button */}
                <div className="flex justify-between mb-6">
                  <div className="flex gap-2">
                    <select 
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                      className="px-3 py-2 border rounded-lg"
                    >
                      <option value="title">제목</option>
                      <option value="author">작성자</option>
                    </select>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="검색어를 입력하세요"
                        className="pl-10 pr-4 py-2 border rounded-lg w-64"
                      />
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <FaPen />
                    글쓰기
                  </button>
                </div>

                {/* Board Table */}
                <table className="w-full mb-6">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">번호</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">조회</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.author}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>

              {/* YouTube Section */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="건강증진센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 