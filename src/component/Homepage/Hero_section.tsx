"use client";
import { useState, useEffect } from "react";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-0 pt-0 pb-0 -mt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <Star className="absolute top-20 left-10 w-4 h-4 text-purple-400 animate-pulse" />
        <Star
          className="absolute top-40 right-20 w-3 h-3 text-blue-400 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Star
          className="absolute bottom-40 left-20 w-2 h-2 text-purple-300 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <Star
          className="absolute top-60 left-1/3 w-3 h-3 text-blue-300 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <Star
          className="absolute bottom-60 right-1/3 w-4 h-4 text-purple-400 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-32"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <div className="mb-12 max-w-5xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Revolutionizing Web3 Education
              </span>
              <span className="block mt-3 text-2xl md:text-3xl font-medium text-gray-400">
                Learn, Compete, and Succeed in the Decentralized Economy
              </span>
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      The Challenge
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      The current landscape of cryptocurrency and Web3 education
                      is fragmented, with inconsistent quality and limited
                      verifiability. Traditional learning platforms struggle to
                      keep pace with the rapidly evolving blockchain ecosystem,
                      leaving aspiring professionals without reliable pathways
                      to gain and demonstrate expertise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/50 p-6 rounded-2xl border border-purple-500/20">
                  <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                    Our Solution
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Stark Academy combines structured learning with on-chain
                    verification, creating a transparent ecosystem where
                    knowledge and skills are properly validated. Our platform
                    ensures that both learners and educators are held to the
                    highest standards of excellence.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/30 to-gray-900/50 p-6 rounded-2xl border border-pink-500/20">
                  <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-pink-500 mr-2"></span>
                    Community Powered
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Built on principles of decentralization, our platform
                    empowers community members to contribute, validate, and
                    benefit from collective knowledge. Whether you're learning
                    or teaching, you're part of shaping the future of Web3
                    education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium text-lg text-white transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Start Learning Free
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="group relative px-8 py-4 bg-transparent border-2 border-purple-500/30 text-white rounded-xl font-medium text-lg transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/20">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
                Join Live Tournament
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center cursor-pointer">
              <FaGraduationCap className="text-purple-400 mr-2" />
              <span>1,000+ Active Learners</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <FaTrophy className="text-yellow-400 mr-2" />
              <span>50+ Weekly Tournaments</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span>Live Trading Now</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
