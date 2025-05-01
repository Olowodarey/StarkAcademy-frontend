"use client";
import React, { useState } from "react";
import Link from "next/link";
import Coursenav from "../component/coursenav";
import CommunityCard from "../component/CommunityCard";
import Footer from "../component/Footer";

export default function CommunityCoursesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all-courses");

  // Community course data based on the image
  const communityCourses = [
    {
      id: 1,
      title: "Solidity Advanced Patterns",
      description:
        "Learn The Core Concepts Of Blockchain Technology, Including Distributed Ledgers, Consensus Mechanisms, And Cryptography.",
      authorName: "Ethereum Dev",
      authorRole: "Verified Tutor",
      duration: 120,
      lessonCount: 8,
      rating: 5,
      ratingCount: 128,
      level: "Advanced Level",
      isPopular: true,
    },
    {
      id: 2,
      title: "DeFi Yield Farming Strategies",
      description:
        "Explore Modern Yield Farming Strategies And Learn How To Maximize Returns In DeFi Protocols And Platforms.",
      authorName: "Finance Whiz",
      authorRole: "Verified Tutor",
      duration: 90,
      lessonCount: 6,
      rating: 4,
      ratingCount: 87,
      level: "Advanced Level",
      isPopular: true,
    },
    {
      id: 3,
      title: "Building an NFT Marketplace",
      description:
        "Step-by-Step Guide To Building Your Own NFT Marketplace With Smart Contracts And Frontend Development.",
      authorName: "Ethereum Dev",
      authorRole: "Verified Tutor",
      duration: 150,
      lessonCount: 10,
      rating: 5,
      ratingCount: 95,
      level: "Advanced Level",
      isPopular: true,
    },
    {
      id: 4,
      title: "Web3 Security Fundamentals",
      description:
        "Learn How To Identify And Prevent Common Security Vulnerabilities In Smart Contracts And DApps.",
      authorName: "Ethereum Dev",
      authorRole: "Verified Tutor",
      duration: 100,
      lessonCount: 7,
      rating: 5,
      ratingCount: 112,
      level: "Advanced Level",
    },
    {
      id: 5,
      title: "DAO Governance Models",
      description:
        "Explore Different DAO Governance Models And Learn How To Implement Effective Decision Systems For Decentralized Organizations.",
      authorName: "Finance Whiz",
      authorRole: "Verified Tutor",
      duration: 80,
      lessonCount: 5,
      rating: 4,
      ratingCount: 76,
      level: "Advanced Level",
    },
    {
      id: 6,
      title: "Layer 2 Scaling Solutions",
      description:
        "Comprehensive Overview Of Layer 2 Scaling Solutions, Including Rollups, Sidechains, And State Channels.",
      authorName: "Ethereum Dev",
      authorRole: "Verified Tutor",
      duration: 110,
      lessonCount: 8,
      rating: 5,
      ratingCount: 104,
      level: "Advanced Level",
    },
    {
      id: 7,
      title: "Solidity Advanced Patterns",
      description:
        "Learn The Core Concepts Of Blockchain Technology, Including Distributed Ledgers, Consensus Mechanisms, And Cryptography.",
      authorName: "Ethereum Dev",
      authorRole: "Verified Tutor",
      duration: 120,
      lessonCount: 8,
      rating: 5,
      ratingCount: 128,
      level: "Advanced Level",
    },
    {
      id: 8,
      title: "Solidity Advanced Patterns",
      description:
        "Learn The Core Concepts Of Blockchain Technology, Including Distributed Ledgers, Consensus Mechanisms, And Cryptography.",
      authorName: "Ethereum Dev",
      authorRole: "Verified Tutor",
      duration: 120,
      lessonCount: 8,
      rating: 5,
      ratingCount: 128,
      level: "Advanced Level",
    },
    {
      id: 9,
      title: "Solidity Advanced Patterns",
      description:
        "Learn The Core Concepts Of Blockchain Technology, Including Distributed Ledgers, Consensus Mechanisms, And Cryptography.",
      authorName: "Ethereum Dev",
      authorRole: "Verified Tutor",
      duration: 120,
      lessonCount: 8,
      rating: 5,
      ratingCount: 128,
      level: "Advanced Level",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Navigation */}
      <Coursenav />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Community Courses</h1>
            <p className="text-gray-400">
              Explore Courses Created By The Community Or Share Your Own
            </p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Create Course
          </button>
        </div>

        {/* Search and Create Course */}
        <div className="flex mb-6">
          <div className="flex-grow mr-4">
            <input
              type="text"
              placeholder="Create Course"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
            />
          </div>
          <div className="flex space-x-2">
            <select className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white">
              <option>Newest</option>
              <option>Most Popular</option>
              <option>Top Rated</option>
            </select>
            <select className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white">
              <option>All Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-800 mb-6">
          <button
            className={`px-4 py-2 ${
              selectedFilter === "all-courses"
                ? "border-b-2 border-purple-600 text-white"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedFilter("all-courses")}
          >
            All Courses
          </button>
          <button
            className={`px-4 py-2 ${
              selectedFilter === "trending"
                ? "border-b-2 border-purple-600 text-white"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedFilter("trending")}
          >
            Trending
          </button>
          <button
            className={`px-4 py-2 ${
              selectedFilter === "most-popular"
                ? "border-b-2 border-purple-600 text-white"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedFilter("most-popular")}
          >
            Most Popular
          </button>
          <button
            className={`px-4 py-2 ${
              selectedFilter === "new"
                ? "border-b-2 border-purple-600 text-white"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedFilter("new")}
          >
            New
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityCourses.map((course) => (
            <CommunityCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              authorName={course.authorName}
              authorRole={course.authorRole}
              duration={course.duration}
              lessonCount={course.lessonCount}
              rating={course.rating}
              ratingCount={course.ratingCount}
              level={course.level}
              isPopular={course.isPopular}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}import React from 'react';
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
          className={w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}}
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
    <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
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
        <p className="text-gray-300 text-sm mb-4">{description}</p>

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
      </div>

      {/* View Course Button */}
      <div className="mt-auto">
        <Link href={/community-courses/${id}} className="block w-full py-3 text-center bg-purple-600 hover:bg-purple-700 transition-colors">
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CommunityCard;