"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';

const equipments = [
  {
    id: 1,
    name: '콜필구스 CV-290',
    image: '/images/equipment/cv-290.jpg',
    description: '선명한 고해상도 HD영상을 통해 육안으로 확인하기 어려운 조직학과 조기암 조직을 쉽게 구분할 수 있고 정확한 진단과 치료가 가능합니다. 또 곡곡 부위에서도 부드럽게 진입할 수 있어 기존 내시경 검사 보다 환자의 불편함을 줄여줄 수 있는 대학병원급 장비입니다.'
  },
  {
    id: 2,
    name: '3D 맘모그래피',
    image: '/images/equipment/mammography.jpg',
    description: 'X선 투사 신호를 디지털 신호로 전환해 영상화하는 최신 고해상도 하이엔드급 3D 진찰 대학병원급 장비로 유방암을 진단합니다. 2D 제품을 통한 검사에서 발견하기 어려웠던 암세포나 미세석회화를 명확하게 구별할 수 있습니다.'
  },
  {
    id: 3,
    name: '초음파 삼성 RS85',
    image: '/images/equipment/rs85.jpg',
    description: '기존 도플러 초음파 검사로 추정하지 못했던 미세혈관 조직의 혈류 흐름까지 보여져 병변 확인에 유리합니다. 초음파 혈파 탄성도를 이용해 인체 조직의 단성도를 정량화한 임상진단 자료를 만들어 간경화나 종양 진단의 정확도가 높습니다. 조영제 영상으로 혈류 흐름이나 병변 진단 범위를 각 장부 외에 소화 진단까지 확장했습니다.'
  }
];

export default function FacilitiesPage() {
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
              <h1 className="text-5xl font-bold mb-6">장비소개</h1>
              <p className="text-lg text-gray-700">
                세강병원 홈페이지를<br />
                방문해 주셔서 감사합니다.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <Image
                src="/images/hospital-building.jpg"
                alt="세강병원 건물"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-l-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8F3FF] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Equipment Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-3 gap-8">
              {equipments.map((equipment) => (
                <div key={equipment.id} className="bg-white rounded-lg overflow-hidden border">
                  <div className="relative aspect-square">
                    <Image
                      src={equipment.image}
                      alt={equipment.name}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-center py-4 bg-[#F4A460] text-white mb-4">
                      {equipment.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {equipment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="세강병원 유방암 예방"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center mt-8">
                <h2 className="text-3xl font-bold mb-4">
                  유방촬영장비를 도입해<br />
                  '유방암 예방'에<br />
                  최선을 다하고 있습니다
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 