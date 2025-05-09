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
const reviewItems: {
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
    title: '세강병원 정형외과 치료 후기',
    thumbnailUrl: '/images/reviews/review-1.jpg',
    videoUrl: 'https://youtube.com/watch?v=example1',
    duration: '12:30',
    date: '2024.03.15',
    views: 1245
  },
  {
    id: 14,
    title: '내시경 검사 경험담',
    thumbnailUrl: '/images/reviews/review-2.jpg',
    videoUrl: 'https://youtube.com/watch?v=example2',
    duration: '15:45',
    date: '2024.03.10',
    views: 989
  },
  {
    id: 13,
    title: '건강검진 프로그램 후기',
    thumbnailUrl: '/images/reviews/review-3.jpg',
    videoUrl: 'https://youtube.com/watch?v=example3',
    duration: '18:20',
    date: '2024.03.05',
    views: 856
  },
  {
    id: 12,
    title: '세강병원 응급실 이용 후기',
    thumbnailUrl: '/images/reviews/review-4.jpg',
    videoUrl: 'https://youtube.com/watch?v=example4',
    duration: '10:15',
    date: '2024.03.01',
    views: 778
  },
  {
    id: 11,
    title: '산부인과 출산 경험담',
    thumbnailUrl: '/images/reviews/review-5.jpg',
    videoUrl: 'https://youtube.com/watch?v=example5',
    duration: '14:50',
    date: '2024.02.28',
    views: 945
  },
  {
    id: 10,
    title: '안과 레이저 시술 후기',
    thumbnailUrl: '/images/reviews/review-6.jpg',
    videoUrl: 'https://youtube.com/watch?v=example6',
    duration: '16:30',
    date: '2024.02.25',
    views: 832
  },
  {
    id: 9,
    title: '피부과 레이저 시술 경험',
    thumbnailUrl: '/images/reviews/review-7.jpg',
    videoUrl: 'https://youtube.com/watch?v=example7',
    duration: '13:45',
    date: '2024.02.20',
    views: 767
  },
  {
    id: 8,
    title: '세강병원 입원 경험담',
    thumbnailUrl: '/images/reviews/review-8.jpg',
    videoUrl: 'https://youtube.com/watch?v=example8',
    duration: '11:20',
    date: '2024.02.15',
    views: 623
  },
  {
    id: 7,
    title: '치과 임플란트 수술 후기',
    thumbnailUrl: '/images/reviews/review-9.jpg',
    videoUrl: 'https://youtube.com/watch?v=example9',
    duration: '15:10',
    date: '2024.02.10',
    views: 745
  },
  {
    id: 6,
    title: '소아과 진료 경험담',
    thumbnailUrl: '/images/reviews/review-10.jpg',
    videoUrl: 'https://youtube.com/watch?v=example10',
    duration: '17:25',
    date: '2024.02.05',
    views: 834
  },
  {
    id: 5,
    title: '세강병원 재활치료 후기',
    thumbnailUrl: '/images/reviews/review-11.jpg',
    videoUrl: 'https://youtube.com/watch?v=example11',
    duration: '14:15',
    date: '2024.02.01',
    views: 756
  },
  {
    id: 4,
    title: '심장내과 검진 경험담',
    thumbnailUrl: '/images/reviews/review-12.jpg',
    videoUrl: 'https://youtube.com/watch?v=example12',
    duration: '16:40',
    date: '2024.01.25',
    views: 623
  }
];

export default function ReviewsPage() {
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
  const filteredVideos = reviewItems.filter(video => {
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
  const handleVideoClick = (video: typeof reviewItems[0]) => {
    // TODO: 영상 재생 페이지로 이동 또는 모달로 재생
    console.log('Video clicked:', video);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      <PageBanner
        title="후기영상"
        description={[
          "세강병원을 이용하신",
          "환자분들의 생생한 이야기를 들려드립니다"
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