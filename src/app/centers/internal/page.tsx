'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';

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
        {/* Banner Section */}
        <div className="relative h-[400px] bg-gradient-to-r from-[#F8F9FF] to-[#F1F4FF]">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <p className="text-[#0066CC] tracking-widest mb-4">SEKANG HOSPITAL</p>
              <h1 className="text-5xl font-bold mb-6">내과질환센터</h1>
              <p className="text-lg text-gray-600">
                우수한 의료진들의 정확한 진단<br />
                맞춤형 치료로 건강한 일상을 누리세요.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <Image
                src="/images/centers/internal-banner.jpg"
                alt="내과질환센터"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="container mx-auto">
          <div className="flex border-b overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-8 text-lg font-medium transition-colors whitespace-nowrap ${
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
          {/* Tab content will be added here */}
          {activeTab === 'hypertension' && (
            <div className="container mx-auto px-4">
              <div className="flex items-start gap-16">
                {/* 이미지 섹션 */}
                <div className="w-[500px] h-[400px] relative flex-shrink-0">
                  <Image
                    src="/images/centers/hypertension.jpg"
                    alt="고혈압 검사"
                    fill
                    className="object-cover rounded-lg border border-gray-100"
                  />
                </div>
                
                {/* 텍스트 섹션 */}
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                    <h2 className="text-[#1A1A1A] text-4xl font-bold">고혈압</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    혈압은 심장이 박동할 때 동맥 혈관에 흐르는 혈압의 압력입니다. 고혈압은 혈압이 올라가서 내려가지 않아 140/90mmHg이상으로 높은 상태가 계속되는 상태를 말합니다.
                  </p>

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
                <div className="flex items-start justify-between gap-16">
                  {/* 텍스트 섹션 */}
                  <div className="flex-1">
                    <div className="mb-8">
                      <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-[#1A1A1A] text-4xl font-bold">고혈압 치료법</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-1 text-[#0066CC] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          혈압이 높은 사람은 보통의 사람들에 비해 원신 수명이 짧으므로 반드시 적극적으로 치료해야 합니다.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-1 text-[#0066CC] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          고혈압의 치료에는 체중조절, 식이요법, 운동과 적절한 약물 등이 있지만 가장 중요한 것은 현재 본인의 혈압과 치료의사의 지시입니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 이미지 섹션 */}
                  <div className="w-[500px] h-[400px] relative flex-shrink-0">
                    <Image
                      src="/images/centers/hypertension-treatment.jpg"
                      alt="고혈압 치료"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* 고혈압 예방 수칙 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                  <h2 className="text-[#1A1A1A] text-4xl font-bold">고혈압 예방 수칙 7가지</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">1</span>
                    </div>
                    <p className="text-gray-700 text-lg">음식은 싱겁게 골고루 먹습니다.</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">2</span>
                    </div>
                    <p className="text-gray-700 text-lg">살이 찌지 않도록 적정 체중을 유지 합니다.</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">3</span>
                    </div>
                    <p className="text-gray-700 text-lg">매일 30분 이상 적절한 운동을 합니다.</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">4</span>
                    </div>
                    <p className="text-gray-700 text-lg">담배는 꼭 끊은 삶가야 합니다.</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">5</span>
                    </div>
                    <p className="text-gray-700 text-lg">지방질을 줄이고 야채를 많이 섭취 합니다.</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">6</span>
                    </div>
                    <p className="text-gray-700 text-lg">스트레스를 피하고 평온한 마음을 유지합니다.</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">7</span>
                    </div>
                    <p className="text-gray-700 text-lg">정기적으로 혈압을 측정하고 의사의 진찰을 생활화 합니다.</p>
                  </div>
                </div>
              </div>

              {/* 고지혈증 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="flex items-start gap-16">
                  {/* 이미지 섹션 */}
                  <div className="w-[500px] h-[400px] relative flex-shrink-0">
                    <Image
                      src="/images/centers/hyperlipidemia.jpg"
                      alt="고지혈증"
                      fill
                      className="object-cover rounded-lg border border-gray-100"
                    />
                  </div>
                  
                  {/* 텍스트 섹션 */}
                  <div className="flex-1">
                    <div className="mb-8">
                      <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-[#1A1A1A] text-4xl font-bold">고지혈증</h2>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      고지혈증은 혈액 내 지방성분이 많은 이상으로 많은 지방성분이 혈액 내에 존재하면서 혈관벽에 쌓여 혈관벽에 염증을 일으키고 그 결과 심혈관계질환을 일으키는 상태를 이상지질혈증이라고 합니다.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      고지혈증은 현증 콜레스테롤이나 중증 콜레스테롤이 동맥경화를 일으키는 주요원인이 될 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 고지혈증의 원인 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="py-16">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
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
              <div className="container mx-auto px-4 mt-32">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                  <h2 className="text-[#1A1A1A] text-4xl font-bold">관련 영상</h2>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="고혈압/고지혈증 관련 영상"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'diabetes' && (
            <div className="container mx-auto px-4">
              <div className="flex items-start gap-16">
                {/* 이미지 섹션 */}
                <div className="w-[500px] h-[400px] relative flex-shrink-0">
                  <Image
                    src="/images/centers/diabetes.jpg"
                    alt="당뇨병"
                    fill
                    className="object-cover rounded-lg border border-gray-100"
                  />
                </div>
                
                {/* 텍스트 섹션 */}
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                    <h2 className="text-[#1A1A1A] text-4xl font-bold">당뇨병</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    당뇨병은 우리나라 성인의 약 10%가 걸릴 정도로 흔한 성인병입니다. 최근 서구화된 식습관, 운동 부족에 의한 비만 인구의 증가.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    인구·경화 등의 환경적인 요인이 당뇨병환자를 급격하게 증가시키고 있습니다. 당뇨병의 정확한 원인 이해가 당뇨병 예방의 첫걸음입니다.
                  </p>
                </div>
              </div>

              {/* 당뇨병이란? 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen mt-32">
                <div className="relative">
                  {/* 배경 이미지 */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/centers/diabetes-bg.jpg"
                      alt="당뇨병 배경"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>

                  <div className="container mx-auto px-4 relative">
                    <div className="py-16">
                      <div className="text-center mb-12">
                        <p className="text-white/80 tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                        <h2 className="text-white text-4xl font-bold">당뇨병이란?</h2>
                      </div>
                      <div className="max-w-4xl mx-auto text-center">
                        <p className="text-white text-lg leading-relaxed mb-6">
                          우리가 섭취하는 음식물의 대부분은 포도당으로 분해된 후 혈액으로 이동되고, 세포 속으로 들어가 에너지원으로 사용됩니다.
                        </p>
                        <p className="text-white text-lg leading-relaxed mb-6">
                          이때 췌장에서 분비되는 호르몬인 인슐린은 세포 속으로 보내주는 문지기의 역할을 하게 되는데,
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                          췌장이 인슐린을 생산하지 못하거나 세포가 인슐린에 반응하지 않아 포도당이 세포 속으로 들어가지 못하고 고혈당 상태로 혈액 내에 남은 상태를 당뇨병이라고 합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                          <h3 className="text-[#0066CC] text-xl font-medium text-center mb-6">유전적 요인</h3>
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
                          <h3 className="text-[#0066CC] text-xl font-medium text-center mb-6">환경적 요인</h3>
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
                  <div className="w-[500px] h-[400px] relative flex-shrink-0">
                    <Image
                      src="/images/centers/diabetes-test.jpg"
                      alt="당뇨병 검사"
                      fill
                      className="object-cover rounded-lg border border-gray-100"
                    />
                  </div>

                  {/* 텍스트 섹션 */}
                  <div className="flex-1">
                    <div className="mb-8">
                      <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-[#1A1A1A] text-4xl font-bold">당뇨병 검사방법</h2>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-2">
                        <span className="text-[#0066CC] font-bold text-lg">•</span>
                        <p className="text-gray-700 text-lg">
                          소변에서 당의 존재를 알아보는 방법으로 검사 결과 양성으로 나오면서 혈당치도 정상 이상으로 나오면 당뇨병이라고 합니다.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#0066CC] font-bold text-lg">•</span>
                        <p className="text-gray-700 text-lg">
                          당뇨병의 진단에 있어 혈당치의 기준은 공복 혈당치 126mg/dl 이상, 식후 2시간 혈당치 200mg/dl이상이 기준입니다.
                        </p>
                      </div>
                    </div>

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
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen mt-32">
                <div className="relative">
                  {/* 배경 이미지 */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/centers/diabetes-management-bg.jpg"
                      alt="당뇨병 관리 배경"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>

                  <div className="container mx-auto px-4 relative">
                    <div className="py-16">
                      <div className="text-center">
                        <p className="text-white/80 tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                        <h2 className="text-white text-4xl font-bold">당뇨병은 꾸준한 관리가 중요합니다.</h2>
                        <p className="text-white/90 text-lg mt-4">
                          적극적인 치료와 관리로 건강하고 행복한 삶을 누리세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 유튜브 영상 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                  <h2 className="text-[#1A1A1A] text-4xl font-bold">관련 영상</h2>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="당뇨병 관련 영상"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'liver' && (
            <div className="container mx-auto px-4">
              {/* 간질환 content */}
            </div>
          )}

          {activeTab === 'lung' && (
            <div className="container mx-auto px-4">
              {/* 폐질환 content */}
            </div>
          )}

          {activeTab === 'kidney' && (
            <div className="container mx-auto px-4">
              {/* 신장질환 content */}
            </div>
          )}
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 