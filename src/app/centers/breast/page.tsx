'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';

export default function BreastCenterPage() {
  const [activeTab, setActiveTab] = useState('thyroid');

  const tabs = [
    { id: 'thyroid', name: '갑상선' },
    { id: 'breast', name: '유방암' },
  ];

  return (
    <>
      <Header />
      <Menu />
      <div className="min-h-screen bg-white">
        {/* Banner Section */}
        <div className="relative h-[400px] bg-gradient-to-r from-[#F8F9FF] to-[#F1F4FF]">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <p className="text-[#0066CC] tracking-widest mb-4">SEKANG HOSPITAL</p>
              <h1 className="text-5xl font-bold mb-6">유방갑상선센터</h1>
              <p className="text-lg text-gray-600">
                정기검진이 중요한 유방·갑상선<br />
                맞춤형 진료·체계적인 치료법 제시
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <Image
                src="/images/centers/breast-banner.jpg"
                alt="유방갑상선센터"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="container mx-auto">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-8 text-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-[#0066CC] text-[#0066CC]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          {activeTab === 'thyroid' && (
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                <h2 className="text-4xl font-bold">갑상선</h2>
              </div>

              <div className="flex gap-20 items-center">
                <div className="w-[500px] h-[500px] relative border border-gray-100 flex-shrink-0">
                  <Image
                    src="/images/centers/thyroid-detail.jpg"
                    alt="갑상선 상세"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 text-lg leading-[1.8] whitespace-pre-line">
                    갑상선은 목 중앙에 튀어나온 물렁뼈 아래쪽에 위치하며 숨골(기관)의 주위를 양쪽으로 둘러싸고 있어 나비가 날개를 편 것과 흡사한 모양을 가집니다.

                    또 숨을 쉬는 기도를 감싸고 있는 나비넥타이 모양을 갖고 있는 내분비기관으로서 몸의 에너지 대사를 조절하는 갑상선 호르몬을 만들고 저장하며 혈액 내 분비하는 역할을 담당합니다. 이와 함께 대사 과정을 촉진시켜 신체가 평균으로 하는 에너지를 공급하고 소비시키게 됩니다.
                  </p>
                </div>
              </div>

              {/* 갑상선 질환의 종류 섹션 */}
              <div className="mt-32">
                <div className="mb-12 text-center">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold">갑상선 질환의 종류</h2>
                </div>

                <div className="bg-[#F8F9FF] rounded-2xl p-12">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-6 w-[240px]">
                          <span className="text-[#0066CC] font-medium">갑상선 기능항진</span>
                        </td>
                        <td className="py-6 text-gray-700">
                          갑상선호르몬이 많아져 신체 대사가 증가에 따른 에너지 소모가 늘어납니다. 체중이 감소하고 몸이 더워 땀을 많이 흘리며 다리에 쉽게 지치게 됩니다.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-6">
                          <span className="text-[#0066CC] font-medium">갑상선 기능저하</span>
                        </td>
                        <td className="py-6 text-gray-700">
                          갑상선 호르몬이 부족해서 기능이 저하되고 매사에 무기력해지며 몸이 쉽게 붓습니다. 체중이 증가하고 체온이 낮아져 추위를 많이 느끼게 됩니다.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-6">
                          <span className="text-[#0066CC] font-medium">갑상선 결절</span>
                        </td>
                        <td className="py-6 text-gray-700">
                          갑상선은 우리 몸에서 쉽게(중앙 혹은 결절)이 가장 많이 생기는 장기입니다. 갑상선 결절은 악성(암)과 양성(암이 아닌 것) 중양 갑별이 중요합니다.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6">
                          <span className="text-[#0066CC] font-medium">갑상선암</span>
                        </td>
                        <td className="py-6 text-gray-700">
                          다른 암과 달리 비교적 예후가 좋은 편으로, 조기에 발견해 적절히 치료받으면 완치율이 100%에 가까워 크게 두려워할 필요는 없습니다.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'breast' && (
            <div className="container mx-auto px-4">
              <div className="flex gap-16">
                <div className="w-[460px] h-[340px] relative border border-gray-100">
                  <Image
                    src="/images/centers/breast-intro.jpg"
                    alt="유방암센터"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold">유방암센터</h2>
                  </div>
                  <p className="text-gray-800 text-lg leading-[1.8]">
                    유방암은 조기 발견과 치료가 매우 중요한 질환입니다.<br />
                    정기적인 검진을 통해 조기에 발견하면 90% 이상의 완치율을 보입니다.<br /><br />
                    세강병원 유방암센터는 첨단 장비를 통한 정확한 진단과<br />
                    환자 맞춤형 치료 계획을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 