import React from 'react';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  lessonCount: number;
  duration: number;
  level: string;
  tags?: string[] | null;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  lessonCount,
  duration,
  level,
  tags,
}) => {
  return (
    <div className="bg-black border border-gray-800 rounded-2xl p-6 flex flex-col shadow-md hover:shadow-purple-800/20 transition-shadow">
      {/* Header Row: Title + Tags */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex gap-1 flex-wrap justify-end">
          {(tags ?? []).map((tag: string) => (
            <span
              key={tag}
              className="bg-purple-600/20 text-purple-400 text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>

      {/* Meta Info Row */}
      <div className="flex items-center justify-start text-gray-400 text-sm mb-4 gap-6">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" />
            <path d="M10 6a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 11V7a1 1 0 011-1z" />
          </svg>
          <span>{duration} min</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
          <span>{lessonCount} Lessons</span>
        </div>
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
        <span className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full">
          {level}
        </span>
        <Link
          href="/courses/crypto-101"
          className="text-sm font-semibold text-purple-400 hover:underline"
        >
          Start Learning →
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
