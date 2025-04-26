import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#4ABAFF]">
              세강병원
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-100 text-[#4ABAFF]">EN</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100 text-[#4ABAFF]">CN</button>
            </div>
            
            <button className="px-4 py-2 bg-[#4ABAFF] text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              로그인
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 