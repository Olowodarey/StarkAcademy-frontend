// app/page.tsx or pages/index.tsx depending on your setup

import Image from "next/image";
import Rectangle_starknet from '../../../public/assets/Rectangle_starknet.png';

export default function Zero_to_expert() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-8 flex flex-col items-center">
        {/* Top Heading */}
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">From Zero To Expert</h1>
          <p className="text-lg text-gray-300 mb-12">
            Our Structured Learning Path Takes You From Web3 Basics To Advanced Trading Strategies.
          </p>
        </section>
  
        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:bg-gray-700 transition">
            <div className="text-2xl mb-4">🛡️</div>
            <h2 className="text-xl font-semibold mb-2">On-Chain Verification</h2>
            <p className="text-gray-400 text-sm">
              Accreditation and Trading Results Are Verified On-Chain, Enabling Complete Transparency And Trust.
            </p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:bg-gray-700 transition">
            <div className="text-2xl mb-4">🏆</div>
            <h2 className="text-xl font-semibold mb-2">Live Trading Tournaments</h2>
            <p className="text-gray-400 text-sm">
              Live Trading Battles Have Results Tracked On-Chain, Ensuring Complete Transparency And Fairness.
            </p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:bg-gray-700 transition">
            <div className="text-2xl mb-4">🎖️</div>
            <h2 className="text-xl font-semibold mb-2">NFT Certifications</h2>
            <p className="text-gray-400 text-sm">
              Accreditations And Achievements Are Verified And Secured Through NFT Certifications.
            </p>
          </div>
        </section>
  
        {/* Prove Your Skills Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 max-w-6xl">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Prove Your <span className="text-purple-400">Skills</span> On-Chain</h2>
            <p className="text-gray-300 mb-6">
              Our Tournaments And Accreditations Are Powered By On-Chain Verification To Ensure True Transparency And Meritocracy.
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6">
              <li>Meritocracy via Real-Performance Tiers</li>
              <li>Proof Of Achievement NFTs</li>
              <li>On-Chain Trading Certifications</li>
            </ul>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full">
              Join the next tournament →
            </button>
          </div>
  
          {/* Right Image */}
          {/* <div className="flex-1 flex justify-center">
            <div className="w-80 h-60 bg-gray-700 rounded-2xl flex items-center justify-center">
              <span className="text-gray-400">[ Starknet Image Placeholder ]</span>
            </div>
          </div> */}
          <Image src={Rectangle_starknet} alt="starknet_logo" width={500} height={400}/>
        </section>
      </main>
    );
  }
  