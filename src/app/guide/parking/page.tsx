'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import PageBanner from '@/components/PageBanner';

export default function ParkingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Menu />
      <SideMenu />
      
      {/* Banner Section */}
      <PageBanner
        title="주차안내"
        description={[
          "세상을 아름답게",
          "사회를 건강하게"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Parking Fee Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  className="text-[#0066CC] text-sm tracking-[0.2em] mb-2"
                >
                  SEKANG HOSPITAL
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                  className="text-3xl font-bold text-gray-900 mb-8"
                >
                  주차요금표
                </motion.h2>

                {/* Parking Fee Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <caption className="sr-only">주차요금표</caption>
                    <colgroup>
                      <col style={{ width: '25%' }} />
                      <col style={{ width: '25%' }} />
                      <col style={{ width: '25%' }} />
                      <col style={{ width: '25%' }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">구분</th>
                        <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">주차시간</th>
                        <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">금액(원)</th>
                        <th className="py-4 px-6 bg-[#F8F9FF] text-[#0066CC] font-bold border">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-4 px-6 border text-center">기본요금</td>
                        <td className="py-4 px-6 border text-center">30분</td>
                        <td className="py-4 px-6 border text-center">800</td>
                        <td className="py-4 px-6 border text-left">일반내원객</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center">추가요금</td>
                        <td className="py-4 px-6 border text-center">10분당</td>
                        <td className="py-4 px-6 border text-center">300</td>
                        <td className="py-4 px-6 border text-left"></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center">외래진료, 종합검진</td>
                        <td className="py-4 px-6 border text-center">당일</td>
                        <td className="py-4 px-6 border text-center">무료</td>
                        <td className="py-4 px-6 border text-left">1일 1회에 한함, 주차 도장 확인(원무과)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center">입·퇴원(당일)</td>
                        <td className="py-4 px-6 border text-center">8시간</td>
                        <td className="py-4 px-6 border text-center">무료</td>
                        <td className="py-4 px-6 border text-left">입퇴원 당일에 한함</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center" rowSpan={2}>입원환자</td>
                        <td className="py-4 px-6 border text-center">1시간</td>
                        <td className="py-4 px-6 border text-center">무료</td>
                        <td className="py-4 px-6 border text-left" rowSpan={2}>입원시 등록 차량 1대에 한함<br />(원무과에서 차량 스티커 발급)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center">17:00 ~ 익일 08:00</td>
                        <td className="py-4 px-6 border text-center">무료</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center">응급실 진료</td>
                        <td className="py-4 px-6 border text-center">당일</td>
                        <td className="py-4 px-6 border text-center">무료</td>
                        <td className="py-4 px-6 border text-left"></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center">외래 환자 수술</td>
                        <td className="py-4 px-6 border text-center">당일</td>
                        <td className="py-4 px-6 border text-center">무료</td>
                        <td className="py-4 px-6 border text-left"></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center">장애인,국가유공자</td>
                        <td className="py-4 px-6 border text-center">2시간</td>
                        <td className="py-4 px-6 border text-center">무료</td>
                        <td className="py-4 px-6 border text-left">(수첩지참) 시간초과시 초과요금 50%</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border text-center">1일 주차</td>
                        <td className="py-4 px-6 border text-center"></td>
                        <td className="py-4 px-6 border text-center">5,000</td>
                        <td className="py-4 px-6 border text-left"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 