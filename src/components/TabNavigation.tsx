'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  name: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  variant?: 'default' | 'outline' | 'pills';
}

export default function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
  className = '',
  variant = 'default'
}: TabNavigationProps) {
  const getTabStyles = (isActive: boolean) => {
    const baseStyles = 'px-8 py-4 text-lg font-medium transition-colors duration-200 relative text-center min-w-[180px]';
    
    switch (variant) {
      case 'outline':
        return `${baseStyles} ${
          isActive
            ? 'text-[#0066CC] border-b-2 border-[#0066CC]'
            : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
        }`;
      case 'pills':
        return `${baseStyles} rounded-full ${
          isActive
            ? 'bg-[#0066CC] text-white'
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
        }`;
      default:
        return `${baseStyles} ${
          isActive
            ? 'text-[#0066CC] font-semibold border-b-2 border-[#0066CC]'
            : 'text-gray-500 hover:text-gray-700'
        }`;
    }
  };

  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={getTabStyles(activeTab === tab.id)}
            >
              {tab.name}
              {variant === 'default' && activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0066CC]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
} 