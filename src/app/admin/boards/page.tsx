'use client';

import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  board: string;
}

const Boards = () => {
  const [selectedBoard, setSelectedBoard] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [posts] = useState<Post[]>([
    { id: 1, title: '공지사항입니다', author: '관리자', date: '2024-03-20', views: 123, board: 'notice' },
    { id: 2, title: '건강정보 게시글입니다', author: '홍길동', date: '2024-03-19', views: 45, board: 'health' },
    { id: 3, title: '보도자료입니다', author: '관리자', date: '2024-03-18', views: 67, board: 'press' },
    { id: 4, title: '팝업스토어 안내', author: '관리자', date: '2024-03-17', views: 89, board: 'popup' },
  ]);

  const boards = [
    { id: 'all', name: '전체' },
    { id: 'notice', name: '공지사항' },
    { id: 'health', name: '건강정보' },
    { id: 'press', name: '보도자료' },
    { id: 'popup', name: '팝업스토어' },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesBoard = selectedBoard === 'all' || post.board === selectedBoard;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBoard && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">게시판 관리</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          새 게시글 작성
        </button>
      </div>

      {/* Filter and Search */}
      <div className="flex gap-4">
        <select
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          {boards.map(board => (
            <option key={board.id} value={board.id}>{board.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="제목으로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg px-3 py-2 flex-1"
        />
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">게시판</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">조회수</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPosts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {boards.find(b => b.id === post.board)?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.views}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">수정</button>
                  <button className="text-red-500 hover:text-red-700">삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Boards; 