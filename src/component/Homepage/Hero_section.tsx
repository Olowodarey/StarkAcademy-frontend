"use client";
import Image from "next/image";
import {
  FaGraduationCap,
  FaTrophy,
  FaShieldAlt,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";


type SkeletonProps = {
  className?: string;
};

const FallbackSkeleton = ({ className }: SkeletonProps) => (
  <div className={`animate-pulse bg-gray-800/50 rounded-md ${className}`} />
);

const SkeletonComponent = Skeleton || FallbackSkeleton;

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    onClick={() => {
      const nextSection = document.getElementById("features");
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
    <FaChevronDown className="text-gray-400" />
  </motion.div>
);

export default function Hero() {
  // State for candlestick chart data
  const [candles, setCandles] = useState<
    {
      open: number;
      high: number;
      low: number;
      close: number;
      isUp: boolean;
    }[]
  >([]);

  // Initialize and update candlestick data
  useEffect(() => {
    // Generate initial data
    const generateCandles = () => {
      const initialPrice = 100; // Starting price
      const candles: Array<{
        open: number;
        high: number;
        low: number;
        close: number;
        isUp: boolean;
      }> = [];

      for (let i = 0; i < 15; i++) {
        const prevClose = i === 0 ? initialPrice : candles[i - 1].close;
        const open = prevClose;
        const close = open * (1 + (Math.random() * 0.02 - 0.01));
        const high = Math.max(open, close) * (1 + Math.random() * 0.01);
        const low = Math.min(open, close) * (1 - Math.random() * 0.01);
        const isUp = close > open;

        candles.push({ open, high, low, close, isUp });
      }

      return candles;
    };

    setCandles(generateCandles());

    // Update data every 2 seconds
    const interval = setInterval(() => {
      setCandles((prevCandles) => {
        const newCandles = [...prevCandles];
        const lastCandle = { ...newCandles[newCandles.length - 1] };

        // Update the last candle
        lastCandle.close =
          lastCandle.close * (1 + (Math.random() * 0.01 - 0.005));
        lastCandle.high = Math.max(lastCandle.high, lastCandle.close);
        lastCandle.low = Math.min(lastCandle.low, lastCandle.close);
        lastCandle.isUp = lastCandle.close > lastCandle.open;

        newCandles[newCandles.length - 1] = lastCandle;
        return newCandles;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleStartTrading = () => {
    alert("Starting trading session...");
    // Add your trading logic here
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 py-32 overflow-hidden bg-gradient-to-bflex items-center">
     

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full px-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-purple-600/20 text-purple-300 mb-6">
            <FaShieldAlt className="mr-2" /> StarkNet-Powered Education
          </div>

          <div className="mb-8 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              The Problem & Our Mission
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Web3 Education Is Broken.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                We're Fixing It.
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Most crypto trading education is overpriced, centralized, and impossible to verify. Courses are outdated, instructors are unverified, and there's no way to prove what you've learned. 
              <span className="text-purple-300 font-medium">Stark Academy changes that.</span> We combine structured learning, skill-based competition, and on-chain credentialing to give everyone a fair shot at mastering Web3.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 font-medium text-lg transition-all transform hover:scale-105">
              Start Learning Free
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-lg hover:border-purple-500 font-medium text-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all">
              Join Live Tournament
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center">
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

        <div className="relative mt-20">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                    Account Balance: $10,000
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    Digital Futures
                  </span>
                </div>

                {/* Chart Area */}
                <div className="bg-gray-900/50 rounded-lg p-4 h-64 relative overflow-hidden">
                  {isLoading ? (
                    <div className="w-full h-full">
                      <SkeletonComponent className="w-full h-full" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-end justify-center space-x-2 px-4 pb-4">
                      {candles.map((candle, i) => {
                        const maxVal = Math.max(...candles.map((c) => c.high));
                        const minVal = Math.min(...candles.map((c) => c.low));
                        const range = maxVal - minVal;
                        const height = 150; // pixels
                        const padding = 10;

                        const scale = (val: number) =>
                          height * (1 - (val - minVal) / range) + padding;

                        const candleTop = scale(
                          Math.max(candle.open, candle.close)
                        );
                        const candleBottom = scale(
                          Math.min(candle.open, candle.close)
                        );
                        const candleHeight = Math.max(
                          1,
                          candleBottom - candleTop
                        );
                        const wickTop = scale(candle.high);
                        const wickBottom = scale(candle.low);

                        return (
                          <div
                            key={i}
                            className="flex flex-col items-center"
                            style={{ width: "12px" }}
                          >
                            <div
                              className="w-1 absolute"
                              style={{
                                height: `${wickBottom - wickTop}px`,
                                top: `${wickTop}px`,
                                backgroundColor: candle.isUp
                                  ? "#10b981"
                                  : "#ef4444",
                              }}
                            />
                            <div
                              className={`w-2 absolute rounded-sm ${
                                candle.isUp ? "bg-green-500" : "bg-red-500"
                              }`}
                              style={{
                                height: `${candleHeight}px`,
                                top: `${candleTop}px`,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 text-green-400 text-sm font-mono">
                    ETH/USD: $
                    {candles.length > 0
                      ? candles[candles.length - 1].close.toFixed(2)
                      : "0.00"}
                    (
                    {candles.length > 0
                      ? (candles[candles.length - 1].isUp ? "+" : "") +
                        (
                          (candles[candles.length - 1].close /
                            candles[candles.length - 1].open -
                            1) *
                          100
                        ).toFixed(2)
                      : "0.00"}
                    %)
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  onClick={handleStartTrading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3"
                >
                  Start Trading
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
