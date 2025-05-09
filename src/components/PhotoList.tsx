'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCamera } from 'react-icons/fa';

interface PhotoItem {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  views?: number;
}

interface PhotoListProps {
  photos: PhotoItem[];
  onPhotoClick: (photo: PhotoItem) => void;
}

export default function PhotoList({ photos, onPhotoClick }: PhotoListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onPhotoClick(photo)}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {photo.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{photo.date}</span>
              {photo.views !== undefined && (
                <div className="flex items-center gap-1">
                  <FaCamera className="text-gray-400" />
                  <span>{photo.views}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 