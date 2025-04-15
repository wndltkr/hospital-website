import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors duration-200">개인정보처리방침</Link>
          <Link href="/rights" className="hover:text-gray-300 transition-colors duration-200">환자의 권리와 의무</Link>
          <Link href="/cctv" className="hover:text-gray-300 transition-colors duration-200">영상정보처리기기 운영방침</Link>
          <Link href="/terms" className="hover:text-gray-300 transition-colors duration-200">이용약관</Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold">세강병원</div>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">세강병원</p>
            <p>대표자: 홍길동</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>대표전화: 02-1234-5678</p>
            <p>Copyright © 2024 세강병원. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">
              카카오톡
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">
              네이버블로그
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">
              티스토리
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 