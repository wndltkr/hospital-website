'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useEffect } from 'react';
import PageBanner from '@/components/PageBanner';

// Kakao 맵 타입 선언
declare global {
  interface Window {
    daum: {
      roughmap: {
        Lander: new (config: {
          timestamp: string;
          key: string;
          mapHeight: string;
        }) => {
          render: () => void;
        };
      };
    };
  }
}

export default function LocationPage() {
  useEffect(() => {
    // Kakao 맵 초기화 스크립트
    const script = document.createElement('script');
    script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.daum && window.daum.roughmap) {
        new window.daum.roughmap.Lander({
          "timestamp": "1694394742013",
          "key": "2g5ro",
          "mapHeight": "360"
        }).render();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Menu />
      <div className="min-h-screen bg-white">
        {/* Banner Section */}
        <PageBanner
        title="오시는길"
        description={[
          "세상을 아름답게",
          "사회를 건강하게"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

        <SideMenu />
        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex gap-12">
            {/* Side Menu */}
            <div className="w-64 flex-shrink-0">
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">오시는 길</h2>
                
                {/* Map Section */}
                <div className="mb-8">
                  <div id="daumRoughmapContainer1694394742013" className="w-full h-[360px] relative rounded-lg overflow-hidden"></div>
                  <p className="mt-4 text-gray-600 text-center">
                    대구광역시 달서구 구마로 220 (대구광역시 달서구 송현동 56-2)<br />
                    대표번호 : 053-215-6200
                  </p>
                </div>

                {/* Transportation Info */}
                <div className="space-y-12">
                  {/* Bus Information */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">버스 이용 시</h3>
                    <p className="text-gray-600 mb-4">병원앞, 서부정류장 정류장에서 하차</p>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#1E7CC4] text-white rounded-md mr-2">일반버스</span>
                        <span className="text-gray-700">518, 564, 618, 651, 726</span>
                      </div>
                      
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#1E7CC4] text-white rounded-md mr-2">일반버스</span>
                        <span className="text-gray-700">306, 518, 609, 618, 623, 649, 650, 651, 706, 726, 750, 805, 836</span>
                      </div>
                      
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#E31837] text-white rounded-md mr-2">광역버스</span>
                        <span className="text-gray-700">급행6, 남구1-1, 서구1, 서구1-1</span>
                      </div>
                    </div>
                  </div>

                  {/* Subway Information */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">지하철 이용 시</h3>
                    <p className="text-gray-600">
                      1호선 서부정류장역 하차 1번 출구로 나와서 본리네거리 방향 도보로 200m거리
                    </p>
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