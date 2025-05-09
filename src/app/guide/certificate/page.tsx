'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import InfoSection from '@/components/InfoSection';
import BannerSection from '@/components/BannerSection';
import Table, { Column } from '@/components/Table';

// 임시 데이터
const certificateData = [
  {
    id: 1,
    type: '일반진단서 (소견서)',
    fee: '￦20,000',
    note: ''
  },
  {
    id: 2,
    type: '건강 진단서',
    fee: '￦20,000',
    note: ''
  },
  {
    id: 3,
    type: '근로능력평가용 진단서',
    fee: '￦10,000',
    note: ''
  },
  {
    id: 4,
    type: '사망 진단서',
    fee: '￦10,000',
    note: '기본 2장'
  },
  {
    id: 5,
    type: '장애 진단서(신체적장애)',
    fee: '￦15,000',
    note: '장애등급판정기준에 따른 신체적장애'
  },
  {
    id: 6,
    type: '장애 진단서(정신적장애)',
    fee: '￦40,000',
    note: '장애등급판정기준에 따른 정신적장애'
  },
  {
    id: 7,
    type: '후유장애진단서',
    fee: '￦100,000',
    note: ''
  },
  {
    id: 8,
    type: '병무용 진단서',
    fee: '￦20,000',
    note: '사진3장(최근3개월이내 찍은 사진)'
  },
  {
    id: 9,
    type: '장애심사용진단서(국민연금용)',
    fee: '￦15,000',
    note: '연금용 용지지참'
  },
  {
    id: 10,
    type: '상해진단서',
    fee: '￦100,000',
    note: '상해진단기간이 3주 미만인 경우'
  },
  {
    id: 11,
    type: '상해진단서',
    fee: '￦150,000',
    note: '상해진단기간이 3주 이상인 경우'
  },
  {
    id: 12,
    type: '영문 일반진단서',
    fee: '￦20,000',
    note: ''
  },
  {
    id: 13,
    type: '입퇴원확인서',
    fee: '￦3,000',
    note: ''
  },
  {
    id: 14,
    type: '통원확인서',
    fee: '￦3,000',
    note: '통원 진료일자 기재'
  },
  {
    id: 15,
    type: '진료확인서',
    fee: '￦3,000',
    note: '통원 진료일자와 진료내역(상병)기재'
  },
  {
    id: 16,
    type: '출생증명서',
    fee: '￦3,000',
    note: ''
  },
  {
    id: 17,
    type: '시체검안서',
    fee: '￦30,000',
    note: '기본 6장\n검시, 출장료는 별도 산정'
  },
  {
    id: 18,
    type: '장애인증명서',
    fee: '￦1,000',
    note: '소득세법에 따른 증명서'
  },
  {
    id: 19,
    type: '채용 신체검사서 (영문) (요추추가시)',
    fee: '￦35,000 ￦40,000￦45,000',
    note: '증명사진2장\n재발급시 5천원'
  },
  {
    id: 20,
    type: '진료기록사본(1~5매)',
    fee: '￦1,000',
    note: '6매 이상시 추가 1매당 ￦100'
  },
  {
    id: 21,
    type: '진료기록영상(CD)',
    fee: '￦10,000',
    note: ''
  },
  {
    id: 22,
    type: '운전신체검사(신규,갱신) 총포류 신체검사',
    fee: '￦5,000 ~ ￦6,000 ￦45,000',
    note: '신규 : 사진2장\n갱신 : 사진1장, 운전면허증'
  }
];

const columns = [
  {
    header: '순번',
    accessor: 'id' as const,
    width: '10%',
    align: 'center' as const
  },
  {
    header: '종류',
    accessor: 'type' as const,
    width: '30%',
    align: 'center' as const
  },
  {
    header: '수수료',
    accessor: 'fee' as const,
    width: '20%',
    align: 'center' as const
  },
  {
    header: '비고',
    accessor: 'note' as const,
    width: '40%',
    align: 'left' as const
  }
];

// 구비서류 데이터 정의
interface RequiredDocument {
  id: number;
  applicant: string;
  documents: string[];
}

const requiredDocumentsColumns: Column<RequiredDocument>[] = [
  {
    header: '신청인',
    accessor: 'applicant',
    width: '1/3',
    render: (value) => (
      <div className="font-medium text-gray-900">
        {value}
      </div>
    )
  },
  {
    header: '구비서류',
    accessor: 'documents',
    width: '2/3',
    render: (value) => (
      <div className="space-y-2">
        {(value as string[]).map((doc, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-gray-600">•</span>
            <span>{doc}</span>
            {(doc === '위임장' || doc === '동의서') && (
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  // 다운로드 로직
                }}
              >
                [양식 다운로드]
              </a>
            )}
          </div>
        ))}
      </div>
    )
  }
];

const requiredDocumentsData: RequiredDocument[] = [
  {
    id: 1,
    applicant: '진단의사',
    documents: ['진단서', '소견서']
  },
  {
    id: 2,
    applicant: '진단의사',
    documents: ['진료기록']
  }
];

export default function CertificatePage() {
  const [activeTab, setActiveTab] = useState<'first' | 'cost'>('first');

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      {/* Banner Section */}
      <PageBanner
        title="인터넷 증명서 발급"
        description={[
          "온라인으로 간편하게",
          "증명서를 발급받으세요"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      {/* Main Content Section */}
      <div>
        {/* Tab Navigation */}
        <div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('first')}
              className={`relative px-8 py-4 text-lg font-medium transition-colors ${
                activeTab === 'first'
                  ? 'text-[#0066CC]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              처음 발급하시는 분
              {activeTab === 'first' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066CC]"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('cost')}
              className={`relative px-8 py-4 text-lg font-medium transition-colors ${
                activeTab === 'cost'
                  ? 'text-[#0066CC]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              제증명서 발급비용
              {activeTab === 'cost' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066CC]"
                />
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'first' ? (
            <div className="space-y-16">
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="제증명/의무기록 사본 발급 안내"
                  title="제증명/의무기록 사본 발급 안내"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "환자의 개인정보 보호를 위해서 의료기관은 의무기록의 비밀을 유지할 책임이 있으므로, 모든 증명서 발급은 의료법에 따라 원칙적으로 환자 본인이 직접 내원하셔야 하지만 부득이한 경우 대리인이 오실 때는 구비서류를 지참 하셔야 합니다."
                  ]}
                  imagePosition="right" // 또는 "right"
                />

              <BannerSection
                backgroundImage="/images/about/about_fot_img.jpg"
                title={[
                  "의무기록 사본 발급 안내",
                  "사본발급시 필요한 서류 [의료법 제21조, 시행규칙 제13조의2]"
                ]}
                description={[
                  "신분증 또는 신분증 사본은 반드시 사진이 있는 것이어야 함.",
                  "친족관계증명서는 환자 본인과의 관계가 명시된 것이어야 함. 건강보험증은 친족관계가 입증되지 않으므로 인정되지 않음. 의무기록 사본발급일 기준 3개월 이내에 발급 받은 것만 인정함.",
                  "동의서 및 위임장의 자필서명은 도장 및 지장은 인정되지 않음. (반드시 서명이어야 함)",
                  "동의서에는 사본발급 받는 범위(날짜, 기록지 범위 등)를 구체적으로 명기하도록 하여야 함.",
                  "사망, 의식불명인자, 미성년자 등의 경우에는 법정 대리인이 대신할 수 있음."
                ]}
              />
              
              {/* Required Documents Table Section */}
              <div className="bg-white rounded-2xl p-12">
                <div className="max-w-5xl mx-auto">
                  <div className="overflow-x-auto">
                    <Table<RequiredDocument>
                      columns={requiredDocumentsColumns}
                      data={requiredDocumentsData}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              <InfoSection
                  image="/images/centers/anus-img02.jpg"
                  alt="증명서 발급 수수료"
                  title="증명서 발급 수수료"
                  subtitle="SEKANG HOSPITAL"
                  descriptions={[
                    "보건복지부 제정 / 2017년 9월 21일 시행"
                  ]}
                  imagePosition="left" // 또는 "right"
                />

              {/* Fee Table Section */}
              <div className="bg-white rounded-2xl p-12">
                <div className="max-w-6xl mx-auto">
                  <div className="overflow-x-auto">
                    <Table
                      columns={columns}
                      data={certificateData}
                      caption="제증명서 발급비용 안내"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
} 