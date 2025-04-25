'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

type HistoryData = {
  [key: string]: {
    [year: string]: {
      [month: string]: string;
    };
  };
};

const historyData: HistoryData = {
  '2023~2022': {
    '2023': {
      '12': '세강병원 신관 증축공사 완료',
      '09': '최신 MRI 장비 도입',
      '06': '대한민국 의료서비스 대상 수상'
    },
    '2022': {
      '11': '건강검진센터 리모델링 완료',
      '07': '의료기관 인증 획득',
      '03': '최신 CT 장비 도입'
    }
  },
  '2021~2020': {
    '2021': {
      '12': '의료정보시스템 고도화',
      '08': '외래진료센터 확장',
      '03': '코로나19 전담진료소 운영'
    },
    '2020': {
      '11': '비대면 진료시스템 도입',
      '06': '감염관리실 신설',
      '02': '스마트병원 시스템 구축'
    }
  }
};

const yearRanges = [
  '2023~2022', '2021~2020', '2018~2017', '2015~2012', '2011~2010',
  '2009~2007', '1997~1994', '1992~1991', '1990~1989', '1988~1984'
];

// 40주년 축하메시지 동영상 데이터
const celebrationVideos = [
  { id: 1, title: '40주년 기념 영상', thumbnail: '/images/video-thumb-1.jpg', videoId: 'VIDEO_ID_1' },
  { id: 2, title: '의료진 축하 메시지', thumbnail: '/images/video-thumb-2.jpg', videoId: 'VIDEO_ID_2' },
  { id: 3, title: '직원 축하 메시지', thumbnail: '/images/video-thumb-3.jpg', videoId: 'VIDEO_ID_3' },
  { id: 4, title: '환자 감사 메시지', thumbnail: '/images/video-thumb-4.jpg', videoId: 'VIDEO_ID_4' },
  { id: 5, title: '지역사회와 함께한 40년', thumbnail: '/images/video-thumb-5.jpg', videoId: 'VIDEO_ID_5' },
  { id: 6, title: '미래비전 선포식', thumbnail: '/images/video-thumb-6.jpg', videoId: 'VIDEO_ID_6' },
];

export default function HistoryPage() {
  const [selectedRange, setSelectedRange] = useState('2023~2022');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleRangeClick = (range: string) => {
    setSelectedRange(range);
  };

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const currentData = historyData[selectedRange] || {};
  const years = Object.keys(currentData).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <Header />
      <Menu />
      <SideMenu />
      <main>
      <PageBanner
        title="연혁"
        description={[
          "세강병원의 발자취를",
          "소개합니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

        {/* History Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16"
            >
              HISTORY
            </motion.h2>
            
            {/* Year Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-5 gap-4 mb-12"
            >
              {yearRanges.slice(0, 5).map((range, index) => (
                <motion.div 
                  key={range} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="col-span-1"
                >
                  <button
                    onClick={() => handleRangeClick(range)}
                    className={`w-full py-4 text-xl font-bold transition-colors
                      ${selectedRange === range 
                        ? 'text-[#FF6B00] border-b-2 border-[#FF6B00]'
                        : 'text-gray-400 border-b-2 border-gray-200 hover:text-[#FF6B00] hover:border-[#FF6B00]'
                      }`}
                  >
                    {range}
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row of Year Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-5 gap-4 mb-20"
            >
              {yearRanges.slice(5).map((range, index) => (
                <motion.div 
                  key={range}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="col-span-1"
                >
                  <button
                    onClick={() => handleRangeClick(range)}
                    className={`w-full py-4 text-xl font-bold transition-colors
                      ${selectedRange === range 
                        ? 'text-[#FF6B00] border-b-2 border-[#FF6B00]'
                        : 'text-gray-400 border-b-2 border-gray-200 hover:text-[#FF6B00] hover:border-[#FF6B00]'
                      }`}
                  >
                    {range}
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* History Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-12 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-12">
                {years.map((year, yearIndex) => (
                  <motion.div 
                    key={year}
                    initial={{ opacity: 0, x: yearIndex % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: yearIndex * 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-8">{year}</h3>
                    <ul className="space-y-6">
                      {Object.entries(currentData[year] || {})
                        .sort((a, b) => Number(b[0]) - Number(a[0]))
                        .map(([month, content], monthIndex) => (
                          <motion.li 
                            key={month} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: monthIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-[#FF6B00] font-bold mr-4">{month}</span>
                            <p className="text-gray-700">{content}</p>
                          </motion.li>
                        ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main YouTube Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/MAIN_VIDEO_ID"
                title="세강병원 40년사"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[600px] rounded-2xl"
              ></iframe>
            </div>
          </div>
        </motion.section>

        {/* 40th Anniversary Video Board Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12"
            >
              [40주년 축하메세지]
            </motion.h2>
            
            {selectedVideo ? (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    title="40주년 축하메시지"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[600px] rounded-2xl"
                  ></iframe>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  목록으로
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {celebrationVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => handleVideoClick(video.videoId)}
                    className="cursor-pointer group"
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-xl">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#FF6B00] border-b-8 border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-[#FF6B00] transition-colors">
                      {video.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 