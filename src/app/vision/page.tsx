"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';

export default function VisionPage() {
  return (
    <>
      <Header />
      <Menu />
      <SideMenu />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-[#E8F3FF] to-[#F5F9FF] overflow-hidden">
          <div className="container mx-auto px-8 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <p className="text-[#666] tracking-widest mb-4">SEKANG HOSPITAL</p>
              <h1 className="text-4xl font-bold mb-6">비전/미션</h1>
              <p className="text-lg text-gray-700">
                세강병원 홈페이지를<br />
                방문해 주셔서 감사합니다.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute right-0 top-0 h-full w-1/2"
            >
              <Image
                src="/images/hospital-vision.jpg"
                alt="세강병원 건물"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-l-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8F3FF] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <div className="flex gap-20">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-1/2"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="border-t-4 border-orange-500 mb-8"
                />
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl font-bold mb-4"
                >
                  Purpose
                </motion.h2>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl mb-8"
                >
                  설립목적
                </motion.h3>
                <ul className="space-y-4 text-lg">
                  {[
                    "지역주민의 보건향상과 지역발전에 기여",
                    "임상연구를 통한 의료수준 향상",
                    "지역내 의료수요 충족을 통한 복지사회 건설"
                  ].map((text, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                      className="flex items-start"
                    >
                      <span className="text-gray-500 mr-2">{String(index + 1).padStart(2, '0')}.</span>
                      {text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              {/* Right Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-1/2"
              >
                <Image
                  src="/images/doctor-purpose.jpg"
                  alt="의사 이미지"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="flex gap-20">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-1/2"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="border-t-4 border-blue-700 mb-8"
                />
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl font-bold mb-4"
                >
                  Vision
                </motion.h2>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl mb-8"
                >
                  비전
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg mb-12"
                >
                  최적의 의료서비스로 지역주민과 함께하는 신뢰받는 병원
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="bg-white p-8 rounded-lg"
                >
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-2xl font-bold mb-6"
                  >
                    세강병원 원훈
                  </motion.h4>
                  <ul className="space-y-4">
                    {[
                      "Health Society 건강사회",
                      "Patient-centered 환자중심",
                      "Self-development 자기개발"
                    ].map((text, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                        className="flex items-center"
                      >
                        <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
              {/* Right Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-1/2"
              >
                <Image
                  src="/images/hospital-vision-2.jpg"
                  alt="병원 비전 이미지"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 