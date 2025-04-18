"use client";

import React from 'react';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import Slideshow from '@/components/Slideshow';
import MonthlyPopup from '@/components/MonthlyPopup';
import Map from '@/components/Map';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaQuestionCircle, FaStethoscope, FaCut, FaBone, FaHeart } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Menu />
      <SideMenu />

      {/* YouTube Video Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-video relative bg-gray-100 flex items-center justify-center mb-12"
      >
        <p className="text-2xl text-gray-500">YouTube 영상이 들어갈 예정입니다</p>
      </motion.section>

      {/* Slideshow and Notice Section */}
      <section className="container mx-auto px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-8"
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-1/2"
          >
            <Slideshow />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-1/2 bg-gray-50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">공지사항</h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((item, index) => (
                <motion.li 
                  key={item} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="border-b pb-2"
                >
                  <Link href="#" className="block hover:text-blue-600">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">공지사항 {item}</span>
                      <span className="text-sm text-gray-500">2024-04-{item}</span>
        </div>
                    <p className="text-gray-600 mt-1 text-sm">공지사항 {item}에 대한 간단한 설명이 들어갑니다.</p>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-2 text-right"
            >
              <Link href="/notice" className="inline-block text-blue-600 hover:underline">
                더보기
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Four Column Section */}
      <section className="container mx-auto px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-4 gap-8"
        >
          {[
            {
              title: "언론보도",
              content: (
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-blue-600">
                        언론보도 {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              ),
              link: "/press"
            },
            {
              title: "세로움수액/비만센터",
              content: (
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">센터 소개 이미지</p>
                </div>
              ),
              link: "/weight-loss"
            },
            {
              title: "후기영상",
              content: (
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">후기 영상</p>
                </div>
              ),
              link: "/reviews"
            },
            {
              title: "의료정보",
              content: (
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">의료 정보</p>
                </div>
              ),
              link: "/medical-info"
            }
          ].map((column, index) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-bold mb-4">{column.title}</h2>
              {column.content}
              <Link href={column.link} className="text-blue-600 hover:underline">
                더보기
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Six Buttons and Achievement Section */}
      <section className="container mx-auto px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-8"
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-1/2"
          >
            <div className="grid grid-rows-3 gap-4">
              {[
                [
                  {
                    href: "/health-info",
                    icon: FaHeartbeat,
                    text: "건강정보"
                  },
                  {
                    href: "/faq",
                    icon: FaQuestionCircle,
                    text: "자주하는 질문"
                  }
                ],
                [
                  {
                    href: "/anal-fissure",
                    icon: FaStethoscope,
                    text: "항문거근증후군"
                  },
                  {
                    href: "/pph-surgery",
                    icon: FaCut,
                    text: "하이브리드PPH치질수술"
                  }
                ],
                [
                  {
                    href: "/esd",
                    icon: FaBone,
                    text: "대장ESD"
                  },
                  {
                    href: "/health-promotion",
                    icon: FaHeart,
                    text: "건강증진센터"
                  }
                ]
              ].map((row, rowIndex) => (
                <motion.div 
                  key={rowIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (rowIndex * 0.1) }}
                  className="grid grid-cols-2 gap-4"
                >
                  {row.map((button, index) => (
                    <Link 
                      key={button.href}
                      href={button.href} 
                      className="p-4 border rounded-lg hover:bg-gray-100 text-center transition-colors duration-200"
                    >
                      <button.icon className="text-3xl mx-auto mb-2 text-blue-600" />
                      {button.text}
                    </Link>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-1/2"
          >
            <div className="bg-gray-100 h-full rounded-lg p-4 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-4">성과</h2>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">성과 통계</p>
              </div>
              <Link href="/achievements" className="text-blue-600 hover:underline">
                자세히 보기
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Monthly Popup Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-8 mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">이달의 팝업</h2>
        <MonthlyPopup />
      </motion.section>

      {/* Fixed Images Section */}
      <section className="container mx-auto px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-4"
        >
          {[1, 2, 3].map((item, index) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-1 h-32 bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <p className="text-gray-500">이미지 {item}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-8 mb-12"
      >
        <Map />
      </motion.section>

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