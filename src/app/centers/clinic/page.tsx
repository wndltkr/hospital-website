'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import PageBanner from '@/components/PageBanner';
import YouTubeSection from '@/components/YouTubeSection';

export default function ClinicCenterPage() {
  const [activeTab, setActiveTab] = useState('gallbladder');

  const tabs = [
    { id: 'gallbladder', name: '담낭질환' },
    { id: 'brain', name: '뇌/척추' },
    { id: 'hernia', name: '탈장' },
    { id: 'appendicitis', name: '충수염' },
  ];

  return (
    <>
      <Header />
      <Menu />
      <div className="min-h-screen bg-white">
      <PageBanner
        title="클리닉센터"
        description={[
          "당신만의 건강 파트너",
          "세강병원이 함께하겠습니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

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
          {activeTab === 'gallbladder' && (
            <div className="container mx-auto px-4">
              <div className="flex items-start gap-16">
                {/* 이미지 섹션 */}
                <div className="w-[500px] h-[400px] relative flex-shrink-0">
                  <Image
                    src="/images/centers/gall-img01.jpg"
                    alt="담석증"
                    fill
                    className="object-cover rounded-lg border border-gray-100"
                  />
                </div>
                
                {/* 텍스트 섹션 */}
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                    <h2 className="text-[#1A1A1A] text-4xl font-bold">담석증</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    여러 원인들로 인해 담즙내 구성 성분이 응결되거나 부착됨으로써 형성되는 결정성 구조물로 담낭으로 생긴 경우를 담석이라 합니다. 담석증을 일으키는 원인이 되는 음식은 콜레스테롤 함량이 많은 지방식이라고 알려져 있습니다.
                  </p>
                </div>
              </div>

              {/* 담석증 증상 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto py-24">
                    <div className="text-center">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold mb-12">담석증 증상</h2>
                      <div className="text-white/90 text-lg leading-relaxed space-y-6">
                        <p>
                          담석증은 무증상인 경우도 있으나, 일반적으로 상복부의 심한 통증으로 시작하여 오른쪽 상복부에 가장 심하고 통증이 오른쪽 어깨까지 퍼지는 것이 특징입니다. 통증은 갑자기 나타나며 1~4시간 동안 지속되다가 갑자기 혹은 서서히 소실됩니다.
                        </p>
                        <p>
                          오심, 구토가 흔히 동반되고 발열, 오한 등이 동반되는 경우 담낭염, 담관염 등이 합병증으로 발생한 것일 수도 있습니다. 총담관 담석증 등의 합병증이 동반된 경우 혈중 담즙 색소 수치가 높아져 황달 증상이 나타날 수 있습니다.
                        </p>
                        <p>
                          무증상인 경우 소화불량, 체한 증상 등으로 나타나기도 합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 담석증 진단 및 검사 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                    <h2 className="text-4xl font-bold">담석증 진단 및 검사</h2>
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <table className="w-full">
                      <caption className="sr-only">담석증 진단 및 검사</caption>
                      <colgroup>
                        <col style={{width: "16.666%"}} />
                        <col style={{width: "16.666%"}} />
                        <col style={{width: "16.666%"}} />
                        <col style={{width: "16.666%"}} />
                        <col style={{width: "16.666%"}} />
                        <col style={{width: "16.666%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            문진 및 이학적 검사
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            혈액검사
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            내시경 검사
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            방사선 검사
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            복부 초음파 검사
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            복부 CT 촬영
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* 담석증 치료 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">담석증 치료</h2>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">담석증 치료</caption>
                        <colgroup>
                          <col style={{width: "50%"}} />
                          <col style={{width: "50%"}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <td className="p-8 text-center text-lg text-gray-700 border border-gray-100">
                              심한 복통, 담낭염, 간염, 황달 발생 시 수술적 치료 지행
                            </td>
                            <td className="p-8 text-center text-lg text-gray-700 border border-gray-100">
                              무증상 담석 수술전 경과 관찰
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2} className="p-8 text-center text-red-500 border border-gray-100 bg-red-50">
                              ※ 무증상 담석이지만 수술을 해야 하는 경우<br />
                              과거 병력(증상, 췌장염 병력) 검토, 복부 초음파 상 담석 외 암이나 다른 의심 질환 유무에 따라 결정
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 담낭염 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="flex items-start gap-16">
                  {/* 텍스트 섹션 */}
                  <div className="flex-1">
                    <div className="mb-8">
                      <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-[#1A1A1A] text-4xl font-bold">담낭염</h2>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      담석, 수술 후 협착, 종양 등의 원인으로완전 혹은 불완전한 협착이 발생하여 혈류나 담관을 통해 장내 세균이 담즙 내에서 증식하면서 담낭(쓸개)에 염증을 일으키는 질환을 급성 담낭염이라고 합니다.
                    </p>
                  </div>

                  {/* 이미지 섹션 */}
                  <div className="w-[500px] h-[400px] relative flex-shrink-0">
                    <Image
                      src="/images/centers/gall-img02.jpg"
                      alt="담낭염"
                      fill
                      className="object-cover rounded-lg border border-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* 담낭염 원인 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto py-24">
                    <div className="text-center">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold mb-12">담낭염 원인</h2>
                      <div className="text-white/90 text-lg leading-relaxed space-y-6">
                        <div className="flex items-start gap-3">
                          <span className="text-[#4B9EFF] flex-shrink-0">✓</span>
                          <p>만성 신부전의 원인은 지역 및 나이 등에 따라 다릅니다.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-[#4B9EFF] flex-shrink-0">✓</span>
                          <p>한국에서의 주된 발병 원인은 당뇨병성 신장질환(41%), 고혈압(16%), 사구체신염(14%) 등으로 알려져 있습니다.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-[#4B9EFF] flex-shrink-0">✓</span>
                          <p>그 밖의 원인으로는 다낭성 신장질환과 기타 요로질환이 있습니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 담낭염 증상 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                    <h2 className="text-4xl font-bold">담낭염 증상</h2>
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <table className="w-full">
                      <caption className="sr-only">담낭염 증상</caption>
                      <colgroup>
                        <col style={{width: "25%"}} />
                        <col style={{width: "25%"}} />
                        <col style={{width: "25%"}} />
                        <col style={{width: "25%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">01</span>
                            급성 복통
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">02</span>
                            둔한 경련
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">03</span>
                            구토
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">04</span>
                            메스꺼움
                          </td>
                        </tr>
                        <tr>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">05</span>
                            열, 오한
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">06</span>
                            눈 흰자 및 피부 황달
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">07</span>
                            식후 통증
                          </td>
                          <td className="p-6 text-center text-[#0066CC] font-medium bg-[#F8F9FF] border border-gray-100">
                            <span className="block text-xl mb-2">08</span>
                            복부 팽창
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4} className="p-6 text-center text-red-500 border border-gray-100 bg-red-50">
                            ※ 급성 복통 : 오른쪽 복부 위쪽에서 시작, 점차 등이나 오른쪽 어깨로 퍼짐
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* 담낭염 진단&검사&치료 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">담낭염 진단&검사&치료</h2>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">담낭염 진단&검사&치료</caption>
                        <colgroup>
                          <col style={{width: "50%"}} />
                          <col style={{width: "50%"}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              진단&검사
                            </th>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              치료
                            </th>
                          </tr>
                          <tr>
                            <td className="p-8 text-center text-gray-700 leading-relaxed border border-gray-100">
                              <p className="mb-4">☑ 특징적 증상, 징후가 있을 경우 진단 가능</p>
                              <div className="space-y-2 mb-4">
                                <p>- 오른쪽 위쪽 복부 압통</p>
                                <p>- 발열</p>
                                <p>- 백혈구 증가</p>
                              </div>
                              <p>☑ 혈액검사 및 영상 검사로 확진</p>
                            </td>
                            <td className="p-8 text-center text-gray-700 leading-relaxed border border-gray-100">
                              <div className="space-y-4">
                                <p>☑ 금식 유지</p>
                                <p>☑ 항생제 투여</p>
                                <p>☑ 수액보충</p>
                                <p>☑ 담낭절제술</p>
                              </div>
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 담낭용종 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="flex items-start gap-16">
                  {/* 텍스트 섹션 */}
                  <div className="flex-1">
                    <div className="mb-8">
                      <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-[#1A1A1A] text-4xl font-bold">담낭용종</h2>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      건강검진상 발견되는 용종은 크기가 작고, 증상이 없는 경우가 대부분이기 때문에 용종의 크기와 초음파상 용종의 모습으로 쉽게 감별을 할 수 있습니다. 담낭용종은 콜레스테롤 용종과 선종의 감별이 가장 중요하며 선종은 전암병변으로 수술을 해야 합니다.
                    </p>
                  </div>

                  {/* 이미지 섹션 */}
                  <div className="w-[500px] h-[400px] relative flex-shrink-0">
                    <Image
                      src="/images/centers/gall-img03.jpg"
                      alt="담낭용종"
                      fill
                      className="object-cover rounded-lg border border-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* 담낭용종 치료 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">담낭용종 치료</h2>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">담낭용종 치료</caption>
                        <colgroup>
                          <col style={{width: "50%"}} />
                          <col style={{width: "50%"}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              용종 크기가 5mm 전후일 경우
                            </th>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              용종 크기가 1cm 이상인 경우
                            </th>
                          </tr>
                          <tr>
                            <td className="p-8 text-center text-gray-700 text-lg leading-relaxed border border-gray-100">
                              수술보다 보존적 치료를 권함
                            </td>
                            <td className="p-8 text-center text-gray-700 text-lg leading-relaxed border border-gray-100">
                              악성 용종일 수 있어 반드시 수술해야 함
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 복강경 수술 섹션 */}
              <div className="container mx-auto px-4 mt-32">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                    <h2 className="text-4xl font-bold">복강경 수술</h2>
                  </div>

                  <div className="flex flex-col items-center">
                    {/* 이미지 섹션 */}
                    <div className="w-full h-[500px] relative mb-12">
                      <Image
                        src="/images/centers/gall-img04.jpg"
                        alt="복강경 수술"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* 텍스트 섹션 */}
                    <div className="max-w-4xl text-center">
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        전통적으로 복부에 큰 절개창을 열고 시행하는 개복 수술과 달리, 복부에 0.5~1.5cm 크기의 작은 구멍(절개창)을 여러 개 내고, 그 안으로 비디오 카메라와 각종 기구들을 넣고 시행하는 수술 방법입니다.
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        절개창 크기가 작아 수술 상처가 미용적으로 보기 좋고, 창상으로 인한 통증이 훨씬 적은 편입니다. 또한 빠른 회복 속도를 보여 재원기간이 짧고, 일상생활로 빠르게 복귀할 수 있다는 장점이 있습니다.
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        다만, 각 수술에 따라 입원 기간 및 회복 기간은 다릅니다. 복강경 담낭절제술의 경우, 일반적으로 수술 후 1~2일 정도 입원 기간이 필요하고 복강경 췌장절제술은 수술 후 3~4일 정도의 입원이 필요합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'brain' && (
            <div className="container mx-auto px-4">
              {/* 목 디스크 및 목 관절의 질환 섹션 */}
              <div className="container mx-auto px-4 mt-8">
                <div className="flex items-start gap-16">
                  {/* 텍스트 섹션 */}
                  <div className="flex-1">
                    <div className="mb-8">
                      <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                      <h2 className="text-[#1A1A1A] text-4xl font-bold">목 디스크 및 목 관절의 질환</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                      <p>
                        목은 7개의 척추뼈로 구성되어 있으며, 상부의 무거운 머리를 지탱하고 있으며, 우리몸의 어떤 척추관절부보다 관절의 운동범위가 넓어 대부분의 회전 운동이 일어나는 중요한 척추관절부위입니다.
                      </p>
                      <p>
                        그러나 허리관절에 비하여 퇴행성 관절의 변화는 드물게 나타나나 목 디스크등 목관절의 이상으로 초래되는 질환들도 상당히 많은 것이 사실입니다.
                      </p>
                      <p>
                        허리디스크와 마찬가지로 목디스크도 순간적인 외상 등에 의해 탈출되는 경우는 드물고 어느 정도 디스크 자체에 퇴행성 변화가 온 뒤에 부적절한 자세나 지속적인 스트레스 등이 가해질 때 수핵 탈출 즉, 디스크 탈출이 일어나게 되며 허리 디스크와는 달리 상하지의 마비까지도 초래될 수 있는 질환입니다.
                      </p>
                      <p>
                        가장 많은 발생 빈도를 보이는 목디스크는 제5-6번 경추부이며 그 다음으로 제6-7번 경추부입니다.
                      </p>
                    </div>
                  </div>

                  {/* 이미지 섹션 */}
                  <div className="w-[500px] h-[600px] relative flex-shrink-0">
                    <Image
                      src="/images/centers/brain-img01.jpg"
                      alt="목 디스크 및 목 관절의 질환"
                      fill
                      className="object-cover rounded-lg border border-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* 목 디스크 및 목 관절 질환 증상 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-6xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold mb-6">목 디스크 및 목 관절 질환 증상</h2>
                      <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
                        목디스크·목 관절 이상에 따른 증상은 크게 어깨, 팔 등의 통증, 마비 증상, 손이나 하지의 힘이 떨어지는 것으로 나타납니다. 또 병변 위치에 따라 통증의 양상을 3가지로 구분할 수 있습니다
                      </p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">목 디스크 및 목 관절 질환 증상</caption>
                        <colgroup>
                          <col style={{width: "33.333%"}} />
                          <col style={{width: "33.333%"}} />
                          <col style={{width: "33.333%"}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              상부 경추
                            </th>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              하부 경추
                            </th>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              중앙 부위 탈출 시
                            </th>
                          </tr>
                          <tr>
                            <td className="p-8 text-center text-gray-700 text-lg leading-relaxed border border-gray-100">
                              양쪽 어깨, 후두부쪽 통증
                            </td>
                            <td className="p-8 text-center text-gray-700 text-lg leading-relaxed border border-gray-100">
                              양팔과 양손 감각이상, 동통
                            </td>
                            <td className="p-8 text-center text-gray-700 text-lg leading-relaxed border border-gray-100">
                              마비 증상이 주로 나타남<br />다리 쪽 마비가 심각한 것이 특징
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={3} className="p-6 text-center text-red-500 border border-gray-100 bg-red-50">
                              목디스크는 초기에 경미한 보행 장애 정도로 나타나 세심한 주의가 요구됩니다.<br />
                              또 간혹 대소변 곤란이나 목을 움직일 때마다 저린 증상을 호소하기도 합니다.
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 목 디스크 및 목 관절 질환 진단 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen mt-32">
                <div className="relative bg-[url('/images/centers/brain-bg1.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto py-24">
                      <div className="text-center">
                        <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                        <h2 className="text-white text-4xl font-bold mb-12">목 디스크 및 목 관절 질환 진단</h2>
                        <div className="space-y-6">
                          <div className="flex items-start gap-3 text-white/90 text-lg leading-relaxed">
                            <span className="text-[#4B9EFF] flex-shrink-0 mt-1">✓</span>
                            <p>X-ray(엑스레이) 촬영으로 척추와 척추 사이의 간격, 후관절 쪽 굴곡 형성 유무 확인</p>
                          </div>
                          <div className="flex items-start gap-3 text-white/90 text-lg leading-relaxed">
                            <span className="text-[#4B9EFF] flex-shrink-0 mt-1">✓</span>
                            <p>척수 조영술, CT, MRI 등의 검사로 척수 신경 압박 정도, 척수 신경 내 변화 유무 관찰하여 진단</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 목 디스크 및 목 관절 질환 치료 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">목 디스크 및 목 관절 질환 치료</h2>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">목 디스크 및 목 관절 질환 치료</caption>
                        <colgroup>
                          <col style={{width: "50%"}} />
                          <col style={{width: "50%"}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              보존적 요법
                            </th>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              수술적 요법
                            </th>
                          </tr>
                          <tr>
                            <td className="p-8 text-center text-gray-700 leading-relaxed border border-gray-100">
                              <p className="mb-4">☑ 신경 마비 증상이 없을 때 먼저 진행</p>
                              <p className="mb-4">☑ 보조기 착용으로 목 운동 제한</p>
                              <p className="mb-4">☑ 목 견인술, 약물치료 등</p>
                              <p className="text-red-500">※ 3~5주 시행 후 호전되지 않을 경우 수술적 치료 고려</p>
                            </td>
                            <td className="p-8 text-center text-gray-700 leading-relaxed border border-gray-100">
                              <p className="mb-4">☑ 보존적 치료에 반응하지 않는 경우</p>
                              <p className="mb-4">☑ 신경학적 마비가 발생한 경우</p>
                              <p className="mb-4">☑ 환자 병변 위치에 따라 전방 접근법, 후방 접근법 적용</p>
                              <p className="mb-4">☑ 수술 후 보조기 착용 권함</p>
                              <p>☑ 수술 후 3주 뒤 일상생활 복귀 가능</p>
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'hernia' && (
            <div className="container mx-auto px-4">
              {/* 탈장 소개 섹션 */}
              <div className="flex items-start gap-16">
                {/* 이미지 섹션 */}
                <div className="w-[500px] h-[400px] relative flex-shrink-0">
                  <Image
                    src="/images/centers/hernia-img01.jpg"
                    alt="탈장"
                    fill
                    className="object-cover rounded-lg border border-gray-100"
                  />
                </div>

                {/* 텍스트 섹션 */}
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                    <h2 className="text-[#1A1A1A] text-4xl font-bold">탈장</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    탈장이란 신체의 장기가 제자리에 있지 않고 다른 조직을 통해 돌출되거나 빠져 나오는 증상을 말합니다. 신체 어느 곳에나 생길 수 있지만 대부분 복벽에서 발생하는데, 복벽 탈장은 복강을 둘러싼 근육과 근막 사이에 복막이 주머니 모양으로 돌출되어 비정상적인 형태를 이루는 상태입니다.
                  </p>
                </div>
              </div>

              {/* 탈장 종류 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-7xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold mb-6">탈장 종류</h2>
                      <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
                        목디스크·목 관절 이상에 따른 증상은 크게 어깨, 팔 등의 통증, 마비 증상, 손이나 하지의 힘이 떨어지는 것으로 나타납니다.<br />
                        또 병변 위치에 따라 통증의 양상을 3가지로 구분할 수 있습니다
                      </p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">탈장 종류</caption>
                        <colgroup>
                          <col style={{width: "30%"}} />
                          <col style={{width: "70%"}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              서혜부 탈장
                            </th>
                            <td className="p-6 text-center text-gray-700 leading-relaxed border border-gray-100">
                              소아의 경우 선천적으로 복벽의 틈새가 있는 경우 발생, 성인에서는 나이 들어감에 따라 복벽이 약해지고 과도한 복압 상승이 동반될 경우 발생합니다.
                            </td>
                          </tr>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              대퇴 탈장
                            </th>
                            <td className="p-6 text-center text-gray-700 leading-relaxed border border-gray-100">
                              서혜부 탈장이 발생하는 부위보다 아래쪽에 발생하며 대퇴관 후복벽 중 약한 부위로 복강 내 장기가 빠져나옵니다. 대개 마르고 나이 많은 여성에게 잘 발생하며 서혜부 탈장보다 감돈(탈장내공에 장이 끼어 복강 내로 다시 들어가지 못하는 상태)의 위험이 높습니다.
                            </td>
                          </tr>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              반흔 탈장
                            </th>
                            <td className="p-6 text-center text-gray-700 leading-relaxed border border-gray-100">
                              보통 수술 흉터 부위에 발생하는데, 큰 수술 상처(장 수술, 혈관 수술)에서부터 작은 수술 상처 (충수돌기염 수술, 복강경을 삽입하려고 작게 절개한 피부 상처까지 어느 경우나 발생할 수 있습니다.<br /><br />
                              특히 상처 봉합 후 상처 감염, 고령, 당뇨, 방사선 조사, 전신 상태 불량(간경변, 악성종양, 만성 소모성 질환), 비만, 수술 상처의 불완전한 봉합, 수술 중 대량 실혈 등이 있거나 스테로이드를 복용 중인 경우 자주 발생합니다.
                            </td>
                          </tr>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              제대(배꼽) 탈장
                            </th>
                            <td className="p-6 text-center text-gray-700 leading-relaxed border border-gray-100">
                              제대 부위에 구멍이 남아 있거나 복벽이 얇아진 경우 발생합니다. 분만 시간이 매우 길었던 임산부, 복수가 많이 차 있는 간경변증 환자, 출산을 많이 한 여성에서 자주 발생합니다.
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 탈장 진단 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen mt-32">
                <div className="relative bg-[url('/images/centers/hernia-bg1.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto py-24">
                      <div className="text-center">
                        <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                        <h2 className="text-white text-4xl font-bold mb-12">탈장 진단</h2>
                        <div className="space-y-6">
                          <div className="flex items-start gap-3 justify-center">
                            <span className="text-[#4B9EFF] flex-shrink-0 mt-1">✓</span>
                            <p className="text-white/90 text-lg leading-relaxed">손가락으로 부드럽고 둥근 덩어리 촉진</p>
                          </div>
                          <div className="flex items-start gap-3 justify-center">
                            <span className="text-[#4B9EFF] flex-shrink-0 mt-1">✓</span>
                            <p className="text-white/90 text-lg leading-relaxed">기침할 때 더 자세히 관찰 가능</p>
                          </div>
                          <div className="flex items-start gap-3 justify-center">
                            <span className="text-[#4B9EFF] flex-shrink-0 mt-1">✓</span>
                            <p className="text-white/90 text-lg leading-relaxed">진단이 모호한 경우 복부 초음파, CT 촬영 시행</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 탈장 치료 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">탈장 치료</h2>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">탈장 치료</caption>
                        <thead>
                          <tr>
                            <td className="p-8 text-center border-b border-gray-100">
                              <div className="flex items-center justify-center gap-3">
                                <span className="text-[#4B9EFF] text-xl">✓</span>
                                <p className="text-gray-700 text-lg leading-relaxed">탈장은 기본적으로 수술적인 교정이 필요합니다.</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-8 text-center border-b border-gray-100">
                              <div className="flex items-center justify-center gap-3">
                                <span className="text-[#4B9EFF] text-xl">✓</span>
                                <p className="text-gray-700 text-lg leading-relaxed">수술 직후 복벽에 힘을 주어선 안 됩니다. (무거운 물건을 들거나 복벽에 힘 주는 행위 삼가기)</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-8 text-center">
                              <div className="flex items-center justify-center gap-3">
                                <span className="text-[#4B9EFF] text-xl">✓</span>
                                <p className="text-gray-700 text-lg leading-relaxed">변비를 피할 수 있는 음식 복용해야 합니다.</p>
                              </div>
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'appendicitis' && (
            <div className="container mx-auto px-4">
              {/* 충수염 소개 섹션 */}
              <div className="flex items-start gap-16">
                {/* 텍스트 섹션 */}
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">SEKANG HOSPITAL</p>
                    <h2 className="text-[#1A1A1A] text-4xl font-bold">충수염</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    급성충수염은 충수에 생긴 급성 염증을 말하며, 어떤 원인에 의해 충수의 입구가 막혀 충수가 부어 오르고 혈류가 차단되면서 염증이 심해져가는 병으로 치료하지 않으면 천공으로 인한 복막염을 유발할 수 있습니다.
                  </p>
                </div>

                {/* 이미지 섹션 */}
                <div className="w-[500px] h-[400px] relative flex-shrink-0">
                  <Image
                    src="/images/centers/app-img01.jpg"
                    alt="충수염"
                    fill
                    className="object-cover rounded-lg border border-gray-100"
                  />
                </div>
              </div>

              {/* 급성충수염 증상 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-7xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold">급성충수염 증상</h2>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">급성충수염 증상</caption>
                        <colgroup>
                          <col style={{width: "25%"}} />
                          <col style={{width: "25%"}} />
                          <col style={{width: "25%"}} />
                          <col style={{width: "25%"}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th className="p-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              <p>체한듯한 증상, 배꼽 주위 통증</p>
                              <p className="mt-2">식욕감퇴, 구토, 미열</p>
                            </th>
                            <th className="p-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              <p>오른쪽 아랫배에 통증</p>
                              <p className="mt-2">배를 누르거나 기침 때 통증</p>
                            </th>
                            <th className="p-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              충수돌기 천공
                            </th>
                            <th className="p-8 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              <p>복막염</p>
                              <p className="mt-2">심한 복통, 고열</p>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 급성충수염 치료 섹션 */}
              <div className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#1A4B8E] mt-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-7xl mx-auto py-24">
                    <div className="text-center mb-12">
                      <p className="text-white/80 tracking-[0.2em] text-sm mb-4">SEKANG HOSPITAL</p>
                      <h2 className="text-white text-4xl font-bold mb-6">급성충수염 치료</h2>
                      <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto mb-12">
                        충수염은 수술적 치료가 원칙입니다. 천공을 동반하지 않았다면 통상 수술 후 3-4일 정도에 퇴원이 가능하지만 천공을 동반할 경우 7일 이상의 입원 기간이 필요합니다.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <table className="w-full">
                        <caption className="sr-only">급성충수염 치료</caption>
                        <colgroup>
                          <col style={{width: "30%"}} />
                          <col style={{width: "70%"}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              개복술
                            </th>
                            <td className="p-6 text-center text-gray-700 leading-relaxed border border-gray-100">
                              전신 마취 하에 우하복부를 5-10cm정도 절개하여 충수돌기를 절제하는 방법입니다.
                            </td>
                          </tr>
                          <tr>
                            <th className="p-6 text-center text-[#0066CC] text-xl font-medium bg-[#F8F9FF] border border-gray-100">
                              복강경수술
                            </th>
                            <td className="p-6 text-center text-gray-700 leading-relaxed border border-gray-100">
                              복벽에 3-4개의 작은 구멍을 낸 후 카메라 및 복강경 기구를 삽입하여 충수돌기를 절제하는 것으로, 개복술에 비해 통증이 적은 편이고, 빠른 회복을 기대할 수 있습니다.
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 유튜브 섹션 */}
              <YouTubeSection
                  videoId="VIDEO_ID"
                  title="건강증진센터 소개영상"
                  sectionSubtitle="SEKANG HOSPITAL"
                />
            </div>
          )}
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 