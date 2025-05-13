'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';

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
}

const boardConfigs: { [key: string]: BoardConfig } = {
  consultation: {
    id: 'consultation',
    name: '진료상담',
    description: '진료 상담 게시판 관리'
  },
  voice: {
    id: 'voice',
    name: '고객의 소리',
    description: '고객의 소리 게시판 관리'
  },
  reviews: {
    id: 'reviews',
    name: '후기영상',
    description: '후기 영상 게시판 관리'
  },
  info: {
    id: 'info',
    name: '의료정보',
    description: '의료 정보 게시판 관리'
  },
  popup: {
    id: 'popup',
    name: '이달의 팝업',
    description: '이달의 팝업 관리'
  },
  health: {
    id: 'health',
    name: '건강정보',
    description: '건강 정보 게시판 관리'
  },
  notice: {
    id: 'notice',
    name: '공지사항',
    description: '공지사항 게시판 관리'
  },
  press: {
    id: 'press',
    name: '언론보도',
    description: '언론보도 게시판 관리'
  },
  photos: {
    id: 'photos',
    name: '사진 게시판',
    description: '사진 게시판 관리'
  },
  jobs: {
    id: 'jobs',
    name: '채용공고',
    description: '채용공고 게시판 관리'
  }
};

export default function BoardPage() {
  const params = useParams();
  const boardId = params.boardId as string;
  const [posts, setPosts] = useState<Post[]>([]);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [username, setUsername] = useState('');
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (boardId === 'photos' && !selectedFile) return;

    const formData = new FormData();
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    formData.append('title', title);
    formData.append('content', content);
    formData.append('youtubeUrl', youtubeUrl);
    formData.append('username', username);

    try {
      const response = await fetch(`/api/admin/boards/${boardId}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsUploadDialogOpen(false);
        setTitle('');
        setContent('');
        setYoutubeUrl('');
        setUsername('');
        setSelectedFile(null);
        fetchPosts();
      } else {
        const errorData = await response.json();
        setError(errorData.error || '게시글 작성에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      setError('게시글 작성에 실패했습니다.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!id || isNaN(id)) {
      setError('유효하지 않은 ID입니다.');
      return;
    }

    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/admin/boards/${boardId}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPosts();
      } else {
        const errorData = await response.json();
        setError(errorData.error || '게시글 삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      setError('게시글 삭제에 실패했습니다.');
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{boardConfig.name}</h1>
        <p className="text-gray-600">{boardConfig.description}</p>
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

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsUploadDialogOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          새 게시글 작성
        </button>
      </div>

      {isUploadDialogOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-2xl transform transition-all">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">새 게시글 작성</h2>
              <button
                onClick={() => setIsUploadDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                  제목
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block mb-2 font-medium text-gray-700">
                  내용
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows={4}
                  required
                />
              </div>
              {boardId === 'photos' && (
                <div>
                  <label htmlFor="image" className="block mb-2 font-medium text-gray-700">
                    이미지
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              )}
              {boardId === 'reviews' && (
                <div>
                  <label htmlFor="youtubeUrl" className="block mb-2 font-medium text-gray-700">
                    YouTube URL
                  </label>
                  <input
                    id="youtubeUrl"
                    type="text"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                </div>
              )}
              <div>
                <label htmlFor="username" className="block mb-2 font-medium text-gray-700">
                  작성자
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsUploadDialogOpen(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  작성
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.username || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(post.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 