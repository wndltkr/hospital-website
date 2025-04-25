"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const achievements = [
  {
    year: 2024,
    title: '개원 40주년',
    image: '/images/achievements/40th-anniversary.png',
    description: '세강병원 40주년',
    logo: '/images/achievements/chosun-media.png'
  },
  {
    year: 2023,
    title: '의료 품질 인증',
    image: '/images/achievements/medical-heart.png',
    description: '의료 서비스 품질 우수성 인증'
  }
];

export default function AchievementsPage() {
  return (
    <>
      <Header />
      <Menu />
      <SideMenu />
      <main>
      <PageBanner
        title="성과"
        description={[
          "세강병원 홈페이지를",
          "방문해 주셔서 감사합니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
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
                      <h3 className="text-2xl font-bold mb-4">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                      {achievement.logo && (
                        <div className="mt-4">
                          <Image
                            src={achievement.logo}
                            alt="로고"
                            width={150}
                            height={50}
                            className="inline-block"
                          />
                        </div>
                      )}
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
                          alt={achievement.title}
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="세강병원 성과"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  세강병원의 발자취
                </h2>
                <p className="text-gray-600 text-lg">
                  40년간 이어온 신뢰와 혁신,<br />
                  세강병원이 걸어온 길을 소개합니다.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 