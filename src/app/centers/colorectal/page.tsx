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

export default function ColorectalPage() {
  const [activeTab, setActiveTab] = useState('levator');

  const tabs = [
    { id: 'levator', name: '항문거근증후군' },
    { id: 'hemorrhoid', name: '치핵(치질)' },
    { id: 'fistula', name: '치루/농양' },
    { id: 'fissure', name: '치열' },
  ];

  return (
    <>
      <Header />
      <Menu />
      <div className="min-h-screen bg-white">
      <PageBanner
        title="대장항문센터"
        description={[
          "풍부한 임상경험과 우수한 의료장비로",
          "각종 대장항문 질환을 개선합니다"
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
          {activeTab === 'levator' && (
            <div className="space-y-0">
              {/* 항문거근증후군 설명 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <div className="flex gap-8">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/levator-syndrome.jpg"
                        alt="항문거근증후군"
                        width={400}
                        height={300}
                        className="w-full"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">항문거근증후군</h3>
                      <div className="mt-4">
                        <p className="text-lg">
                          골반이 약해진 사람들에게 잘 생기는 병입니다.
                        </p>
                        <p className="text-lg mt-2">
                          항문을 둘러싸는 근육이자 항문 괄약근 중에서도 가장 깊은 곳에 있는 항문 거근에 이상이 생겨 발생하는 질환입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 항문거근증후군 원인 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">항문거근증후군 원인</h3>
                  <div className="mt-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0066CC] text-white flex items-center justify-center mr-3">
                        1
                      </div>
                      <p className="text-lg flex-1">
                        출산 경험이 많거나 반복적으로 주운 곳에 오랫동안 쪼그려 앉아 있는 등, 골반을 많이 쓰는 여성들에게 많이 나타납니다.
                      </p>
                    </div>
                    <div className="flex items-start mt-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0066CC] text-white flex items-center justify-center mr-3">
                        2
                      </div>
                      <p className="text-lg flex-1">
                        의자에 앉을 때 엉덩이를 빼고 앉는 습관이 있는 경우 골반 근육이 이래로 내려 앉아 항문거근증후군이 생기게 될 가능성이 높아집니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 항문거근증후군 검사 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">항문거근증후군 검사</h3>
                  <div className="flex gap-8 mt-6">
                    <div className="flex-1">
                      <p className="text-lg mb-4">
                        정확한 진단을 위해선 몇 가지 조건이 충족되어야 합니다.
                      </p>
                      <p className="text-lg mb-4">
                        만성적이거나 반복적인 직장통과 치핵, 근육 내 농양, 염증성 장 질환 등 직장통의 다른 원인이 배제된 뒤여야 가능합니다.
                      </p>
                      <p className="text-lg">
                        임상 치료 경험이 적거나 관련 전문의가 아니면 쉽게 진단을 내리지 못하지만 경험이 풍부한 전문의의 경우 검사로 골반 근육의 수축 정도를 체크하면 바로 알 수 있는 심리도 어려운 질환입니다.
                      </p>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/levator-examination.jpg"
                        alt="항문거근증후군 검사"
                        width={400}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 항문거근증후군 치료 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">항문거근증후군 치료</h3>
                  <p className="text-lg mt-4 mb-8">
                    항문거근증후군은 초기에 진단하여 적극적으로 치료할 경우 비교적 빠른 일상생활 복귀를 기대할 수 있습니다.
                  </p>
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-2 divide-x divide-gray-200">
                      <div className="bg-gray-50 py-4 px-6 text-gray-600 font-medium">01. 치료기간</div>
                      <div className="py-4 px-6 text-[#0066CC]">1~5주 (증상별 차이 有)</div>
                      
                      <div className="bg-gray-50 py-4 px-6 text-gray-600 font-medium border-t border-gray-200">02. 병원 내원</div>
                      <div className="py-4 px-6 text-[#0066CC] border-t border-gray-200">1회/2주</div>
                      
                      <div className="bg-gray-50 py-4 px-6 text-gray-600 font-medium border-t border-gray-200">03. 치료 방법</div>
                      <div className="py-4 px-6 text-[#0066CC] border-t border-gray-200">약물 및 주사요법</div>
                      
                      <div className="bg-gray-50 py-4 px-6 text-gray-600 font-medium border-t border-gray-200">04. 치료 관리</div>
                      <div className="py-4 px-6 text-[#0066CC] border-t border-gray-200">증상 발현 시 내원</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 인용구 섹션 */}
              <div className="w-full bg-[#F4F4F5]">
                <div className="container mx-auto px-4 py-20 relative">
                  <div className="text-[32px] font-medium text-center leading-relaxed">
                    세강병원은 풍부한 임상경험을 갖춘 의료진이<br />
                    숙련된 실력과 노하우로 만족스러운 결과를 안겨드립니다.
                  </div>
                  <div className="absolute left-12 top-0 text-[120px] text-[#0066CC] opacity-20">&quot;</div>
                  <div className="absolute right-12 bottom-0 text-[120px] text-[#0066CC] opacity-20">&quot;</div>
                </div>
              </div>

              <YouTubeSection
          videoId="VIDEO_ID"
          title="항문거근증후군 영상"
          sectionSubtitle="SEKANG HOSPITAL"
          sectionTitle="항문거근증후군 영상"
        />
            </div>
          )}
          {activeTab === 'hemorrhoid' && (
            <div className="space-y-0">
              {/* 치핵(치질) 설명 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <div className="flex gap-8">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/hemorrhoid.jpg"
                        alt="치핵(치질)"
                        width={400}
                        height={300}
                        className="w-full"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">치핵(치질)</h3>
                      <div className="mt-4">
                        <p className="text-lg">
                          항문 안쪽의 혈관이 늘어나서 그것을 덮고 있는 점막이 함께 늘어져 빠져나온 상태를 말합니다.
                        </p>
                        <div className="mt-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0066CC] text-white flex items-center justify-center mt-1">
                              1
                            </div>
                            <p className="text-lg">내치핵 : 항문지상선 안쪽에 발생하는 치핵, 일반적인 치핵 항문관 안쪽의 구성조이 반복적인 손상으로 탄력을 잃어버리고, 점차 바깥쪽으로 탈출되는 질환</p>
                          </div>
                          <div className="flex items-start gap-3 mt-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0066CC] text-white flex items-center justify-center mt-1">
                              2
                            </div>
                            <p className="text-lg">외치핵 : 지상선 바깥쪽에 발생하는 치핵으로 대개는 항문주위의 정맥이 피떡이 되어 항문 밖에 절액이 고여 등증을 유발하는 혈전성 치핵</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 치핵(치질) 증상 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">수술이 필요한 치핵(치질) 증상</h3>
                  <div className="mt-8 border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-[200px_1fr] divide-y">
                      <div className="bg-[#F8F9FF] p-6 font-medium text-lg text-[#0066CC] border-r flex items-center">
                        출혈
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            1
                          </div>
                          <span>변기가 붉게게 물들 정도의 출혈이 한 달에 한번 이상 꾸준히 발생할 때</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            2
                          </div>
                          <span>주사기로 쓰듯이 피가 나오기도 할 때</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            3
                          </div>
                          <span>출혈이 반복되면서 숨이 차고 가슴씩 어지러울 때</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            4
                          </div>
                          <span>혈액검사로 빈혈이 확인되었을 때</span>
                        </div>
                      </div>

                      <div className="bg-[#F8F9FF] p-6 font-medium text-lg text-[#0066CC] border-r flex items-center">
                        탈항
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            1
                          </div>
                          <span>변볼 때 탈항이 된 후 곧바로 들어가지 않을 때</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            2
                          </div>
                          <span>쭈그리고 앉거나 운동 중에 저절로 탈항이 될 때</span>
                        </div>
                      </div>

                      <div className="bg-[#F8F9FF] p-6 font-medium text-lg text-[#0066CC] border-r flex items-center">
                        통증
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            1
                          </div>
                          <span>한 달에 하루 이상 참문이 보고 아플 때</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            2
                          </div>
                          <span>무언서 일상생활이 불가능할 정도로 아플 때때</span>
                        </div>
                      </div>

                      <div className="bg-[#F8F9FF] p-6 font-medium text-lg text-[#0066CC] border-r flex items-center">
                        주변 피부의 늘어짐
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            1
                          </div>
                          <span>배변 후 세척이 어려울 정도로 진행되어 있을 때</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066CC] text-white text-xs flex items-center justify-center">
                            2
                          </div>
                          <span>미용 상 신경이 많이 쓰일 때</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-red-500 mt-4 text-sm">※ 수술 여부와 시기가 궁금하실 때에는 전문의와 상의하는 것이 가장 좋은 방법입니다.</p>
                </div>
              </div>

              {/* 치핵(치질) 치료 섹션 */}
              <div className="w-full bg-white">
                <div className="container mx-auto px-4">
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">치핵(치질)의 치료</h3>
                      <div className="mt-8 space-y-6">
                        <div>
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center mt-1">
                              1
                            </div>
                            <span className="text-lg font-medium">임시치료 : 적절한 용법과 용량으로 밴드결찰술, 적외선 또는 고무 전기를 이용한 치핵쇄약술, 레이저를 이용한 소작술 이러한 치료들은 거의 당일치료가 가능하지만 완벽하게 없앨 수 없어, 근본적인 치료가 될 수 없어 재발하는 극존율 발생합니다.</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center mt-1">
                              2
                            </div>
                            <span className="text-lg font-medium">근본치료 : 핵을 뿌리째 잘라내서 치체해야 하는 수술적 치료입니다.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/hemorrhoid-treatment.jpg"
                        alt="치핵(치질)의 치료"
                        width={400}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 치핵수술 전문의 섹션 */}
              <div className="w-full bg-[#F4F4F5]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold mb-8">치핵수술을 대장항문 전문 의사에게 맡겨야 합니다.</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center">
                        1
                      </div>
                      <p className="text-lg flex-1">치핵 덩어리와 주위의 경계가 뚜렷하지 않아 무조건 다 잘라내면 원하지 않은 부위까지 어디를 얼마만큼 절과하고 남겨야 할지를 결정하는 것이 매우 어렵습니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center">
                        2
                      </div>
                      <p className="text-lg flex-1">또 치핵 수술 후에도 항문 기능이 잘 유지되도록 해야 하므로 경험이 없거나 의사는 조금만 절과하는 소극적 수술을 하기 쉽고 이로 인해 재발하는 가능성이 높아집니다.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center">
                        3
                      </div>
                      <p className="text-lg flex-1">치핵 수술은 절제 후 정밀하게 성형을 해주어야 합니다. 그렇지 않을 경우 수술 후 항문이 깨끗하게 되지 않습니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PPH 수술 섹션 */}
              <div className="w-full bg-[#0066CC]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-white tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold text-white">원형 자동 문합기를 이용한 수술(PPH)</h3>
                  <p className="text-lg mt-4">
                    원형자동 문합기란 특수한 기계를 이용하여 치핵을 포함한 직장점막을 원형으로 절제하고 동시에 봉합하는 자동문합기를 이용한 치핵 수술법입니다.
                  </p>

                  <div className="mt-12">
                    <h4 className="text-xl font-medium mb-6">원형자동 문합기를 이용한 치핵(치질) 수술(PPH)의 장점</h4>
                    <div className="bg-white/10 rounded-lg p-8">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-white flex items-center justify-center flex-shrink-0">
                            <Image
                              src="/images/icons/check-blue.svg"
                              alt="체크"
                              width={12}
                              height={12}
                            />
                          </div>
                          <span>수술 후 통증이 적은 편</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-white flex items-center justify-center flex-shrink-0">
                            <Image
                              src="/images/icons/check-blue.svg"
                              alt="체크"
                              width={12}
                              height={12}
                            />
                          </div>
                          <span>항문에 상처가 남지 않음</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-white flex items-center justify-center flex-shrink-0">
                            <Image
                              src="/images/icons/check-blue.svg"
                              alt="체크"
                              width={12}
                              height={12}
                            />
                          </div>
                          <span>수술 후 일상생활 복귀가 빠른 편</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-white flex items-center justify-center flex-shrink-0">
                            <Image
                              src="/images/icons/check-blue.svg"
                              alt="체크"
                              width={12}
                              height={12}
                            />
                          </div>
                          <span>치핵과 늘어진 직장점막에도 적용 가능</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 하이브리드 PPH 치질수술 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4 py-20">
                  <div className="flex gap-8">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/hybrid-pph.jpg"
                        alt="하이브리드 PPH치질수술"
                        width={400}
                        height={300}
                        className="w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">하이브리드 PPH치질수술</h3>
                      <p className="text-lg mt-4">
                        기존 치질 수술과 단점을 획기적으로 해결해 준는 새로운 치질 수술법입니다. 늘어진 내치핵과 점막주름을 원형으로 절제하고 동시에 봉합하는 자동 문합기로 제거해 주는 수술법입니다.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">통증</td>
                          <td className="py-4 px-6">통증이 적다. 기존 치질 수술에 비해 통증이 1/10 정도에 불과합니다.</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">수술 시간</td>
                          <td className="py-4 px-6">수술 시간이 짧다. 약 20~30분 정도면 수술이 완료됩니다.</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">회복</td>
                          <td className="py-4 px-6">회복이 빠르다. 입원 기간은 최대 2박 3일 퇴원 후 곧바로 일상생활이 가능합니다.</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">기능</td>
                          <td className="py-4 px-6">기능 회복이 빠르다. 수술 후 배변 시에도 지장이 없습니다.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 하이브리드 PPH치질수술과 기존 치질 수술의 차이점 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">하이브리드 PPH치질수술과 기존 치질<br />수술의 차이점</h3>
                  
                  <p className="text-lg mt-4">
                    기존 치질 수술은 항문 안쪽에서 치핵을 절제했지만 하이브리드 PPH치질수술은 치상선보다 더 안쪽에서 절제와 봉합이 이루어지기 때문에 기존 수술보다 통증이 매우 적고 회복도 빠른 편입니다.
                  </p>
                  <p className="text-lg mt-4">
                    하이브리드 PPH치질수술의 보험 적용이 확대되어 현저한 비용 부담이 줄어들었습니다.
                  </p>
                </div>
              </div>

              {/* 하이브리드 PPH치질수술 과정 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">하이브리드 PPH치질수술 과정</h3>
                  
                  <div className="mt-8">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">수술 전</td>
                          <td className="py-4 px-6">탈출된 점막과 치핵을 확인하고 절제할 위치를 정확히 파악합니다.</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">수술 과정</td>
                          <td className="py-4 px-6">PPH 스테이플러 장치를 이용하여 불필요한 항문 조직과 치핵을 제거하고 다시 재조정</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">수술 후</td>
                          <td className="py-4 px-6">항문 조직을 다시 원래대로 원형으로 회복시켜 줍니다.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 유튜브 섹션 */}
              <YouTubeSection
          videoId="VIDEO_ID"
          title="하이브리드 PPH치질수술 영상"
          sectionSubtitle="SEKANG HOSPITAL"
          sectionTitle="하이브리드 PPH치질수술 영상"
        />
            </div>
          )}
          {activeTab === 'fistula' && (
            <div className="space-y-0">
              {/* 항문주위농양 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <div className="flex gap-8">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/anal-abscess.jpg"
                        alt="항문주위농양"
                        width={400}
                        height={300}
                        className="w-full"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">항문주위농양</h3>
                      <p className="text-lg mt-4">
                        항문 안쪽에 있는 항문샘들이 동해서 점막주름에 고름이 잡히는 것을 말합니다. 거의 대부분 치루로 진행됩니다.
                      </p>
                      <p className="text-lg mt-4">
                        주요 증상 : 항문 주위 통증의 심화 및 물살이를 동반합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 치루 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <div className="flex gap-8">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/anal-fistula.jpg"
                        alt="치루"
                        width={400}
                        height={300}
                        className="w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">치루</h3>
                      <p className="text-lg mt-4">
                        항문 안쪽에서 항문 주위 피부까지 구멍이 생겨 고름이 나오는 상태를 말합니다. 대부분 항문주위농양에서 진행됩니다.
                      </p>
                      <p className="text-lg mt-4">
                        주요 증상 : 항문 주위의 분비물과 통증이 반복적으로 발생합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 치루 방법 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">치루 방법</h3>
                  
                  <div className="mt-8">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">수술 전</td>
                          <td className="py-4 px-6">탈출된 점막과 치핵 조직을 확인하고 절제할 위치를 정확히 파악합니다.</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">수술 과정</td>
                          <td className="py-4 px-6">PPH 스테이플러 장치를 이용하여 불필요한 항문 조직과 치핵을 제거하고 다시 재조정</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-4 px-6 w-40 text-lg font-medium">수술 후</td>
                          <td className="py-4 px-6">항문 조직을 다시 원래대로 원형으로 회복시켜 줍니다.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 유튜브 섹션 */}
              <YouTubeSection
                videoId="VIDEO_ID"
                title="치루/농양 영상"
                sectionSubtitle="SEKANG HOSPITAL"
                sectionTitle="치루/농양 영상"
              />
            </div>
          )}
          {activeTab === 'fissure' && (
            <div className="space-y-0">
              {/* 치열 설명 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <div className="flex gap-8">
                    <div className="w-[400px] flex-shrink-0">
                      <Image
                        src="/images/centers/anal-fissure.jpg"
                        alt="치열"
                        width={400}
                        height={300}
                        className="w-full"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                      <h3 className="text-[32px] font-bold">치열</h3>
                      <p className="text-lg mt-4">
                        항문관막구이 심화화되어 종아지면서 변을 볼 때 찢어지는 병입니다.
                      </p>
                      <p className="text-lg mt-4">
                        감각이 예민한 부위가 찢어지기 때문에 변을 볼 때 통증과 출혈이 나타나고 생각하시면 됩니다. 통계적으로 나와 있진 않지만 오래된 치루에서는 염이 발생하는 것으로 알려져 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 치열의 치료 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">치열의 치료</h3>
                  <p className="text-lg mt-4">
                    급성이나 만성 치열에서의 심한 통증을 줄이기 위해서는 진통제 복용과 적절한 용법과 용량으로 매우 국소적 적용이 필요합니다.
                  </p>
                  <p className="text-lg mt-4">
                    매우 국소치료가 포함된 치열 연고를 사용하기도 합니다.
                  </p>
                </div>
              </div>

              {/* 급성 치열 섹션 */}
              <div className="w-full bg-[#0066CC]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-white tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold text-white">급성 치열</h3>
                  <p className="text-lg text-white mt-4">
                    항문이 줄어지는 것을 예방하는 것이 중요
                  </p>

                  <div className="mt-12">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="py-4 px-6 w-40 text-lg font-medium border-b border-gray-100">식이성유 복용</td>
                            <td className="py-4 px-6 border-b border-gray-100">배변을 가늘게 하여 항문상처를 줄이는 효과</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 w-40 text-lg font-medium border-b border-gray-100">작목</td>
                            <td className="py-4 px-6 border-b border-gray-100">근육 경련이 풀리며 통증이 가라앉고 상처를 빨리 낫게 하는 효과</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 w-40 text-lg font-medium" colSpan={2}>
                              <span className="text-red-500">※</span> 치료는 항문에 생긴 통증과 부종을 낫게 하고 수술 후 상처 치료를 빠르게 하는 치료법입니다.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 급성 치열 좌욕방법 섹션 */}
              <div className="w-full">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">급성 치열 좌욕방법</h3>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <span className="text-lg">너무 뜨겁지 않은 정도의 미지근한 물을 적욕가나 세수대야 등에 준비합니다.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <span className="text-lg">물을 꽉이거나 소독약을 물에 풀고 말고는 필요 없습니다.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <span className="text-lg">준비한 물에 약 3~5분간 항문부위를 담그고 있아 있습니다.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <span className="text-lg">사워기 등으로 항문을 씻는 것만으로는 충분한 효과를 얻을 수 없습니다.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        5
                      </div>
                      <span className="text-lg">양변기의 뚜껑을 열고 그 위에 적욕기를 올려놓은 후 미지근한 물을 넣고서 사용합니다.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        6
                      </div>
                      <span className="text-lg">직욕횟수는 항문출혈이나 부종이 생겨 직욕을 할 때는 하루 2~3번 합니다.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        7
                      </div>
                      <span className="text-lg">항문 수술 직후에는 하루 3회 정도 합니다.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        8
                      </div>
                      <span className="text-lg">배변 직후에는 꼭 직욕을 하십시오.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 만성 치열 섹션 */}
              <div className="w-full bg-[#F4F4F5]">
                <div className="container mx-auto px-4 py-20">
                  <h2 className="text-[#0066CC] tracking-[0.2em] text-base">SEKANG HOSPITAL</h2>
                  <h3 className="text-[32px] font-bold">만성 치열</h3>
                  <p className="text-lg mt-4">
                    이미 항문내괄약근의 변화가 있는 상태이기 때문에 근본적인 해결을 위해서 심화된 내괄약근을 부분절개하는 부분적 내괄약근 절개술이 필요합니다.
                  </p>
                </div>
              </div>

              {/* 유튜브 섹션 */}
              <YouTubeSection
                videoId="VIDEO_ID"
                title="치열 영상"
                sectionSubtitle="SEKANG HOSPITAL"
                sectionTitle="치열 영상"
              />
            </div>
          )}
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 