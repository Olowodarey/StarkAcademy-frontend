import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-blue-500 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-purple-500 mr-2">◆</div>
          <Link href="/" className="text-purple-500 font-bold">
            Stark Academy
          </Link>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-gray-400 mb-1">Platform</span>
            <Link href="/platform" className="text-white hover:text-purple-400">
              Features
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <span className="text-gray-400 mb-1">Discover</span>
            <Link href="/discover" className="text-white hover:text-purple-400">
              Blog
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <span className="text-gray-400 mb-1">Start</span>
            <Link href="/start" className="text-white hover:text-purple-400">
              Sign Up
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <span className="text-gray-400 mb-1">Resources</span>
            <Link href="/resources" className="text-white hover:text-purple-400">
              Help
            </Link>
          </div>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-4 flex justify-between items-center text-xs text-gray-500">
        <p>©2025 Stark Academy. All Rights Reserved.</p>
        <div className="flex space-x-3">
          <Link href="https://twitter.com" aria-label="Twitter">
            <Twitter size={16} className="text-gray-400 hover:text-white" />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook">
            <Facebook size={16} className="text-gray-400 hover:text-white" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <Instagram size={16} className="text-gray-400 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
