'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaChartLine,
  FaClipboardList,
  FaMoneyBillWave,
} from 'react-icons/fa';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen] = useState(true);
  const pathname = usePathname();

  // Set document title on client side
  useEffect(() => {
    document.title = '관리자 - 세강병원';
  }, []);

  const menuItems = [
    { name: '대시보드', path: '/admin', icon: <FaChartLine /> },
    { name: '접속통계', path: '/admin/statistics', icon: <FaChartLine /> },
    { name: '게시판 관리', path: '/admin/boards', icon: <FaClipboardList /> },
    { name: '비급여 관리', path: '/admin/non-insured', icon: <FaMoneyBillWave /> },
  ];

  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-100">
        {/* Sidebar Toggle Button */}

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="h-full w-64 flex flex-col">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800">관리자</h1>
            </div>
            <nav className="flex-1">
              <ul className="space-y-2 p-4">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        pathname === item.path
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={`transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          <div className="p-8">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default AdminLayout; 