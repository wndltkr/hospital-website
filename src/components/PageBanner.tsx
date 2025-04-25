'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageBannerProps {
  subtitle?: string;
  title: string;
  description: string | string[];
  backgroundImage: string;
}

export default function PageBanner({
  subtitle = 'SEKANG HOSPITAL',
  title,
  description,
  backgroundImage
}: PageBannerProps) {
  const descriptionLines = Array.isArray(description) ? description : [description];

  return (
    <div className="relative h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={`${title} 배경`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <p className="text-white/80 tracking-[0.2em] text-sm mb-4">{subtitle}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <h1 className="text-white text-5xl font-bold mb-8">{title}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.6 }}
          >
            <p className="text-white text-2xl font-medium">
              {descriptionLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < descriptionLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 