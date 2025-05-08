"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import YouTubeSection from '@/components/YouTubeSection';
import BannerSection from '@/components/BannerSection';

export default function GreetingPage() {
  return (
    <>
      <Menu />
      <SideMenu />
      <main>
        {/* Hero Section */}
        <PageBanner
        title="병원장 인사말"
        description={[
          "세강병원 홈페이지를",
          "방문해 주셔서 감사합니다"
        ]}
        backgroundImage="/images/about/about-vis.jpg"
      />

        {/* Director's Message Section 1 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex gap-12 items-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-1/3"
              >
                <Image
                  src="/images/about/about-img01.jpg"
                  alt="병원장"
                  width={400}
                  height={500}
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-2/3"
              >
                <p className="text-[#2B4B6B] tracking-widest mb-4">SEKANG HOSPITAL</p>
                <h2 className="text-3xl font-bold text-[#4ABAFF] mb-6">&quot;세강병원은 끊임없이 발전합니다.&quot;</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>세강병원은 1984년 개원 이후 40여년간 지역민들의 꾸준한 애정과 관심으로 이만큼 성장하였습니다.</p>
                  <p>그에 보답하고자 꾸준히 자동화된 검사기기를 도입하고 정기적인 정도 관리제를 시행하여<br/>
                  반나절 안에 진료부터 진단까지 정확하고 신속하게 결과를 볼 수 있도록 하고 있습니다.</p>
                  <p>또한 우수한 의료진을 확보하고 해외파견교육을 통해 진료의 전문화를 이루고자 전력을 다하여 왔습니다.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Director's Message Section 2 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex gap-12 items-center"
            >
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-2/3"
              >
                <p className="text-[#2B4B6B] tracking-widest mb-4">SEKANG HOSPITAL</p>
                <h2 className="text-3xl font-bold text-[#4ABAFF] mb-6">&quot;세강병원은 환자를 먼저 생각합니다.&quot;</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>독수리가 새로운 삶을 맞이하기 위해 고통을 이겨내고 자신의 부리를 쪼아 잘라내듯이</p>
                  <p>세강병원도 온몸을 바쳐 환골탈태하는 아픔을 견디며 더 나은 의료서비스를 위해 새롭게 태어납니다.</p>
                  <p>내원객들이 보다 쾌적하고 편리한 환경에서 진료와 검사를 받을 수 있도록<br/>병원의 구조와 환경을 개선하고자 충축·확장을 하고 있습니다. 아울러 환자와의 소통을 위해<br/>고객만족센터를 신설하고 홈페이지를 새단장하였습니다.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-1/3"
              >
                <Image
                  src="/images/about/about-img02.jpg"
                  alt="의료 상담"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Medical Service Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex gap-12 items-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-1/3"
              >
                <Image
                  src="/images/about/about-img03.jpg"
                  alt="의료 서비스"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-2/3"
              >
                <p className="text-[#2B4B6B] tracking-widest mb-4">SEKANG HOSPITAL</p>
                <h2 className="text-3xl font-bold text-[#4ABAFF] mb-6">&quot;세강병원은 여러분의 병원입니다.&quot;</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>시대의 변화에 맞추어 세강병원은 질병 예방에서부터 치료까지</p>
                  <p>지역인들의 주치의로서의 책임을 다하도록 더욱 더 노력하겠습니다.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Nurse Team Section */}
        <BannerSection
          backgroundImage="/images/about/about_fot_img.jpg"
          title={["세강병원은 자동화 검사기기, 정기적 정도 관리제 시행,"]}
          description="양질의 의료서비스를 통해 여러분의 건강 지킴이가 되고자 합니다."
        />

        {/* YouTube Video Section */}
        <YouTubeSection
          videoId="VIDEO_ID"
          title="김정균 세강병원 병원장 인사말"
        />
      </main>
      <Footer />
    </>
  );
} 