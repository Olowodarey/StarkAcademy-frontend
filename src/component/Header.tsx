import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <nav className=" px-4 sm:px-6 py-5">
        <div className="flex items-center justify-between p-5">
          {/* Logo */}
          <div className="font-bold text-2xl text-purple-500">
            STARK ACADEMY
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 bg-amber-50 p-5 rounded-2xl">
            <Link
              href="#"
              className="text-zinc-600 hover:text-purple-500 hover:rounded-2xl   font-bold transition-colors"
            >
              Features
            </Link>
            <Link
              href="/Courses"
              className="text-zinc-600 hover:text-purple-500 hover:rounded-2xl   font-bold transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-zinc-600 hover:text-purple-500 hover:rounded-2xl   font-bold transition-colors"
            >
              Tournaments
            </Link>
            <Link
              href="#"
              className="text-zinc-600 hover:text-purple-500 hover:rounded-2xl   font-bold transition-colors"
            >
              Tutors
            </Link>
            <Link
              href="#"
              className="text-zinc-600 hover:text-purple-500 hover:rounded-2xl   font-bold transition-colors"
            >
              FAQs
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-3 bg-amber-50 rounded-2xl hover:bg-purple-700 transition-colors text-zinc-600 font-bold hover:text-white">
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-amber-50 text-zinc-600 hover:bg-zinc-200 focus:outline-none"
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
          <div className="md:hidden mt-4 p-4 bg-amber-50 rounded-2xl space-y-3">
            <Link
              href="#"
              className="block text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-2xl p-2 font-bold transition-colors"
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
                className="w-full py-3 bg-purple-700 text-white rounded-2xl font-bold hover:bg-purple-800 transition-colors"
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
