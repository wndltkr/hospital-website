'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Post {
  id: number;
  boardId: string;
  title: string;
  content: string;
  date: string;
  fileId: number | null;
  youtubeUrl: string | null;
  username: string | null;
}

interface BoardConfig {
  id: string;
  name: string;
  description: string;
  showUsername: boolean;
}

const boardConfigs: { [key: string]: BoardConfig } = {
  consultation: {
    id: 'consultation',
    name: '진료상담',
    description: '진료 상담 게시판 관리',
    showUsername: true
  },
  voice: {
    id: 'voice',
    name: '고객의 소리',
    description: '고객의 소리 게시판 관리',
    showUsername: true
  },
  reviews: {
    id: 'reviews',
    name: '후기영상',
    description: '후기 영상 게시판 관리',
    showUsername: true
  },
  info: {
    id: 'info',
    name: '의료정보',
    description: '의료 정보 게시판 관리',
    showUsername: true
  },
  popup: {
    id: 'popup',
    name: '이달의 팝업',
    description: '이달의 팝업 관리',
    showUsername: true
  },
  health: {
    id: 'health',
    name: '건강정보',
    description: '건강 정보 게시판 관리',
    showUsername: true
  },
  notice: {
    id: 'notice',
    name: '공지사항',
    description: '공지사항 게시판 관리',
    showUsername: true
  },
  press: {
    id: 'press',
    name: '언론보도',
    description: '언론보도 게시판 관리',
    showUsername: true
  },
  photos: {
    id: 'photos',
    name: '사진 게시판',
    description: '사진 게시판 관리',
    showUsername: true
  },
  jobs: {
    id: 'jobs',
    name: '채용공고',
    description: '채용공고 게시판 관리',
    showUsername: true
  }
};

export default function BoardPage() {
  const params = useParams();
  const router = useRouter();
  const boardId = params.boardId as string;
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  const boardConfig = boardConfigs[boardId];

  // 게시글 목록 가져오기
  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/boards/${boardId}`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || '게시글 목록을 가져오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('게시글 목록을 가져오는데 실패했습니다.');
    }
  }, [boardId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (!boardConfig) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">존재하지 않는 게시판입니다.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{boardConfig.name}</h1>
        <Link
          href={`/admin/boards/${boardId}/write`}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          글쓰기
        </Link>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
          <button 
            onClick={() => setError(null)}
            className="float-right text-red-700 hover:text-red-900"
          >
            ✕
          </button>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
              {boardConfig.showUsername && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => router.push(`/admin/boards/${boardId}/${post.id}`)}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.title}</td>
                {boardConfig.showUsername && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.username || '-'}</td>
                )}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 