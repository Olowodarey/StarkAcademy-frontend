import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-transparent text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>
      <nav className="relative z-10 px-4 sm:px-6 py-5">
        <div className="flex items-center justify-between p-5">
          {/* Logo */}
          <div className="font-bold text-2xl text-purple-500 cursor-pointer">
            STARK ACADEMY
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 bg-gray-900/80 backdrop-blur-md p-5 rounded-2xl border border-gray-700/50">
            <Link
              href="#"
              className="text-gray-300 hover:text-purple-400 hover:rounded-2xl font-bold transition-colors cursor-pointer"
            >
              Features
            </Link>
            <Link
              href="/Courses"
              className="text-gray-300 hover:text-purple-400 hover:rounded-2xl font-bold transition-colors cursor-pointer"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-purple-400 hover:rounded-2xl font-bold transition-colors cursor-pointer"
            >
              Tournaments
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-purple-400 hover:rounded-2xl font-bold transition-colors cursor-pointer"
            >
              Tutors
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-purple-400 hover:rounded-2xl font-bold transition-colors cursor-pointer"
            >
              FAQs
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl transition-colors text-white font-bold cursor-pointer"
            >
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-md text-gray-300 hover:bg-gray-700/80 focus:outline-none border border-gray-700/50 cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700/50 space-y-3">
            <Link
              href="#"
              className="block text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-2xl p-4 font-bold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/Courses"
              className="block text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-2xl p-2 font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="#"
              className="block text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-2xl p-2 font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tournaments
            </Link>
            <Link
              href="#"
              className="block text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-2xl p-2 font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tutors
            </Link>
            <Link
              href="#"
              className="block text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-2xl p-2 font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <div className="pt-2">
              <button
                className="block w-full text-center py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-colors mt-4 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
