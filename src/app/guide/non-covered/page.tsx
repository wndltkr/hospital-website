'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState, useMemo } from 'react';
import PageBanner from '@/components/PageBanner';

interface NonCoveredItem {
  category: string;
  name: string;
  code: string;
  type: string;
  cost: string;
  minCost: string;
  maxCost: string;
  includeMaterial: string;
  includeMedicine: string;
  note: string;
}

const nonCoveredItems: NonCoveredItem[] = [
  {
    category: '상급병실료 차액',
    name: '특실A',
    code: 'ABZ11',
    type: '1인실',
    cost: '250,000',
    minCost: '0',
    maxCost: '0',
    includeMaterial: '',
    includeMedicine: '',
    note: ''
  },
  {
    category: '상급병실료 차액',
    name: '특실B',
    code: 'ABZ11',
    type: '1인실',
    cost: '200,000',
    minCost: '0',
    maxCost: '0',
    includeMaterial: '',
    includeMedicine: '',
    note: ''
  },
  // ... Add more items here
];

export default function NonCoveredPage() {
  const [selectedCategory, setSelectedCategory] = useState('행위료');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const filteredItems = useMemo(() => {
    return nonCoveredItems.filter(item => {
      const matchesCategory = selectedCategory === '행위료' || item.category.includes(selectedCategory);
      const matchesSearch = searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubCategory = selectedSubCategory === '' || item.category.includes(selectedSubCategory);
      
      return matchesCategory && matchesSearch && matchesSubCategory;
    });
  }, [selectedCategory, searchTerm, selectedSubCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Header />
      <Menu />
      
      {/* Banner Section */}
      <PageBanner
        title="비급여항목"
        description={[
          "세상을 아름답게",
          "사회를 건강하게"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Title Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  className="text-[#0066CC] text-sm tracking-[0.2em] mb-2"
                >
                  SEKANG HOSPITAL
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  비급여 진료비 안내
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.4 }}
                  className="text-gray-600"
                >
                  의료법 제 45조 제1항 및 제2항 시행규칙 제42조의 2 제1항 및 제2항에 의하여 비급여 진료비를 고지합니다.
                </motion.p>
              </div>
            </div>

            {/* Search and Category Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full md:w-48 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="행위료">행위료</option>
                    <option value="치료재료">치료재료</option>
                    <option value="약제">약제</option>
                    <option value="제증명수수료">제증명수수료</option>
                    <option value="선택진료료">선택진료료</option>
                  </select>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="검색어를 입력하세요"
                    className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="text-right text-gray-500 text-sm">2025. 4.1 현재</p>
              </div>
            </div>

            {/* Category Navigation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {['제1-1장. 상급병실료 차액제', '2장. 검사료제', '2-1장. 초음파 검사료', '제3-1장.', 
                    '제7장. 이학요법료(물리치료료)', '제9장. 처치 및 수술료', '기타'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setSelectedSubCategory(item)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        selectedSubCategory === item 
                          ? 'bg-blue-500 text-white' 
                          : 'hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <caption className="sr-only">비급여 진료비</caption>
                  <thead>
                    <tr>
                      <th rowSpan={2} className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">분류</th>
                      <th colSpan={2} className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">항목</th>
                      <th colSpan={6} className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">가격</th>
                      <th rowSpan={2} className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">특이사항</th>
                    </tr>
                    <tr>
                      <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">명칭</th>
                      <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">코드</th>
                      <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">구분</th>
                      <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">비용</th>
                      <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">최저비용</th>
                      <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">최고비용</th>
                      <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border whitespace-nowrap">치료재료대<br />포함여부</th>
                      <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border whitespace-nowrap">약제비<br />포함여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-4 px-6 border text-left">{item.category}</td>
                        <td className="py-4 px-6 border text-left">{item.name}</td>
                        <td className="py-4 px-6 border text-left">{item.code}</td>
                        <td className="py-4 px-6 border text-center">{item.type}</td>
                        <td className="py-4 px-6 border text-right">{item.cost}</td>
                        <td className="py-4 px-6 border text-right">{item.minCost}</td>
                        <td className="py-4 px-6 border text-right">{item.maxCost}</td>
                        <td className="py-4 px-6 border text-center">{item.includeMaterial}</td>
                        <td className="py-4 px-6 border text-center">{item.includeMedicine}</td>
                        <td className="py-4 px-6 border text-left">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 