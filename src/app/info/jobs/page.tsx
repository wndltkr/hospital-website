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
const jobItems: {
  id: number;
  title: string;
  content: string;
  date: string;
  views?: number;
}[] = [
  {
    id: 15,
    title: '[신규채용] 내과 전문의 모집',
    content: '세강병원 내과에서 전문의를 모집합니다. 자세한 내용은...',
    date: '2024.03.15',
    views: 245
  },
  {
    id: 14,
    title: '[신규채용] 간호사 모집',
    content: '세강병원에서 경력 간호사를 모집합니다. 자세한 내용은...',
    date: '2024.03.10',
    views: 189
  },
  {
    id: 13,
    title: '[신규채용] 영상의학과 전문의 모집',
    content: '세강병원 영상의학과에서 전문의를 모집합니다. 자세한 내용은...',
    date: '2024.03.05',
    views: 156
  },
  {
    id: 12,
    title: '[신규채용] 물리치료사 모집',
    content: '세강병원 재활의학과에서 물리치료사를 모집합니다. 자세한 내용은...',
    date: '2024.03.01',
    views: 178
  },
  {
    id: 11,
    title: '[신규채용] 소아청소년과 전문의 모집',
    content: '세강병원 소아청소년과에서 전문의를 모집합니다. 자세한 내용은...',
    date: '2024.02.28',
    views: 145
  },
  {
    id: 10,
    title: '[신규채용] 임상병리사 모집',
    content: '세강병원 진단검사의학과에서 임상병리사를 모집합니다. 자세한 내용은...',
    date: '2024.02.25',
    views: 132
  },
  {
    id: 9,
    title: '[신규채용] 약제사 모집',
    content: '세강병원 약제과에서 약제사를 모집합니다. 자세한 내용은...',
    date: '2024.02.20',
    views: 167
  },
  {
    id: 8,
    title: '[신규채용] 방사선사 모집',
    content: '세강병원 영상의학과에서 방사선사를 모집합니다. 자세한 내용은...',
    date: '2024.02.15',
    views: 123
  },
  {
    id: 7,
    title: '[신규채용] 외과 전문의 모집',
    content: '세강병원 외과에서 전문의를 모집합니다. 자세한 내용은...',
    date: '2024.02.10',
    views: 145
  },
  {
    id: 6,
    title: '[신규채용] 정형외과 전문의 모집',
    content: '세강병원 정형외과에서 전문의를 모집합니다. 자세한 내용은...',
    date: '2024.02.05',
    views: 134
  },
  {
    id: 5,
    title: '[신규채용] 신경과 전문의 모집',
    content: '세강병원 신경과에서 전문의를 모집합니다. 자세한 내용은...',
    date: '2024.02.01',
    views: 156
  },
  {
    id: 4,
    title: '[신규채용] 안과 전문의 모집',
    content: '세강병원 안과에서 전문의를 모집합니다. 자세한 내용은...',
    date: '2024.01.25',
    views: 123
  }
];

export default function JobsPage() {
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
  const filteredJobs = jobItems.filter(job => {
    const searchLower = activeSearchTerm.toLowerCase();
    if (searchType === 'title') {
      return job.title.toLowerCase().includes(searchLower);
    } else {
      return job.content.toLowerCase().includes(searchLower);
    }
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 채용공고 클릭 핸들러
  const handleJobClick = (job: typeof jobItems[0]) => {
    // TODO: 채용공고 상세 페이지로 이동
    console.log('Job clicked:', job);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="채용정보"
        description={[
          "세강병원과 함께할",
          "인재를 모십니다"
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
            onNoticeClick={handleJobClick}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* Empty State */}
          {filteredJobs.length === 0 && (
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