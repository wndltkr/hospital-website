import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';

export default function VisionPage() {
  return (
    <>
      <Header />
      <Menu />
      <SideMenu />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-[#E8F3FF] to-[#F5F9FF] overflow-hidden">
          <div className="container mx-auto px-8 h-full flex items-center">
            <div className="relative z-10">
              <p className="text-[#666] tracking-widest mb-4">SEKANG HOSPITAL</p>
              <h1 className="text-4xl font-bold mb-6">비전/미션</h1>
              <p className="text-lg text-gray-700">
                세강병원 홈페이지를<br />
                방문해 주셔서 감사합니다.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <Image
                src="/images/hospital-vision.jpg"
                alt="세강병원 건물"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-l-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8F3FF] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <div className="flex gap-20">
              {/* Left Content */}
              <div className="w-1/2">
                <div className="border-t-4 border-orange-500 w-24 mb-8"></div>
                <h2 className="text-4xl font-bold mb-4">Purpose</h2>
                <h3 className="text-2xl mb-8">설립목적</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">01.</span>
                    지역주민의 보건향상과 지역발전에 기여
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">02.</span>
                    임상연구를 통한 의료수준 향상
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">03.</span>
                    지역내 의료수요 충족을 통한 복지사회 건설
                  </li>
                </ul>
              </div>
              {/* Right Image */}
              <div className="w-1/2">
                <Image
                  src="/images/doctor-purpose.jpg"
                  alt="의사 이미지"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="flex gap-20">
              {/* Left Content */}
              <div className="w-1/2">
                <div className="border-t-4 border-blue-700 w-24 mb-8"></div>
                <h2 className="text-4xl font-bold mb-4">Vision</h2>
                <h3 className="text-2xl mb-8">비전</h3>
                <p className="text-lg mb-12">최적의 의료서비스로 지역주민과 함께하는 신뢰받는 병원</p>
                
                <div className="bg-white p-8 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6">세강병원 원훈</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                      Health Society 건강사회
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                      Patient-centered 환자중심
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                      Self-development 자기개발
                    </li>
                  </ul>
                </div>
              </div>
              {/* Right Image */}
              <div className="w-1/2">
                <Image
                  src="/images/hospital-vision-2.jpg"
                  alt="병원 비전 이미지"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 