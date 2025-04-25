'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import PageBanner from '@/components/PageBanner';

export default function HealthPage() {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', name: '센터 소개' },
    { id: 'checkup', name: '종합검진 안내' },
    { id: 'custom', name: '맞춤형 검진' },
    { id: 'reservation', name: '예약안내&유의사항' },
  ];

  return (
    <>
      <Header />
      <Menu />
      <div className="min-h-screen bg-white">
      <PageBanner
        title="건강증진센터"
        description={[
          "세강병원 건강증진센터는",
          "최신 의료장비와 우수한 의료진으로",
          "고객의 건강한 삶을 약속드립니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

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
          {activeTab === 'intro' && (
            <div className="container mx-auto px-4">
              <div className="flex gap-16">
                <div className="w-[460px] h-[340px] relative border border-gray-100">
                  <Image
                    src="/images/centers/health-intro.jpg"
                    alt="건강증진센터"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold">건강증진센터</h2>
                  </div>
                  <p className="text-gray-800 text-lg leading-[1.8]">
                    보다 건강한 삶을 위해 질병의 예방과 조기 발견을 목적으로 심사하게 되는 검진 프로그램을 담당하는 건강증진센터입니다.<br /><br />
                    건강검진은 건강하실 때 정기적으로 받으시는 것이 좋습니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'intro' && (
            <div className="container mx-auto px-4 mt-20">
              <div className="space-y-16">
                <div className="flex items-center gap-12">
                  <div className="w-[240px] h-[240px] relative bg-[#F8F9FF] rounded-full flex-shrink-0">
                    <Image
                      src="/images/centers/feature-1.jpg"
                      alt="CT 검사"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0066CC] text-lg mb-2">01</p>
                    <h3 className="text-2xl font-bold text-[#0066CC] mb-3">건강증진 센터 개설(1998년)</h3>
                    <p className="text-gray-600 text-lg">차별화된 시설과 3D 128채널 CT, Color 초음파, 내시경 등 각종 의료장비 도입</p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="w-[240px] h-[240px] relative bg-[#F8F9FF] rounded-full flex-shrink-0">
                    <Image
                      src="/images/centers/feature-2.jpg"
                      alt="One Day One Stop"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0066CC] text-lg mb-2">02</p>
                    <h3 className="text-2xl font-bold text-[#0066CC] mb-3">One Day One Stop 진료 서비스</h3>
                    <p className="text-gray-600 text-lg">당일 검진 후 당일 진료, 검진에 필요한 검사 100% 자체 실시</p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="w-[240px] h-[240px] relative bg-[#F8F9FF] rounded-full flex-shrink-0">
                    <Image
                      src="/images/centers/feature-3.jpg"
                      alt="보건복지부 지정"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0066CC] text-lg mb-2">03</p>
                    <h3 className="text-2xl font-bold text-[#0066CC] mb-3">보건복지부 지정 건강검진 기관선정</h3>
                    <p className="text-gray-600 text-lg">국민건강보험공단검진, 국가조기암 검진</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'intro' && (
            <div className="container mx-auto px-4 mt-20">
              <div className="space-y-16">
                <div className="flex items-center gap-12">
                  <div className="w-[240px] h-[240px] relative bg-[#F8F9FF] rounded-full flex-shrink-0">
                    <Image
                      src="/images/centers/feature-4.jpg"
                      alt="내시경 검사"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0066CC] text-lg mb-2">04</p>
                    <h3 className="text-2xl font-bold text-[#0066CC] mb-3">대학 병원급 전자 내시경(위, 대장)을 이용한 조기암 검진</h3>
                    <p className="text-gray-600 text-lg">전자동 내시경 소독기 9대를 보유하여 철저한 소독 실시</p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="w-[240px] h-[240px] relative bg-[#F8F9FF] rounded-full flex-shrink-0">
                    <Image
                      src="/images/centers/feature-5.jpg"
                      alt="협력 체결"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0066CC] text-lg mb-2">05</p>
                    <h3 className="text-2xl font-bold text-[#0066CC] mb-3">대학병원 협력 체결&사후관리 시스템 구축</h3>
                    <p className="text-gray-600 text-lg">우수검자 1주일 안에 진료의뢰 연계, 지속적 건강관리 및 외래 진료 예약 시스템 구축</p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="w-[240px] h-[240px] relative bg-[#F8F9FF] rounded-full flex-shrink-0">
                    <Image
                      src="/images/centers/feature-6.jpg"
                      alt="전문의"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0066CC] text-lg mb-2">06</p>
                    <h3 className="text-2xl font-bold text-[#0066CC] mb-3">검진 전문의 20명의 진료과 전문의</h3>
                    <p className="text-gray-600 text-lg">소화기내과, 산부인과, 방사선과 등 전문의에 의한 검진 프로그램 운영</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'intro' && (
            <div className="relative w-full h-[400px] mt-20 bg-[#F8F9FF]">
              <div className="absolute inset-0">
                <Image
                  src="/images/centers/doctor-bg.jpg"
                  alt="의사 배경"
                  fill
                  className="object-cover brightness-[0.7]"
                />
              </div>
              <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-4xl font-medium leading-relaxed">
                    가장 건강할 때 받아야 하는 건강검진<br />
                    당신의 평생 건강, 세강병원이 함께합니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'intro' && (
            <div className="container mx-auto px-4 py-20">
              <div className="text-center mb-12">
                <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                <h2 className="text-2xl font-bold">건강증진센터 소개영상</h2>
              </div>
              <div className="max-w-4xl mx-auto aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="건강증진센터 소개영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === 'checkup' && (
            <>
              <div className="container mx-auto px-4">
                <div className="flex gap-16">
                  <div className="w-[460px] h-[340px] relative border border-gray-100">
                    <Image
                      src="/images/centers/checkup-intro.jpg"
                      alt="종합검진"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-8">
                      <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                      <h2 className="text-4xl font-bold">세강병원 종합검진</h2>
                    </div>
                    <p className="text-gray-800 text-lg leading-[1.8]">
                      양질의 의료서비스를 제공하는 세강병원의 기본 종합검진 항목을 소개합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container mx-auto px-4 mt-20">
                <div className="mb-8">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold text-[#C4A86B]">세강V검진</h2>
                </div>
                <div className="text-right mb-4">
                  <p className="text-[#0066CC]">남자 : 100만원 / 여자 : 103만원</p>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700 w-1/4">검사항목</th>
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700">검사내용</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">CT</td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <p>복부(조영제) 3D MDCT</p>
                            <p>폐 MDCT</p>
                            <p>뇌 MDCT</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">초음파</td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <p>[남] 경동맥초음파</p>
                            <p>[여] 유방초음파 (유방암)</p>
                            <p>갑상선초음파 (갑상선암)</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">내시경</td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <p>수면 위내시경 (위암,식도암)</p>
                            <p>수면 대장내시경 (대장암,직장암)</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">종양표지자</td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <p>AFP(간암), CEA (대장암)</p>
                            <p>CA19-1 (췌장암), NMP22 (방광암)</p>
                            <p>Cyfra21-1 (폐암)</p>
                            <p>[남] PSA (전립선암)</p>
                            <p>[여] CA125 (난소암), CA15-3 (유방암)</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">X선 검사</td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <p>흉부 X선 검사 (폐질환)</p>
                            <p>[여] 유방 X선 검사 (유방암)</p>
                            <p>골밀도검사 (골다공증, 골감소증)</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">기타 검사</td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <p>심전도 검사 (부정맥,협심증,심근경색증)</p>
                            <p>[여] 자궁경부세포 검사 (자궁경부암)</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">기초 검사</td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <p>기초측정<br />(신체계측, 혈압/맥박/시력/청력 측정)</p>
                            <p>인바디검사<br />(부위별 체지방,골격근량, 근육량 분석)</p>
                            <p>폐기능검사 (천식,폐기종,폐질환)</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">혈액 검사</td>
                        <td className="py-4 px-6">60종 정밀혈액, 소변/대변 검사</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">진찰 및 상담</td>
                        <td className="py-4 px-6">전문의 상담</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-red-500 mt-4 text-sm">※ 대장내시경 검사 시에 용종절제술을 시행하는 경우는 시술비용이 추가될 수 있습니다.</p>
              </div>

              <div className="container mx-auto px-4 mt-20">
                <div className="mb-8">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold text-[#B45F24]">세강P검진</h2>
                </div>
                <div className="text-right mb-4">
                  <p className="text-[#0066CC]">남자 : 70만원 / 여자 : 73만원</p>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700 w-1/4">검사항목</th>
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700">검사내용</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={5}>초음파</td>
                        <td className="py-4 px-6">복부초음파 (간암, 췌장암, 담낭암, 비장암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">신장초음파 (신장)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">남) 경동맥초음파</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">여) 유방초음파 (유방암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">갑상선초음파 (갑상선암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={2}>내시경</td>
                        <td className="py-4 px-6">수면 위내시경 (위암,식도암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">수면 대장내시경 (대장암,직장암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={5}>종양표지자 검사</td>
                        <td className="py-4 px-6">AFP (간암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">CEA (대장암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">CA19-9 (췌장암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">남) PSA (전립선암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">여) CA125 (난소암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={3}>X선 검사</td>
                        <td className="py-4 px-6">흉부 X선 검사 (폐 질환)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">여) 유방 X선 검사 (유방암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">골밀도 검사 (골다공증, 골감소증)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">기타 검사</td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <p>심전도 검사 (부정맥,협심증,심근경색증)</p>
                            <p>심초음파 검사</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={3}>기초 검사</td>
                        <td className="py-4 px-6">기초측정<br />(신체계측, 혈압/맥박/시력/청력 측정)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">인바디검사<br />(부위별 체지방,골격근량, 근육량 분석)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">폐기능검사 (천식,폐기종,폐질환)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">혈액 검사</td>
                        <td className="py-4 px-6">60종 정밀혈액, 소변/대변 검사</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">진찰 및 상담</td>
                        <td className="py-4 px-6">전문의 상담</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-red-500 mt-4 text-sm">※ 대장내시경 검사 시에 용종절제술을 시행하는 경우는 시술비용이 추가될 수 있습니다.</p>
              </div>

              <div className="container mx-auto px-4 mt-20">
                <div className="mb-8">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold text-[#6B45B4]">세강O검진</h2>
                </div>
                <div className="text-right mb-4">
                  <p className="text-[#0066CC]">남자 : 35만원 / 여자 : 38만원</p>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700 w-1/4">검사항목</th>
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700">검사내용</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={2}>초음파</td>
                        <td className="py-4 px-6">복부초음파(간암, 췌장암, 담낭암, 비장암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">신장초음파(신장)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">내시경</td>
                        <td className="py-4 px-6">수면 위내시경 (위암,식도암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={5}>종양표지자 검사</td>
                        <td className="py-4 px-6">AFP (간암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">CEA (대장암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">CA19-9 (췌장암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">남) PSA (전립선암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">여) CA125 (난소암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={3}>X선 검사</td>
                        <td className="py-4 px-6">흉부 X선 검사 (폐 질환)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">여) 유방 X선 검사 (유방암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">골밀도 검사 (골다공증, 골감소증)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={2}>기타 검사</td>
                        <td className="py-4 px-6">심전도 검사 (부정맥,협심증,심근경색증)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">여) 자궁경부세포 검사 (자궁경부암)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={3}>기초 검사</td>
                        <td className="py-4 px-6">기초측정<br />(신체계측, 혈압/맥박/시력/청력 측정)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">인바디검사<br />(부위별 체지방,골격근량, 근육량 분석)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">폐기능검사 (천식,폐기종,폐질환)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">혈액 검사</td>
                        <td className="py-4 px-6">60종 정밀혈액, 소변/대변 검사</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">진찰 및 상담</td>
                        <td className="py-4 px-6">전문의 상담</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="container mx-auto px-4 mt-20">
                <div className="mb-8">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold text-[#FF5C00]">세강H검진</h2>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium mb-4">선택 검사 항목</h3>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700 w-1/4">검사항목</th>
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700">검사내용</th>
                        <th className="py-4 px-6 text-right text-lg font-medium text-gray-700 w-1/6">금액</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={7}>혈액검사</td>
                        <td className="py-4 px-6">기초측정<br />(신체계측, 혈압/맥박/시력/청력 측정)</td>
                        <td className="py-4 px-6 text-right" rowSpan={7}>20만원</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">LDH</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">CK-MB</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">D-dimer</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">pro-BNP</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">Myoglobin</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">Troponin-T</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">초음파검사</td>
                        <td className="py-4 px-6">심장초음파</td>
                        <td className="py-4 px-6 text-right"></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">+</td>
                        <td className="py-4 px-6"></td>
                        <td className="py-4 px-6 text-right"></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">홀터검사</td>
                        <td className="py-4 px-6">24시간 심전도 검사</td>
                        <td className="py-4 px-6 text-right">30만원</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">+</td>
                        <td className="py-4 px-6"></td>
                        <td className="py-4 px-6 text-right"></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">CT검사</td>
                        <td className="py-4 px-6">심장(조영제) 3D MDCT</td>
                        <td className="py-4 px-6 text-right">50만원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="container mx-auto px-4 mt-20">
                <div className="mb-8">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold">추가 검사 항목</h2>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700 w-1/4">검사항목</th>
                        <th className="py-4 px-6 text-left text-lg font-medium text-gray-700">검사내용</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={6}>혈액검사</td>
                        <td className="py-4 px-6">잠복결핵검사</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">MAST allergy (108종)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">유전자전신암</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">Cyfra21-1 폐암</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">NMP22 방광암</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">CA15-3 유방암 (여)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={8}>CT</td>
                        <td className="py-4 px-6">뇌CT</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">폐CT</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">심장관상동맥석회화CT</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">경추CT</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">요추CT</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">복부(조영제) 3D MDCT</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">뇌(조영제) 3D MDCT</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">심장(조영제) 3D MDCT</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={6}>초음파</td>
                        <td className="py-4 px-6">상복부초음파, 신장초음파</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">갑상선초음파</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">경동맥초음파</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">유방초음파</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">심장초음파</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">전립선초음파</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium">내시경</td>
                        <td className="py-4 px-6">수면 대장내시경</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 align-top font-medium" rowSpan={3}>기타</td>
                        <td className="py-4 px-6">숙박종검</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6">수액(영양제)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="container mx-auto px-4 mt-20">
                <div className="flex items-start gap-12">
                  <div className="w-[400px] h-[300px] relative">
                    <Image
                      src="/images/centers/checkup-guide.jpg"
                      alt="종합검진 안내"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold mb-8">종합검진 안내</h2>
                    <div className="space-y-2">
                      <p>· 검진 요일 : 월요일 ~ 토요일</p>
                      <p>· 평일 : 오전 8시 ~ 오후 4시</p>
                      <p>· 토요일 : 오전 8시 ~ 오후 12시</p>
                      <p className="text-sm text-gray-500 mt-4">※ 예약을 하시면 보다 편리하게 검진 받으실 수 있습니다.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-12 mt-20">
                  <div className="flex-1">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold mb-8">건강검진 검사전날 유의사항</h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">1</div>
                        <p className="text-gray-800 text-lg">저녁식사는 기름기 없는 음식으로 가볍게 드시고 저녁9시 이후에는 절대 금식하십시오.</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">2</div>
                        <p className="text-gray-800 text-lg">복용중인 약이 있으면 주치의와 상의 후 복용을 중지하여 주시기 바랍니다.</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">3</div>
                        <p className="text-gray-800 text-lg">침 치료, 물리치료, 파스, 연고 등을 금하십시오.</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">4</div>
                        <p className="text-gray-800 text-lg">과음, 과로 및 과격한 운동 등을 금하시고 충분한 수면을 취하시기 바랍니다.</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">5</div>
                        <p className="text-gray-800 text-lg">대변은 기급적 검사전날에 보시어서 채변통에 넣어 오십시오.(공알 크기)</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[400px] h-[300px] relative">
                    <Image
                      src="/images/centers/checkup-caution.jpg"
                      alt="종합검진 시 주의사항"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-12 mt-20">
                  <div className="w-[400px] h-[300px] relative">
                    <Image
                      src="/images/centers/checkup-management.jpg"
                      alt="검진결과 이상 시 관리사항"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold mb-8">검진결과 이상 시 관리사항</h2>
                    <div className="space-y-2">
                      <p>· 우소견자에 대해서는 전문적인 발급 및 치료</p>
                      <p>· 조직 검사 및 용종 제거 즉시 시술</p>
                      <p>· 검사 결과 사후 시스템에서 지속적인 관리</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-12 mt-20">
                  <div className="flex-1">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold mb-8">검진 결과 통보 및 상담</h2>
                    <div className="space-y-2">
                      <p>· 당일 검사 결과 검진 전문의와 상담</p>
                      <p>· 종합 검사 결과 등기우편 발송</p>
                      <p className="text-sm text-gray-500 mt-4">※ 오후에 상담 및 내원하시면 더욱 편리하게 받으실 수 있습니다.</p>
                    </div>
                  </div>
                  <div className="w-[400px] h-[300px] relative">
                    <Image
                      src="/images/centers/checkup-result.jpg"
                      alt="검진 결과 통보 및 상담"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="relative w-full h-[400px] mt-20">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/centers/quote-bg.jpg"
                      alt="의사 배경"
                      fill
                      className="object-cover brightness-[0.7]"
                    />
                  </div>
                  <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    <div className="text-center max-w-4xl mx-auto">
                      <p className="text-4xl font-medium leading-relaxed">
                        세상을 아름답게 사회를 건강하게!<br />
                        The Sekang Hospital makes the world a beautiful and healthy society
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto px-4 py-20">
                  <div className="text-center mb-12">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-2xl font-bold">건강증진센터 소개영상</h2>
                  </div>
                  <div className="max-w-4xl mx-auto aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="건강증진센터 소개영상"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'custom' && (
            <div className="container mx-auto px-4">
              <div className="flex gap-16">
                <div className="w-[460px] h-[340px] relative border border-gray-100">
                  <Image
                    src="/images/centers/custom-intro.jpg"
                    alt="공무원, 교직원 특별 종합검진"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold">공무원, 교직원 특별 종합검진</h2>
                  </div>
                  <p className="text-gray-800 text-lg leading-[1.8]">
                    공무원, 교직원을 대상으로 국민건강보험공단 검진과 병행하여 여러 정밀 건강진단 항목을 선택하여 검진을 시행하는 프로그램입니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-16 mt-20">
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold">기업임직원 맞춤형 검진</h2>
                  </div>
                  <p className="text-gray-800 text-lg leading-[1.8]">
                    기업체 임직원을 대상으로 기본 건강진단과 여러 정밀진단 항목들로 구성된 프로그램입니다.<br />
                    검진 기업별로 다양한 검진 프로그램이 정해집니다.
                  </p>
                </div>
                <div className="w-[460px] h-[340px] relative border border-gray-100">
                  <Image
                    src="/images/centers/custom-corporate.jpg"
                    alt="기업임직원 맞춤형 검진"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative w-full h-[400px] mt-20">
                <div className="absolute inset-0">
                  <Image
                    src="/images/centers/quote-bg.jpg"
                    alt="의사 배경"
                    fill
                    className="object-cover brightness-[0.7]"
                  />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                  <div className="text-center max-w-4xl mx-auto">
                    <p className="text-4xl font-medium leading-relaxed">
                      세상을 아름답게 사회를 건강하게!<br />
                      The Sekang Hospital makes the world a beautiful and healthy society
                    </p>
                  </div>
                </div>
              </div>

              <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-2xl font-bold">건강증진센터 소개영상</h2>
                </div>
                <div className="max-w-4xl mx-auto aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="건강증진센터 소개영상"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reservation' && (
            <div className="container mx-auto px-4">
              <div className="flex gap-16">
                <div className="w-[460px] h-[340px] relative border border-gray-100">
                  <Image
                    src="/images/centers/reservation-intro.jpg"
                    alt="건강증진센터 예약안내"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                    <h2 className="text-4xl font-bold">건강증진센터 예약안내</h2>
                  </div>
                  <p className="text-gray-800 text-lg leading-[1.8]">
                    2014년부터 내시경(위, 대장) 예약제로 실시합니다.<br />
                    건강검진은 종합검진, 일반 검진으로 나누어 예약하실 수 있습니다.<br />
                    종합검진 및 국민건강보험공단 건강검진(일반 검진)은 예약 후 검진하실 수 있습니다.
                  </p>
                  <div className="mt-8 space-y-2">
                    <p className="text-[#0066CC]">건강증진센터 : 053) 620-6159, 6160</p>
                    <p className="text-[#0066CC]">종합검진센터 : 053) 620-6332, 6333</p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <div className="mb-8">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold">건강검진 검사전날 유의사항</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">1</div>
                    <p className="text-gray-800 text-lg">저녁식사는 기름기 없는 음식으로 가볍게 드시고 저녁9시 이후에는 절대 금식하십시오.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">2</div>
                    <p className="text-gray-800 text-lg">복용중인 약이 있으면 주치의와 상의 후 복용을 중지하여 주시기 바랍니다.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">3</div>
                    <p className="text-gray-800 text-lg">침 치료, 물리치료, 파스, 연고 등을 금하십시오.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">4</div>
                    <p className="text-gray-800 text-lg">과음, 과로 및 과격한 운동 등을 금하시고 충분한 수면을 취하시기 바랍니다.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">5</div>
                    <p className="text-gray-800 text-lg">대변은 기급적 검사전날에 보시어서 채변통에 넣어 오십시오.(공알 크기)</p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <div className="mb-8">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-4xl font-bold">건강검진 검사당일 유의사항</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">1</div>
                    <p className="text-gray-800 text-lg">예약시간을 지켜 주십시오.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">2</div>
                    <p className="text-gray-800 text-lg">아침식사는 아무것도 드시지 마십시오(물, 껌, 담배 포함).</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">3</div>
                    <p className="text-gray-800 text-lg">가벼운 의치문동이나 양치질은 무방합니다.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">4</div>
                    <p className="text-gray-800 text-lg">평소에 안경(콘텍트렌즈 포함)을 착용하시던 분은 반드시 착용하여 주시기 바랍니다.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">5</div>
                    <p className="text-gray-800 text-lg">귀중품(예:목걸이, 귀걸이, 반지 등)은 가급적 착용하지 마십시오.</p>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[400px] mt-20">
                <div className="absolute inset-0">
                  <Image
                    src="/images/centers/quote-bg.jpg"
                    alt="의사 배경"
                    fill
                    className="object-cover brightness-[0.7]"
                  />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                  <div className="text-center max-w-4xl mx-auto">
                    <p className="text-4xl font-medium leading-relaxed">
                      세상을 아름답게 사회를 건강하게!<br />
                      The Sekang Hospital makes the world a beautiful and healthy society
                    </p>
                  </div>
                </div>
              </div>

              <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                  <p className="text-[#0066CC] tracking-[0.2em] text-sm mb-1">S E K A N G   H O S P I T A L</p>
                  <h2 className="text-2xl font-bold">건강증진센터 소개영상</h2>
                </div>
                <div className="max-w-4xl mx-auto aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="건강증진센터 소개영상"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
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