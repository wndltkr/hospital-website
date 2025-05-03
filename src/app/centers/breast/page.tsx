'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import PageBanner from '@/components/PageBanner';
import TabNavigation from '@/components/TabNavigation';
import InfoSection from '@/components/InfoSection';
import BannerSection from '@/components/BannerSection';

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
      <PageBanner
        title="유방갑상선센터"
        description={[
          "정기검진이 중요한 유방-갑상선",
          "맞춤형 진료-체계적인 치료법 제시"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

        {/* Tab Navigation */}
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
          {activeTab === 'thyroid' && (
            <div className="container mx-auto px-4">
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="갑상선"
                  title="갑상선"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "갑상선은 목 중앙에 튀어나온 물렁뼈 아래쪽에 위치하며 숨골(기관)의 주위를 양쪽으로 둘러싸고 있어 나비가 날개를 편 것과 흡사한 모양을 가집니다.",
                    "숨을 쉬는 기도를 감싸고 있는 나비넥타이 모양을 갖고 있는 내분비기관으로서 몸의 에너지 대사를 조절하는 갑상선 호르몬을 만들고 저장하며 혈액 내 분비하는 역할을 담당합니다.",
                    "이와 함께 대사 과정을 촉진시켜 신체가 평균으로 하는 에너지를 공급하고 소비시키게 됩니다.",
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* 갑상선 질환의 종류 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="py-20">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                      <h2 className="text-white text-4xl font-bold">갑상선 질환의 종류</h2>
                    </div>

                    <div className="bg-white rounded-lg">
                      <table className="w-full">
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-8 px-12 w-[240px]">
                              <span className="text-[#1A4B8E] font-medium text-lg">갑상선 기능항진</span>
                            </td>
                            <td className="py-8 pr-12 text-gray-700 text-lg leading-relaxed">
                              갑상선호르몬이 많아져 신체 대사가 증가에 따른 에너지 소모가 늘어납니다. 체중이 감소하고 몸이 더워 땀을 많이 흘리며 다리에 쉽게 지치게 됩니다.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-8 px-12">
                              <span className="text-[#1A4B8E] font-medium text-lg">갑상선 기능저하</span>
                            </td>
                            <td className="py-8 pr-12 text-gray-700 text-lg leading-relaxed">
                              갑상선 호르몬이 부족해서 기능이 저하되고 매사에 무기력해지며 몸이 쉽게 붓습니다. 체중이 증가하고 체온이 낮아져 추위를 많이 느끼게 됩니다.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-8 px-12">
                              <span className="text-[#1A4B8E] font-medium text-lg">갑상선 결절</span>
                            </td>
                            <td className="py-8 pr-12 text-gray-700 text-lg leading-relaxed">
                              갑상선은 우리 몸에서 쉽게(중앙 혹은 결절)이 가장 많이 생기는 장기입니다. 갑상선 결절은 악성(암)과 양성(암이 아닌 것) 중양 갑별이 중요합니다.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-8 px-12">
                              <span className="text-[#1A4B8E] font-medium text-lg">갑상선암</span>
                            </td>
                            <td className="py-8 pr-12 text-gray-700 text-lg leading-relaxed">
                              다른 암과 달리 비교적 예후가 좋은 편으로, 조기에 발견해 적절히 치료받으면 완치율이 100%에 가까워 크게 두려워할 필요는 없습니다.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 갑상선 질환 의심 증상 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#F8F9FF] mt-32">
                <div className="py-20">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                      <p className="text-[#1A4B8E] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                      <h2 className="text-[#1A1A1A] text-4xl font-bold">갑상선 질환 의심 증상</h2>
                    </div>

                    <div className="max-w-[1000px] mx-auto">
                      <div className="space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="w-[32px] h-[32px] rounded-full bg-[#0066CC] text-white flex items-center justify-center text-base font-medium flex-shrink-0">
                            1
                          </div>
                          <p className="text-gray-800 text-lg">식욕은 왕성하나 체중은 줄었다.</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="w-[32px] h-[32px] rounded-full bg-[#0066CC] text-white flex items-center justify-center text-base font-medium flex-shrink-0">
                            2
                          </div>
                          <p className="text-gray-800 text-lg">가슴이 두근거리고 불안 초조하다.</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="w-[32px] h-[32px] rounded-full bg-[#0066CC] text-white flex items-center justify-center text-base font-medium flex-shrink-0">
                            3
                          </div>
                          <p className="text-gray-800 text-lg">목에서 멍이 나고 더워를 잘기 힘들다.</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="w-[32px] h-[32px] rounded-full bg-[#0066CC] text-white flex items-center justify-center text-base font-medium flex-shrink-0">
                            4
                          </div>
                          <p className="text-gray-800 text-lg">대변을 자주보고 설사가 잦다.</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="w-[32px] h-[32px] rounded-full bg-[#0066CC] text-white flex items-center justify-center text-base font-medium flex-shrink-0">
                            5
                          </div>
                          <p className="text-gray-800 text-lg">목의 이물감이나 압박감이 있다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 갑상선 질환 검사방법 섹션 */}
              <div className="mt-32">
                <div className="container mx-auto px-4">
                  <div className="flex justify-between items-start gap-16">
                    <div className="flex-1">
                      <div className="mb-12">
                        <p className="text-[#1A4B8E] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                        <h2 className="text-[#1A1A1A] text-4xl font-bold">갑상선 질환 검사방법</h2>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-[#1A4B8E] rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[#1A4B8E] font-medium text-lg">갑상선 기능검사</span>
                          </div>
                          <p className="text-gray-700 text-base leading-relaxed ml-7">
                            혈액 검사 방법으로 혈중 갑상선 호르몬과 갑상선 자극 호르몬 등을 검사하여 갑상선 기능의 이상 유무를 확인하는 검사
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-[#1A4B8E] rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[#1A4B8E] font-medium text-lg">초음파 검사</span>
                          </div>
                          <p className="text-gray-700 text-base leading-relaxed ml-7">
                            결절의 크기와 모양, 위치, 결절의 개수, 결절의 낭성 변화나 음욕을 확인하는 검사
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-[#1A4B8E] rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[#1A4B8E] font-medium text-lg">조직 검사(세침흡인 세포검사)</span>
                          </div>
                          <p className="text-gray-700 text-base leading-relaxed ml-7">
                            미세침이 있는 주사기를 이용해 갑상선 결절 세포를 흡입하여 관찰하는 검사
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-[500px] h-[400px] relative flex-shrink-0">
                      <Image
                        src="/images/centers/thyroid-examination.jpg"
                        alt="갑상선 검사"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 갑상선 질환의 치료 섹션 */}
              <div className="mt-32">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <p className="text-[#1A4B8E] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-[#1A1A1A] text-4xl font-bold">갑상선 질환의 치료</h2>
                  </div>

                  <div className="space-y-12">
                    {/* 약물요법 */}
                    <div className="flex items-center gap-16">
                      <div className="w-[500px] h-[400px] relative flex-shrink-0">
                        <Image
                          src="/images/centers/thyroid-treatment1.jpg"
                          alt="갑상선 약물요법"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#1A4B8E] font-medium text-2xl mb-4">약물요법</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          갑상선 기능항진, 갑상선 기능저하에 적용할 수 있습니다.
                        </p>
                      </div>
                    </div>

                    {/* 방사선 옥소 요법 */}
                    <div className="flex items-center gap-16 flex-row-reverse">
                      <div className="w-[500px] h-[400px] relative flex-shrink-0">
                        <Image
                          src="/images/centers/thyroid-treatment2.jpg"
                          alt="방사선 옥소 요법"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#1A4B8E] font-medium text-2xl mb-4">방사선 옥소 요법</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          갑상선 호르몬을 만드는 세포를 파괴하고 암세포를 파괴합니다.
                        </p>
                      </div>
                    </div>

                    {/* 수술요법 */}
                    <div className="flex items-center gap-16">
                      <div className="w-[500px] h-[400px] relative flex-shrink-0">
                        <Image
                          src="/images/centers/thyroid-treatment3.jpg"
                          alt="갑상선 수술요법"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#1A4B8E] font-medium text-2xl mb-4">수술요법</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          갑상선 종양(흼히 결절)이 있는 경우 수술해야 하는 경우
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'breast' && (
            <div>
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="유방암"
                  title="유방암"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "유방암이란 유방 안에 있는 양성 종양과 반대로 유방 밖으로 퍼져 생명을 위협할 수 있는 악성 종양을 말합니다. 유방에 있는 여러 세포들은 모두 다 암세포에서 발생한 것을 알립니다.",
                    "유방암은 암이 기원한 세포가 무엇인지, 침윤 정도 등에 따라 다양한 종류로 나뉩니다. 침윤성 유관암, 침윤성 소엽암, 유관 상피내암, 소엽 상피내암, 유방 파제트병, 기타 침윤성 유방암 등이 있습니다.",
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* 유방암의 원인 및 위험요인 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="py-20">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                      <h2 className="text-white text-4xl font-bold">유방암의 원인 및 위험요인</h2>
                    </div>

                    <div className="text-center text-white mb-12">
                      <p className="text-lg leading-relaxed">
                        언뜻 보기에도 유방암은 연구가 제 많이 이뤄졌음에도 복구하고 아직 그 원인이 명확하게 밝혀지지 않았습니다.<br />
                        유방암 발생 확률을 높이는 위험 요인만 알려져 있을 뿐인데, 그 내용은 다음과 같습니다.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg">
                      <table className="w-full">
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-8 px-12 w-[240px]">
                              <span className="text-[#1A4B8E] font-medium text-lg">유전적 요인</span>
                            </td>
                            <td className="py-8 pr-12 text-gray-700 text-lg leading-relaxed">
                              유방암의 약 5~10% 정도가 유전적 요인에 의해 발생하는 것으로 알려져 있습니다. 어머니 혹은 자매 여느 한족에 유방암이 있다면 둘 다 없는 경우와 비교했을 때 유방암 발생 가능성이 약 2~3배 혹은 많이고 어머니, 자매 모두 유방암이 있다면 8~12배로 높아진다고 알려져 있습니다.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-8 px-12">
                              <span className="text-[#1A4B8E] font-medium text-lg">호르몬 요인</span>
                            </td>
                            <td className="py-8 pr-12 text-gray-700 text-lg leading-relaxed">
                              여성호르몬은 유방 세포 증식을 촉진시켜 장기간 노출될 경우 유방암 발생 위험이 커집니다. 경구 피임약과 폐경 후 호르몬도 마찬가지입니다.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-8 px-12">
                              <span className="text-[#1A4B8E] font-medium text-lg">연령, 출산, 수유 요인</span>
                            </td>
                            <td className="py-8 pr-12 text-gray-700 text-lg leading-relaxed">
                              일반적으로 유방암은 40세 이후 여성에게 호발하며 나이가 많아질수록 발생 빈도도 높아집니다. 자녀가 없거나 적은 여성, 수유를 하지 않은 여성일수록 유방암 발생 가능성이 높은 것으로 알려져 있습니다.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-8 px-12">
                              <span className="text-[#1A4B8E] font-medium text-lg">음주와 비만</span>
                            </td>
                            <td className="py-8 pr-12 text-gray-700 text-lg leading-relaxed">
                              술은 유방암의 중요 위험 요인입니다. 적은 음주량도 발생 위험을 높일 수 있고 음주량이 늘어날 수록 위험성이 커집니다. 비만도 위험합니다. 특히 폐경 후 비만은 유방암과 깊은 연관이 있는 것으로 알려져 있습니다.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <BannerSection
                backgroundImage="/images/about/about_fot_img.jpg"
                title={[
                  "유방암의 증상"
                ]}
                description={[
                  "통증 없이 가슴에서 멍울이 만져진다.",
                  "멍울이 유방에 이어 겨드랑이에서도 만져진다.",
                  "유두에서 피가 섞인 분비물이 나오거나 습진이 잘 낫지 않는다.",
                  "유방의 피부가 속으로 들어가 움푹 파여 함몰유두가 된다.",
                  "멍울 없이 피부가 빨갛게 붓고 통증, 열감이 느껴진다.",
                  "유방 피부가 오렌지 껍질처럼 두꺼워진다.",
                  "전이 시 림프절이 커져 만져지기도 한다.",
                  "유방암 진행 시 유방 형체가 거의 파괴되기도 한다.",
                  "남성 유방암은 주로 고령자에게, 젖꼭지 밑에서 딱딱한 덩어리가 만져진다."
                ]}
              />

              {/* 유방암 검사방법 섹션 */}
              <div className="mt-32">
                <div>
                  <div className="flex justify-between items-start gap-16">
                    <div className="flex-1">
                      <div className="mb-12">
                        <p className="text-[#1A4B8E] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                        <h2 className="text-[#1A1A1A] text-4xl font-bold">유방암 검사방법</h2>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-[#1A4B8E] rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[#1A4B8E] font-medium text-lg">유방촬영술</span>
                          </div>
                          <p className="text-gray-700 text-base leading-relaxed ml-7">
                            유방암 진단에 필수적인 검사로 축진, 초음파 검사 등에서 발견이 어려운 조기 유방암을 찾는데 중요한 역할을 합니다.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-[#1A4B8E] rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[#1A4B8E] font-medium text-lg">유방초음파검사</span>
                          </div>
                          <p className="text-gray-700 text-base leading-relaxed ml-7">
                            유방 조직이 치밀해서 정확한 진단이 어려울 때 유용한 진단 방법입니다.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-[#1A4B8E] rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[#1A4B8E] font-medium text-lg">미세침흡인세포검사</span>
                          </div>
                          <p className="text-gray-700 text-base leading-relaxed ml-7">
                            가느다란 바늘로 병변 부위에서 소량의 세포를 뽑아 현미경으로 검사하여 유방암을 확인하는 방법입니다.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-[#1A4B8E] rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[#1A4B8E] font-medium text-lg">조직검사</span>
                          </div>
                          <p className="text-gray-700 text-base leading-relaxed ml-7">
                            피부에 무늬 마취를 한 후 생검용 장치를 이용하여 조직 일부를 채취하고 현미경으로 검사하는 방법입니다.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-[#1A4B8E] rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[#1A4B8E] font-medium text-lg">MRI & CT & PET</span>
                          </div>
                          <p className="text-gray-700 text-base leading-relaxed ml-7">
                            최근 등장한 만큼은 기존 방법과 달리 원하는 만큼 조직을 체취할 수 있어 수술을 통한 조직 검사만큼 높은 정확도가 특징입니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <BannerSection
                backgroundImage="/images/about/about_fot_img.jpg"
                title={[
                  "유방암의 효율적 조기 검진법'3D 맘모그래피'"
                ]}
              />
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="3D 맘모그래피"
                  title="3D 맘모그래피"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "X선 투사 신호를 디지털 신호로 전환해 영상화하는 최신 고해상도 하이엔드급 3D 전용 대학병원급 장비로 유방암을 진단합니다. 2D 제품을 통한 검사에서 발견하기 어려웠던 암세포나 미세석회화를 명확하게 구별할 수 있습니다.",
                  ]}
                  imagePosition="left" // 또는 "right"
                />
                </div>
              </div>

              {/* 유방암의 치료 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="py-20">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                      <h2 className="text-white text-4xl font-bold">유방암의 치료</h2>
                    </div>

                    {/* 약물요법 */}
                    <div className="bg-white rounded-lg p-8 mb-8">
                      <div className="flex items-center gap-16">
                        <div className="w-[500px] h-[400px] relative flex-shrink-0">
                          <Image
                            src="/images/centers/breast-treatment1.jpg"
                            alt="약물요법"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#1A4B8E] font-medium text-2xl mb-4">약물요법</h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            항암 화학 요법, 항호르몬요법, 방사선치료, 표적치료 등
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 수술요법 */}
                    <div className="bg-white rounded-lg p-8">
                      <div className="flex items-center gap-16">
                        <div className="w-[500px] h-[400px] relative flex-shrink-0">
                          <Image
                            src="/images/centers/breast-treatment3.jpg"
                            alt="수술요법"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#1A4B8E] font-medium text-2xl mb-4">수술요법</h3>
                          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                            종양이 클 경우 먼저 선행화학요법을 시행하고 수술을 진행하기도 합니다.

                            수술 방법으로는 크게 전체 제거하는 &apos;유방 전절제술&apos;과 유방을 부분적으로 제거하는 &apos;유방 보존적 절제술&apos; 나눌 수 있습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 정기 검진 배너 */}
              <BannerSection
                backgroundImage="/images/about/about_fot_img.jpg"
                title={[
                  "유방암은 치료 후에도 정기 검진이 필수입니다."
                ]}
              />

              {/* 재발 유형 섹션 */}
              <div className="mt-32">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-2 gap-16">
                    {/* 수술 후 국소 재발 */}
                    <div>
                      <div className="w-full h-[300px] relative mb-6">
                        <Image
                          src="/images/centers/breast-recurrence1.jpg"
                          alt="수술 후 국소 재발"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-[#1A4B8E] font-medium text-2xl mb-4">01 수술 후 국소 재발</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        유방암이 있었던 곳에 다시 재발한 경우입니다. 가슴한 외과적 수술로 절체하는 게 좋고 방사선 치료, 에호기 종양 앙지만 있다면 방사선 치료를 적용할 수 있습니다.
                      </p>
                    </div>

                    {/* 전이성 재발 */}
                    <div>
                      <div className="w-full h-[300px] relative mb-6">
                        <Image
                          src="/images/centers/breast-recurrence2.jpg"
                          alt="전이성 재발"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-[#1A4B8E] font-medium text-2xl mb-4">02 전이성 재발</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        유방암이 있었던 곳이 아닌 다른 장기에 재발한 경우입니다. 뼈, 에호기, 종양, 앙지만 있다면 방사선 치료를 시도해 볼 수 있습니다.
                      </p>
                    </div>
                  </div>
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