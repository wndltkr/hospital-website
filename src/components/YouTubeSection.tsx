'use client';

import { motion } from 'framer-motion';

interface YouTubeSectionProps {
  videoId: string;
  title: string;
  className?: string;
  height?: string;
  withContainer?: boolean;
  backgroundColor?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export default function YouTubeSection({
  videoId,
  title,
  className = '',
  height = '600px',
  withContainer = true,
  backgroundColor = 'bg-white',
  sectionTitle,
  sectionSubtitle
}: YouTubeSectionProps) {
  const VideoContent = () => (
    <>
      {(sectionTitle || sectionSubtitle) && (
        <div className="mb-8">
          {sectionSubtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#2B4B6B] tracking-widest mb-2"
            >
              {sectionSubtitle}
            </motion.p>
          )}
          {sectionTitle && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold text-gray-900"
            >
              {sectionTitle}
            </motion.h2>
          )}
        </div>
      )}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`aspect-w-16 aspect-h-9 ${className}`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`w-full h-[${height}]`}
        ></iframe>
      </motion.div>
    </>
  );

  if (!withContainer) {
    return <VideoContent />;
  }

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-8">
        <VideoContent />
      </div>
    </section>
  );
} 