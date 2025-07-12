import React from 'react'
import { Button } from "@/components/ui/button"
import { Star, Shield, Trophy, Award, Gift } from "lucide-react"

const Cta = () => {
  return (
    <div> <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
    <div className="relative">
   
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-3xl scale-110"></div>

   
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 lg:p-20 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-8 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-400"></div>
              </div>
              <span className="text-purple-300 font-semibold text-lg">Limited Early Access</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Be One of the First{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                1,000 Learners
              </span>
            </h2>

            <p className="text-gray-300 text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Join our early access waitlist to unlock exclusive tournament invites, limited NFT badges, and
              StarkNet airdrop eligibility. Build your on-chain reputation from day one.
            </p>
          </div>

          {/* Exclusive Benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Exclusive Tournaments</h3>
                <p className="text-gray-300">
                  Get priority access to high-stakes tournaments with bigger prize pools and fewer competitors.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Limited NFT Badges</h3>
                <p className="text-gray-300">
                  Earn rare "Founder" NFT badges that will never be available again after launch.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mx-auto flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">StarkNet Airdrops</h3>
                <p className="text-gray-300">
                  Qualify for exclusive token airdrops and ecosystem rewards as an early adopter.
                </p>
              </div>
            </div>
          </div>

          {/* Urgency Counter */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white">Early Access Spots Remaining</h4>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    847
                  </div>
                  <div className="text-gray-400 text-sm">Spots Left</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    153
                  </div>
                  <div className="text-gray-400 text-sm">Joined Today</div>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                  style={{ width: "15.3%" }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">15.3% of early access spots claimed</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-16 py-6 text-2xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Join Early Access
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>No payment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Instant access on launch</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span>Exclusive founder benefits</span>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-gray-700/50">
            <p className="text-gray-400 text-lg">
              Join <span className="text-white font-semibold">2,847 traders</span> already on the waitlist
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 text-sm">
                +2K
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Cta