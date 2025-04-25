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

export default function EndoscopyPage() {
  const [activeTab, setActiveTab] = useState('colonoscopy');

  const tabs = [
    { id: 'colonoscopy', name: '대장내시경' },
    { id: 'gastroscopy', name: '위내시경' },
  ];

  return (
    <>
      <Header />
      <Menu />
      <div className="min-h-screen bg-white">
      <PageBanner
        title="소화기내시경센터"
        description={[
          "건강검진의 첫걸음",
          "세강병원과 함께 하세요!"
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
          {activeTab === 'colonoscopy' && (
            <div className="space-y-0">
              {/* 대장내시경 설명 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <div className="flex gap-8">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/colonoscopy.jpg"
                        alt="대장내시경"
                        width={400}
                        height={300}
                        className="w-full"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">대장내시경</h3>
                      <p className="text-lg mt-4 leading-relaxed text-gray-800">
                        항문으로 내시경이라는 특수한 카메라를 삽입하여 대장 내부 및 대장과 인접한 소장의 말단 부위까지를 관찰하는 검사로 대장암과 염증성 장질환의 진단에 매우 중요한 검사입니다.
                      </p>
                      <p className="text-lg mt-6 leading-relaxed text-gray-800">
                        대장내시경은 검사 소견이 정상이라면 3년 후, 용종이 발견되어 절제술을 받은 경우라면 선종의 종류에 따라 6개월~1년 주기로 검사를 진행해야 합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 대장내시경 검사가 필요한 경우 섹션 */}
              <div className="w-full bg-[#F4F4F5]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold mb-12">대장내시경 검사가 필요한 경우</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <p className="text-lg mt-1">40대 이상 성인 중 대장내시경을 안 받아본 분</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <p className="text-lg mt-1">배변 시 출혈이 있는 경우</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <p className="text-lg mt-1">하루 3회 이상 대변을 보는 경우</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <p className="text-lg mt-1">변비, 설사를 자주하는 경우</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        5
                      </div>
                      <p className="text-lg mt-1">점액변이 나오거나 대변이 가늘어진 경우</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        6
                      </div>
                      <p className="text-lg mt-1">부모나 형제 중 대장암이 있을 경우(20~30대도 권장)</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        7
                      </div>
                      <p className="text-lg mt-1">이유 없이 복통이나 원인 모를 빈혈이 지속될 경우</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 대장내시경 검사 전&후 주의사항 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base text-center">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold text-center mb-12">대장내시경 검사 전&후 주의사항</h3>
                  <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <p className="text-lg mt-1">수면 대장내시경 검사는 검사 전 날 잘재채이 필요해 당일 검사가 어렵습니다. 반드시 외래 진료 후 상담 및 예약하시기 바랍니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <p className="text-lg mt-1">검사 3일 전부터 직린 채소류(고구마 등), 해조류(김, 미역 등), 잡곡류(현미, 콩, 깨, 견과류 등), 씨가 있는 과일(참외, 포도, 수박, 키위, 딸기 등)은 절대 드시면 안 됩니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <p className="text-lg mt-1">복용하시는 약이 있다면 검사 전 반드시 주치의와 상의해야 합니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <p className="text-lg mt-1">용종 절제술이 필요한 경우 합병증 가능성이 있어 하루 정도 입원할 수 있습니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CO2 무통 대장내시경 섹션 */}
              <div className="w-full bg-[#F4F4F5]">
                <div className="container mx-auto px-4 py-20">
                  <div className="flex gap-12 items-start max-w-6xl mx-auto">
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold mb-6">CO2를 이용한 무통 방식으로 진행</h3>
                      <h4 className="text-[32px] font-bold mb-8">대장내시경</h4>
                      <p className="text-lg leading-relaxed text-gray-800 mb-12">
                        대장내시경 검사 시 일반 공기 대신 의료용 이산화탄소(CO2)를 주입하여 환자의 불편함과 통증을 줄이고 빠른 회복을 돕는 대장내시경 검사 방법입니다.
                      </p>
                      <div className="w-full border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="py-4 px-6 text-center text-lg font-medium text-gray-800 border-b w-1/2">일반 공기</th>
                              <th className="py-4 px-6 text-center text-lg font-medium text-[#0066CC] border-b w-1/2">의료용 이산화탄소(CO2)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="py-4 px-6">검사 후 복통과 복부팽만감 발생</td>
                              <td className="py-4 px-6 text-[#0066CC]">수면대장내시경</td>
                            </tr>
                            <tr>
                              <td className="py-4 px-6">장 내막으로의 빠른 흡수</td>
                              <td className="py-4 px-6 text-[#0066CC]">복통 및 불편함 감소</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/co2-colonoscopy.jpg"
                        alt="CO2 대장내시경"
                        width={400}
                        height={400}
                        className="w-full rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CO2의 장점 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4 py-20">
                  <div className="flex gap-12 items-start max-w-6xl mx-auto">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/co2-advantages.jpg"
                        alt="의료용 이산화탄소의 장점"
                        width={400}
                        height={400}
                        className="w-full rounded-lg"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[32px] font-bold mb-8">의료용 이산화탄소(CO2)의 장점</h2>
                      <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        검사 시 주입되는 일반 공기는 검사 후 복통과 더불어 복부팽만감, 지속적인 가스 배출 등의 불편함을 초래했습니다.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-800">
                        그러나 의료용 이산화탄소(CO2)는 약 30분~1시간이라는 짧은 시간 안에 장 내벽에 흡수되어 기존 대장내시경 검사에 따른 불편함이 크게 개선됐습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 대장용종의 종류 섹션 */}
              <div className="w-full bg-[#F4F4F5]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold mb-12">대장용종의 종류</h3>
                  
                  {/* 선종성 용종 테이블 */}
                  <div className="mb-8">
                    <div className="w-full bg-[#0066CC] text-white py-4 px-6 text-lg font-medium">
                      선종성 용종
                    </div>
                    <div className="border border-gray-200">
                      <table className="w-full">
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 w-1/3 bg-gray-50">
                              <p className="font-medium">관상선종</p>
                              <p className="text-gray-600">(tubular adenoma)</p>
                            </td>
                            <td className="py-4 px-6">전체 선종 중 90% 정도가 속하며 암 연관성은 5%정도로 알려져 있습니다.</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 w-1/3 bg-gray-50">
                              <p className="font-medium">융모상 선종</p>
                              <p className="text-gray-600">(villous adenoma)</p>
                            </td>
                            <td className="py-4 px-6">전체 선종의 3% 정도가 속하며, 암 연관성은 25~35% 정도로 알려져 있습니다.</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 w-1/3 bg-gray-50">
                              <p className="font-medium">관상융모상 선종</p>
                              <p className="text-gray-600">(tubulovillous adenoma)</p>
                            </td>
                            <td className="py-4 px-6">전체 선종의 3% 정도가 속하며, 암 연관성은 25~35% 정도로 알려져 있습니다.</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 w-1/3 bg-gray-50">
                              <p className="font-medium">톱니모양 선종</p>
                              <p className="text-gray-600">(serrated adenoma)</p>
                            </td>
                            <td className="py-4 px-6">전체 선종의 1% 미만에 불과할 정도로 드물게 나타나는 선종이지만 암 연관성이 매우 높은 종류이기 때문에 주의를 요합니다.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 비선종성 용종 테이블 */}
                  <div>
                    <div className="w-full bg-[#0066CC] text-white py-4 px-6 text-lg font-medium">
                      비선종성 용종
                    </div>
                    <div className="border border-gray-200">
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="py-4 px-6 w-1/3 bg-gray-50">
                              <p className="font-medium">비선종성 용종</p>
                              <p className="text-gray-600">(Non-adenomatous Polyp)</p>
                            </td>
                            <td className="py-4 px-6">대장용종의 30% 정도를 차지하고 있으며 과증식성 용종, 염증성 용종, 과오종 등이 속해 있습니다. 통상 대장암과의 연관성이 거의 없는 것으로 알려져 있기 때문에 반드시 절제를 할 필요는 없습니다만 육안으로 선종성 용종과 비선종성 용종이 항상 구분되는 것이 아니기 때문에 일단 대장용종이 발견되면 가능한 절제를 해서 확인하는 것이 현명합니다.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 용종 관련 인용구 섹션 */}
              <div className="w-full bg-[url('/images/centers/colonoscopy-bg.jpg')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-4 py-20 relative">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <div className="text-[80px] text-[#0066CC] opacity-20 font-serif mb-4">&quot;</div>
                    <p className="text-2xl leading-relaxed mb-4">
                      용모상흑은 관상용모상 선종이나 톱니모양 선종이 확인 된 경우
                    </p>
                    <p className="text-2xl leading-relaxed">
                      최소 6개월에서 1년 뒤 다시 한 번 대장내시경 검사를 받아보시기 바랍니다.
                    </p>
                    <div className="text-[80px] text-[#0066CC] opacity-20 font-serif mt-4">&quot;</div>
                  </div>
                </div>
              </div>

              {/* 용종절제술 섹션 */}
              <div className="w-full bg-[#0066CC]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-white tracking-[0.2em] text-base text-center">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold text-white text-center mb-16">용종절제술의 종류와 방법</h3>
                  
                  <div className="space-y-16 max-w-6xl mx-auto">
                    {/* 첫 번째 방법 */}
                    <div className="flex gap-8 items-start">
                      <div className="flex-1">
                        <h4 className="text-white text-2xl font-bold mb-4">
                          겸자를 이용한 대장용종 절제술<br />
                          <span className="text-lg font-normal">(punch polypectomy)</span>
                        </h4>
                        <p className="text-white/90 text-lg leading-relaxed">
                          작은 전제로 용종을 잡은 후 뜯어내는 방법으로 용종 제거 목적보다는 일부 조직을 떼어내서 조직 검사를 하기 위한 목적으로 사용하는 경우가 많습니다.
                        </p>
                      </div>
                      <div className="w-[400px] flex-shrink-0">
                        <Image
                          src="/images/centers/punch-polypectomy.jpg"
                          alt="겸자를 이용한 대장용종 절제술"
                          width={400}
                          height={300}
                          className="w-full rounded-lg border-4 border-white"
                          priority
                        />
                      </div>
                    </div>

                    {/* 두 번째 방법 */}
                    <div className="flex gap-8 items-start">
                      <div className="w-[400px] flex-shrink-0">
                        <Image
                          src="/images/centers/emr.jpg"
                          alt="내시경적 점막 절제술"
                          width={400}
                          height={300}
                          className="w-full rounded-lg border-4 border-white"
                          priority
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-2xl font-bold mb-4">
                          내시경적 점막 절제술<br />
                          <span className="text-lg font-normal">(endoscopic mucosal resection, EMR)</span>
                        </h4>
                        <p className="text-white/90 text-lg leading-relaxed mb-4">
                          대장내시경 검사 중에 발견된 용종을 특수 금속줄로 된 올가미를 이용해 전기를 통과시켜 잘라내는 방법입니다.
                        </p>
                        <p className="text-white/90 text-lg leading-relaxed">
                          그러나 종양의 범위가 넓거나 초기 암처럼 완전한 절제가 최대한 요구되는 경우에는 EMR 기법만으로는 병변을 여러 번에 나누어 절려야하므로 불완전한 절제가 될 위험이 있으며 정확한 조직검사가 불가능할 수도 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 대장암 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4 py-20">
                  <div className="flex gap-12 items-start max-w-6xl mx-auto">
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold mb-8">대장암</h3>
                      <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        충수, 맹장, 결장, 직장, 항문관 등으로 나누는 대장 중에서도 맹장과 결장, 직장에 생기는 악성 종양을 보고 대장암이라고 합니다.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-800">
                        대부분은 점막의 샘세포에 생기는 암이고 이 외에도 림프종이나 악성 유암종, 평활근육종 등이 원발성으로 생기기도 합니다.
                      </p>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/colon-cancer.jpg"
                        alt="대장암"
                        width={400}
                        height={400}
                        className="w-full rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 대장암 치료방법 섹션 */}
              <div className="w-full bg-[#F4F4F5]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base text-center">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold text-center mb-12">대장암 치료방법</h3>
                  <div className="max-w-6xl mx-auto">
                    <p className="text-lg text-center mb-12">
                      대장암의 진행 정도가 높아질수록 예후를 기대하기 어려우므로 조기 진단 정도 파악을 위해 여러 검사를 통해 정확한 진단은 매우 중요합니다. 수술 전 진행 정도 파악을 위해 여러 검사를 동해 정확한 진단이 이루어진 후에야 정확한 진단은 수술로 대장을 제거한 뒤 조직 검사가 이루어진 후에야 가능합니다.
                    </p>
                    <p className="text-lg text-center mb-12">
                      대장암은 발견 시기에 따라 완치 여부가 결정될 정도로 조기 진단이 중요합니다. 조기 대장암은 개복 없이 내시경적 절제술(ESD)이 가능하지만 진행된 경우에는 개복 및 복강경 수술이 불가피합니다. 경우에 따라 항암요법, 방사선 치료를 병행하기도 합니다.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="mb-4">
                          <Image
                            src="/images/centers/colon-treatment-1.jpg"
                            alt="암세포가 점막에 국한된 상태"
                            width={400}
                            height={300}
                            className="w-full rounded-lg"
                            priority
                          />
                        </div>
                        <p className="text-[#0066CC] font-medium mb-2">1기</p>
                        <p className="text-lg">암세포가 점막에 국한된 상태</p>
                      </div>
                      <div className="text-center">
                        <div className="mb-4">
                          <Image
                            src="/images/centers/colon-treatment-2.jpg"
                            alt="암세포가 장벽 내에 머물러 있는 경우"
                            width={400}
                            height={300}
                            className="w-full rounded-lg"
                            priority
                          />
                        </div>
                        <p className="text-[#0066CC] font-medium mb-2">2기</p>
                        <p className="text-lg">암세포가 장벽 내에 머물러 있는 경우</p>
                      </div>
                      <div className="text-center">
                        <div className="mb-4">
                          <Image
                            src="/images/centers/colon-treatment-3.jpg"
                            alt="암세포가 외로 나가고 림프절 전이가 있는 경우"
                            width={400}
                            height={300}
                            className="w-full rounded-lg"
                            priority
                          />
                        </div>
                        <p className="text-[#0066CC] font-medium mb-2">3기</p>
                        <p className="text-lg">암세포가 외로 나가고 림프절 전이가 있는 경우</p>
                      </div>
                      <div className="text-center">
                        <div className="mb-4">
                          <Image
                            src="/images/centers/colon-treatment-4.jpg"
                            alt="간, 폐 등 원격전이가 있는 경우"
                            width={400}
                            height={300}
                            className="w-full rounded-lg"
                            priority
                          />
                        </div>
                        <p className="text-[#0066CC] font-medium mb-2">4기</p>
                        <p className="text-lg">간, 폐 등 원격전이가 있는 경우</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 내시경 점막하 절제술 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4 py-20">
                  <div className="flex gap-12 items-start max-w-6xl mx-auto">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/esd.jpg"
                        alt="내시경 점막하 절제술"
                        width={400}
                        height={300}
                        className="w-full rounded-lg"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">내시경 점막하 절제술</h3>
                      <h4 className="text-[32px] font-bold mb-8">(endoscopic submucosal dissection, ESD)</h4>
                      <p className="text-lg leading-relaxed text-gray-800">
                        ESD는 수술을 하지 않고도 조기 대장암을 치료할 수 있는 최신 내시경 치료법으로 점막 밑에 약물을 주입하여 병변을 부풀린 후 내시경을 통해 삽입한 특수 절개도를 절개한 후 점막하층을 박리하여 병변을 제거하는 방법입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 유튜브 섹션 */}
              <YouTubeSection
          videoId="VIDEO_ID"
          title="내시경 점막하 절제술 영상"
          sectionSubtitle="SEKANG HOSPITAL"
          sectionTitle="내시경 점막하 절제술 영상"
        />
            </div>
          )}

          {activeTab === 'gastroscopy' && (
            <div className="space-y-0">
              {/* 위내시경 설명 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <div className="flex gap-12 items-start max-w-6xl mx-auto">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/gastroscopy.jpg"
                        alt="위내시경"
                        width={400}
                        height={300}
                        className="w-full rounded-lg"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">위내시경</h3>
                      <p className="text-lg leading-relaxed text-gray-800 mt-8">
                        위내시경은 상부 위장관 내시경 검사로 식도와 위는 물론 십이지장에 발생하는 여러 종류의 질환 (예:위암, 위궤양, 십이지장궤양, 식도염, 위염 등)을 진단하는데 있어 가장 기본적인 검사입니다.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-800 mt-6">
                        위내시경은 위암 조기발견을 위해 가장 중요한 검사이며, 각종 위장 질환을 정확하고 빠르게 진단하여 빠른 치료를 가능하게 합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 위내시경 검사 전&후 주의사항 섹션 */}
              <div className="w-full bg-[#F4F4F5]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base text-center">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold text-center mb-12">위내시경 검사 전&후 주의사항</h3>
                  <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <p className="text-lg mt-1">검사 진날, 저녁식사는 평소보다 가볍게 해야 합니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <p className="text-lg mt-1">검사 전 적어도 8시간 동안 금식해야 합니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <p className="text-lg mt-1">검사 당일에는 아침식사는 물론 물과 우유도 금식입니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <p className="text-lg mt-1">검사 당일, 혈압약이나 심장약을 복용해야 할 경우 최소한의 물로 복용하기 약 3~4시간 전 복용해야 합니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        5
                      </div>
                      <p className="text-lg mt-1">당뇨가 있는 분은 검사 당일 인슐린 주사, 당뇨 약을 복용하면 안 됩니다. (저혈당 위험)</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        6
                      </div>
                      <p className="text-lg mt-1">평소 알레르기, 심장질환, 고혈압, 천식, 녹내장, 전립선비대증 등 만성질환이 있거나 약물 복용 중인 경우 검사 전 꼭 의료진에게 알려야 합니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        7
                      </div>
                      <p className="text-lg mt-1">임신 가능성이 있거나 임신 중인 산모는 검사 전 꼭 의료진에게 알려야 합니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        8
                      </div>
                      <p className="text-lg mt-1">검사 중 필요에 따라 조직검사 및 기타 검사가 진행될 수 있으며 경우 추가 비용이 발생할 수 있습니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 위내시경의 진단 - 치료내시경 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4 py-20">
                  <div className="flex gap-12 items-start max-w-6xl mx-auto">
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold mb-8">위내시경의 진단 - 치료내시경</h3>
                      <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        과거에는 단순히 진단을 위한 내시경이었지만 지금은 가장 기본적인 검사입니다.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-800">
                        위내시경은 위암 조기 발견을 위해 가장 중요한 검사이며, 각종 위장 질환 (식도염, 위도염, 위궤양, 십이지장궤양)을 정확하고 빠르게 진단하여 빠른 치료를 가능하게 합니다.
                      </p>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/gastroscopy-treatment.jpg"
                        alt="치료내시경"
                        width={400}
                        height={300}
                        className="w-full rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 인용구 섹션 */}
              <div className="w-full bg-[url('/images/centers/gastroscopy-bg.jpg')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-4 py-20 relative">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <div className="text-[80px] text-[#0066CC] opacity-20 font-serif mb-4">&quot;</div>
                    <p className="text-2xl leading-relaxed">
                      세강병원은 풍부한 임상경험을 갖춘 의료진이<br />
                      숙련된 실력과 노하우로 만족스러운 결과를 안겨드립니다.
                    </p>
                    <div className="text-[80px] text-[#0066CC] opacity-20 font-serif mt-4">&quot;</div>
                  </div>
                </div>
              </div>

              {/* 위내시경 점막하 절제술 섹션 */}
              <div className="w-full bg-[#0066CC]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-white tracking-[0.2em] text-base text-center">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold text-white text-center">위내시경점막하 절제술</h3>
                  <h4 className="text-[24px] text-white text-center mb-12">(endoscopic submucosal dissection, ESD)</h4>
                  <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col gap-12">
                      <div className="flex gap-12 items-start">
                        <div className="flex-1">
                          <p className="text-lg text-white/90">
                            내시경 점막하 박리술은 소화관 점막과 악성 종양(암) 및 악성 종양 병변의 치료에 있어서 각광을 받고 있는 치료법으로써 숙련된 전문의에 의해서 시행되는 고도의 내시경적 절제술 입니다.
                          </p>
                          <p className="text-lg text-white/90 mt-6">
                            점막 또는 점막하층까지 침범한 종양을 내시경을 이용하여 박리하고, 이를 절제하여 암을 완치할 수 있는 방법입니다.
                          </p>
                        </div>
                        <div className="w-[400px] flex-shrink-0">
                          <Image
                            src="/images/centers/esd-1.jpg"
                            alt="위내시경 점막하 절제술 이미지 1"
                            width={400}
                            height={300}
                            className="w-full rounded-lg border-4 border-white"
                            priority
                          />
                        </div>
                      </div>

                      <div className="flex gap-12 items-start">
                        <div className="w-[400px] flex-shrink-0">
                          <Image
                            src="/images/centers/esd-2.jpg"
                            alt="위내시경 점막하 절제술 이미지 2"
                            width={400}
                            height={300}
                            className="w-full rounded-lg border-4 border-white"
                            priority
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-2xl font-bold text-white mb-8">위내시경점막하 절제술 적응증</h5>
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-white text-[#0066CC] flex items-center justify-center flex-shrink-0 font-medium">
                                1
                              </div>
                              <p className="text-lg text-white">위암 중 림프절 전이의 가능성이 없는 경우</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-white text-[#0066CC] flex items-center justify-center flex-shrink-0 font-medium">
                                2
                              </div>
                              <p className="text-lg text-white">위암이 점막층에 국한되어 있는 경우</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-white text-[#0066CC] flex items-center justify-center flex-shrink-0 font-medium">
                                3
                              </div>
                              <p className="text-lg text-white">위아나온 모양(융기형)에서 병변 크기가 2cm 이하인 경우</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-white text-[#0066CC] flex items-center justify-center flex-shrink-0 font-medium">
                                4
                              </div>
                              <p className="text-lg text-white">오목하게 들어간 함몰형에서 병변 크기가 1cm 이하인 경우</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-white text-[#0066CC] flex items-center justify-center flex-shrink-0 font-medium">
                                5
                              </div>
                              <p className="text-lg text-white">분화형이 좋은 조직형을 보이는 조기 위암인 경우</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-white text-[#0066CC] flex items-center justify-center flex-shrink-0 font-medium">
                                6
                              </div>
                              <p className="text-lg text-white">위선종, 위용종, 조기 식도암에도 적용 가능</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 유튜브 섹션 */}
              <YouTubeSection
                videoId="VIDEO_ID"
                title="위내시경점막하 절제술 영상"
                sectionSubtitle="SEKANG HOSPITAL"
                sectionTitle="위내시경점막하 절제술 영상"
              />
            </div>
          )}
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 