'use client';

import Image from 'next/image';
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
  { floor: '7층', facilities: '전경 / 강당' },
  { floor: '6층', facilities: '간호간병통합서비스병동' },
  { floor: '5층', facilities: '간호간병통합서비스병동 / SEROUM 수액센터 · 비만센터' },
  { floor: '3층', facilities: '내시경센터' },
  { floor: '2층', facilities: '건강증진센터(국민건강보험공단검진)' },
  { floor: '1층', facilities: '내과 2,3,5,6,7,8/ 원무과 / 검사예약센터 / 통합진료실/ 영상의학과/ 검사실 / 주사실 / 약국 / 편의점' },
  { floor: 'B1층', facilities: '행정사무실, 임상병리실' },
];

// 층별 이미지 데이터
const floorImages: FloorImages = {
  '7층': [
    { src: '/images/guide/img_hospview_07_01.jpg', title: '전경' },
    { src: '/images/guide/img_hospview_07_02.jpg', title: '강당' },
  ],
  '6층': [
    { src: '/images/guide/img_hospview_06_01.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/guide/img_hospview_06_02.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/guide/img_hospview_06_03.jpg', title: '간호간병통합서비스병동' },
  ],
  '5층': [
    { src: '/images/guide/img_hospview_05_01.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/guide/img_hospview_05_02.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/guide/img_hospview_05_03.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/guide/img_hospview_05_04.jpg', title: '간호간병통합서비스병동' },
    { src: '/images/guide/img_hospview_05_011.jpg', title: '수액센터' },
    { src: '/images/guide/img_hospview_05_012.jpg', title: '수액센터' },
    { src: '/images/guide/img_hospview_05_013.jpg', title: '수액센터' },
    { src: '/images/guide/img_hospview_05_014.jpg', title: '수액센터' },
    { src: '/images/guide/img_hospview_05_021.jpg', title: '비만센터' },
    { src: '/images/guide/img_hospview_05_022.jpg', title: '비만센터' },
    { src: '/images/guide/img_hospview_05_023.jpg', title: '비만센터' },
    { src: '/images/guide/img_hospview_05_024.jpg', title: '비만센터' },
  ],
  '3층': [
    { src: '/images/guide/img_hospview_03_011.jpg', title: '내시경센터 종합건강검진센터' },
    { src: '/images/guide/img_hospview_03_012.jpg', title: '내시경센터 대기실' },
    { src: '/images/guide/img_hospview_03_013.jpg', title: '내시경센터 소독실' },
    { src: '/images/guide/img_hospview_03_014.jpg', title: '내시경센터 심전도실' },
    { src: '/images/guide/img_hospview_03_015.jpg', title: '내시경센터 체위' },
  ],
  '2층': [
    { src: '/images/guide/img_hospview_02_011.jpg', title: '건강증진센터' },
    { src: '/images/guide/img_hospview_02_012.jpg', title: '건강증진센터 검사대기실' },
    { src: '/images/guide/img_hospview_02_013.jpg', title: '건강증진센터 시력검사' },
    { src: '/images/guide/img_hospview_02_014.jpg', title: '건강증진센터 접수수납' },
    { src: '/images/guide/img_hospview_02_015.jpg', title: '건강증진센터 채혈검사' },
    { src: '/images/guide/img_hospview_02_016.jpg', title: '건강증진센터 청력검사실' },
    { src: '/images/guide/img_hospview_02_017.jpg', title: '건강증진센터 체위' },
  ],
  '1층': [
    { src: '/images/guide/img_hospview_01_03.jpg', title: '영상의학과' },
    { src: '/images/guide/img_hospview_01_04.jpg', title: '영상의학과' },
    { src: '/images/guide/img_hospview_01_05.jpg', title: '야간진료실' },
    { src: '/images/guide/img_hospview_01_06.jpg', title: '검사실' },
    { src: '/images/guide/img_hospview_01_07.jpg', title: '원무과' },
    { src: '/images/guide/img_hospview_01_08.jpg', title: '접수' },
  ],
  'B1층': [
    { src: '/images/guide/img_hospview_b1_011.jpg', title: '임상병리실' },
    { src: '/images/guide/img_hospview_b1_012.jpg', title: '임상병리실' },
    { src: '/images/guide/img_hospview_b1_013.jpg', title: '임상병리실' },
    { src: '/images/guide/img_hospview_b1_014.jpg', title: '임상병리실' },
  ],
};

export default function FloorsPage() {
  const [selectedFloor, setSelectedFloor] = useState<string>('7층');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  return (
    <>
      <Menu />
      <SideMenu />
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

            {/* Main Content */}
            <div className="flex-1">
              <div>
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