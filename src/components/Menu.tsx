import React from 'react';
import Link from 'next/link';

const Menu = () => {
  const menuItems = [
    {
      title: '병원소개',
      subItems: [
        '병원장 인사말',
        '연혁',
        'HI/비전/미션',
        '의료진 소개',
        '시설 현황',
        '성과',
        '홍보영상'
      ]
    },
    {
      title: '중점진료분야',
      subItems: [
        '대장항문센터',
        '소화기내시경센터',
        '건강증진센터',
        '세로움수액/비만센터',
        '유방갑상선센터',
        '내과질환센터',
        '클리닉센터'
      ]
    },
    {
      title: '이용안내',
      subItems: [
        '진료상담',
        '오시는길',
        '층별안내',
        '주차안내',
        '비급여항목',
        '인터넷 증명서 발급'
      ]
    },
    {
      title: '소통참여',
      subItems: [
        '고객의 소리',
        '자주하는 질문',
        '후기영상',
        '의료정보',
        '이달의 팝업'
      ]
    },
    {
      title: '정보마당',
      subItems: [
        '건강정보',
        '공지사항',
        '언론보도',
        '사진게시판',
        '채용공고'
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
              <div className="absolute hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg">
                <ul>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200">
                        {subItem}
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