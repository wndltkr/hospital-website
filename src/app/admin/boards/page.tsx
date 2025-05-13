'use client';

import Link from 'next/link';

interface Board {
  id: string;
  name: string;
  path: string;
  description: string;
}

const boards: Board[] = [
  {
    id: 'consultation',
    name: '진료상담',
    path: '/admin/boards/consultation',
    description: '진료 상담 게시판 관리'
  },
  {
    id: 'voice',
    name: '고객의 소리',
    path: '/admin/boards/voice',
    description: '고객의 소리 게시판 관리'
  },
  {
    id: 'reviews',
    name: '후기영상',
    path: '/admin/boards/reviews',
    description: '후기 영상 게시판 관리'
  },
  {
    id: 'info',
    name: '의료정보',
    path: '/admin/boards/info',
    description: '의료 정보 게시판 관리'
  },
  {
    id: 'popup',
    name: '이달의 팝업',
    path: '/admin/boards/popup',
    description: '이달의 팝업 관리'
  },
  {
    id: 'health',
    name: '건강정보',
    path: '/admin/boards/health',
    description: '건강 정보 게시판 관리'
  },
  {
    id: 'notice',
    name: '공지사항',
    path: '/admin/boards/notice',
    description: '공지사항 게시판 관리'
  },
  {
    id: 'press',
    name: '언론보도',
    path: '/admin/boards/press',
    description: '언론보도 게시판 관리'
  },
  {
    id: 'photos',
    name: '사진 게시판',
    path: '/admin/boards/photos',
    description: '사진 게시판 관리'
  },
  {
    id: 'jobs',
    name: '채용공고',
    path: '/admin/boards/jobs',
    description: '채용공고 게시판 관리'
  }
];

export default function BoardsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">게시판 관리</h1>
        <p className="text-gray-600">각 게시판의 게시글을 관리할 수 있습니다.</p>
      </div>

      <div className="space-y-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={board.path}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{board.name}</h2>
                <p className="text-gray-600 mt-1">{board.description}</p>
              </div>
              <div className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 