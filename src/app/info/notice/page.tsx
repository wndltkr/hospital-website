'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import NoticeList from '@/components/NoticeList';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';

// 임시 데이터
const noticeItems = [
  { id: 15, title: '2024년 세강병원 건강검진 프로그램 안내', content: '2024년 건강검진 프로그램이 시작됩니다. 자세한 내용은...', date: '2024.03.15' },
  { id: 14, title: '3월 진료시간 변경 안내', content: '3월부터 진료시간이 변경됩니다. 평일 오전 9시부터...', date: '2024.03.10' },
  { id: 13, title: '코로나19 예방접종 안내', content: '코로나19 예방접종이 시작됩니다. 접종 대상자는...', date: '2024.03.05' },
  { id: 12, title: '세강병원 주차장 이용 안내', content: '주차장 이용 방법이 변경되었습니다. 지하 주차장...', date: '2024.03.01' },
  { id: 11, title: '신규 의료진 소개', content: '새로운 의료진이 합류했습니다. 전문 분야는...', date: '2024.02.28' },
  { id: 10, title: '병원 휴진 안내', content: '다음 주 월요일은 병원 휴진일입니다. 긴급 진료는...', date: '2024.02.25' },
  { id: 9, title: '건강보험 검진 안내', content: '건강보험 검진이 시작됩니다. 검진 대상자는...', date: '2024.02.20' },
  { id: 8, title: '세강병원 홈페이지 리뉴얼 안내', content: '홈페이지가 새롭게 개편되었습니다. 새로운 기능은...', date: '2024.02.15' },
  { id: 7, title: '설 연휴 진료 일정 안내', content: '설 연휴 동안의 진료 일정을 안내드립니다. 응급실은...', date: '2024.02.10' },
  { id: 6, title: '의료장비 정기점검 안내', content: '의료장비 정기점검이 실시됩니다. 점검 기간은...', date: '2024.02.05' },
  { id: 5, title: '주말 진료시간 변경 안내', content: '주말 진료시간이 변경됩니다. 토요일 오전 9시부터...', date: '2024.02.01' },
  { id: 4, title: '건강검진 예약 방법 안내', content: '건강검진 예약 방법이 변경되었습니다. 온라인 예약은...', date: '2024.01.25' },
  { id: 3, title: '비급여 진료비용 안내', content: '비급여 진료비용이 변경되었습니다. 자세한 내용은...', date: '2024.01.20' },
  { id: 2, title: '주차장 공사 안내', content: '주차장 공사가 시작됩니다. 공사 기간은...', date: '2024.01.15' },
  { id: 1, title: '신년 진료 일정 안내', content: '신년 진료 일정을 안내드립니다. 1월 1일은...', date: '2024.01.10' }
];

export default function NoticePage() {
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
  const filteredNotices = noticeItems.filter(notice => {
    const searchLower = activeSearchTerm.toLowerCase();
    if (searchType === 'title') {
      return notice.title.toLowerCase().includes(searchLower);
    } else {
      return notice.content.toLowerCase().includes(searchLower);
    }
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 게시글 클릭 핸들러
  const handleNoticeClick = (notice: typeof noticeItems[0]) => {
    // TODO: 게시글 상세 페이지로 이동
    console.log('Notice clicked:', notice);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="공지사항"
        description={[
          "세강병원의",
          "공지사항을 알려드립니다"
        ]}
        backgroundImage="/images/info/info-vis.jpg"
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
            onNoticeClick={handleNoticeClick}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

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