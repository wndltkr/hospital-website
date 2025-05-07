'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BannerSectionProps {
  backgroundImage: string;
  title: string[];
  description?: string | string[];
  textColor?: 'white' | 'black';
  isRepeating?: boolean;
}

const BannerSection = ({ 
  backgroundImage, 
  title, 
  description,
  textColor = 'white',
  isRepeating = false 
}: BannerSectionProps) => {
  return (
    <div className="relative min-h-[400px] w-full pt-20 pb-12">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        {isRepeating ? (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'left top',
              backgroundSize: 'initial',
              backgroundRepeat: 'repeat',
              backgroundAttachment: 'initial',
              backgroundOrigin: 'initial',
              backgroundClip: 'initial',
              backgroundColor: 'initial'
            }}
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={backgroundImage}
              alt="Banner background"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
      
      {/* 컨텐츠 */}
      <div className="relative flex items-center justify-center z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-${textColor} text-center`}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl font-light mb-2 text-[#87CEEB]"
            >
              SEKANG HOSPITAL
            </motion.p>
            {title.map((line, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              >
                {line}
              </motion.h1>
            ))}
            
            {description && (
              Array.isArray(description) ? (
                <div className="flex flex-col items-start max-w-6xl mx-auto space-y-4 mt-8">
                  {description.map((desc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * (title.length + index + 1), duration: 0.8 }}
                      className="flex items-start gap-4 w-full"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#87CEEB] flex items-center justify-center text-base">
                        {index + 1}
                      </div>
                      <p className="text-xl md:text-2xl font-normal text-left flex-1">
                        {desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * (title.length + 1), duration: 0.8 }}
                  className="text-xl max-w-6xl mx-auto md:text-2xl font-normal mt-8"
                >
                  {description}
                </motion.p>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection; 