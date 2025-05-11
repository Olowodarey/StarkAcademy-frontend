import React from 'react';
import Link from 'next/link';

export default function Coursenav() {
  return (
    <header className="px-6 py-4 flex justify-between items-center border-b border-gray-800">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-2xl text-purple-500 cursor-pointer">Stark Academy</Link>
        <div className="hidden md:flex ml-10 space-x-8">
          <Link href="/Courses" className="text-gray-300 hover:text-white">Courses</Link>
          <Link href="/community-courses" className="text-gray-300 hover:text-white">Community Course</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Resources</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Airdrops</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Library</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Connect wallet</Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white">
          PH
        </div>
      </div>
    </header>
  );
}