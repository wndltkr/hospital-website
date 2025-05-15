'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import NoticeList from '@/components/NoticeList';
import { useEffect, useState } from 'react';
import PageBanner from '@/components/PageBanner';
import YouTubeSection from '@/components/YouTubeSection';

interface ConsultationItem {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function ConsultationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const [consultationItems, setConsultationItems] = useState<ConsultationItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/guide/consultation');
        if (!response.ok) {
          throw new Error('Failed to fetch notices');
        }
        const data = await response.json();
        // Ensure data is an array
        if (Array.isArray(data)) {
          setConsultationItems(data);
        } else {
          console.error('Invalid data format:', data);
          setConsultationItems([]);
          setError('데이터 형식이 올바르지 않습니다.');
        }
      } catch (error) {
        console.error('Failed to fetch consultation:', error);
        setConsultationItems([]);
        setError('데이터를 불러오는데 실패했습니다.');
      }
    };

    fetchNotices();
  }, []);

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
  const handleConsultationClick = (consultation: ConsultationItem) => {
    // TODO: 상담 상세 페이지로 이동
    console.log('Consultation clicked:', consultation);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="진료상담"
        description={[
          "세강병원의",
          "진료상담"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

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
          {filteredConsultations.length === 0 && !error && (
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