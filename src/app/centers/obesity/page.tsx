'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import PageBanner from '@/components/PageBanner';
import YouTubeSection from '@/components/YouTubeSection';
import TabNavigation from '@/components/TabNavigation';
import InfoSection from '@/components/InfoSection';

export default function ObesityPage() {
  const [activeTab, setActiveTab] = useState('iv');

  const tabs = [
    { id: 'iv', name: '수액센터' },
    { id: 'obesity', name: '비만센터' },
  ];

  return (
    <>
      <Header />
      <Menu />
      <div className="min-h-screen bg-white">
      <PageBanner
        title="세로움수액/비만센터"
        description={[
          "세강병원 세로움수액/비만센터는",
          "체계적인 관리와 치료로",
          "건강한 삶을 약속드립니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-8"
        />

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          {activeTab === 'iv' && (
            <div className="container mx-auto px-4">
              <InfoSection
                image="/images/centers/anus-img02.jpg"
                alt="수액 프로그램"
                title="수액 프로그램"
                subtitle="SEKANG HOSPITAL"
                descriptions={[
                  "환자 개인별 상태에 따라 부족한 영양성분을 선택하여 체내에 빠르게 공급합니다. 영양과 면역력 저하가 원인이 되어 발생할 수 있는 각종 질환들을 미리 예방하고 신체 균형을 맞춰 더 건강한 삶을 유지하실 수 있습니다.",
                  "세로움 수액센터에서는 환자 증상에 맞는 체계적이고 안전한 진료 환경 속에서 환자별 맞춤 특탁 솔루션을 제공하여 삶의 에너지를 보충해드리고 있습니다."
                ]}
                imagePosition="left" // 또는 "right"
              />

              <div className="mt-20">
                <div className="mb-12 text-center">
                  <p className="text-[#4169E1] tracking-[0.2em] text-sm mb-1">SEROUM FLUID SPECIAL</p>
                  <h2 className="text-4xl font-bold">세강 수액 센터 특별함</h2>
                </div>

                <div className="flex justify-center items-center gap-6">
                  <div className="w-[200px] h-[200px] rounded-full border-2 border-[#4169E1] flex items-center justify-center">
                    <p className="text-center text-lg font-medium leading-relaxed">
                      철저한 관리로<br />높은 안정성
                    </p>
                  </div>
                  <div className="w-[200px] h-[200px] rounded-full border-2 border-[#4169E1] flex items-center justify-center">
                    <p className="text-center text-lg font-medium leading-relaxed">
                      편안하고 쾌적한<br />진료 환경
                    </p>
                  </div>
                  <div className="w-[200px] h-[200px] rounded-full border-2 border-[#4169E1] flex items-center justify-center">
                    <p className="text-center text-lg font-medium leading-relaxed">
                      개인 맞춤형<br />토탈 솔루션
                    </p>
                  </div>
                  <div className="w-[200px] h-[200px] rounded-full border-2 border-[#4169E1] flex items-center justify-center">
                    <p className="text-center text-lg font-medium leading-relaxed">
                      체계적인 진료<br />연계 시스템
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-32">
                <div className="space-y-8">
                  {/* 파워 비타민 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#6B3CE3] text-2xl font-bold">파워 비타민</h3>
                        <p className="text-gray-600">비타민 파워로 활기 UP!</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        비타민C와 비타민B군, 무기질 등의 함유로 목감 및 코로나19 감염 후 회복, 신체 활력 증강, 에너지 대사 촉진, 피로회복, 금연 영중 회복 효과 기대
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>파워 비타민 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">60,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>파워 비타민 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">4회 코스 216,000원 / 6회 코스 288,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#6B3CE3] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 피로회복 & 프리미엄 회복 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#2B82ED] text-2xl font-bold">피로회복 & 프리미엄 회복</h3>
                        <p className="text-gray-600">나에게 딱 맞는 피로 회복법!</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        글루타치온 및 강력한 항산화물질 전구체인 아르기닌 함유로 간기능 개선, 면역력 강화 및 해독작용, 수면의 질 개선 효과 기대, 프리미엄회복의 경우 비타민 C, 비타민B군 무기질 등의 함유
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>피로회복 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#2B82ED] font-bold">70,000원</span>
                            <span className="bg-[#2B82ED] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>피로회복 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#2B82ED] font-bold">4회 코스 252,000원 / 6회 코스 336,000원</span>
                            <span className="bg-[#2B82ED] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>프리미엄 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#2B82ED] font-bold">100,000원</span>
                            <span className="bg-[#2B82ED] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>프리미엄 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#2B82ED] font-bold">4회 코스 360,000원 / 6회 코스 480,000원</span>
                            <span className="bg-[#2B82ED] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#2B82ED] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 필수 면역 & 프리미엄 면역 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#E435AB] text-2xl font-bold">필수 면역 & 프리미엄 면역</h3>
                        <p className="text-gray-600">면역력 증진으로 더욱 더 건강하게</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        강력한 항산화물질 전구체인 아르기닌 함유로 비타민C, 비타민B군 및 무기질 태반추출물 등으로 구성된 세포운 수액센터의 대표 면역보충 수액으로 다음의 효과 기대 : 간기능 개선 및 면역력 강화 및 항염작용, 기타 대사의 개선, 항산화효과, 부종감소
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>필수면역 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">70,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">30분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>필수면역 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">4회 코스 252,000원 / 6회 코스 336,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">30분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>프리미엄 면역 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">100,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>프리미엄 면역 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">4회 코스 360,000원 / 6회 코스 480,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#E435AB] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 감기아가라 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#6B3CE3] text-2xl font-bold">감기아가라</h3>
                        <p className="text-gray-600">전신신약회복 및 체력증진</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        리포플라빈 함유, 근육통 및 몸살을 동반한 감기, 심한 운동 등 신체의 급격한 고갈상태 개선, 신체 활력 증강, 피로회복 효과 기대
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>감기아가라 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">40,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>감기아가라 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">4회 코스 144,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#6B3CE3] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 숙취아가라 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#6B3CE3] text-2xl font-bold">숙취아가라</h3>
                        <p className="text-gray-600">숙취로 인한 만성 피로 이제 그만</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        세포 기능 활성 및 알코올 분해 효소 촉진으로 숙취 해소, 음주가 잦은 분들의 만성 피로 회복에 도움
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>숙취아가라 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">50,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>숙취아가라 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">4회 코스 180,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#6B3CE3] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 쾌속면역 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#E435AB] text-2xl font-bold">쾌속면역</h3>
                        <p className="text-gray-600">면역력 증진으로 더욱 더 건강하게</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        쾌속 면역은 우기 절대능 함유로 대사 과정에서 생기는 산화 물질물질이고 항한 항노화 작용 및 뇌기능 개선에 효과 기대
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>쾌속면역 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">40,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">20분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>쾌속면역 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">4회 코스 144,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">20분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#E435AB] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 장건강회복 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#6B3CE3] text-2xl font-bold">장건강회복</h3>
                        <p className="text-gray-600">장이 튼튼할수록 건강해지는 몸</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        장 세포 주 에너지원 글루타민 함유, 융종 제거 후 점막 회복, 만성 설사 및 장불편감 개선, 유익한 장내 세균총 유도 효과 기대
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>장건강회복 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">50,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">20분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>장건강회복 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">4회 코스 180,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">20분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#6B3CE3] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 백옥더블 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#E435AB] text-2xl font-bold">백옥더블</h3>
                        <p className="text-gray-600">지친 피부를 위한 현명한 선택</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        2배 용량의 글루타치온 함유, 강력한 항산화&항노화 작용, 간 해독능력 향상, 멜라닌 분비 감소 효과 기대
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>백옥더블 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">50,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">20분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>백옥더블 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">4회 코스 180,000원 / 8회 강화코스 320,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">20분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#E435AB] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 태반(더블/트리플) */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#6B3CE3] text-2xl font-bold">태반(더블/트리플)</h3>
                        <p className="text-gray-600">항노화 및 갱년기 증상 완화</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        만성피로회복, 상처의 치유, 탈모개선, 간 기능 개선 및 숙취해소, 갱년기 증상 완화 효과 기대
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>태반더블 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">50,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">10분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>태반더블 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">4회 코스 180,000원 / 8회 강화코스 320,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">10분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>태반트리플 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">70,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">10분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>태반트리플 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#6B3CE3] font-bold">4회 코스 252,000원 / 8회 강화코스 448,000원</span>
                            <span className="bg-[#6B3CE3] text-white px-3 py-1 rounded-full text-sm">10분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#6B3CE3] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 가슴샷에센셜(더블) */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#2B82ED] text-2xl font-bold">가슴샷에센셜(더블)</h3>
                        <p className="text-gray-600">강력한 면역으로 삶의 질 향상까지</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        흉선 분비 면역물질 싸이모신 함유, 면역 세포 활성에 관여, 암세포 사멸로 항암 치료 효과 상승, 항암치료 부작용 개선, 산화물질 감소에 도움
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>가슴샷에센셜 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#2B82ED] font-bold">80,000원</span>
                            <span className="bg-[#2B82ED] text-white px-3 py-1 rounded-full text-sm">10분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>가슴샷에센셜 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#2B82ED] font-bold">4회 코스 288,000원 / 8회 강화코스 512,000원</span>
                            <span className="bg-[#2B82ED] text-white px-3 py-1 rounded-full text-sm">10분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>가슴샷에센셜더블 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#2B82ED] font-bold">120,000원</span>
                            <span className="bg-[#2B82ED] text-white px-3 py-1 rounded-full text-sm">10분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>가슴샷에센셜더블 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#2B82ED] font-bold">4회 코스 432,000원 / 8회 강화코스 768,000원</span>
                            <span className="bg-[#2B82ED] text-white px-3 py-1 rounded-full text-sm">10분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#2B82ED] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 단백 에센셜&단백 파워업&에너지 풀파워 */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[#E435AB] text-2xl font-bold">단백 에센셜&단백 파워업&에너지 풀파워</h3>
                        <p className="text-gray-600">단백질과 영양소 보충으로 빠른 에너지 충전</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        기초 대사에 필요한 단수화물, 단백질, 오메가3를 포함한 지질 함유, 기본적인 대사에 필요한 에너지원을 제공하여 영양 상태 개선 효과 기대
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>단백 에센셜 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">50,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">30분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>단백 에센셜 패키지 :</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">4회 코스 180,000원 / 6회 강화코스 240,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">30분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>단백 파워업 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">70,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>단백 파워업 패키지 : 주 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">4회 코스 252,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">60분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>에너지 풀파워 : 1회</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">120,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">120분</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>에너지 풀파워 패키지</span>
                          <div className="flex items-center gap-4">
                            <span className="text-[#E435AB] font-bold">4주 코스 384,000원</span>
                            <span className="bg-[#E435AB] text-white px-3 py-1 rounded-full text-sm">120분</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#E435AB] text-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>백옥 3만원</span>
                          <span>|</span>
                          <span>백옥더블 5만원</span>
                          <span>|</span>
                          <span>가슴샷 8만원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Section 1 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="세로움 수액센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                  sectionTitle="세로움 수액센터 소개영상"
                />

              {/* YouTube Section 2 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="세로움 수액센터 시설안내"
                  sectionSubtitle="SEKANG HOSPITAL"
                  sectionTitle="세로움 수액센터 시설안내"
                />

              {/* YouTube Section 3 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="세로움 수액센터 치료후기"
                  sectionSubtitle="SEKANG HOSPITAL"
                  sectionTitle="세로움 수액센터 치료후기"
                />
            </div>
          )}

          {activeTab === 'obesity' && (
            <>
              <div className="container mx-auto px-4">
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="세로움 비만센터"
                  title="세로움 비만센터"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "질병관리청에 따르면 2023년 기준 우리나라 30~50대 2명 중 1명이 비만이라고 나타났습니다.매년 약 5.4% 증가하고 있습니다.",
                    "비만은 비만성 질환의 원인이 되어 체중 증가, 비만 증가, 비만 관련 질환 발생 가능성 증가, 삶의 질 저하 등 다양한 문제를 야기합니다."
                  ]}
                  imagePosition="left" // 또는 "right"
                />

                {/* 비만 기준 섹션 */}
                <div className="mt-20">
                  <div className="mb-12">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold">비만 기준</h2>
                  </div>

                  {/* 복부비만 기준 */}
                  <div className="bg-[#F8F9FF] p-4 rounded-lg mb-4">
                    <div className="flex items-center">
                      <span className="bg-[#0066CC] text-white px-4 py-1 rounded-md mr-4">복부비만 기준</span>
                      <p>남성 : 허리둘레 90cm 이상 / 여성 : 허리둘레 85cm 이상</p>
                    </div>
                  </div>

                  {/* 체질량 지수와 비만 기준 */}
                  <div className="bg-[#F8F9FF] p-4 rounded-lg mb-4">
                    <div className="flex items-center">
                      <span className="bg-[#0066CC] text-white px-4 py-1 rounded-md mr-4">체질량 지수와 비만 기준</span>
                      <p>체중(kg) / 신장(m)2 = 체질량지수 (※ 발생 가능성이 높은 질병 중류와 결합 확률 예측 가능)</p>
                    </div>
                  </div>

                  {/* 비만 기준표 */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="bg-white text-center py-4 px-6 border-b border-gray-200">저체중</th>
                          <th className="bg-white text-center py-4 px-6 border-b border-gray-200">정상체중</th>
                          <th className="bg-white text-center py-4 px-6 border-b border-gray-200">과체중</th>
                          <th className="bg-white text-center py-4 px-6 border-b border-gray-200">경도 비만</th>
                          <th className="bg-white text-center py-4 px-6 border-b border-gray-200">중등도 비만</th>
                          <th className="bg-white text-center py-4 px-6 border-b border-gray-200">고도 비만</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center py-4 px-6">18.5 미만</td>
                          <td className="text-center py-4 px-6">18.5~22.9</td>
                          <td className="text-center py-4 px-6">23~24.9</td>
                          <td className="text-center py-4 px-6">25~29.9</td>
                          <td className="text-center py-4 px-6">30~39.9</td>
                          <td className="text-center py-4 px-6">40이상</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 세로움 비만센터의 특별함 섹션 */}
              <div className="w-screen bg-[#0066CC] py-20 -mx-[calc((100vw-100%)/2)]">
                <div className="container mx-auto px-4">
                  <div className="text-center text-white mb-16">
                    <p className="tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold">세로움 비만센터의 특별함</h2>
                    <p className="mt-4 text-lg">체성분검사, 시스템관리, 맞춤약을 통한 건강한 다이어트 프로젝트</p>
                  </div>

                  <div className="flex justify-center items-center gap-6">
                    <div className="w-[200px] h-[200px] rounded-full border-2 border-white flex items-center justify-center">
                      <p className="text-center text-white text-lg font-medium leading-relaxed">
                        굶지 않는<br />다이어트
                      </p>
                    </div>
                    <div className="w-[200px] h-[200px] rounded-full border-2 border-white flex items-center justify-center">
                      <p className="text-center text-white text-lg font-medium leading-relaxed">
                        식욕억제제가<br />없는 처방
                      </p>
                    </div>
                    <div className="w-[200px] h-[200px] rounded-full border-2 border-white flex items-center justify-center">
                      <p className="text-center text-white text-lg font-medium leading-relaxed">
                        요요가 없는<br />프로그램
                      </p>
                    </div>
                    <div className="w-[200px] h-[200px] rounded-full border-2 border-white flex items-center justify-center">
                      <p className="text-center text-white text-lg font-medium leading-relaxed">
                        에너지가<br />넘치는 컨디션
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 치료 프로그램 섹션 */}
              <div className="container mx-auto px-4 mt-20">
                <div className="mb-12 text-center">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold">치료 프로그램</h2>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {/* 저주파 치료 */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">저주파 치료</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>지방분해 부분비만의 효과적 해소</li>
                      <li>단시간에 격렬히 운동한 효과</li>
                      <li>(근단력 유지, 요요현상 감소)</li>
                      <li>통증감소효과(요통, 생리통)</li>
                    </ul>
                  </div>

                  {/* 리포슬림주사 치료 */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">리포슬림주사 치료</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>비타민 B12 결가, 다이어트에 필요한 영양소 보충, 체지방 감소에 더 큰 효과</li>
                      <li>지방/셀룰라이트 분해 및 부종 감소</li>
                      <li>팔, 등, 복부, 허벅지 등 원부위의 지방 축소에 효과</li>
                    </ul>
                  </div>

                  {/* 전신등(PDP) 치료 */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">전신등(PDP) 치료</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>생육광선 이용, 림프 운동없이 누워서 편안한 관리</li>
                      <li>에너지를 순환시키며 땀과 노폐물 배출로 다이어트 효과</li>
                    </ul>
                  </div>

                  {/* 라인주사 치료 */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">라인주사 치료</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>셀룰라이트 부위의 피부 앞은 종에 주사</li>
                      <li>원활한 혈액순환 촉진</li>
                      <li>지방분해 및 체내노폐물 배출 촉진</li>
                    </ul>
                  </div>

                  {/* 카복시 치료 */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">카복시 치료</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>셀룰라이트 부위 및 치료(지방 흡입술의 50% 효과)</li>
                      <li>탄력증진 및 사이즈 감소 효과</li>
                      <li>통살치료에 효과, 산호비만 회복</li>
                    </ul>
                  </div>

                  {/* 수액 치료 */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">수액 치료</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>카테터를 통해 골라깨 항상 촉진</li>
                      <li>당대사물질 배출로 체지방 분해</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 실내전경 및 장비소개 섹션 */}
              <div className="container mx-auto px-4 mt-20">
                <div className="mb-12 text-center">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold">세로움 비만센터 실내전경 및 장비소개</h2>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {/* 이미지 1 */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative mb-4">
                      <Image
                        src="/images/centers/obesity-facility-1.jpg"
                        alt="비만센터 실내전경 1"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">비만센터 실내전경</h3>
                      <p className="text-gray-600">쾌적하고 편안한 환경에서 진행되는 맞춤형 치료</p>
                    </div>
                  </div>

                  {/* 이미지 2 */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative mb-4">
                      <Image
                        src="/images/centers/obesity-facility-2.jpg"
                        alt="비만센터 실내전경 2"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">치료실 내부</h3>
                      <p className="text-gray-600">프라이빗한 공간에서 진행되는 1:1 맞춤 관리</p>
                    </div>
                  </div>

                  {/* 이미지 3 */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative mb-4">
                      <Image
                        src="/images/centers/obesity-facility-3.jpg"
                        alt="비만센터 실내전경 3"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">치료 장비</h3>
                      <p className="text-gray-600">최신 의료장비를 통한 체계적인 비만 관리</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 장비 소개 섹션 */}
              <div className="container mx-auto px-4 mt-20 mb-20">
                <div className="mb-12 text-center">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold">장비 소개</h2>
                </div>

                <div className="space-y-16">
                  {/* 바이오 포톤 */}
                  <div className="flex items-center gap-16">
                    <div className="w-[500px] h-[500px] relative flex-shrink-0">
                      <Image
                        src="/images/centers/equipment-1.jpg"
                        alt="바이오 포톤 PDP 전신등"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#0066CC] text-3xl font-bold mb-6">바이오 포톤(Bio photon) PDP 전신등</h3>
                      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>강력한 생육광선 연에너지를 인체 전신에 집중하게 전달(복사)시키는 1도씨의 새로운 개념의 전신 사우나등입니다.</p>
                        <p>상승된 체온을 유랫동안 유지시켜 배열구의 일종인 림프구 기능과 면역력을 높여 줍니다. 세지방 분해 및 스트레스를 경감시키고 신진대사 증진 및 지방과 노폐물을 빠르게 분해, 분출시켜 줍니다.</p>
                        <p>혈관과 림프계신 및 세포의 재생 및 활성화를 시켜주고 젖산을 빠르게 감소시켜 피로회복 효과를 증진시킵니다.</p>
                      </div>
                    </div>
                  </div>

                  {/* 저주파 SSondar Smaster */}
                  <div className="flex items-center gap-16 flex-row-reverse">
                    <div className="w-[500px] h-[500px] relative flex-shrink-0">
                      <Image
                        src="/images/centers/equipment-2.jpg"
                        alt="저주파 SSondar Smaster"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#0066CC] text-3xl font-bold mb-6">저주파 SSondar Smaster</h3>
                      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>저주파 비만 치료기는 살을 빼고자 하는 부위에 저주파를 흘려보내 지방 세포를 자극하고 지방세포 크기를 줄이는 부분비만 관리법입니다.</p>
                        <p>지방 세포 크기 감소, 피부 탄력 증진, 근육이완, 혈액, 림프액 순환 촉진, 신진대사 활성화에 효과적입니다.</p>
                      </div>
                    </div>
                  </div>

                  {/* 메조건 SSondar Meso2 */}
                  <div className="flex items-center gap-16">
                    <div className="w-[500px] h-[500px] relative flex-shrink-0">
                      <Image
                        src="/images/centers/equipment-3.jpg"
                        alt="메조건 SSondar Meso2"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#0066CC] text-3xl font-bold mb-6">메조건 SSondar Meso2</h3>
                      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>비만관리를 위한 정확한 약물주입과 동증이 거의 없는 메조건입니다.</p>
                        <p>약물손실 최소화 시스템을 도입, 피부에 직접 닿지 않아 피부의 자극을 줄이고 환자의 피부 두께에 따라 시술하도록 설계되었습니다.</p>
                      </div>
                    </div>
                  </div>

                  {/* 카복시 테라피 */}
                  <div className="flex items-center gap-16 flex-row-reverse">
                    <div className="w-[500px] h-[500px] relative flex-shrink-0">
                      <Image
                        src="/images/centers/equipment-4.jpg"
                        alt="카복시 테라피"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#0066CC] text-3xl font-bold mb-6">카복시 테라피</h3>
                      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>이산화탄소를 피부에 주입하여 혈액순환을 촉진시키고 산소공급을 증가시켜 셀룰라이트 분해, 피부탄력, 지방분해에 효과적인 시술입니다.</p>
                        <p>지방분해 및 셀룰라이트 개선, 혈액순환 개선, 피부재생 및 탄력증진에 효과가 있습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Section 1 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="세로움 비만센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                  sectionTitle="세로움 비만센터 소개영상"
                />

              {/* YouTube Section 2 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="세로움 비만센터 시설안내"
                  sectionSubtitle="SEKANG HOSPITAL"
                  sectionTitle="세로움 비만센터 시설안내"
                />

              {/* YouTube Section 3 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="세로움 비만센터 치료후기"
                  sectionSubtitle="SEKANG HOSPITAL"
                  sectionTitle="세로움 비만센터 치료후기"
                />
            </>
          )}
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 
