'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import InfoSection from '@/components/InfoSection';
import BannerSection from '@/components/BannerSection';
export default function CertificatePage() {
  const [activeTab, setActiveTab] = useState<'first' | 'cost'>('first');

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      {/* Banner Section */}
      <PageBanner
        title="인터넷 증명서 발급"
        description={[
          "온라인으로 간편하게",
          "증명서를 발급받으세요"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      {/* Main Content Section */}
      <div>
        {/* Tab Navigation */}
        <div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('first')}
              className={`relative px-8 py-4 text-lg font-medium transition-colors ${
                activeTab === 'first'
                  ? 'text-[#0066CC]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              처음 발급하시는 분
              {activeTab === 'first' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066CC]"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('cost')}
              className={`relative px-8 py-4 text-lg font-medium transition-colors ${
                activeTab === 'cost'
                  ? 'text-[#0066CC]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              제증명서 발급비용
              {activeTab === 'cost' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066CC]"
                />
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'first' ? (
            <div className="space-y-16">
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="제증명/의무기록 사본 발급 안내"
                  title="제증명/의무기록 사본 발급 안내"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "환자의 개인정보 보호를 위해서 의료기관은 의무기록의 비밀을 유지할 책임이 있으므로, 모든 증명서 발급은 의료법에 따라 원칙적으로 환자 본인이 직접 내원하셔야 하지만 부득이한 경우 대리인이 오실 때는 구비서류를 지참 하셔야 합니다."
                  ]}
                  imagePosition="right" // 또는 "right"
                />

              <BannerSection
                backgroundImage="/images/about/about_fot_img.jpg"
                title={[
                  "의무기록 사본 발급 안내",
                  "사본발급시 필요한 서류 [의료법 제21조, 시행규칙 제13조의2]"
                ]}
                description={[
                  "신분증 또는 신분증 사본은 반드시 사진이 있는 것이어야 함.",
                  "친족관계증명서는 환자 본인과의 관계가 명시된 것이어야 함. 건강보험증은 친족관계가 입증되지 않으므로 인정되지 않음. 의무기록 사본발급일 기준 3개월 이내에 발급 받은 것만 인정함.",
                  "동의서 및 위임장의 자필서명은 도장 및 지장은 인정되지 않음. (반드시 서명이어야 함)",
                  "동의서에는 사본발급 받는 범위(날짜, 기록지 범위 등)를 구체적으로 명기하도록 하여야 함.",
                  "사망, 의식불명인자, 미성년자 등의 경우에는 법정 대리인이 대신할 수 있음."
                ]}
              />
              
              {/* Required Documents Table Section */}
              <div className="bg-white rounded-2xl p-12">
                <div className="max-w-5xl mx-auto">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <caption className="sr-only">구비서류 안내</caption>
                      <colgroup>
                        <col className="w-[40%]" />
                        <col className="w-[60%]" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border text-center">신청자</th>
                          <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border text-center">구비서류</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-4 px-6 border text-center">환자본인 요청 시</td>
                          <td className="py-4 px-6 border">
                            본인임을 확인 할 수 있는 신분증 (주민등록증, 운전면허증 등)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 border text-center">
                            환자의 가족 요청 시<br />
                            (환자의 배우자, 부모, 자녀)
                          </td>
                          <td className="py-4 px-6 border space-y-2">
                            <p>1. 신청인의 신분증</p>
                            <p>2. 환자의 신분증 및 사본</p>
                            <p>3. 가족임을 확인 할 수 있는 서류(가족관계증명서, 주민등록등본 등)</p>
                            <p>4. 환자가 자필 서명한 동의서</p>
                            <p className="text-[#FF4444]">* 단, 17세미만환자의 부모가 요청 시 (부모신분증, 가족확인서류 지참)</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 border text-center">
                            환자가 지정하는<br /> 대리인이 요청 시
                          </td>
                          <td className="py-4 px-6 border space-y-2">
                            <p>1. 신청인의 신분증</p>
                            <p>2. 환자의 신분증 및 사본</p>
                            <p className="flex items-center gap-2">
                              3. 환자가 자필 서명한 위임장
                              <a 
                                href="/download/attorney.hwp"
                                className="inline-flex items-center justify-center px-3 py-1 bg-[#0066CC] text-white text-sm rounded hover:bg-[#0055AA] transition-colors"
                              >
                                다운로드
                              </a>
                            </p>
                            <p className="flex items-center gap-2">
                              4. 환자가 자필 서명한 동의서
                              <a 
                                href="/download/agreement.hwp"
                                className="inline-flex items-center justify-center px-3 py-1 bg-[#0066CC] text-white text-sm rounded hover:bg-[#0055AA] transition-colors"
                              >
                                다운로드
                              </a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="증명서 발급 수수료"
                  title="증명서 발급 수수료"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "보건복지부 제정 / 2017년 9월 21일 시행"
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* Fee Table Section */}
              <div className="bg-white rounded-2xl p-12">
                <div className="max-w-6xl mx-auto">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <caption className="sr-only">제증명서 발급비용 안내</caption>
                      <colgroup>
                        <col className="w-[10%]" />
                        <col className="w-[30%]" />
                        <col className="w-[20%]" />
                        <col className="w-[40%]" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border text-center">순번</th>
                          <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border text-center">종류</th>
                          <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border text-center">수수료</th>
                          <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border text-center">비고</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">1</td>
                          <td className="py-4 px-6 border text-center">일반진단서 (소견서)</td>
                          <td className="py-4 px-6 border text-center">￦20,000</td>
                          <td className="py-4 px-6 border text-left"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">2</td>
                          <td className="py-4 px-6 border text-center">건강 진단서</td>
                          <td className="py-4 px-6 border text-center">￦20,000</td>
                          <td className="py-4 px-6 border text-left"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">3</td>
                          <td className="py-4 px-6 border text-center">근로능력평가용 진단서</td>
                          <td className="py-4 px-6 border text-center">￦10,000</td>
                          <td className="py-4 px-6 border text-left"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">4</td>
                          <td className="py-4 px-6 border text-center">사망 진단서</td>
                          <td className="py-4 px-6 border text-center">￦10,000</td>
                          <td className="py-4 px-6 border text-left">기본 2장</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">5</td>
                          <td className="py-4 px-6 border text-center">장애 진단서(신체적장애)</td>
                          <td className="py-4 px-6 border text-center">￦15,000</td>
                          <td className="py-4 px-6 border text-left">장애등급판정기준에 따른 신체적장애</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">6</td>
                          <td className="py-4 px-6 border text-center">장애 진단서(정신적장애)</td>
                          <td className="py-4 px-6 border text-center">￦40,000</td>
                          <td className="py-4 px-6 border text-left">장애등급판정기준에 따른 정신적장애</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">7</td>
                          <td className="py-4 px-6 border text-center">후유장애진단서</td>
                          <td className="py-4 px-6 border text-center">￦100,000</td>
                          <td className="py-4 px-6 border text-left"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">8</td>
                          <td className="py-4 px-6 border text-center">병무용 진단서</td>
                          <td className="py-4 px-6 border text-center">￦20,000</td>
                          <td className="py-4 px-6 border text-left">사진3장(최근3개월이내 찍은 사진)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">9</td>
                          <td className="py-4 px-6 border text-center">장애심사용진단서(국민연금용)</td>
                          <td className="py-4 px-6 border text-center">￦15,000</td>
                          <td className="py-4 px-6 border text-left">연금용 용지지참</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">10</td>
                          <td className="py-4 px-6 border text-center">상해진단서</td>
                          <td className="py-4 px-6 border text-center">￦100,000</td>
                          <td className="py-4 px-6 border text-left">상해진단기간이 3주 미만인 경우</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">11</td>
                          <td className="py-4 px-6 border text-center">상해진단서</td>
                          <td className="py-4 px-6 border text-center">￦150,000</td>
                          <td className="py-4 px-6 border text-left">상해진단기간이 3주 이상인 경우</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">12</td>
                          <td className="py-4 px-6 border text-center">영문 일반진단서</td>
                          <td className="py-4 px-6 border text-center">￦20,000</td>
                          <td className="py-4 px-6 border text-left"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">13</td>
                          <td className="py-4 px-6 border text-center">입퇴원확인서</td>
                          <td className="py-4 px-6 border text-center">￦3,000</td>
                          <td className="py-4 px-6 border text-left"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">14</td>
                          <td className="py-4 px-6 border text-center">통원확인서</td>
                          <td className="py-4 px-6 border text-center">￦3,000</td>
                          <td className="py-4 px-6 border text-left">통원 진료일자 기재</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">15</td>
                          <td className="py-4 px-6 border text-center">진료확인서</td>
                          <td className="py-4 px-6 border text-center">￦3,000</td>
                          <td className="py-4 px-6 border text-left">통원 진료일자와 진료내역(상병)기재</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">16</td>
                          <td className="py-4 px-6 border text-center">출생증명서</td>
                          <td className="py-4 px-6 border text-center">￦3,000</td>
                          <td className="py-4 px-6 border text-left"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">17</td>
                          <td className="py-4 px-6 border text-center">시체검안서</td>
                          <td className="py-4 px-6 border text-center">￦30,000</td>
                          <td className="py-4 px-6 border text-left">기본 6장<br />검시, 출장료는 별도 산정</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">18</td>
                          <td className="py-4 px-6 border text-center">장애인증명서</td>
                          <td className="py-4 px-6 border text-center">￦1,000</td>
                          <td className="py-4 px-6 border text-left">소득세법에 따른 증명서</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">19</td>
                          <td className="py-4 px-6 border text-center whitespace-pre-line">채용 신체검사서
(영문)
(요추추가시)</td>
                          <td className="py-4 px-6 border text-center whitespace-pre-line">￦35,000
￦40,000
￦45,000</td>
                          <td className="py-4 px-6 border text-left">증명사진2장<br />재발급시 5천원</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">20</td>
                          <td className="py-4 px-6 border text-center">진료기록사본(1~5매)</td>
                          <td className="py-4 px-6 border text-center">￦1,000</td>
                          <td className="py-4 px-6 border text-left">6매 이상시 추가 1매당 ￦100</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">21</td>
                          <td className="py-4 px-6 border text-center">진료기록영상(CD)</td>
                          <td className="py-4 px-6 border text-center">￦10,000</td>
                          <td className="py-4 px-6 border text-left"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 border text-center">22</td>
                          <td className="py-4 px-6 border text-center whitespace-pre-line">운전신체검사(신규,갱신)

총포류 신체검사</td>
                          <td className="py-4 px-6 border text-center whitespace-pre-line">￦5,000 ~
￦6,000
￦45,000</td>
                          <td className="py-4 px-6 border text-left">신규 : 사진2장<br />갱신 : 사진1장, 운전면허증</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
} 