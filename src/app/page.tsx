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
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">공지사항</h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="border-b pb-2">
                  <Link href="#" className="hover:text-blue-600">
                    공지사항 {item}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/notice" className="mt-4 inline-block text-blue-600 hover:underline">
              더보기
            </Link>
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
      <section className="container mx-auto px-8 mb-12 bg-gray-100 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">콜센터</h3>
            <p>24시간 운영</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">외래진료 시간</h3>
            <p>평일: 9:00 - 17:00</p>
            <p>토요일: 9:00 - 13:00</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">건강증진센터/종합검진센터</h3>
            <p>평일: 8:00 - 17:00</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">통합진료실/주사실</h3>
            <p>평일: 8:00 - 17:00</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
