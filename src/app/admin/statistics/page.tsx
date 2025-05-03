'use client';

import { useState } from 'react';

type TimeRange = 'day' | 'week' | 'month';

interface VisitorData {
  day: number[];
  week: number[];
  month: number[];
  [key: string]: number[];
}

interface PageView {
  page: string;
  views: number;
}

const Statistics = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('week');

  const [visitorData] = useState<VisitorData>({
    day: [120, 150, 180, 200, 220, 250, 300],
    week: [1500, 1800, 2000, 2200, 2500, 2800, 3000],
    month: [8000, 9000, 10000, 11000, 12000, 13000, 14000],
  });

  const [pageViews] = useState<PageView[]>([
    { page: '메인 페이지', views: 5000 },
    { page: '진료과 소개', views: 3000 },
    { page: '건강검진', views: 2500 },
    { page: '비급여 진료', views: 2000 },
    { page: '고객의 소리', views: 1500 },
  ]);

  const maxVisitors = Math.max(...visitorData[timeRange]);
  const maxPageViews = Math.max(...pageViews.map(p => p.views));

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">접속통계</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value as TimeRange)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="day">일간</option>
          <option value="week">주간</option>
          <option value="month">월간</option>
        </select>
      </div>

      {/* Visitor Trends */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">방문자 추이</h2>
        <div className="h-64 flex items-end gap-2">
          {visitorData[timeRange].map((visitors, index) => (
            <div key={index} className="flex-1">
              <div
                className="bg-blue-500 rounded-t"
                style={{ height: `${(visitors / maxVisitors) * 100}%` }}
              />
              <p className="text-xs text-center mt-2">
                {timeRange === 'day' ? `Day ${index + 1}` :
                 timeRange === 'week' ? `Week ${index + 1}` :
                 `Month ${index + 1}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Page Views */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">페이지별 조회수</h2>
        <div className="space-y-4">
          {pageViews.map((page) => (
            <div key={page.page}>
              <div className="flex justify-between mb-1">
                <span>{page.page}</span>
                <span>{page.views.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${(page.views / maxPageViews) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">평균 체류시간</h3>
          <p className="text-2xl font-bold">3분 45초</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">이탈률</h3>
          <p className="text-2xl font-bold">42%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">재방문율</h3>
          <p className="text-2xl font-bold">58%</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics; 