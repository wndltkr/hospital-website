'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

interface Post {
  id: number;
  boardId: string;
  title: string;
  content: string;
  date: string;
  fileId: number | null;
  youtubeUrl: string | null;
  username: string | null;
  fileName: string | null;
  fileUrl: string | null;
}

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/admin/boards/${params.boardId}/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('게시글을 불러오는데 실패했습니다.');
      }
    };

    fetchPost();
  }, [params.boardId, params.id]);

  if (error) {
    return (
      <div className="container mx-auto py-6">
        <div className="p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">
          <p className="text-gray-500">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              ← 목록으로
            </button>
          </div>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>작성자: {post.username || '관리자'}</span>
            <span>작성일: {new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

        {/* 본문 */}
        <div className="prose max-w-none mb-8">
          <div className="whitespace-pre-wrap">{post.content}</div>
        </div>

        {/* 이미지 */}
        {post.fileUrl && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">첨부 이미지</h2>
            <div className="relative w-full h-[400px]">
              <Image
                src={post.fileUrl}
                alt={post.fileName || '첨부 이미지'}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* YouTube 영상 */}
        {post.youtubeUrl && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">YouTube 영상</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${post.youtubeUrl}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px]"
              />
            </div>
          </div>
        )}

        {/* 하단 버튼 */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={() => router.push(`/admin/boards/${params.boardId}/${params.id}/edit`)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            수정하기
          </button>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            목록으로
          </button>
        </div>
      </div>
    </div>
  );
} 