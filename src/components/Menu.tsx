import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MenuProps {
  solid?: boolean;
}

const Menu = ({ solid = false }: MenuProps) => {
  const menuItems = [
    {
      title: '병원소개',
      subItems: [
        { name: '병원장 인사말', link: '/introduction/greeting' },
        { name: '연혁', link: '/introduction/history' },
        { name: '비전/미션', link: '/introduction/vision' },
        { name: '의료진 소개', link: '/introduction/doctors' },
        { name: '장비소개', link: '/introduction/facilities' },
        { name: '성과', link: '/introduction/achievements' },
        { name: '홍보영상', link: '/introduction/promotion' }
      ]
    },
    {
      title: '중점진료분야',
      subItems: [
        { name: '대장항문센터', link: '/centers/colorectal' },
        { name: '소화기내시경센터', link: '/centers/endoscopy' },
        { name: '건강증진센터', link: '/centers/health' },
        { name: '세로움수액/비만센터', link: '/centers/obesity' },
        { name: '유방갑상선센터', link: '/centers/breast' },
        { name: '내과질환센터', link: '/centers/internal' },
        { name: '클리닉센터', link: '/centers/clinic' }
      ]
    },
    {
      title: '이용안내',
      subItems: [
        { name: '진료상담', link: '/guide/consultation' },
        { name: '오시는길', link: '/guide/location' },
        { name: '층별안내', link: '/guide/floors' },
        { name: '주차안내', link: '/guide/parking' },
        { name: '비급여항목', link: '/guide/non-covered' },
        { name: '인터넷 증명서 발급', link: '/guide/certificate' }
      ]
    },
    {
      title: '소통참여',
      subItems: [
        { name: '고객의 소리', link: '/community/voice' },
        { name: '자주하는 질문', link: '/community/faq' },
        { name: '후기영상', link: '/community/reviews' },
        { name: '의료정보', link: '/community/info' },
        { name: '이달의 팝업', link: '/community/popup' }
      ]
    },
    {
      title: '정보마당',
      subItems: [
        { name: '건강정보', link: '/info/health' },
        { name: '공지사항', link: '/info/notice' },
        { name: '언론보도', link: '/info/press' },
        { name: '사진게시판', link: '/info/photos' },
        { name: '채용공고', link: '/info/jobs' }
      ]
    }
  ];

  return (
    <>

      {/* Navigation Menu */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${solid ? 'bg-gradient-to-r from-[#B8D8EB] to-[#9CC7E5] shadow-lg' : 'bg-transparent'} text-gray-700 sticky top-0 z-50`}
      >
      
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <ul className="flex justify-center space-x-16 py-5">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#4ABAFF]">
                세강병원
              </Link>
            </div>
            
              {menuItems.map((item, index) => (
                <li key={index} className="group relative">
                  <button className="text-lg font-medium px-2 py-1 hover:text-[#4A90BE] transition-colors duration-200 relative">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A90BE] group-hover:w-full transition-all duration-500"></span>
                  </button>
                  <div className="absolute invisible opacity-0 translate-y-[-10px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 -left-8 mt-1 min-w-[200px] bg-white text-gray-700 shadow-xl rounded-lg overflow-hidden border-t-2 border-[#4A90BE] transition-all duration-500 ease-in-out">
                    <ul className="py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link 
                            href={subItem.link} 
                            className="block px-6 py-2.5 text-[15px] hover:bg-[#EDF5FA] hover:text-[#4A90BE] transition-colors duration-500 whitespace-nowrap"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Menu; 