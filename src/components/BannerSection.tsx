'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BannerSectionProps {
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: string;
}

const BannerSection = ({ backgroundImage, subtitle, title, description }: BannerSectionProps) => {
  return (
    <div className="relative h-[400px] w-full">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={backgroundImage}
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* 오버레이 */}
      
      {/* 컨텐츠 */}
      <div className="relative h-full flex items-center justify-center z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-xl font-light mb-2"
              >
                {subtitle}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base md:text-lg font-light"
              >
                {description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection; 