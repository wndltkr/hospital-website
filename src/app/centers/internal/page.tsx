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
import BannerSection from '@/components/BannerSection';

export default function InternalMedicineCenterPage() {
  const [activeTab, setActiveTab] = useState('hypertension');

  const tabs = [
    { id: 'hypertension', name: '고혈압/고지혈증' },
    { id: 'diabetes', name: '당뇨병' },
    { id: 'liver', name: '간질환' },
    { id: 'lung', name: '폐질환' },
    { id: 'kidney', name: '신장질환' },
  ];

  return (
    <>
      <Header />
      <Menu />
      <div className="min-h-screen bg-white">
      <PageBanner
        title="내과질환센터"
        description={[
          "우수한 의료진들의 정확한 진단",
          "맞춤형 치료로 건강한 일상을 누리세요"
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
          {/* Tab content will be added here */}
          {activeTab === 'hypertension' && (
            <div>
              <InfoSection
                  image="/images/centers/internal-img01.jpg"
                  alt="고혈압"
                  title="고혈압"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "혈압은 심장이 박동할 때 동맥 혈관에 흐르는 혈압의 압력입니다. 고혈압은 혈압이 올라가서 내려가지 않아 140/90mmHg이상으로 높은 상태가 계속되는 상태를 말합니다.",
                  ]}
                  imagePosition="left" // 또는 "right"
                />
              <div className="flex items-start gap-16">
               
                
                {/* 텍스트 섹션 */}
                <div className="flex-1">
                  

                  {/* 혈압 분류표 */}
                  <div className="mt-16">
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-lg font-medium text-gray-900 text-center">혈압의 범위</th>
                            <th className="px-6 py-4 text-lg font-medium text-gray-900 text-center">수축기혈압(mmHg)</th>
                            <th className="px-6 py-4 text-lg font-medium text-gray-900 text-center">이완기혈압(mmHg)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">정상</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">130이하</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">85이하</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">혈압관리</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">130~139</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">80~89</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">고혈압(경증)</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">140~159</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">90~99</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">고혈압(중등도)</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">160~179</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">100~109</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">고혈압(중증)</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">180이상</td>
                            <td className="px-6 py-4 text-base text-gray-700 text-center">110이상</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 고혈압의 원인 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-8">
                      <p className="text-white/80 tracking-[0.2em] text-sm">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-3xl font-bold mt-2">고혈압의 원인</h2>
                    </div>

                    <div className="bg-white rounded-lg">
                      <div className="grid grid-cols-1 divide-y divide-gray-100">
                        <div className="grid grid-cols-[200px_1fr]">
                          <div className="py-4 px-6 flex items-center">
                            <span className="text-[#1A4B8E] font-medium">심장질환·내분비성</span>
                          </div>
                          <div className="py-4 px-6 text-gray-700">
                            - 신경성·뇌염, 만성 뇌막염, 뇌종양, 다발성 신경염 등<br />
                            - 내분비성·갑색종, 말단비대증 등<br />
                            - 혈관성·대동맥 주위염, 대동맥 경화증 등
                          </div>
                        </div>

                        <div className="grid grid-cols-[200px_1fr]">
                          <div className="py-4 px-6 flex items-center">
                            <span className="text-[#1A4B8E] font-medium">1차성 고혈압</span>
                          </div>
                          <div className="py-4 px-6 text-gray-700">
                            - 본태성 고혈압이라고도 하며 원인이 명확하지 않은 고혈압을 의미합니다.<br />
                            - 1차성 고혈압은 전체 고혈압 환자의 90~95% 이상을 차지하는데, 대개 나이가 들면서 점차 증가합니다.<br />
                            - 유전 경향이 강하며, 소금 섭취량이 많은 분들에게 발생률이 증가합니다.
                          </div>
                        </div>

                        <div className="grid grid-cols-[200px_1fr]">
                          <div className="py-4 px-6 flex items-center">
                            <span className="text-[#1A4B8E] font-medium">2차성 고혈압</span>
                          </div>
                          <div className="py-4 px-6 text-gray-700">
                            - 기존에 환자가 앓고 있던 다른 질환에 의해서 고혈압이 발생하는 것을 의미합니다.<br />
                            - 신장질환이나 부신종양, 일부 선천성 심장질환 등 원인이 될 수 있고 일부 약물이 원인이 되기도 합니다.<br />
                            - 전체 고혈압 환자의 5~10%정도 입니다.<br />
                            - 1차성 고혈압에 비해 증상이 갑자기 나타나고 혈압도 상대적으로 더 높은 경향이 있습니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 고혈압 치료법 섹션 */}
              <div className="container mx-auto px-4 mt-32">
              <InfoSection
                  image="/images/centers/internal-img02.jpg"
                  alt="고혈압 치료법"
                  title="고혈압 치료법"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "혈압이 높은 사람은 보통의 사람들에 비해 원신 수명이 짧으므로 반드시 적극적으로 치료해야 합니다.",
                    "고혈압의 치료에는 체중조절, 식이요법, 운동과 적절한 약물 등이 있지만 가장 중요한 것은 현재 본인의 혈압과 치료의사의 지시입니다."
                  ]}
                  imagePosition="right" // 또는 "right"
                />
              </div>

              {/* 고혈압 예방 수칙 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/colon-tester.jpg"
                title={[
                  "고혈압 예방 수칙 7가지"
                ]}
                description={[
                  "음식은 싱겁게 골고루 먹습니다.",
                  "살이 찌지 않도록 적정 체중을 유지 합니다.",
                  "매일 30분 이상 적절한 운동을 합니다.",
                  "담배는 끊고 술은 삼가야 합니다.",
                  "지방질을 줄이고 야채를 많이 섭취 합니다.",
                  "스트레스를 피하고 평온한 마음을 유지합니다.",
                  "정기적으로 혈압을 측정하고 의사의 진찰을 생활화 합니다."
                ]}
                isRepeating={true}
                textColor="black"
              />

              {/* 고지혈증 섹션 */}
              <div className="container mx-auto px-4 mt-32">
              <InfoSection
                  image="/images/centers/internal-img03.jpg"
                      alt="고지혈증"
                  title="고지혈증"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "고지혈증은 혈액 내 지방성분이 많은 이상으로 많은 지방성분이 혈액 내에 존재하면서 혈관벽에 쌓여 혈관벽에 염증을 일으키고 그 결과 심혈관계질환을 일으키는 상태를 이상지질혈증이라고 합니다.",
                    "고지혈증은 현증 콜레스테롤이나 중증 콜레스테롤이 동맥경화를 일으키는 주요원인이 될 수 있습니다."
                  ]}
                  imagePosition="left" // 또는 "right"
                />
              </div>

              {/* 고지혈증의 원인 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">고지혈증의 원인</h2>
                    </div>

                    <div className="space-y-8">
                      {/* 음식물 */}
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="flex items-center">
                          <div className="w-1/2 h-[400px] relative">
                            <Image
                              src="/images/centers/hyperlipidemia-cause1.jpg"
                              alt="음식물"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="w-1/2 p-12">
                            <h3 className="text-[#1A4B8E] text-2xl font-medium mb-6">음식물</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                              음식물은 치료가 가능한 위험인자 중에서 가장 큰 원인이 됩니다. 콜레스테롤이 많이 함유된 음식을 자주 섭취하면서 혈액 내에 콜레스테롤이 많아집니다.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 유전적 요인 */}
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="flex items-center">
                          <div className="w-1/2 p-12">
                            <h3 className="text-[#1A4B8E] text-2xl font-medium mb-6">유전적 요인</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                              유전자는 혈중 지질 농도에 영향을 미치는 중요한 요인입니다. 가족력이 있는 경우 고지혈증이 발생할 확률이 높아집니다.
                            </p>
                          </div>
                          <div className="w-1/2 h-[400px] relative">
                            <Image
                              src="/images/centers/hyperlipidemia-cause2.jpg"
                              alt="유전적 요인"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* 나이와 성별 */}
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="flex items-center">
                          <div className="w-1/2 h-[400px] relative">
                            <Image
                              src="/images/centers/hyperlipidemia-cause3.jpg"
                              alt="나이와 성별"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="w-1/2 p-12">
                            <h3 className="text-[#1A4B8E] text-2xl font-medium mb-6">나이와 성별</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                              보통 남성은 20~50세까지 혈압이 상승하지만 그 이후부터는 약간 감소합니다. 여성은 20세부터 증가하지만 남성보다 낮은 수치로 폐경 후까지 유지됩니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 유튜브 영상 섹션 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="관련영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                />
            </div>
          )}

          {activeTab === 'diabetes' && (
            <div>
              <InfoSection
                  image="/images/centers/diabetes-img01.jpg"
                    alt="당뇨병"
                  title="당뇨병"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "당뇨병은 우리나라 성인의 약 10%가 걸릴 정도로 흔한 성인병입니다. 최근 서구화된 식습관, 운동 부족에 의한 비만 인구의 증가.",
                    "인구·경화 등의 환경적인 요인이 당뇨병환자를 급격하게 증가시키고 있습니다. 당뇨병의 정확한 원인 이해가 당뇨병 예방의 첫걸음입니다."
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* 당뇨병이란? 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/diabetes_bgimg.jpg"
                title={[
                  "당뇨병이란?"
                ]}
                description="우리가 섭취하는 음식물의 대부분은 포도당으로 분해된 후 혈관으로 이동되고, 세포 속으로 들어가 에너지원으로 사용됩니다. 이때 췌장에서 분비되는 호르몬인 인슐린은 포도당을 세포 속으로 보내주는 문지기의 역할을 하게 되는데, 췌장이 인슐린을 생산하지 못하거나 세포가 인슐린에 반응하지 않아 포도당이 세포 속으로 들어가지 못하고 고혈당 상태로 혈액 내에 남은 상태를 당뇨병이라고 합니다."
              />

              {/* 당뇨병의 원인 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">당뇨병의 원인</h2>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="grid grid-cols-2">
                        {/* 유전적 요인 */}
                        <div className="p-8 border-r border-gray-100">
                          <h3 className="text-[#0066CC] text-xl font-medium mb-6">유전적 요인</h3>
                          <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                              <span className="text-[#0066CC] font-bold">•</span>
                              <span className="text-gray-700">당뇨병은 가족력이 매우 중요</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#0066CC] font-bold">•</span>
                              <span className="text-gray-700">부모 중 1명이 당뇨병일 경우 자식이 당뇨병일 확률 약 30%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#0066CC] font-bold">•</span>
                              <span className="text-gray-700">부모 모두 당뇨병이라면 자식이 당뇨병일 확률 약 60%</span>
                            </li>
                          </ul>
                        </div>

                        {/* 환경적 요인 */}
                        <div className="p-8">
                          <h3 className="text-[#0066CC] text-xl font-medium mb-6">환경적 요인</h3>
                          <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                              <span className="text-[#0066CC] font-bold">•</span>
                              <span className="text-gray-700">영양의 불균형</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#0066CC] font-bold">•</span>
                              <span className="text-gray-700">스트레스</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#0066CC] font-bold">•</span>
                              <span className="text-gray-700">유해 독소 및 약물</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#0066CC] font-bold">•</span>
                              <span className="text-gray-700">운동부족</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#0066CC] font-bold">•</span>
                              <span className="text-gray-700">불규칙한 생활 습관</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 당뇨병 검사방법 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="flex items-start gap-16">
                  {/* 이미지 섹션 */}
                  

                  {/* 텍스트 섹션 */}
                  <div className="flex-1">
                  <InfoSection
                  image="/images/centers/diabetes-img02.jpg"
                  alt="당뇨병 검사방법"
                  title="당뇨병 검사방법"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "요당검사 소변에서 당의 존재를 알아보는 방법으로 검사 결과 양성으로 나오면 혈당 검사를 하여 정확한 진단을 받아야 합니다.",
                    "당뇨병의 진단에 있어 혈당치의 기준은 공복 혈당치 126mg/dl 이상, 식후 2시간 혈당치 200mg/dl이상이 기준입니다."
                  ]}
                  imagePosition="right" // 또는 "right"
                />

                    

                    {/* 혈당 수치표 */}
                    <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
                      <table className="min-w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="py-4 px-6 text-left text-lg font-medium text-gray-900"></th>
                            <th className="py-4 px-6 text-center text-lg font-medium text-gray-900">정상</th>
                            <th className="py-4 px-6 text-center text-lg font-medium text-gray-900">위험군</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="py-4 px-6 text-base text-gray-900">공복혈당</td>
                            <td className="py-4 px-6 text-center text-base text-gray-700">100mg/dl</td>
                            <td className="py-4 px-6 text-center text-base text-gray-700">100~125mg/dl</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 text-base text-gray-900">식후혈당</td>
                            <td className="py-4 px-6 text-center text-base text-gray-700">200mg/dl</td>
                            <td className="py-4 px-6 text-center text-base text-gray-700">200~250mg/dl</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 text-base text-gray-900">식후2시간 경과 혈당</td>
                            <td className="py-4 px-6 text-center text-base text-gray-700">140mg/dl</td>
                            <td className="py-4 px-6 text-center text-base text-gray-700">140~199mg/dl</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 당뇨병 관리 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/diabetes_fot_img.jpg"
                title={[
                  "당뇨병은 꾸준한 관리가 중요합니다."
                ]}
                description="적극적인 치료와 관리로 건강하고 행복한 삶을 누리세요."
              />

              {/* 유튜브 영상 섹션 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="건강증진센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                />
            </div>
          )}

          {activeTab === 'liver' && (
            <div>
              <InfoSection
                  image="/images/centers/liver-img01.jpg"
                  alt="지방간"
                  title="지방간"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "간 세포 속에 지방이 많이 축적되어 있는 상태를 말합니다. 간 세포 속에 중성지방이 과도하게 축적되어 있는 상태로, 비만이나 당뇨병, 과다한 알코올 섭취 등이 주요 원인이 됩니다. 초기에는 특별한 증상이 없어 건강검진에서 우연히 발견되는 경우가 많습니다."
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* 알코올성 지방간 치료법 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#0066CC] mt-32">
                <div className="container mx-auto">
                  <div className="text-center py-12">
                    <p className="text-white tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                    <h2 className="text-white text-4xl font-bold">알코올성 지방간 치료법</h2>
                  </div>
                  <div className="max-w-5xl mx-auto">
                    <div className="bg-[#0066CC]">
                      <table className="min-w-full">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-6 px-8 w-1/4 text-white text-xl font-medium">생활습관 개선요법</td>
                            <td className="py-6 px-8 text-white">
                              금주가 시작과 끝입니다. 초기 지방간은 금주 시 정상 회복 가능성이 높아 가능한 빨리 금주를 시작해야 합니다. 금주가 어렵다면 음주 횟수 및 주량을 줄이려는 노력을 해야 합니다.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-6 px-8 w-1/4 text-white text-xl font-medium">약물요법</td>
                            <td className="py-6 px-8 text-white">
                              항산화제(비타민 E, 비타민 B, C)가 치료제로 사용됩니다. 간세포 보호제인 우루소데옥시콜린산(ursodeoxycholic acid, UDCA)이나 실리마린(silymarin) 등이 효과가 있다는 보고도 있습니다.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 비알코올성 지방간 치료법 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto">
                  <div className="text-center py-12">
                    <p className="text-white tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                    <h2 className="text-white text-4xl font-bold">비알코올성 지방간 치료법</h2>
                  </div>

                  {/* 생활습관 개선요법 */}
                  <div className="bg-white">
                    <div className="flex items-center">
                      <div className="w-1/2 h-[400px] relative">
                        <Image
                          src="/images/centers/liver-lifestyle.jpg"
                          alt="생활습관 개선요법"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-1/2 p-16">
                        <h3 className="text-[#1A4B8E] text-2xl font-medium mb-4">생활습관 개선요법</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          지방간 환자 70~80%는 비만이고, 그 외에 상당수 환자는 과체중으로 알려져 있습니다. 체중감소는 일율된 감수성을 향상시켜 지방간 초기에 도움을 줍니다. 체중을 6개월에 대략 현재 체중의 10% 감량을 목표로 합니다. 운동요법은 중간 강도의 운동을 주 3회 이상, 1회에 60~90분 정도를 권장합니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 수술적 치료법 */}
                  <div className="bg-white">
                    <div className="flex items-center">
                      <div className="w-1/2 p-16">
                        <h3 className="text-[#1A4B8E] text-2xl font-medium mb-4">수술적 치료법</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          비만수술요법은 고도비만(체질량 지수 {'>'}40Kg/m2)이거나 체질량지수 {'>'}35Kg/m2 이상이면서 당뇨나 고혈압 등 위험인자가 동반된 경우에 권장됩니다.<br/><br/>
                          - 초기포만감을 유도하여 음식섭취를 줄이는 시술<br/>
                          - 소장을 우회시켜 흡수 불량을 유도하는 시술<br/>
                          - 위 두 가지 모두의 효과를 얻기 위한 시술<br/><br/>
                          비만수술요법 후에 간 기능 수치의 호전과 간 내 지방의 감소는 대부분에서 보고되었으나, 염증과 섬유화의 호전에 대한 결과는 일정치 않습니다. 현재까지의 연구 중에서는 지방간 환자에서는 초기포만감을 유도하여 음식섭취를 줄이는 시술이 비교적 안전한 것으로 알려져 있습니다.
                        </p>
                      </div>
                      <div className="w-1/2 h-[400px] relative">
                        <Image
                          src="/images/centers/liver-surgery.jpg"
                          alt="수술적 치료법"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 약물요법 */}
                  <div className="bg-white">
                    <div className="flex items-center">
                      <div className="w-1/2 h-[400px] relative">
                        <Image
                          src="/images/centers/liver-medication.jpg"
                          alt="약물요법"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-1/2 p-16">
                        <h3 className="text-[#1A4B8E] text-2xl font-medium mb-4">약물요법(당뇨병 치료제 및 인슐린 저항성 개선 약물)</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          제2형(성인형) 당뇨병 치료제는 모두 효과가 있는 것으로 여겨집니다. 이 중 인슐린 주사와 인슐린 분비를 자극하는 늘들의 약은 당뇨병 치료제인 설포닐유레아 계열은 작용기전에서 인슐린 분비와 관련되어 효과가 적고, 메트포르민이나 치아졸리딘디온은 좋은 간 내에서 당 생성을 억제하고 인슐린 감수성을 개선시켜 효과가 좋은 것으로 알려져 있습니다.<br/><br/>
                          그러나 아직까지 우리나라에서는 당뇨병이 없는 지방간 혹은 지방간염 환자에서는 의료보험으로 인정받지 못하여 약값이 비싼 단점이 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 간염 섹션 */}
              <InfoSection
                  image="/images/centers/liver-img05.jpg"
                  alt="간염"
                  title="간염"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "B형 간염은 B형 간염 바이러스에 감염되어 생기는 병입니다. 이 바이러스는 간에 주로 감염됩니다. B형 간염 바이러스는, 빠른 속도로 생명을 위협하고, 간의 염증을 일으키며 수도 있지만 대부분의 경우는 서서히 진행됩니다. 우리나라는 B형 간염의 유병률이 높고, 만성 B형 간염은 흔히 간경변증 혹은 간암을 야기할 수 있습니다."
                  ]}
                  imagePosition="right" // 또는 "right"
                />

              {/* 만성 B형 간염의 증상 및 특징 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/colon-tester.jpg"
                title={[
                  "만성 B형 간염의 증상 및 특징"
                ]}
                description={[
                  "피로감의 지속, 간헐적 황달 증상, 우상복부 통증, 구역, 구토, 식욕감소, 가려움 등 나타납니다.",
                  "급성 간염이 만성 감염이 된 경우 제외하고 대부분 서서히 증상 악화시킵니다.",
                  "무증상 감염부터 만성 쇠약성 질환, 말기 간부전까지 다양한 증상 가져옵니다.",
                  "주산기 감염은 90%, 유년기 감염은 20%, 성인기 감염은 5% 미만 만성 간염으로 이어집니다.",
                  "급성 간염 회복 후 10년 후 B형 간염 바이러스가 검출되기도 합니다.(잠재 감염)"
                ]}
                isRepeating={true}
                textColor="black"
              />

              {/* 만성 B형 간염 치료의 일반 원칙 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/liver_bgimg.jpg"
                title={[
                  "만성 B형 간염의 일반 원칙"
                ]}
                description={[
                  "혈액 내 B형 간염 바이러스 상승 정도, 간 효소 수치(ALT)에 따라 치료 대상 결정",
                  "B형 간염 치료 약제들(인터페론과 항바이러스제)은 HBV를 완전 제거가 어렵고 장기적인 효과에서 제한점 존재",
                  "환자의 연령과 간염의 중증도, 치료 반응 가능성 및 약제사용에 의한 부작용 검토하여 치료 여부 결정"
                ]}
              />

              {/* 간경변증 섹션 */}
              <InfoSection
                  image="/images/centers/liver-img06.jpg"
                  alt="간경변증"
                  title="간경변증"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "간경변증은 만성적인 염증으로 인해 정상적인 간조직이 재생결절(regenerative nodules; 작은 덩어리가 만들어지는 현상) 등의 섬유화 조직으로 바뀌어 간기능이 저하되는 것을 말합니다."
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* 간경변증의 원인 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
            <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">간경변증의 원인</h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <table className="w-full">
                          <caption className="sr-only">간경변증의 원인</caption>
                          <colgroup>
                            <col style={{width: "30%"}} />
                            <col style={{width: "70%"}} />
                          </colgroup>
                          <tbody>
                            <tr className="border-b border-gray-100">
                              <th className="bg-[#F8F9FF] p-8 text-left text-[#1A4B8E] text-xl font-medium">
                                알코올 섭취
                              </th>
                              <td className="p-8 text-gray-700 text-lg leading-relaxed">
                                알코올은 간에서 아세트알데하이드와 같은 독성 물질로 변환되어 간을 파괴합니다. 손상된 간은 지방산 분해가 어려워 간에 지방을 축적시키게 되고 간 기능을 악화시킵니다. 초기에는 지방간으로 간이 커지지만 결국 간경변증으로 이어지게 됩니다.
                              </td>
                            </tr>
                            <tr>
                              <th className="bg-[#F8F9FF] p-8 text-left text-[#1A4B8E] text-xl font-medium">
                                만성 간염
                              </th>
                              <td className="p-8 text-gray-700 text-lg leading-relaxed">
                                B형이나 C형 간염과 같은 만성바이러스성 간염도 간경변증을 일으키는 원인입니다. 만성 C형 간염의 5~20%와 만성 B형 간염의 5~10%는 간경변증으로 발전하게 됩니다. 만성 간염의 기간이 길어질수록 간경변증으로 발전할 위험이 높아집니다.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 간암 섹션 */}
              <InfoSection
                  image="/images/centers/liver-img07.jpg"
                  alt="간암"
                  title="간암"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "간의 대부분을 차지하는 간 세포에서 기원하는 악성 종양을 말합니다. 간에 생기는 모든 종류의 악성 종양이나 다른 기관의 암이 간에 전이된 전이성 간암까지도 포함하지만, 간세포암종이 간암 중 가장 흔해 보통 간세포암종만을 의미합니다."
                  ]}
                  imagePosition="right" // 또는 "right"
                />

              {/* 간암의 주요 원인 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                  <h2 className="text-[#1A1A1A] text-4xl font-bold">간암의 주요 원인</h2>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="overflow-hidden rounded-lg">
                    <table className="w-full">
                      <caption className="sr-only">간암의 주요 원인</caption>
                      <colgroup>
                        <col style={{width: "25%"}} />
                        <col style={{width: "25%"}} />
                        <col style={{width: "25%"}} />
                        <col style={{width: "25%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            01. 만성 B형 간염
                          </th>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            02. C형 간염
                          </th>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            03. 과음
                          </th>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            04. 간경변증
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* 간암의 검사 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                  <h2 className="text-[#1A1A1A] text-4xl font-bold">간암의 검사</h2>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="overflow-hidden rounded-lg">
                    <table className="w-full">
                      <caption className="sr-only">간암의 검사</caption>
                      <colgroup>
                        <col style={{width: "33.33%"}} />
                        <col style={{width: "33.33%"}} />
                        <col style={{width: "33.33%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            간암 위험인자가 있을 경우
                          </th>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            이상 소견이 있을 경우
                          </th>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            진단이 애매할 경우
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* 간암의 치료 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/colon-tester.jpg"
                title={[
                  "간암의 치료"
                ]}
                description={[
                  "가장 효과적인 치료법은 수술적 절제입니다.",
                  "수술적 절제가 불가능할 경우 간암에 영양분과 산소를 공급하는 혈관을 막는 경동맥 화학색전술",
                  "간암에 알코올을 주입하여 간암 세포를 죽이는 경피적 에탄올 주입술",
                  "고주파를 이용하여 간암을 태우는 고주파 열치료를 진행할 수 있습니다.",
                  "또한 의학 기술 발달로 간 기능이 나쁘거나 종양의 개수가 많아 수술적 절제가 어려운 경우 간 이식으로 완치도 기대할 수 있습니다. 한편 간암이 간 밖으로 전이된 경우나 진행된 경우에는 항암제 치료를 고려할 수 있습니다."
                ]}
                isRepeating={true}
                textColor="black"
              />

              {/* 간암의 예방방법 섹션 */}
              <InfoSection
                  image="/images/centers/liver-img08.jpg"
                  alt="간암의 예방방법"
                  title="간암의 예방방법"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "B형 간염 예방 백신 접종하기",
                    "C형 간염 감염 각별히 주의하기",
                    "과음하지 않기",
                    "위험인자가 있다면 주기적으로 검진하기",
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* 유튜브 영상 섹션 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="건강증진센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                />
            </div>
          )}

          {activeTab === 'kidney' && (
            <div>
              {/* 신증후군 섹션 */}
            <div className="container mx-auto px-4">
            <InfoSection
                  image="/images/centers/nephrotic-img01.jpg"
                  alt="신증후군"
                  title="신증후군"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "신증후군은 다량의 단백뇨와 저알부민혈증, 부종, 고지혈증 등의 특징을 보이는 질병입니다. 24시간 동안 성인에게서 소변으로 배설되는 단백질의 양이 3.5g이상이거나, 소아의 경우 체표면적 1제곱미터당 소변으로 소실되는 단백질 양이 960mg 이상인 경우 신증후군으로 진단할 수 있습니다.",
                  ]}
                  imagePosition="left" // 또는 "right"
                />
              </div>

              {/* 신증후군 종류 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">신증후군 종류</h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <table className="w-full">
                          <caption className="sr-only">신증후군 종류</caption>
                          <colgroup>
                            <col style={{width: "50%"}} />
                            <col style={{width: "50%"}} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th className="py-6 px-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border-b border-gray-100">
                                일차성 신증후군
                              </th>
                              <th className="py-6 px-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border-b border-gray-100">
                                이차성 신증후군
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-8 text-center text-gray-700 text-lg leading-relaxed">
                                신장 자체의 이상(여러 형태의 사구체신염)으로 발생
                              </td>
                              <td className="p-8 text-center text-gray-700 text-lg leading-relaxed">
                                간염, 악성종양, 루푸스 등과 같은 전신 질환에 의해 발생
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 신증후군 증상 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/nephrotic-bgimg1.jpg"
                title={[
                  "신증후군 증상"
                ]}
                description={[
                  "단백뇨에 의해 소변에서 거품이 나타남",
                  "저알부민혈증에 의해 부종 발생",
                  "원인 질환에 따라 신장 기능이 급격히 혹은 천천히 감소함"
                ]}
              />

              {/* 신증후군 치료 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">신증후군 치료</h2>
                    </div>

                    <div className="max-w-7xl mx-auto">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <table className="w-full">
                          <caption className="sr-only">신증후군 치료</caption>
                          <colgroup>
                            <col style={{width: "33.33%"}} />
                            <col style={{width: "33.33%"}} />
                            <col style={{width: "33.33%"}} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th className="py-6 px-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border-b border-gray-100">
                                안지오텐신 전환효소<br />억제제(ACE)
                              </th>
                              <th className="py-6 px-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border-b border-gray-100">
                                이뇨제
                              </th>
                              <th className="py-6 px-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border-b border-gray-100">
                                면역억제제
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-8 text-center text-gray-700 text-lg leading-relaxed">
                                사구체 내부 압력을 낮춰<br />단백뇨 감소
                              </td>
                              <td className="p-8 text-center text-gray-700 text-lg leading-relaxed">
                                부종에 대한 일반적 요법
                              </td>
                              <td className="p-8 text-center text-gray-700 text-lg leading-relaxed">
                                원인 질환에 대한 확실한 진단 후<br />스테로이드 등의 면역억제제 사용
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 만성 신부전 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                {/* 이미지와 설명 */}
                <InfoSection
                  image="/images/centers/nephrotic-img02.jpg"
                  alt="만성 신부전"
                  title="만성 신부전"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "3개월 이상 신장이 손상되어 있거나 신장 기능 감소가 지속적으로 나타나는 것을 말합니다. 만성 신부전은 신장의 손상 정도와 기능의 감소 정도에 따라 5단계로 나뉘며, 5단계에는 투석, 신장이식과 같은 신장 대체 요법이 필요합니다.",
                  ]}
                  imagePosition="right" // 또는 "right"
                />

                {/* 단계별 표 */}
                <div className="mt-16">
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                      <caption className="sr-only">만성 신부전 단계</caption>
                      <colgroup>
                        <col style={{width: "20%"}} />
                        <col style={{width: "60%"}} />
                        <col style={{width: "20%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="py-4 px-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">단계</th>
                          <th className="py-4 px-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">비고</th>
                          <th className="py-4 px-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">사구체여과율</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-4 px-6 text-center text-gray-700">높은 위험군</td>
                          <td className="py-4 px-6 text-left text-gray-700">콩팥질환의 위험요소(예 : 당뇨병, 고혈압, 가족력, 고령)</td>
                          <td className="py-4 px-6 text-center text-gray-700">90 이상</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 text-center text-gray-700">1</td>
                          <td className="py-4 px-6 text-left text-gray-700">콩팥손상(단백뇨)과 정상 사구체여과율</td>
                          <td className="py-4 px-6 text-center text-gray-700">90 이상</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 text-center text-gray-700">2</td>
                          <td className="py-4 px-6 text-left text-gray-700">콩팥손상과 경도의 사구체여과율 감소</td>
                          <td className="py-4 px-6 text-center text-gray-700">60 ~ 89</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 text-center text-gray-700">3</td>
                          <td className="py-4 px-6 text-left text-gray-700">중등도의 사구체여과율 감소</td>
                          <td className="py-4 px-6 text-center text-gray-700">30 ~ 59</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 text-center text-gray-700">4</td>
                          <td className="py-4 px-6 text-left text-gray-700">고도의 사구체여과율 감소</td>
                          <td className="py-4 px-6 text-center text-gray-700">15 ~ 29</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 text-center text-gray-700">5</td>
                          <td className="py-4 px-6 text-left text-gray-700">신부전(투석이나 콩팥이식이 필요함)</td>
                          <td className="py-4 px-6 text-center text-gray-700">15 미만</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 만성 신부전 원인 섹션 */}
              <div className="relative w-full bg-[url('/images/centers/nephrotic-bg2.jpg')] bg-cover bg-center mt-32">
                <div className="absolute inset-0 bg-[#1A4B8E]/90"></div>
                <div className="relative container mx-auto px-4 py-24">
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-white tracking-[0.2em] text-sm mb-2">SEKANG HOSPITAL</p>
                    <h2 className="text-white text-4xl font-bold mb-12">만성 신부전 원인</h2>
                    <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                      <p className="flex items-start justify-center gap-3">
                        <span className="text-white flex-shrink-0">✓</span>
                        <span>만성 신부전의 원인은 지역 및 나이 등에 따라 다릅니다.</span>
                      </p>
                      <p className="flex items-start justify-center gap-3">
                        <span className="text-white flex-shrink-0">✓</span>
                        <span>한국에서의 주된 발병 원인은 당뇨병성 신장질환(41%), 고혈압(16%), 사구체신염(14%) 등으로 알려져 있습니다.</span>
                      </p>
                      <p className="flex items-start justify-center gap-3">
                        <span className="text-white flex-shrink-0">✓</span>
                        <span>그 밖의 원인으로는 다낭성 신질환과 기타 요로질환이 있습니다.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 만성 신부전 증상 섹션 */}
              <div className="relative w-full bg-[#1A4B8E] mt-32 py-24">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <p className="text-white tracking-[0.2em] text-sm mb-2">SEKANG HOSPITAL</p>
                    <h2 className="text-white text-4xl font-bold">만성 신부전 증상</h2>
                  </div>

                  <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* 초기 증상 */}
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="h-[300px] relative">
                        <Image
                          src="/images/centers/nephrotic-img03.jpg"
                          alt="만성 신부전 초기 증상"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-[#1A4B8E] text-2xl font-bold mb-6">초기</h3>
                        <div className="space-y-4">
                          <p className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#1A4B8E] flex-shrink-0">☑</span>
                            <span>별다른 이상 증상을 느끼지 못 함</span>
                          </p>
                          <p className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#1A4B8E] flex-shrink-0">☑</span>
                            <span>신장 기능 저하에 따른 요독 증상 동반</span>
                          </p>
                          <p className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#1A4B8E] flex-shrink-0">☑</span>
                            <span>피곤함, 가려움증, 식욕부진 등</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 말기 증상 */}
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="h-[300px] relative">
                        <Image
                          src="/images/centers/nephrotic-img04.jpg"
                          alt="만성 신부전 말기 증상"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-[#1A4B8E] text-2xl font-bold mb-6">말기</h3>
                        <div className="space-y-4">
                          <p className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#1A4B8E] flex-shrink-0">☑</span>
                            <span>호흡곤란, 식욕부진, 구토 등이 심해짐</span>
                          </p>
                          <p className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#1A4B8E] flex-shrink-0">☑</span>
                            <span>투석, 신장이식 치료 없이 정상 생활이 어려워짐</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 만성 신부전 진단 및 검사 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-2">SEKANG HOSPITAL</p>
                  <h2 className="text-[#1A1A1A] text-4xl font-bold">만성 신부전 진단 및 검사</h2>
                </div>

                <div className="max-w-7xl mx-auto">
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                      <caption className="sr-only">만성 신부전 진단 및 검사</caption>
                      <colgroup>
                        <col style={{width: "14.28%"}} />
                        <col style={{width: "14.28%"}} />
                        <col style={{width: "14.28%"}} />
                        <col style={{width: "14.28%"}} />
                        <col style={{width: "14.28%"}} />
                        <col style={{width: "14.28%"}} />
                        <col style={{width: "14.28%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="p-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">
                            <span className="block text-xl mb-2">01</span>
                            당뇨, 고혈압<br />병력 확인
                          </th>
                          <th className="p-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">
                            <span className="block text-xl mb-2">02</span>
                            현재 건강<br />상태 확인
                          </th>
                          <th className="p-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">
                            <span className="block text-xl mb-2">03</span>
                            약물 복용 이력,<br />가족력 등 문진
                          </th>
                          <th className="p-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">
                            <span className="block text-xl mb-2">04</span>
                            혈액검사
                          </th>
                          <th className="p-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">
                            <span className="block text-xl mb-2">05</span>
                            소변검사
                          </th>
                          <th className="p-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">
                            <span className="block text-xl mb-2">06</span>
                            신장 초음파<br />검사
                          </th>
                          <th className="p-6 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border-b border-gray-100">
                            <span className="block text-xl mb-2">07</span>
                            신장 조직검사
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={7} className="p-4 text-center text-[#FF4444] text-base border-b border-gray-100">
                            ※ 혈액검사 : 신장 기능을 평가하는 혈액 내 크레아티닌(creatinine) 및 요소질소(urea nitrogen) 수치, 전해질 농도와 산-염기 상태 측정
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={7} className="p-4 text-center text-[#FF4444] text-base border-b border-gray-100">
                            ※ 소변검사 : 원인 질환 추정을 위해 진행하며 단백뇨 및 소변의 다른 이상 소견에 대해 검사
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={7} className="p-4 text-center text-[#FF4444] text-base">
                            ※ 신장 초음파 검사 : 신장 크기 및 요로 폐쇄 징후 등을 확인
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 만성 신부전 치료 섹션 */}
              <div className="relative w-full bg-[url('/images/centers/nephrotic-bg3.jpg')] bg-cover bg-center mt-32">
                <div className="absolute inset-0 bg-[#1A4B8E]/90"></div>
                <div className="relative container mx-auto px-4 py-24">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <p className="text-white tracking-[0.2em] text-sm mb-2">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">만성 신부전 치료</h2>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                      <table className="w-full">
                        <caption className="sr-only">만성 신부전 치료 방법</caption>
                        <thead>
                          <tr>
                            <th className="p-6 text-white text-xl font-medium border-b border-white/10">
                              <div className="flex items-start gap-3">
                                <span className="text-white flex-shrink-0">✓</span>
                                <span>신장 기능 악화를 억제하는 것이 중요</span>
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th className="p-6 text-white text-xl font-medium border-b border-white/10">
                              <div className="flex items-start gap-3">
                                <span className="text-white flex-shrink-0">✓</span>
                                <span>고혈압, 당뇨, 고지혈증의 철저한 관리</span>
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th className="p-6 text-white text-xl font-medium border-b border-white/10">
                              <div className="flex items-start gap-3">
                                <span className="text-white flex-shrink-0">✓</span>
                                <span>신장에 해로운 약물 피하기</span>
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th className="p-6 text-white text-xl font-medium border-b border-white/10">
                              <div className="flex items-start gap-3">
                                <span className="text-white flex-shrink-0">✓</span>
                                <span>혈액투석, 복막투석, 신장 이식</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-8 text-center text-white/90 text-lg italic">
                              &quot;각 치료법 별로 장단점이 있으므로 담당 의사와 상의 후 개인에게 가장 적합한 방법을 선택해야 합니다.&quot;
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 단백뇨 섹션 */}
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="단백뇨"
                  title="단백뇨"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "소변에 단백질이 섞여 나오는 것을 단백뇨라고 하는데, 정상 소변에도 어느 정도 단백이 포함될 수 있으므로, 성인인 경우 하루 500mg 이상, 소아는 1시간 동안 체표면적 1제곱미터당 4mg 이상의 단백질이 배설될 때 명백한 단백뇨라고 합니다.",
                  ]}
                  imagePosition="right" // 또는 "right"
                />

              {/* 다음 섹션 */}
              {/* ... existing code ... */}

              {/* 단백뇨 종류 섹션 */}
              <div className="relative w-full bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4 py-24">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                      <p className="text-white tracking-[0.2em] text-sm mb-2">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">단백뇨 종류</h2>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden">
                      <table className="w-full">
                        <caption className="sr-only">단백뇨 종류</caption>
                        <colgroup>
                          <col style={{width: "30%"}} />
                          <col style={{width: "70%"}} />
                        </colgroup>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <th className="p-6 text-left text-[#1A4B8E] text-xl font-medium bg-[#F8F9FF]">
                              미세단백뇨
                            </th>
                            <td className="p-6 text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="text-[#1A4B8E] flex-shrink-0">✓</span>
                                <span>당뇨병, 고혈압, 사구체 신염에 의한 초기 신장 질환</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th rowSpan={4} className="p-6 text-left text-[#1A4B8E] text-xl font-medium bg-[#F8F9FF] align-top">
                              기능성 단백뇨
                            </th>
                            <td className="p-6 text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="text-[#1A4B8E] flex-shrink-0">✓</span>
                                <span>격렬한 운동을 한 직후</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-6 text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="text-[#1A4B8E] flex-shrink-0">✓</span>
                                <span>발열을 동반한 경우</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-6 text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="text-[#1A4B8E] flex-shrink-0">✓</span>
                                <span>오전에는 없지만, 오후에만 단백뇨가 검출되는 경우(기립성 단백뇨)</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-6 text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="text-[#1A4B8E] flex-shrink-0">✓</span>
                                <span>요로 감염을 동반한 경우</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 다음 섹션 */}

              {/* 혈뇨 섹션 */}
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="혈뇨"
                  title="혈뇨"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "혈뇨는 소변에 비정상적인 양의 적혈구가 섞여 배설되는 것으로, 약물이나 음식의 영향으로 단순히 소변이 붉게 보이는 현상과는 다릅니다. 눈으로 색깔 변화를 알아볼 수 있을 정도의 혈뇨를 육안적 혈뇨, 현미경으로만 보이는 것을 현미경적 혈뇨라고 합니다.",
                  ]}
                  imagePosition="right" // 또는 "right"
                />

              {/* 혈뇨 원인 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-2">SEKANG HOSPITAL</p>
                    <h2 className="text-4xl font-bold">혈뇨 원인</h2>
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <table className="w-full">
                      <caption className="sr-only">혈뇨 원인</caption>
                      <thead>
                        <tr className="bg-[#F8F9FF]">
                          <th className="p-6 text-center text-[#0066CC] font-medium border-b border-gray-200 w-[14.28%]">
                            <span className="text-xl mb-2 block">01</span>
                            <span>생리</span>
                          </th>
                          <th className="p-6 text-center text-[#0066CC] font-medium border-b border-gray-200 w-[14.28%]">
                            <span className="text-xl mb-2 block">02</span>
                            <span>감염<br/>(요로감염, 전립선염 등)</span>
                          </th>
                          <th className="p-6 text-center text-[#0066CC] font-medium border-b border-gray-200 w-[14.28%]">
                            <span className="text-xl mb-2 block">03</span>
                            <span>알레르기</span>
                          </th>
                          <th className="p-6 text-center text-[#0066CC] font-medium border-b border-gray-200 w-[14.28%]">
                            <span className="text-xl mb-2 block">04</span>
                            <span>운동 및 외상</span>
                          </th>
                          <th className="p-6 text-center text-[#0066CC] font-medium border-b border-gray-200 w-[14.28%]">
                            <span className="text-xl mb-2 block">05</span>
                            <span>다량의 칼슘,<br/>요산 배설</span>
                          </th>
                          <th className="p-6 text-center text-[#0066CC] font-medium border-b border-gray-200 w-[14.28%]">
                            <span className="text-xl mb-2 block">06</span>
                            <span>종양</span>
                          </th>
                          <th className="p-6 text-center text-[#0066CC] font-medium border-b border-gray-200 w-[14.28%]">
                            <span className="text-xl mb-2 block">07</span>
                            <span>요석</span>
                          </th>
                        </tr>
                        <tr>
                          <td colSpan={7} className="p-6 text-center text-red-500 border-b border-gray-200">
                            ※ 일시적 혈뇨는 흔하지만 지속적이거나 혈뇨의 양이 많을 때 정밀 검사가 필요합니다.
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={7} className="p-6 text-center text-red-500">
                            ※ 정밀 검사에도 원인 불명인 경우가 15% 정도입니다. 이 경우 정기적인 외래 진료를 통해 꾸준히 관찰해야 합니다.
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* 유튜브 섹션 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="건강증진센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                />

              {/* 다음 섹션 */}
            </div>
          )}

          {activeTab === 'lung' && (
            <div>
              <InfoSection
                  image="/images/centers/asthma-img01.jpg"
                  alt="천식"
                  title="천식"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "만성적인 기도의 알레르기 염증 질환으로 폐 속에 있는 기관지가 때때로 좁아져서 호흡곤란, 기침, 천명(음)(쌕쌕거리거나 휘이~ 혹은 가르랑 가르랑 거리는 거친 숨소리) 등 호흡기 증상이 반복적으로 그리고 갑작스럽게 발작적으로 나타나는 질환입니다.",
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* 천식 치료제 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
            <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">천식 치료법</h2>
            </div>

                    <div className="space-y-8">
                      {/* 증상 완화제 */}
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="flex items-center">
                          <div className="w-1/2 h-[400px] relative">
                            <Image
                              src="/images/centers/asthma-img02.jpg"
                              alt="증상 완화제"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="w-1/2 p-12">
                            <h3 className="text-[#1A4B8E] text-2xl font-medium mb-6">1. 증상 완화제</h3>
                            <p className="text-gray-700 text-lg mb-6">
                              기도 폐쇄의 증상을 수분 내에 완화시켜 천식 발작을 멈추게 합니다.
                            </p>
                            <div className="space-y-4">
                              <div>
                                <p className="text-[#F4B223] font-medium mb-1">☑ 속효성 β2 항진제 :</p>
                                <p className="text-gray-700">교감신경을 항진시켜 기도를 확장시키는 역할을 하는 약물로, 기도로 직접 흡인하는 약제가 있습니다.</p>
                              </div>
                              <div>
                                <p className="text-[#F4B223] font-medium mb-1">☑ 항콜린제 :</p>
                                <p className="text-gray-700">부교감신경을 억제시켜 기도의 수축을 막는 역할을 합니다.</p>
                              </div>
                              <div>
                                <p className="text-[#F4B223] font-medium mb-1">☑ 속효성 테오필린 :</p>
                                <p className="text-gray-700">카페인과 비슷한 약물로 기도를 확장시키는 역할을 합니다.</p>
                              </div>
                              <div>
                                <p className="text-[#F4B223] font-medium mb-1">☑ 경구 및 주사용 스테로이드 :</p>
                                <p className="text-gray-700">부신피질호르몬이라고도 하는 약물로서 기도의 염증을 가라앉히는 역할을 합니다.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 예방 약제 */}
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="flex items-center">
                          <div className="w-1/2 p-12">
                            <h3 className="text-[#1A4B8E] text-2xl font-medium mb-6">2. 예방 약제</h3>
                            <p className="text-gray-700 text-lg mb-6">
                              염증을 억제하여 천식 발작을 예방합니다.
                            </p>
                            <div className="space-y-4">
                              <div>
                                <p className="text-[#F4B223] font-medium mb-1">☑ 흡입용 스테로이드 :</p>
                                <p className="text-gray-700">입을 통해 기관지로 흡입함으로써 기관지에 직접 작용하는 스테로이드 제제입니다.</p>
                              </div>
                              <div>
                                <p className="text-[#F4B223] font-medium mb-1">☑ 지속성 기관지 확장제 :</p>
                                <p className="text-gray-700">기관지 수축을 예방하고 확장시키는 역할을 하는 약제입니다.</p>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/2 h-[400px] relative">
                            <Image
                              src="/images/centers/asthma-img03.jpg"
                              alt="예방 약제"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 만성폐쇄성폐질환(COPD) 섹션 */}
              <InfoSection
                  image="/images/centers/asthma-img04.jpg"
                  alt="만성폐쇄성폐질환(COPD)"
                  title="만성폐쇄성폐질환(COPD)"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "해한 입자(담배가 대표적)나 가스의 흡입에 의해 발생하는 폐의 비정상적인 염증반응과 함께 완전히 가역적이지 않으며 점차 진행하는 기류제한을 특징으로 하는 호흡기 질환입니다.",
                  ]}
                  imagePosition="right" // 또는 "right"
                />

              {/* 만성폐쇄성폐질환(COPD) 주요증상 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/colon-tester.jpg"
                title={[
                  "만성폐쇄성폐질환(COPD) 주요증상"
                ]}
                description={[
                  "기침 처음에는 간헐적으로 나타나지만 나중에는 매일 나타나며 때로는 온종일 지속되기도 합니다. 그러나 야간에만 기침이 있는 경우는 드뭅니다.",
                  "객담 배출 만성폐쇄성폐질환 환자들에서는 흔히 기침 발작 후에 소량의 끈끈한 객담이 나옵니다.",
                  "간암에 알코올을 주입하여 간암 세포를 죽이는 경피적 에탄올 주입술",
                  "호흡곤란 COPD와 관련된 장애 및 불안증의 주된 원인입니다. 호흡곤란은 지속적으로 진행하며 폐기능의 악화로 호흡곤란이 더욱 증가하게 됩니다.",
                  "천명음과 흉부 압박감 비교적 비특이적인 증상이며, 날마다 혹은 하루 중에 다양하게 나타납니다. 천명음이나 흉부 압박감이 없다고 해서 만성폐쇄성폐질환의 진단이 배제되는 것은 아닙니다."
                ]}
                isRepeating={true}
                textColor="black"
              />

              {/* 만성폐쇄성폐질환(COPD) 치료 섹션 */}
              <BannerSection
                backgroundImage="/images/centers/asthma-bgimg1.jpg"
                title={[
                  "만성폐쇄성폐질환(COPD) 치료"
                ]}
                description={[
                  "✓ 만성폐쇄성폐질환은 치료 자체가 상당히 어렵고 이미 파괴된 폐를 정상으로 되돌릴 수 없습니다.",
                  "✓ 금연이 만성폐쇄성폐질환의 예방과 진행을 감소시키는 가장 효과적인 방법입니다.",
                  "✓ 현재까지는 흡연을 계속하는 경우 폐 기능이 나빠지는 것을 치료할 수 있는 약제는 없습니다.",
                ]}
              />

              {/* 폐결핵 섹션 */}
              <InfoSection
                  image="/images/centers/asthma-img05.jpg"
                  alt="폐결핵"
                  title="폐결핵"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "결핵은 결핵균에 의해 발생하는 감염성 질환으로, 다른 감염성 질환에 비해 장기적으로 천천히 진행되거나 유지되는 특징이 있습니다. 이 질환은 공기로 퍼져나가며, 폐를 통하여 감염이 시작 되고 폐를 제외한 우리 몸의 여러 장기(예를 들어 뇌, 후두, 뼈, 위장관, 복막, 콩팥) 등을 침범하여 각 기관의 결핵을 유발합니다.",
                    "대부분의 결핵균 감염자들은 증상이 없으며(이를 '잠복결핵, latent tuberculosis'이라고 함), 이들 중 일부분의 사람들만이 병으로서 결핵이 발생합니다. 국제보건기구(World Health Organization: WHO)에 의하면 아직도 전 세계에서 매년 8백만 명이 활동성 결핵에 걸리며, 약 2백만 명이 사망하는 것으로 보고되고 있습니다."
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* 폐결핵 초기 증상 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                  <h2 className="text-[#1A1A1A] text-4xl font-bold">폐결핵 초기 증상</h2>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="overflow-hidden rounded-lg">
                    <table className="w-full">
                      <caption className="sr-only">폐결핵 초기 증상</caption>
                      <colgroup>
                        <col style={{width: "33.33%"}} />
                        <col style={{width: "33.33%"}} />
                        <col style={{width: "33.33%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            01. 3주 혹은 그 이상 지속되는 기침
                          </th>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            02. 가슴의 통증
                          </th>
                          <th className="py-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                            03. 가래 혹은 피가 섞인 가래를 동반한 기침
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* 폐결핵 전신 증상 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">폐결핵 전신 증상</h2>
                    </div>

                    <div className="max-w-6xl mx-auto">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <table className="w-full">
                          <caption className="sr-only">폐결핵 전신 증상</caption>
                          <colgroup>
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th className="py-6 text-center text-[#0066CC] text-xl font-medium">
                                01. 체중 감소
                              </th>
                              <th className="py-6 text-center text-[#0066CC] text-xl font-medium">
                                02. 발열
                              </th>
                              <th className="py-6 text-center text-[#0066CC] text-xl font-medium">
                                03. 오한
                              </th>
                              <th className="py-6 text-center text-[#0066CC] text-xl font-medium">
                                04. 밤에 생기는 발한(땀)
                              </th>
                              <th className="py-6 text-center text-[#0066CC] text-xl font-medium">
                                05. 식욕 감소 등
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={5} className="py-6 px-4 text-center text-gray-700 text-lg border-t border-gray-100">
                                ✓ 폐결핵 증상은 개인에 따라 모르고 지낼 수도 있습니다.
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={5} className="py-6 px-4 text-center text-gray-700 text-lg border-t border-gray-100">
                                ✓ 간혹 자연 회복이 되기도 하지만 만성적으로 악화되면 기침, 가슴 통증, 피 섞인 가래 등이 동반되기도 합니다.
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={5} className="py-6 px-4 text-center text-gray-700 text-lg border-t border-gray-100">
                                ✓ 폐결핵이 아닌 다른 장기의 결핵을 앓고 있는 사람들은 그 장기에 따라 고유한, 다른 증상을 보일 수 있습니다.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 폐결핵 진단 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-8">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold mb-4">폐결핵 진단</h2>
                      <p className="text-white/90 text-lg">
                        활동성 결핵으로 진단하기 위해서 일반적으로 의료진은 다음과 같은 순서로 검사를 시행합니다.
                      </p>
                    </div>

                    <div className="max-w-7xl mx-auto">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <table className="w-full">
                          <caption className="sr-only">폐결핵 진단 과정</caption>
                          <colgroup>
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th className="p-6 text-center text-[#1A4B8E] text-lg font-medium border-r border-gray-100">
                                <span className="block text-xl mb-2">01</span>
                                의학적 병력의<br />확인 후 진찰
                              </th>
                              <th className="p-6 text-center text-[#1A4B8E] text-lg font-medium border-r border-gray-100">
                                <span className="block text-xl mb-2">02</span>
                                Mantoux 투베르쿨린<br />피부 반응 검사
                              </th>
                              <th className="p-6 text-center text-[#1A4B8E] text-lg font-medium border-r border-gray-100">
                                <span className="block text-xl mb-2">03</span>
                                흉부 방사선<br />(X-선) 촬영
                              </th>
                              <th className="p-6 text-center text-[#1A4B8E] text-lg font-medium border-r border-gray-100">
                                <span className="block text-xl mb-2">04</span>
                                미생물학적으로<br />결핵균의 확인
                              </th>
                              <th className="p-6 text-center text-[#1A4B8E] text-lg font-medium">
                                <span className="block text-xl mb-2">05</span>
                                확인된 결핵균의<br />약제 내성 검사
                              </th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 폐렴 섹션 */}
              <InfoSection
                  image="/images/centers/asthma-img06.jpg"
                  alt="폐렴"
                  title="폐렴"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "폐렴은 숨을 쉬는 허파에 균이 들어가 염증이 생기는 병으로 세균이 숨을 쉬는 경로 중 호흡세기관지 이하 부위의 폐 조직에 염증 반응과 경화를 일으키는 질환입니다. 기침, 가래, 발열, 호흡곤란을 특징으로 하며 흉부 사진에서 폐렴과 유사한 소견이 있으면 폐렴이란 진단과 더불어 치료를 시작합니다.",
                  ]}
                  imagePosition="right" // 또는 "right"
                />


              {/* 폐렴 원인 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                  <h2 className="text-[#1A1A1A] text-4xl font-bold">폐렴 원인</h2>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="overflow-hidden rounded-lg">
                    <table className="w-full">
                      <caption className="sr-only">폐렴 원인</caption>
                      <colgroup>
                        <col style={{width: "20%"}} />
                        <col style={{width: "20%"}} />
                        <col style={{width: "20%"}} />
                        <col style={{width: "20%"}} />
                        <col style={{width: "20%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="py-6 px-4 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">01</span>
                            세균 및 바이러스에<br />의한 감염
                          </th>
                          <th className="py-6 px-4 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">02</span>
                            곰팡이에<br />의한 감염
                          </th>
                          <th className="py-6 px-4 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">03</span>
                            화학물질 및 구토물 등<br />이물질 흡인
                          </th>
                          <th className="py-6 px-4 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">04</span>
                            가스 흡인
                          </th>
                          <th className="py-6 px-4 text-center text-[#0066CC] text-lg font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">05</span>
                            방사선 치료
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* 폐렴 증상 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">폐렴 증상</h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <table className="w-full">
                          <caption className="sr-only">폐렴 증상</caption>
                          <colgroup>
                            <col style={{width: "50%"}} />
                            <col style={{width: "50%"}} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th className="py-6 px-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border-b border-gray-100">
                                폐 증상
                              </th>
                              <th className="py-6 px-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border-b border-gray-100">
                                전신 증상
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-8 align-top">
                                <div className="space-y-2">
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    기침
                                  </p>
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    가래
                                  </p>
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    호흡곤란
                                  </p>
                                  <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="text-gray-600 text-sm mb-2">
                                      ※ 끈적하고 고름 같은 가래
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                      ※ 때에 따라 피가 묻어 나오기도 함
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-8 align-top">
                                <div className="space-y-2">
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    발열, 오한
                                  </p>
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    구역, 구토, 설사
                                  </p>
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    두통
                                  </p>
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    피로감
                                  </p>
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    근육통
                                  </p>
                                  <p className="flex items-start gap-2 text-gray-700">
                                    <span className="text-[#0066CC]">☑</span>
                                    관절통
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 유튜브 영상 섹션 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="건강증진센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                />

              {/* 다음 섹션 */}
              {/* ... existing code ... */}
            </div>
          )}
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 