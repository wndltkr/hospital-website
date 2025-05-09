import React from 'react';

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface NoticeListProps {
  notices: Notice[];
  onNoticeClick: (notice: Notice) => void;
}

const NoticeList: React.FC<NoticeListProps> = ({ notices, onNoticeClick }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 w-24">번호</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">제목</th>
            <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 w-32">등록일</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {notices.map((notice) => (
            <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-500">{notice.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                <button 
                  onClick={() => onNoticeClick(notice)}
                  className="hover:text-blue-600 text-left"
                >
                  {notice.title}
                </button>
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-500">{notice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeList; 