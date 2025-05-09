'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import VideoList from '@/components/VideoList';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';

// 임시 데이터
const infoItems: {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  date: string;
  views?: number;
}[] = [
  {
    id: 15,
    title: '세강병원 시설 소개',
    thumbnailUrl: '/images/info/info-1.jpg',
    videoUrl: 'https://youtube.com/watch?v=example1',
    duration: '12:30',
    date: '2024.03.15',
    views: 1245
  },
  {
    id: 14,
    title: '세강병원 의료진 소개',
    thumbnailUrl: '/images/info/info-2.jpg',
    videoUrl: 'https://youtube.com/watch?v=example2',
    duration: '15:45',
    date: '2024.03.10',
    views: 989
  },
  {
    id: 13,
    title: '세강병원 특화센터 소개',
    thumbnailUrl: '/images/info/info-3.jpg',
    videoUrl: 'https://youtube.com/watch?v=example3',
    duration: '18:20',
    date: '2024.03.05',
    views: 856
  },
  {
    id: 12,
    title: '세강병원 의료장비 소개',
    thumbnailUrl: '/images/info/info-4.jpg',
    videoUrl: 'https://youtube.com/watch?v=example4',
    duration: '10:15',
    date: '2024.03.01',
    views: 778
  },
  {
    id: 11,
    title: '세강병원 입원시설 안내',
    thumbnailUrl: '/images/info/info-5.jpg',
    videoUrl: 'https://youtube.com/watch?v=example5',
    duration: '14:50',
    date: '2024.02.28',
    views: 945
  },
  {
    id: 10,
    title: '세강병원 외래진료 안내',
    thumbnailUrl: '/images/info/info-6.jpg',
    videoUrl: 'https://youtube.com/watch?v=example6',
    duration: '16:30',
    date: '2024.02.25',
    views: 832
  },
  {
    id: 9,
    title: '세강병원 응급실 안내',
    thumbnailUrl: '/images/info/info-7.jpg',
    videoUrl: 'https://youtube.com/watch?v=example7',
    duration: '13:45',
    date: '2024.02.20',
    views: 767
  },
  {
    id: 8,
    title: '세강병원 주차안내',
    thumbnailUrl: '/images/info/info-8.jpg',
    videoUrl: 'https://youtube.com/watch?v=example8',
    duration: '11:20',
    date: '2024.02.15',
    views: 623
  },
  {
    id: 7,
    title: '세강병원 편의시설 안내',
    thumbnailUrl: '/images/info/info-9.jpg',
    videoUrl: 'https://youtube.com/watch?v=example9',
    duration: '15:10',
    date: '2024.02.10',
    views: 745
  },
  {
    id: 6,
    title: '세강병원 찾아오시는 길',
    thumbnailUrl: '/images/info/info-10.jpg',
    videoUrl: 'https://youtube.com/watch?v=example10',
    duration: '17:25',
    date: '2024.02.05',
    views: 834
  },
  {
    id: 5,
    title: '세강병원 연혁',
    thumbnailUrl: '/images/info/info-11.jpg',
    videoUrl: 'https://youtube.com/watch?v=example11',
    duration: '14:15',
    date: '2024.02.01',
    views: 756
  },
  {
    id: 4,
    title: '세강병원 미션과 비전',
    thumbnailUrl: '/images/info/info-12.jpg',
    videoUrl: 'https://youtube.com/watch?v=example12',
    duration: '16:40',
    date: '2024.01.25',
    views: 623
  }
];

export default function InfoPage() {
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
  const filteredVideos = infoItems.filter(video => {
    const searchLower = activeSearchTerm.toLowerCase();
    return video.title.toLowerCase().includes(searchLower);
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVideos.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 영상 클릭 핸들러
  const handleVideoClick = (video: typeof infoItems[0]) => {
    // TODO: 영상 재생 페이지로 이동 또는 모달로 재생
    console.log('Video clicked:', video);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="의료정보"
        description={[
          "건강한 의료 문화 실현을 위해",
          "올바른 정보를 제공합니다"
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

          <VideoList
            videos={currentItems}
            onVideoClick={handleVideoClick}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* Empty State */}
          {filteredVideos.length === 0 && (
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