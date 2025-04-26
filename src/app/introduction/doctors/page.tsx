"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import PageBanner from '@/components/PageBanner';
import TabNavigation from '@/components/TabNavigation';

interface Schedule {
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
}

interface Doctor {
  id: number;
  name: string;
  department: string;
  image: string;
  position?: string;
  education?: string[];
  career?: string[];
  schedule?: Schedule;
}

const tabs = [
  { id: 'internal', name: '내과', isActive: true },
  { id: 'surgery', name: '외과', isActive: false },
  { id: 'neurology', name: '신경외과', isActive: false },
  { id: 'imaging', name: '영상의학과', isActive: false },
  { id: 'anesthesiology', name: '마취통증의학과', isActive: false },
];

const doctors: Doctor[] = [
  {
    id: 1,
    name: '김정현 원장',
    department: '내과',
    image: '/images/doctors/kim-jung-hyun.jpg',
    position: '제 1내과 전문의',
    education: [
      '경북대학교 의과대학 의학과',
      '대구파티마병원 내과 전공의'
    ],
    career: [
      '경북대학교 대학원 의학과 박사',
      '대구파티마병원 내과 부과장'
    ],
    schedule: {
      mon: '진료',
      tue: '진료',
      wed: '진료',
      thu: '진료',
      fri: '',
      sat: '',
      sun: ''
    }
  },
  {
    id: 2,
    name: '김성호 원장',
    department: '내과',
    image: '/images/doctors/kim-sung-ho.jpg',
  },
  {
    id: 3,
    name: '김우현 원장',
    department: '내과',
    image: '/images/doctors/kim-woo-hyun.jpg',
  },
  {
    id: 4,
    name: '이재욱 원장',
    department: '내과',
    image: '/images/doctors/lee-jae-wook.jpg',
  },
];

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [activeTab, setActiveTab] = useState('internal');

  return (
    <>
      <Header />
      <Menu />
      <SideMenu />
      <main>
      <PageBanner
        title="의료진소개"
        description={[
          "세강병원 홈페이지를",
          "방문해 주셔서 감사합니다"
        ]}
        backgroundImage="/images/about/about-vis.jpg"
      />

        {/* Department Tabs */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-8"
        />

        {/* Doctors Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Selected Doctor Details */}
        {selectedDoctor && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 bg-gray-50"
          >
            <div className="container mx-auto px-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-12">
                  {/* Doctor Image */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-1/3"
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </motion.div>

                  {/* Doctor Info */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-2/3"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-2xl font-bold">{selectedDoctor.name}</h2>
                      <span className="text-gray-600">{selectedDoctor.department}</span>
                    </div>

                    {/* Tabs */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex gap-4 mb-8"
                    >
                      <button className="px-6 py-2 border border-blue-800 text-blue-800 rounded-full">초진 예약</button>
                      <button className="px-6 py-2 border border-blue-800 text-blue-800 rounded-full">재진 예약</button>
                      <button className="px-6 py-2 bg-blue-500 text-white rounded-full">진료 상담</button>
                    </motion.div>

                    {/* Info Sections */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-8"
                    >
                      <div>
                        <h3 className="text-lg font-bold mb-2">전문분야</h3>
                        <p>{selectedDoctor.position}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2">주요학력</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedDoctor.education?.map((edu, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                            >
                              {edu}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2">주요경력</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedDoctor.career?.map((career, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                            >
                              {career}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Schedule Table */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-12"
                >
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3">시간</th>
                        <th className="border p-3">월</th>
                        <th className="border p-3">화</th>
                        <th className="border p-3">수</th>
                        <th className="border p-3">목</th>
                        <th className="border p-3">금</th>
                        <th className="border p-3">토</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3">오전</td>
                        <td className="border p-3 text-center text-green-600">
                          {selectedDoctor.schedule?.mon === '진료' ? '진료' : ''}
                        </td>
                        <td className="border p-3 text-center text-green-600">
                          {selectedDoctor.schedule?.tue === '진료' ? '진료' : ''}
                        </td>
                        <td className="border p-3 text-center text-green-600">
                          {selectedDoctor.schedule?.wed === '진료' ? '진료' : ''}
                        </td>
                        <td className="border p-3 text-center text-green-600">
                          {selectedDoctor.schedule?.thu === '진료' ? '진료' : ''}
                        </td>
                        <td className="border p-3 text-center text-green-600">
                          {selectedDoctor.schedule?.fri === '진료' ? '진료' : ''}
                        </td>
                        <td className="border p-3 text-center text-green-600">
                          {selectedDoctor.schedule?.sat === '진료' ? '진료' : ''}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-3">오후</td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                      </tr>
                      <tr>
                        <td className="border p-3">비고</td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Department Group Photo */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-8">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/doctors/department-group.jpg"
                alt="의료진 단체 사진"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
} 