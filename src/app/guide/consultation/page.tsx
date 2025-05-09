'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import NoticeList from '@/components/NoticeList';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import YouTubeSection from '@/components/YouTubeSection';

// 임시 데이터
const consultationItems = [
  { id: 15, title: '2024년 상담 예약 방법 안내', content: '2024년 상담 예약 방법이 변경되었습니다. 자세한 내용은...', date: '2024.03.15' },
  { id: 14, title: '심리상담 프로그램 안내', content: '새로운 심리상담 프로그램이 시작됩니다. 프로그램 내용은...', date: '2024.03.10' },
  { id: 13, title: '온라인 상담 서비스 안내', content: '온라인 상담 서비스가 시작됩니다. 이용 방법은...', date: '2024.03.05' },
  { id: 12, title: '상담 예약 취소 정책 안내', content: '상담 예약 취소 정책이 변경되었습니다. 취소 수수료는...', date: '2024.03.01' },
  { id: 11, title: '전문 상담사 소개', content: '새로운 전문 상담사가 합류했습니다. 전문 분야는...', date: '2024.02.28' },
  { id: 10, title: '상담 시간 변경 안내', content: '상담 시간이 변경되었습니다. 평일 오전 9시부터...', date: '2024.02.25' },
  { id: 9, title: '그룹 상담 프로그램 안내', content: '그룹 상담 프로그램이 시작됩니다. 참가 방법은...', date: '2024.02.20' },
  { id: 8, title: '상담 비용 안내', content: '상담 비용이 변경되었습니다. 자세한 내용은...', date: '2024.02.15' },
  { id: 7, title: '상담 예약 방법 안내', content: '상담 예약 방법이 변경되었습니다. 온라인 예약은...', date: '2024.02.10' },
  { id: 6, title: '상담 후기 작성 안내', content: '상담 후기 작성 방법을 안내드립니다. 후기 작성은...', date: '2024.02.05' },
  { id: 5, title: '상담 FAQ 안내', content: '자주 묻는 상담 관련 질문과 답변을 안내드립니다...', date: '2024.02.01' },
  { id: 4, title: '상담 예약 변경 안내', content: '상담 예약 변경 방법이 변경되었습니다. 변경 방법은...', date: '2024.01.25' },
  { id: 3, title: '상담 프로그램 소개', content: '다양한 상담 프로그램을 소개합니다. 프로그램 내용은...', date: '2024.01.20' },
  { id: 2, title: '상담 예약 시스템 점검 안내', content: '상담 예약 시스템 점검이 실시됩니다. 점검 기간은...', date: '2024.01.15' },
  { id: 1, title: '신년 상담 프로그램 안내', content: '신년 상담 프로그램을 안내드립니다. 프로그램 내용은...', date: '2024.01.10' }
];

export default function ConsultationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const itemsPerPage = 10;

  // 검색 실행 함수
  const handleSearch = () => {
    setActiveSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  // 검색 필터링
  const filteredConsultations = consultationItems.filter(consultation => {
    const searchLower = activeSearchTerm.toLowerCase();
    if (searchType === 'title') {
      return consultation.title.toLowerCase().includes(searchLower);
    } else {
      return consultation.content.toLowerCase().includes(searchLower);
    }
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredConsultations.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredConsultations.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 게시글 클릭 핸들러
  const handleConsultationClick = (consultation: typeof consultationItems[0]) => {
    // TODO: 상담 상세 페이지로 이동
    console.log('Consultation clicked:', consultation);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="상담안내"
        description={[
          "세강병원의",
          "상담 서비스를 안내드립니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <SearchBar
            searchTerm={searchTerm}
            searchType={searchType}
            onSearchTermChange={setSearchTerm}
            onSearchTypeChange={(value) => {
              setSearchType(value);
              setCurrentPage(1);
            }}
            onSearch={handleSearch}
          />

          <NoticeList
            notices={currentItems}
            onNoticeClick={handleConsultationClick}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* Empty State */}
          {filteredConsultations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
        <YouTubeSection
                  videoId="VIDEO_ID"
                  title="건강증진센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                />
      </div>

      <Footer />
    </div>
  );
} 