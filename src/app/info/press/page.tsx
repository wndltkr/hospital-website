'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import PhotoList from '@/components/PhotoList';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';

// 임시 데이터
const pressItems: {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  views?: number;
}[] = [
  {
    id: 15,
    title: '세강병원, 첨단 의료장비 도입으로 진단 정확도 향상',
    imageUrl: '/images/press/press-1.jpg',
    date: '2024.03.15',
    views: 245
  },
  {
    id: 14,
    title: '세강병원, 지역사회 건강증진 프로그램 실시',
    imageUrl: '/images/press/press-2.jpg',
    date: '2024.03.10',
    views: 189
  },
  {
    id: 13,
    title: '세강병원, 의료진 확충으로 진료 대기시간 단축',
    imageUrl: '/images/press/press-3.jpg',
    date: '2024.03.05',
    views: 156
  },
  {
    id: 12,
    title: '세강병원, 건강검진센터 리모델링 완료',
    imageUrl: '/images/press/press-4.jpg',
    date: '2024.03.01',
    views: 178
  },
  {
    id: 11,
    title: '세강병원, 소아청소년과 신설',
    imageUrl: '/images/press/press-5.jpg',
    date: '2024.02.28',
    views: 145
  },
  {
    id: 10,
    title: '세강병원, 의료진 해외 연수 프로그램 실시',
    imageUrl: '/images/press/press-6.jpg',
    date: '2024.02.25',
    views: 132
  },
  {
    id: 9,
    title: '세강병원, 건강보험심사평가원 우수기관 선정',
    imageUrl: '/images/press/press-7.jpg',
    date: '2024.02.20',
    views: 167
  },
  {
    id: 8,
    title: '세강병원, 의료기기 기부 행사 개최',
    imageUrl: '/images/press/press-8.jpg',
    date: '2024.02.15',
    views: 123
  },
  {
    id: 7,
    title: '세강병원, 지역 내 의료기관과 협력 체계 구축',
    imageUrl: '/images/press/press-9.jpg',
    date: '2024.02.10',
    views: 145
  },
  {
    id: 6,
    title: '세강병원, 의료진 연구 논문 발표',
    imageUrl: '/images/press/press-10.jpg',
    date: '2024.02.05',
    views: 134
  },
  {
    id: 5,
    title: '세강병원, 건강검진 프로그램 개편',
    imageUrl: '/images/press/press-11.jpg',
    date: '2024.02.01',
    views: 156
  },
  {
    id: 4,
    title: '세강병원, 의료진 교육 프로그램 실시',
    imageUrl: '/images/press/press-12.jpg',
    date: '2024.01.25',
    views: 123
  }
];

export default function PressPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const itemsPerPage = 9; // 3x3 그리드를 위해 9개씩 표시

  // 검색 실행 함수
  const handleSearch = () => {
    setActiveSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  // 검색 필터링
  const filteredPress = pressItems.filter(press => {
    const searchLower = activeSearchTerm.toLowerCase();
    return press.title.toLowerCase().includes(searchLower);
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredPress.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPress.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 보도자료 클릭 핸들러
  const handlePressClick = (press: typeof pressItems[0]) => {
    // TODO: 보도자료 상세 페이지로 이동
    console.log('Press clicked:', press);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="보도자료"
        description={[
          "세강병원의",
          "최신 소식과 보도자료를 확인하세요"
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

          <PhotoList
            photos={currentItems}
            onPhotoClick={handlePressClick}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* Empty State */}
          {filteredPress.length === 0 && (
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