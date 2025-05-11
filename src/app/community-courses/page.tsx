"use client";
import { useState } from "react";
import Link from "next/link";
import Coursenav from "@/component/coursenav";
import CommunityCard from "@/component/CommunityCard";
import Footer from "@/component/Footer";

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
}
