import React from 'react';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import Slideshow from '@/components/Slideshow';
import MonthlyPopup from '@/components/MonthlyPopup';
import Map from '@/components/Map';
import Link from 'next/link';
import { FaHeartbeat, FaQuestionCircle, FaStethoscope, FaCut, FaBone, FaHeart } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Menu />
      <SideMenu />

      {/* YouTube Video Section */}
      <section className="w-full aspect-video relative bg-gray-100 flex items-center justify-center mb-12">
        <p className="text-2xl text-gray-500">YouTube 영상이 들어갈 예정입니다</p>
      </section>

      {/* Slideshow and Notice Section */}
      <section className="container mx-auto px-8 mb-12">
        <div className="flex gap-8">
          <div className="w-1/2">
            <Slideshow />
          </div>
          <div className="w-1/2 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">공지사항</h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="border-b pb-2">
                  <Link href="#" className="block hover:text-blue-600">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">공지사항 {item}</span>
                      <span className="text-sm text-gray-500">2024-04-{item}</span>
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">공지사항 {item}에 대한 간단한 설명이 들어갑니다.</p>
                  </Link>
          </li>
              ))}
            </ul>
            <div className="mt-2 text-right">
              <Link href="/notice" className="inline-block text-blue-600 hover:underline">
                더보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Four Column Section */}
      <section className="container mx-auto px-8 mb-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">언론보도</h2>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-600">
                    언론보도 {item}
                  </Link>
          </li>
              ))}
            </ul>
            <Link href="/press" className="mt-4 inline-block text-blue-600 hover:underline">
              더보기
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">세로움수액/비만센터</h2>
            <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-gray-500">센터 소개 이미지</p>
            </div>
            <Link href="/weight-loss" className="text-blue-600 hover:underline">
              더보기
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">후기영상</h2>
            <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-gray-500">후기 영상</p>
            </div>
            <Link href="/reviews" className="text-blue-600 hover:underline">
              더보기
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">의료정보</h2>
            <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-gray-500">의료 정보</p>
            </div>
            <Link href="/medical-info" className="text-blue-600 hover:underline">
              더보기
            </Link>
          </div>
        </div>
      </section>

      {/* Six Buttons and Achievement Section */}
      <section className="container mx-auto px-8 mb-12">
        <div className="flex gap-8">
          <div className="w-1/2">
            <div className="grid grid-rows-3 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/health-info" className="p-4 border rounded-lg hover:bg-gray-100 text-center transition-colors duration-200">
                  <FaHeartbeat className="text-3xl mx-auto mb-2 text-blue-600" />
                  건강정보
                </Link>
                <Link href="/faq" className="p-4 border rounded-lg hover:bg-gray-100 text-center transition-colors duration-200">
                  <FaQuestionCircle className="text-3xl mx-auto mb-2 text-blue-600" />
                  자주하는 질문
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/anal-fissure" className="p-4 border rounded-lg hover:bg-gray-100 text-center transition-colors duration-200">
                  <FaStethoscope className="text-3xl mx-auto mb-2 text-blue-600" />
                  항문거근증후군
                </Link>
                <Link href="/pph-surgery" className="p-4 border rounded-lg hover:bg-gray-100 text-center transition-colors duration-200">
                  <FaCut className="text-3xl mx-auto mb-2 text-blue-600" />
                  하이브리드PPH치질수술
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/esd" className="p-4 border rounded-lg hover:bg-gray-100 text-center transition-colors duration-200">
                  <FaBone className="text-3xl mx-auto mb-2 text-blue-600" />
                  대장ESD
                </Link>
                <Link href="/health-promotion" className="p-4 border rounded-lg hover:bg-gray-100 text-center transition-colors duration-200">
                  <FaHeart className="text-3xl mx-auto mb-2 text-blue-600" />
                  건강증진센터
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-100 h-full rounded-lg p-4 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-4">성과</h2>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">성과 통계</p>
              </div>
              <Link href="/achievements" className="text-blue-600 hover:underline">
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Popup Section */}
      <section className="container mx-auto px-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">이달의 팝업</h2>
        <MonthlyPopup />
      </section>

      {/* Fixed Images Section */}
      <section className="container mx-auto px-8 mb-12">
        <div className="flex gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-1 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">이미지 {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-8 mb-12">
        <Map />
      </section>

      {/* Operating Hours Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 gap-12">
            {/* 연락처 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">콜센터</span>
                <span className="text-[#4ABAFF] text-lg">053-215-6200</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="font-bold">건강증진센터</div>
                  <div>053-620-6159</div>
                  <div>053-620-6160</div>
                </div>
                <div>
                  <div className="font-bold">수액센터</div>
                  <div>053-620-6170</div>
                </div>
                <div>
                  <div className="font-bold">비만센터</div>
                  <div>053-620-6175</div>
                </div>
              </div>
            </div>

            {/* 외래진료 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">외래진료</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="text-gray-300">평 일</div>
                  <div>오전 09:00 ~ 오후 05:00</div>
                </div>
                <div>
                  <div className="text-gray-300">토요일</div>
                  <div>오전 09:00 ~ 오후 01:00</div>
                </div>
                <div>
                  <div className="text-gray-300">점심시간</div>
                  <div>오후 12:30 ~ 오후 01:30</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold">건강증진센터/종합검진센터</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-gray-300">평 일</div>
                    <div>오전 08:00~오후 04:00</div>
                  </div>
                  <div>
                    <div className="text-gray-300">토요일</div>
                    <div>오전 08:00~오후 12:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 통합진료실·주사실 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">통합진료실·주사실</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="text-gray-300">평 일</div>
                  <div>오전 09:00 ~ 오후 05:30</div>
                </div>
                <div>
                  <div className="text-gray-300">토요일</div>
                  <div>오전 09:00 ~ 오후 01:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </main>
  );
}