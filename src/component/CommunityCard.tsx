import React from 'react';
import Link from 'next/link';

interface CommunityCardProps {
  id: number;
  title: string;
  description: string;
  authorName: string;
  authorRole: string;
  duration: number;
  lessonCount: number;
  rating: number;
  ratingCount: number;
  level: string;
  isPopular?: boolean;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  id,
  title,
  description,
  authorName,
  authorRole,
  duration,
  lessonCount,
  rating,
  ratingCount,
  level,
  isPopular = false,
}) => {
  // Generate star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-black border border-gray-800 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="p-6 flex flex-col h-full">
        {/* Level Badge */}
        <div className="flex justify-between items-center mb-3">
          <span className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
            {level}
          </span>
          {isPopular && (
            <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
              Popular
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {/* Description */}
        {/* Line-clamp to ensure consistent height of the card */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>

        {/* Author Info */}
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs mr-3">
            {authorName.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-white text-sm font-medium">{authorName}</p>
            <p className="text-gray-400 text-xs">{authorRole}</p>
          </div>
        </div>

        {/* Course Stats */}
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <div className="flex items-center mr-4">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"></path>
              <path d="M10 6a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 11V7a1 1 0 011-1z"></path>
            </svg>
            <span>{duration}min</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
            </svg>
            <span>{lessonCount} lessons</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-6">
          <div className="flex mr-2">
            {renderStars()}
          </div>
          <span className="text-gray-400 text-sm">({ratingCount})</span>
        </div>

        {/* Spacer to push button to a fixed spot */}
        <div className="flex-1"></div>

        {/* View Course Button - always in the same place */}
        <div className="flex justify-center my-2">
          <Link
            href={`/community-courses/${id}`}
            className="rounded-lg w-full bg-purple-800 text-white font-semibold shadow-md  transition-colors text-center py-2 px-6"
          >
            View Course
          </Link>
        </div>
      </div>
      {/* Removed the button from the card bottom */}
    </div>
  );
};

export default CommunityCard;