"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import YouTubeSection from '@/components/YouTubeSection';

const equipments = [
  {
    id: 1,
    name: "올림푸스 CV-290",
    image: "/images/about/about08-img01.jpg",
    description: "선명한 고해상도 HD영상을 통해 육안으로 확인하기 어려운 불명확한 조기암 조직을 쉽게 구분할 수 있고 정확한 진단과 치료가 가능합니다. 또 굴곡 부위에서도 부드럽게 진입할 수 있어 기존 내시경 검사 보다 환자의 불편함을 줄여줄 수 있는 대학병원급 장비입니다."
  },
  {
    id: 2,
    name: "3D 맘모그래피",
    image: "/images/about/about08-img02.jpg",
    description: "X선 투사 신호를 디지털 신호로 전환해 영상화하는 최신 고해상도 하이엔드급 3D 전용 대학병원급 장비로 유방암을 진단합니다. 2D 제품을 통한 검사에서 발견하기 어려웠던 암세포나 미세석회화를 명확하게 구별할 수 있습니다."
  },
  {
    id: 3,
    name: "초음파 삼성 RS85",
    image: "/images/about/about08-img03.jpg",
    description: "기존 도플러 초음파 검사로 측정하지 못했던 미세혈관 조직의 혈류 흐름까지 보여줘 병변 확인에 용이합니다. 초음파 횡파 탄성을 이용해 인체 조직의 탄성도를 정량화한 임상진단 지표를 만들어 간경화나 종양 진단의 정확도가 높습니다. 조영제 영상으로 혈류 흐름이나 병변 진단 범위를 간, 유방 외에 소아 진단까지 확장했습니다."
  },
  {
    id: 4,
    name: "초음파 캐논 i700",
    image: "/images/about/about08-img04.jpg",
    description: "캐논 특허 첨단 빔포밍 기술로 영상의 균일도를 향상시켜 고해상도의 영상을 제공합니다. 심장, 근골격, 혈관, 비뇨 생식기 등 다양한 부위의 검사가 가능한 프로브 라인업을 제공하고 있습니다. 초미세, 초저속혈류를 고해상도 영상으로 구현하는 첨단 도플러 기술을 적용했습니다."
  },
  {
    id: 5,
    name: "LightSpeed VCT 128채널",
    image: "/images/about/about08-img05.jpg",
    description: "관상동맥질환 등 미세한 병변까지 진단이 가능한 의료 장비입니다. 기존 CT 대비 영상의 질적 저하 없이 70%이상 피폭량을 줄였으며 한 번의 조영제 주입으로 뇌혈관 검사의 영상 적용 범위를 2배정도 향상시켰습니다. 짧은 시간 내에 저선량으로 검사를 진행하기 때문에 관상동맥 질환 환자뿐만 아니라 관상동맥 질환이 의심되는 환자들도 더 안전하게 진단받을 수 있습니다."
  },
  {
    id: 6,
    name: "스트레스진단기 SA-3000NEW",
    image: "/images/about/about08-img06.jpg",
    description: "SA-3000NEW는 자율신경계검사장비로 측정방법은 심박변이도 즉 HRV(Heart Rate Variability)를 통해 정확한 검사가 가능합니다. HRV 검사는 만성피로, 우울, 불안, 스트레스, 두통, 어지럼증, 면역력 저하, 기능성 소화장애 등 당뇨신경병증 등 각종 생화학 검사나 구조적 검사로 알 수 없는 기능 장애를 검사할 수 있습니다."
  },
  {
    id: 7,
    name: "바이오피드백 HNJ-7000",
    image: "/images/about/about08-img07.jpg",
    description: "의자 중앙 센서로 환자의 골반근육 수축력을 감지해 컴퓨터로 확인하는 의료 장비입니다. 요실금 물리치료기로서 적은 통증으로 요실금, 배뇨장애 개선 효과가 있고 실시간 모니터링을 통해 정확한 치료를 합니다. 전립선질환 환자의 배뇨 후 불편감, 요점적, 약한 요실금, 약으로 호전되지 않는 과민성방광 등이 있을 때 쉽게 적용할 수 있는 장비입니다."
  },
  {
    id: 8,
    name: "한국 올림푸스 EVIS X1",
    image: "/images/about/about08-img08.jpg",
    description: "이비스 엑스원은 병변부위 가시성 향상 및 혁신 기능이 탑재된 최신식 내시경 시스템으로 RDI, TXI, NBI 등 신기술의 집약체로 위, 대장, 식도 등의 소화기질환에서 의료진이 환자 이상 부위를 더 효과적으로 발견할 수 있게 진단 환경이 더 개선되고 궁극적으로 환자들이 더 나은 치료 성과를 볼 수 있게 해줍니다."
  }
];

export default function FacilitiesPage() {
  return (
    <>
      <Menu />
      <SideMenu />
      <main>
      <PageBanner
        title="장비소개"
        description={[
          "세강병원 홈페이지를",
          "방문해 주셔서 감사합니다"
        ]}
        backgroundImage="/images/about/about-vis.jpg"
      />

        {/* Equipment Grid Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-3 gap-8">
              {equipments.map((equipment, index) => (
                <motion.div 
                  key={equipment.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden border"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    className="relative aspect-square"
                  >
                    <Image
                      src={equipment.image}
                      alt={equipment.name}
                      fill
                      className="object-contain p-8"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="p-6"
                  >
                    <h3 className="text-xl font-bold text-center py-4 bg-[#F4A460] text-white mb-4">
                      {equipment.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {equipment.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <YouTubeSection
          videoId="VIDEO_ID"
          title="장비소개 영상"
        />
      </main>
      <Footer />
    </>
  );
} 