'use client';

import { useState } from 'react';
import { FaUsers, FaClipboardList, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';

const Dashboard = () => {
  const [stats] = useState({
    totalUsers: 1234,
    totalPosts: 567,
    totalVisitors: 8901,
    totalNonInsured: 45,
  });

  const [recentActivities] = useState([
    { id: 1, type: 'notice', title: '새로운 공지사항이 등록되었습니다', date: '2024-03-20', author: '관리자' },
    { id: 2, type: 'user', title: '새로운 회원이 가입했습니다', date: '2024-03-19', author: '홍길동' },
    { id: 3, type: 'non-insured', title: '새로운 비급여 항목이 추가되었습니다', date: '2024-03-18', author: '관리자' },
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">대시보드</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">총 회원 수</p>
              <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaUsers className="text-blue-500 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">총 게시글 수</p>
              <p className="text-2xl font-bold">{stats.totalPosts.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaClipboardList className="text-green-500 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">총 방문자 수</p>
              <p className="text-2xl font-bold">{stats.totalVisitors.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FaChartLine className="text-purple-500 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">비급여 항목 수</p>
              <p className="text-2xl font-bold">{stats.totalNonInsured.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaMoneyBillWave className="text-yellow-500 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">최근 활동</h2>
        </div>
        <div className="divide-y">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.author}</p>
                </div>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 