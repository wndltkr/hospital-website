'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import PageBanner from '@/components/PageBanner';
import Table, { Column } from '@/components/Table';

// 주차요금표 데이터 및 컬럼 정의
interface ParkingFeeRow {
  id: number;
  type: string;
  time: string;
  fee: string;
  note: string;
}

const parkingFeeData: ParkingFeeRow[] = [
  { id: 1, type: '기본요금', time: '30분', fee: '800', note: '일반내원객' },
  { id: 2, type: '추가요금', time: '10분당', fee: '300', note: '' },
  { id: 3, type: '외래진료, 종합검진', time: '당일', fee: '무료', note: '1일 1회에 한함, 주차 도장 확인(원무과)' },
  { id: 4, type: '입·퇴원(당일)', time: '8시간', fee: '무료', note: '입퇴원 당일에 한함' },
  { id: 5, type: '입원환자', time: '1시간', fee: '무료', note: '입원시 등록 차량 1대에 한함\n(원무과에서 차량 스티커 발급)' },
  { id: 6, type: '입원환자', time: '17:00 ~ 익일 08:00', fee: '무료', note: '' },
  { id: 7, type: '응급실 진료', time: '당일', fee: '무료', note: '' },
  { id: 8, type: '외래 환자 수술', time: '당일', fee: '무료', note: '' },
  { id: 9, type: '장애인,국가유공자', time: '2시간', fee: '무료', note: '(수첩지참) 시간초과시 초과요금 50%' },
  { id: 10, type: '1일 주차', time: '', fee: '5,000', note: '' },
];

const parkingFeeColumns: Column<ParkingFeeRow>[] = [
  { header: '구분', accessor: 'type', align: 'center', width: '20%' },
  { header: '주차시간', accessor: 'time', align: 'center', width: '20%' },
  { header: '금액(원)', accessor: 'fee', align: 'center', width: '20%' },
  { header: '비고', accessor: 'note', align: 'left', width: '40%', render: (value) => <span className="whitespace-pre-line">{value}</span> },
];

export default function ParkingPage() {
  return (
    <div>
      <Menu />
      <SideMenu />
      
      {/* Banner Section */}
      <PageBanner
        title="주차안내"
        description={[
          "세상을 아름답게",
          "사회를 건강하게"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div>
          <div>

            <div>
              <div className="p-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  className="text-[#0066CC] text-sm tracking-[0.2em] mb-2"
                >
                  SEKANG HOSPITAL
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                  className="text-3xl font-bold text-gray-900 mb-8"
                >
                  주차요금표
                </motion.h2>

                {/* Parking Fee Table */}
                <div className="overflow-x-auto">
                  <Table<ParkingFeeRow>
                    columns={parkingFeeColumns}
                    data={parkingFeeData}
                    caption="주차요금표"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 