'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';

interface FloorInfo {
  floor: string;
  facilities: string;
}

interface FloorImage {
  src: string;
  title: string;
}

interface FloorImages {
  [key: string]: FloorImage[];
}

// 층별 데이터
const floorData: FloorInfo[] = [
  { floor: '7층', facilities: '영양과 / 강당' },
  { floor: '6층', facilities: '간호간병통합서비스병동 / 간호부 / 심사과 / 전산실 / 대외협력본부' },
  { floor: '5층', facilities: '간호간병통합서비스병동 / VIP실 / 1인실 / SEROUM 수액센터 · 비만센터' },
  { floor: '3층', facilities: '종합건강검진센터 / 내시경센터 / 유방갑상선센터(외과7,8)' },
  { floor: '2층', facilities: '내과1 / 외과 2,5,6,9 / 신경외과 / 수술실 / 건강증진센터(국민건강보험공단검진)' },
  { floor: '1층', facilities: '내과 2,3,5,6,7,8/ 원무과 / 검사예약센터 / 통합진료실/ 영상의학과/ 검사실 / 주사실 / 약국 / 편의점' },
  { floor: 'B1층', facilities: '행정사무실, 임상병리실' },
];

// 층별 이미지 데이터
const floorImages: FloorImages = {
  '7층': [
    { src: '/images/floors/7f-1.jpg', title: '전경' },
    { src: '/images/floors/7f-2.jpg', title: '강당' },
  ],
  '6층': [
    { src: '/images/floors/6f-1.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/floors/6f-2.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/floors/6f-3.jpg', title: '간호간병통합서비스병동' },
  ],
  '5층': [
    { src: '/images/floors/5f-1.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/floors/5f-2.jpg', title: 'VIP실' },
    { src: '/images/floors/5f-3.jpg', title: '수액센터' },
    { src: '/images/floors/5f-4.jpg', title: '비만센터' },
  ],
  '3층': [
    { src: '/images/floors/3f-1.jpg', title: '종합건강검진센터' },
    { src: '/images/floors/3f-2.jpg', title: '내시경센터' },
    { src: '/images/floors/3f-3.jpg', title: '유방갑상선센터' },
  ],
  '2층': [
    { src: '/images/floors/2f-1.jpg', title: '내과/외과' },
    { src: '/images/floors/2f-2.jpg', title: '수술실' },
    { src: '/images/floors/2f-3.jpg', title: '건강증진센터' },
  ],
  '1층': [
    { src: '/images/floors/1f-1.jpg', title: '원무과' },
    { src: '/images/floors/1f-2.jpg', title: '통합진료실' },
    { src: '/images/floors/1f-3.jpg', title: '영상의학과' },
  ],
  'B1층': [
    { src: '/images/floors/b1f-1.jpg', title: '행정사무실' },
    { src: '/images/floors/b1f-2.jpg', title: '임상병리실' },
  ],
};

export default function FloorsPage() {
  const [selectedFloor, setSelectedFloor] = useState<string>('7층');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  return (
    <>
      <Header />
      <Menu />
      <div className="min-h-screen bg-white">
        {/* Banner Section */}
        <PageBanner
        title="층별안내"
        description={[
          "세상을 아름답게",
          "사회를 건강하게"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex gap-12">
            {/* Side Menu */}
            <div className="w-64 flex-shrink-0">
              <SideMenu />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">층별안내</h2>
                
                {/* Floor Guide Table */}
                <div className="mb-12">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="py-3 px-4 text-white text-left w-24">층</th>
                        <th className="py-3 px-4 text-white text-left">세부장소</th>
                      </tr>
                    </thead>
                    <tbody>
                      {floorData.map((item, index) => (
                        <tr 
                          key={index}
                          className={`border-b hover:bg-gray-50 cursor-pointer ${selectedFloor === item.floor ? 'bg-blue-50' : ''}`}
                          onClick={() => {
                            setSelectedFloor(item.floor);
                            setCurrentImageIndex(0);
                          }}
                        >
                          <td className="py-4 px-4 font-medium">{item.floor}</td>
                          <td className="py-4 px-4">{item.facilities}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Floor Images Section */}
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{selectedFloor} 전경</h3>
                  
                  {/* Image Slider */}
                  <div className="relative">
                    {floorImages[selectedFloor] && (
                      <>
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                          <Image
                            src={floorImages[selectedFloor][currentImageIndex].src}
                            alt={floorImages[selectedFloor][currentImageIndex].title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                          <button
                            onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : floorImages[selectedFloor].length - 1)}
                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          >
                            ←
                          </button>
                          <button
                            onClick={() => setCurrentImageIndex(prev => prev < floorImages[selectedFloor].length - 1 ? prev + 1 : 0)}
                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          >
                            →
                          </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-2 mt-4">
                          {floorImages[selectedFloor].map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`relative w-24 h-16 rounded-lg overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-blue-500' : ''}`}
                            >
                              <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className="object-cover"
                              />
                            </button>
                          ))}
                        </div>

                        {/* Image Title */}
                        <p className="text-center mt-4 text-gray-600">
                          {floorImages[selectedFloor][currentImageIndex].title}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 