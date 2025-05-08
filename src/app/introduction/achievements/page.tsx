"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import YouTubeSection from '@/components/YouTubeSection';

const achievements = [
  {
    year: "2024",
    image: "/images/about/about06_2024_new_400.jpg",
    items: [
      { date: "2024.02", text: "개원 40주년" },
      { image: "/images/about/emblem_logo.png" },
      { date: "2024.04", text: "‘대한민국 메디컬 헬스케어 大賞’ 대장·항문 분야 대상 수상" }
    ]
  },
  {
    year: "2023",
    image: "/images/about/about06_2023.jpg",
    items: [
      { date: "2023.01", text: "수액센터 세로움(SEROUM) 개소" }
    ]
  },
  {
    year: "2021",
    image: "/images/about/vis-banner02.png",
    items: [
      { date: "2021.06", text: "'피검사자 선별진료 시스템' 특허 출원" },
      { image: "/images/about/about06_2021.jpg" },
      { date: "2021.11", text: "조선일보 베스트클리닉 선정(대장ESD, 항문거근증후군 부문)" },
      { date: "2021.12", text: "위/대장내시경 450,000례 시술" },
      { text: "위/대장ESD 1,000례" }
    ]
  },
  {
    year: "2020",
    image: "/images/about/about06_2020.jpg",
    items: [
      { date: "2020.03", text: "세계 첫 비접촉 주사체혈 음압병실 워킹스루(Walking Through) 개발, 운영 및 보급" }
    ]
  },
  {
    year: "2018",
    image: "/images/about/about06_2018.jpg",
    items: [
      { date: "2018.08", text: "중앙일보 대장항문분야 '굿닥터 베스트클리닉' 선정" }
    ]
  },
  {
    year: "2017",
    image: "/images/about/about06_2017.jpg",
    items: [
      { date: "2017.10", text: "위/대장ESD 550례 시술" },
      { text: "위/대장내시경 300,000례 시술" },
      { text: "위/대장치료내시경 19,000례 시술" }
    ]
  },
  {
    year: "2015",
    image: "/images/about/about06_2015.jpg",
    items: [
      { date: "2015.02", text: "개원 30주년" }
    ]
  },
  {
    year: "2011",
    image: "/images/about/about06_2011.jpg",
    items: [
      { date: "2011.12", text: "위/대장내시경 135,000례 시술" },
      { text: "내시경수술 4,000례 시술" },
      { text: "암수술 420례 수술" },
      { text: "복강경 2,350례 수술" }
    ]
  }
];

export default function AchievementsPage() {
  return (
    <>
      <Menu />
      <SideMenu />
      <main>
      <PageBanner
        title="성과"
        description={[
          "세강병원 홈페이지를",
          "방문해 주셔서 감사합니다"
        ]}
        backgroundImage="/images/about/about-vis.jpg"
      />

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />

              {/* Achievement Items */}
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-32"
                >
                  {/* Year Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white" />
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-600">
                      {achievement.year}
                    </div>
                  </div>

                  {/* Achievement Content */}
                  <div className="grid grid-cols-2 gap-8 pt-20">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.3 }}
                      className="text-right pr-8"
                    >
                      <h3 className="text-2xl font-bold mb-4">{achievement.year}</h3>
                      <ul className="space-y-4">
                        {achievement.items.map((item, idx) => (
                          <li key={idx} className="flex items-center justify-between mb-2">
                            {/* 왼쪽: 텍스트 */}
                            <div className="flex-1 text-right pr-4">
                              {(item.date || item.text) && (
                                <span>
                                  {item.date && <span className="text-blue-700 font-semibold mr-2">{item.date}</span>}
                                  {item.text && <span>{item.text}</span>}
                                </span>
                              )}
                            </div>
                            {/* 오른쪽: 이미지 */}
                            <div className="flex-shrink-0">
                              {item.image && (
                                <Image
                                  src={item.image}
                                  alt={achievement.year + ' 관련 이미지'}
                                  width={150}
                                  height={80}
                                  className="inline-block"
                                />
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.3 }}
                      className="pl-8"
                    >
                      <div className="relative w-full aspect-square max-w-md">
                        <Image
                          src={achievement.image}
                          alt={achievement.year + ' 대표 이미지'}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <YouTubeSection
          videoId="VIDEO_ID"
          title="김정균 세강병원 병원장 인사말"
        />
      </main>
      <Footer />
    </>
  );
} 