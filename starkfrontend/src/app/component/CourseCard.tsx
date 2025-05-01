import React from 'react';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  lessonCount: number;
  duration: number;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  lessonCount, 
  duration, 
  level 
}) => {
  return (
    <div className="bg-black border border-gray-800 rounded-lg overflow-hidden flex flex-col">
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded-full">
            {level}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
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
            <span>{lessonCount} Lessons</span>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Link href="/courses/crypto-101" className="block w-full py-3 text-center bg-purple-600 hover:bg-purple-700 transition-colors">
          Start Learning
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;