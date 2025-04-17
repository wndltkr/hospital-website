import React from 'react';
import Link from 'next/link';

const Menu = () => {
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
    <nav className="bg-gray-800 text-white relative z-50">
      <div className="container mx-auto px-8">
        <ul className="flex space-x-8 py-4">
          {menuItems.map((item, index) => (
            <li key={index} className="group relative">
              <button className="px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
                {item.title}
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg rounded-lg">
                <ul className="py-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link 
                        href={subItem.link} 
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-200"
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
    </nav>
  );
};

export default Menu; 