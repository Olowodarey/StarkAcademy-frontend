"use client"
import Image from "next/image";
import Link from "next/link";
import ProfileCard from "./components/ProfileCard";
import LearningStatsCard from "./components/LearningStatsCard";
import WalletConnectionCard from "./components/WalletConnectionCard";
import YourCoursesCard from "./components/YourCoursesCard";
import RecommendedCoursesCard from "./components/RecommendedCoursesCard";
import Coursenav from "@/component/coursenav";

const telegramLink = "https://t.me/your_telegram_invite"; // Reemplaza con el link real

export default function StudentProfile() {
  // Datos mockeados
  const user = {
    name: "Maxwell John",
    email: "Maxwell@gmail.com",
    bio: "Web3 Enthusiast And Blockchain Developer. Learning About DeFi And NFTs.",
    avatar: "/default-avatar.png",
  };
  const stats = {
    completed: 0,
    inProgress: 2,
    total: 120,
    progress: 0,
  };
  const courses = [
    { name: "Blockchain Fundamentals", progress: 25, completedLessons: 3, totalLessons: 12 },
    { name: "Smart Contract Development", progress: 45, completedLessons: 5, totalLessons: 8 },
  ];
  const recommended = [
    { name: "Introduction to Crypto", description: "Understanding The Basics Of Blockchain Technology And Its Potential Applications.", link: "/courses/intro-crypto" },
    { name: "Introduction to Crypto", description: "Understanding The Basics Of Blockchain Technology And Its Potential Applications.", link: "/courses/intro-crypto" },
  ];
  const walletConnected = false;

  return (
    <div className="min-h-screen bg-black text-white px-16 py-8">
    <Coursenav />
      <h1 className="text-3xl font-bold mb-2 mt-4">My Profile</h1>
      <p className="text-gray-400 mb-8">Manage Your Profile And Track Your Learning Progress</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <ProfileCard user={user} />
          <LearningStatsCard stats={stats} />
          <WalletConnectionCard connected={walletConnected} />
        </div>
        <div className="flex flex-col gap-8">
          <YourCoursesCard courses={courses} />
          <RecommendedCoursesCard courses={recommended} />
        </div>
      </div>
        </div>
  );
} 