"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Hero from "@/component/Homepage/Hero_section";
// import { Features } from 'tailwindcss';
import Feature from "@/component/Feature";
import Zero_to_expert from "@/component/Zero_to_expert";
import Learn_frm_verified_tutor from "@/component/Learn_frm_verified_tutor";

import Header from "@/component/Header";

import Footer from "@/component/Footer";
import CourseCompletionButton from "@/component/CourseCompletionButton";
export default function Home() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <Hero />
{/* <CourseCompletionButton/> */}
      {/* Feature Section */}
      <Feature />

      {/* Tabs Section */}
      <Zero_to_expert />

      {/* Pricing Section */}
      <Learn_frm_verified_tutor />
    

      {/* Testimonials */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our <span className="text-purple-400">Students</span> Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Join thousands of students who have transformed their trading journey with our platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Johnson',
                role: 'Day Trader',
                content: 'Stark Academy completely transformed my approach to trading. The on-chain verification gave me the confidence I needed to trust the education I was receiving.'
              },
              {
                name: 'Sarah Williams',
                role: 'Crypto Enthusiast',
                content: 'The live tournaments are game-changing! Competing with others while learning helped me improve my skills faster than I thought possible.'
              },
              {
                name: 'Michael Chen',
                role: 'Professional Trader',
                content: 'As someone who values transparency, I appreciate how Stark Academy verifies everything on-chain. The NFT certifications are a great way to showcase my achievements.'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4 flex items-center justify-center text-xl font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {'★★★★★'.split('').map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your <span className="text-purple-400">Trading Journey</span>?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of traders who have already transformed their skills with our on-chain verified education platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
              Start Learning Free
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1">
              Join Tournament
            </button>
          </div>
          <p className="mt-6 text-gray-400 text-sm">No credit card required • 7-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />

   
    </div>
  );
}
