import React from 'react';
import Link from 'next/link';
import { FaHeadphones, FaCalendarCheck, FaMapMarkerAlt } from 'react-icons/fa';

const SideMenu = () => {
  const menuItems = [
    {
      icon: <FaHeadphones className="text-2xl" />,
      text: '고객센터',
      link: '/community/voice'
    },
    {
      icon: <FaCalendarCheck className="text-2xl" />,
      text: '진료상담',
      link: '/guide/consultation'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      text: '오시는길',
      link: '/guide/location'
    }
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 z-50">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              {item.icon}
              <span className="mt-2 text-sm">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu; 