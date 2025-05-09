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
const popupItems: {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  views?: number;
}[] = [
  {
    id: 15,
    title: '2024년 3월 건강검진 프로모션',
    imageUrl: '/images/popup/popup-1.jpg',
    date: '2024.03.15',
    views: 1245
  },
  {
    id: 14,
    title: '봄맞이 특별 할인 이벤트',
    imageUrl: '/images/popup/popup-2.jpg',
    date: '2024.03.10',
    views: 989
  },
  {
    id: 13,
    title: '신규 환자 초진 할인',
    imageUrl: '/images/popup/popup-3.jpg',
    date: '2024.03.05',
    views: 856
  },
  {
    id: 12,
    title: '건강검진 패키지 할인',
    imageUrl: '/images/popup/popup-4.jpg',
    date: '2024.03.01',
    views: 778
  },
  {
    id: 11,
    title: '노인 건강검진 지원사업',
    imageUrl: '/images/popup/popup-5.jpg',
    date: '2024.02.28',
    views: 945
  },
  {
    id: 10,
    title: '여성 건강검진 특별 할인',
    imageUrl: '/images/popup/popup-6.jpg',
    date: '2024.02.25',
    views: 832
  },
  {
    id: 9,
    title: '건강보험 정기검진 안내',
    imageUrl: '/images/popup/popup-7.jpg',
    date: '2024.02.20',
    views: 767
  },
  {
    id: 8,
    title: '소아 건강검진 프로모션',
    imageUrl: '/images/popup/popup-8.jpg',
    date: '2024.02.15',
    views: 623
  },
  {
    id: 7,
    title: '심장검진 패키지 할인',
    imageUrl: '/images/popup/popup-9.jpg',
    date: '2024.02.10',
    views: 745
  },
  {
    id: 6,
    title: '뇌검진 특별 할인',
    imageUrl: '/images/popup/popup-10.jpg',
    date: '2024.02.05',
    views: 834
  },
  {
    id: 5,
    title: '골다공증 검진 할인',
    imageUrl: '/images/popup/popup-11.jpg',
    date: '2024.02.01',
    views: 756
  },
  {
    id: 4,
    title: '당뇨검진 프로모션',
    imageUrl: '/images/popup/popup-12.jpg',
    date: '2024.01.25',
    views: 623
  }
];

export default function PopupPage() {
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
  const filteredPhotos = popupItems.filter(photo => {
    const searchLower = activeSearchTerm.toLowerCase();
    return photo.title.toLowerCase().includes(searchLower);
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 이미지 클릭 핸들러
  const handlePhotoClick = (photo: typeof popupItems[0]) => {
    // TODO: 팝업 상세 페이지로 이동 또는 모달로 표시
    console.log('Photo clicked:', photo);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="이달의 팝업"
        description={[
          "세강병원에서 다양한",
          "소식을 팝업으로 알려드립니다"
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

          <PhotoList
            photos={currentItems}
            onPhotoClick={handlePhotoClick}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* Empty State */}
          {filteredPhotos.length === 0 && (
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