'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';

const centers = [
  { id: 'colon', name: '대장항문센터' },
  { id: 'endoscopy', name: '소화기내시경센터' },
  { id: 'health', name: '건강증진센터' },
  { id: 'fluid', name: '세로움수액센터' },
  { id: 'breast', name: '유방갑상선센터' },
  { id: 'internal', name: '내과질환센터' },
  { id: 'clinic', name: '클리닉센터' },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('colon');

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Header />
      <Menu />
      
      {/* Banner Section */}
      <div className="relative h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/community/faq-bg.jpg"
            alt="자주하는 질문 배경"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
            >
              <h1 className="text-white text-5xl font-bold mb-8">자주하는 질문</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6 }}
            >
              <p className="text-white text-2xl font-medium">
                세강병원은 항상 여러분의<br />
                목소리에 귀를 기울입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            {centers.map((center) => (
              <button
                key={center.id}
                onClick={() => setActiveTab(center.id)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                  ${activeTab === center.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {center.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* FAQ content for each tab will be added here */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {centers.find(c => c.id === activeTab)?.name} 자주하는 질문
            </h2>
            {/* FAQ items will be added here */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Add this to your global CSS file
const globalStyles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`; 