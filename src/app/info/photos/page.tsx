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
const photoItems: {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  views?: number;
}[] = [
  {
    id: 15,
    title: '2024년 신년 맞이 행사 현장',
    imageUrl: '/images/photos/photo-1.jpg',
    date: '2024.03.15',
    views: 345
  },
  {
    id: 14,
    title: '건강검진센터 리모델링 완료 기념식',
    imageUrl: '/images/photos/photo-2.jpg',
    date: '2024.03.10',
    views: 289
  },
  {
    id: 13,
    title: '의료진 교육 프로그램 현장',
    imageUrl: '/images/photos/photo-3.jpg',
    date: '2024.03.05',
    views: 256
  },
  {
    id: 12,
    title: '지역사회 건강증진 프로그램',
    imageUrl: '/images/photos/photo-4.jpg',
    date: '2024.03.01',
    views: 278
  },
  {
    id: 11,
    title: '소아청소년과 신설 기념식',
    imageUrl: '/images/photos/photo-5.jpg',
    date: '2024.02.28',
    views: 245
  },
  {
    id: 10,
    title: '의료기기 기부 행사 현장',
    imageUrl: '/images/photos/photo-6.jpg',
    date: '2024.02.25',
    views: 232
  },
  {
    id: 9,
    title: '건강보험심사평가원 우수기관 선정 기념식',
    imageUrl: '/images/photos/photo-7.jpg',
    date: '2024.02.20',
    views: 267
  },
  {
    id: 8,
    title: '의료진 해외 연수 프로그램',
    imageUrl: '/images/photos/photo-8.jpg',
    date: '2024.02.15',
    views: 223
  },
  {
    id: 7,
    title: '지역 내 의료기관 협력 체계 구축 회의',
    imageUrl: '/images/photos/photo-9.jpg',
    date: '2024.02.10',
    views: 245
  },
  {
    id: 6,
    title: '의료진 연구 논문 발표회',
    imageUrl: '/images/photos/photo-10.jpg',
    date: '2024.02.05',
    views: 234
  },
  {
    id: 5,
    title: '건강검진 프로그램 개편 설명회',
    imageUrl: '/images/photos/photo-11.jpg',
    date: '2024.02.01',
    views: 256
  },
  {
    id: 4,
    title: '의료진 교육 프로그램 수료식',
    imageUrl: '/images/photos/photo-12.jpg',
    date: '2024.01.25',
    views: 223
  }
];

export default function PhotosPage() {
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
  const filteredPhotos = photoItems.filter(photo => {
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

  // 사진 클릭 핸들러
  const handlePhotoClick = (photo: typeof photoItems[0]) => {
    // TODO: 사진 상세 페이지로 이동
    console.log('Photo clicked:', photo);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="병원 소식"
        description={[
          "세강병원의",
          "다양한 소식과 행사 현장을 보여드립니다"
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