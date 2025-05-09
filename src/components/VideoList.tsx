'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPlay, FaClock } from 'react-icons/fa';

interface VideoItem {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  date: string;
  views?: number;
}

interface VideoListProps {
  videos: VideoItem[];
  onVideoClick: (video: VideoItem) => void;
}

export default function VideoList({ videos, onVideoClick }: VideoListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onVideoClick(video)}
        >
          <div className="relative aspect-video">
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                <FaPlay className="text-blue-600 text-xl" />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
              {video.duration}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {video.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{video.date}</span>
              {video.views !== undefined && (
                <div className="flex items-center gap-1">
                  <FaClock className="text-gray-400" />
                  <span>{video.views}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 