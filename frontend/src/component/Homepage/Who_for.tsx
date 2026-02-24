import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Users } from "lucide-react";

const who_for = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-5">
      <div className="text-center space-y-6 mb-20">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2">
          <Users className="w-4 h-4 text-blue-400" />
          <span className="text-blue-300 font-medium">Built For Everyone</span>
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
          Who Stark Academy{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Is For
          </span>
        </h2>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
          Whether you're taking your first steps into crypto or building your
          Web3 career, Stark Academy provides the perfect path for your journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Crypto Beginners */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <Card className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-gray-700/50 hover:border-green-500/50 transition-all duration-300 h-full">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">🕧</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Crypto Beginners
                  </h3>
                  <p className="text-green-400 font-medium">
                    Start Your Journey Safely
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Learn trading without risking your capital. Our simulated
                environments let you practice with real market data while
                keeping your money safe. Master the fundamentals before you
                invest a single dollar.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Risk-free learning environment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Step-by-step guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Real market data practice
                  </span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                Start Learning Today
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Aspiring Traders */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <Card className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">📊</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Aspiring Traders
                  </h3>
                  <p className="text-blue-400 font-medium">
                    Build Your Reputation
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Build a public portfolio and prove your skill to the world.
                Compete in tournaments, climb leaderboards, and create an
                on-chain track record that speaks for itself.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Public performance tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Tournament competitions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Verifiable skill certificates
                  </span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Build Your Portfolio
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Educators */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <Card className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 h-full">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Educators</h3>
                  <p className="text-purple-400 font-medium">
                    Monetize Your Knowledge
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get certified by performance and earn from your knowledge.
                Transform your trading expertise into a sustainable income
                stream by teaching the next generation of traders.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Performance-based certification
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Passive income opportunities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Global student network</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Become a Tutor
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Web3 Users */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <Card className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 h-full">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">🌍</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Web3 Users</h3>
                  <p className="text-orange-400 font-medium">
                    Expand Your Identity
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Explore StarkNet apps and build your on-chain identity. Add
                trading credentials to your Web3 profile and unlock new
                opportunities in the decentralized economy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">
                    StarkNet ecosystem access
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">
                    On-chain identity building
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">DeFi opportunities</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                Explore StarkNet
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default who_for;
