"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export default function VisionPage() {
  return (
    <>
      <Menu />
      <SideMenu />
      <main>
      <PageBanner
        title="비전/미션"
        description={[
          "세상을 홈페이지를",
          "방문해 주셔서 감사합니다"
        ]}
        backgroundImage="/images/about/about-vis.jpg"
      />

        {/* Combined Purpose & Vision Section */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-8">
            <div className="flex gap-12 items-stretch">
              {/* Left Content: Purpose + Vision */}
              <div className="w-1/2 flex flex-col justify-between">
                {/* Purpose */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="border-t-4 border-orange-500 mb-6 w-24" />
                  <h2 className="text-4xl font-bold mb-2">Purpose</h2>
                  <h3 className="text-2xl mb-6">설립목적</h3>
                  <ul className="space-y-3 text-lg mb-8">
                    {["지역주민의 보건향상과 지역발전에 기여","임상연구를 통한 의료수준 향상","지역내 의료수요 충족을 통한 복지사회 건설"].map((text, idx) => (
                      <li key={idx} className="flex items-start"><span className="text-gray-500 mr-2">{String(idx+1).padStart(2,'0')}.</span>{text}</li>
                    ))}
                  </ul>
                </motion.div>
                {/* Vision */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="border-t-4 border-blue-700 mb-6 w-24" />
                  <h2 className="text-4xl font-bold mb-2">Vision</h2>
                  <h3 className="text-2xl mb-6">비전</h3>
                  <p className="text-lg mb-2">최적의 의료서비스로 지역주민과 함께하는 신뢰받는 병원</p>
                </motion.div>
              </div>
              {/* Right: Single Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-1/2 flex items-stretch"
              >
                <div className="relative w-full h-full min-h-[500px]">
                  <Image
                    src="/images/about/mission-img01.jpg" // placeholder, replace later
                    alt="비전 이미지"
                    fill
                    className="rounded-lg object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Motto Section */}
        <section className="py-14">
          <div className="container mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[url('/images/about/tactic-img01.jpg')] bg-cover bg-center p-16 min-h-[260px] rounded-2xl flex flex-col justify-center"
            >
              <h4 className="text-3xl font-bold mb-10 text-center text-white drop-shadow">세강병원 원훈</h4>
              <ul className="space-y-8 text-center">
                {["Health Society 건강사회","Patient-centered 환자중심","Self-development 자기개발"].map((text, idx) => (
                  <li key={idx} className="text-white text-2xl font-semibold drop-shadow-lg">
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 