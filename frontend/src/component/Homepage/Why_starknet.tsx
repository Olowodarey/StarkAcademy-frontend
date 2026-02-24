import React from 'react'
import { Button } from "@/components/ui/button"
import { Star, Shield } from "lucide-react"

const Why_starknet = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-6 py-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-indigo-300 font-medium">Powered by Innovation</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Built for the Future with{" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      StarkNet
                    </span>
                  </h2>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    We chose StarkNet because it offers scalable, secure, and low-cost infrastructure for the next
                    generation of dApps. With StarkNet, your progress, achievements, and credentials are stored
                    immutably on-chain — creating trustless proof of skill for learners and educators alike.
                  </p>
                </div>

                {/* StarkNet Benefits */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h4 className="text-white font-semibold">Scalable</h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      Handle thousands of transactions without network congestion
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-white font-semibold">Secure</h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">Military-grade cryptographic proofs protect your data</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div>
                      <h4 className="text-white font-semibold">Low-Cost</h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      Minimal fees make learning and certification accessible to all
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-white font-semibold">Immutable</h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      Your achievements are permanently recorded and verifiable
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8">
                    Learn About StarkNet
                  </Button>
                  <Button
                    variant="outline"
                    className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 bg-transparent"
                  >
                    View Technical Docs
                  </Button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="relative group">
                  {/* Animated Background */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse"></div>

                  {/* Main Visual */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 space-y-6">
                    {/* StarkNet Logo Area */}
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"></div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        StarkNet
                      </h3>
                    </div>

                    {/* Network Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-white">99.9%</div>
                        <div className="text-gray-400 text-sm">Uptime</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-white">{"<$0.01"}</div>
                        <div className="text-gray-400 text-sm">Avg Fee</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-white">1000+</div>
                        <div className="text-gray-400 text-sm">TPS</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-gray-400 text-sm">Verified</div>
                      </div>
                    </div>

                    {/* Connection Visualization */}
                    <div className="relative h-24 overflow-hidden rounded-lg bg-gray-900/50">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          {/* Nodes */}
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="relative">
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  i % 2 === 0 ? "bg-indigo-400" : "bg-purple-400"
                                } animate-pulse`}
                                style={{ animationDelay: `${i * 200}ms` }}
                              ></div>
                              {i < 4 && (
                                <div className="absolute top-1/2 left-3 w-4 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-60"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
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

export default Why_starknet