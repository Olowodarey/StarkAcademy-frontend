"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-white font-bold text-xl">
              TrueCall
            </Link>
          </div>
          <div>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/events"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Events
              </Link>
              <Link
                href="/create-event"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Create Event
              </Link>
              <Link
                href="/platform"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Platform
              </Link>
              <Link
                href="/tournaments"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Tournaments
              </Link>
              <Link
                href="/markets"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Markets
              </Link>
              <Link
                href="/profile"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Profile
              </Link>
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
}
