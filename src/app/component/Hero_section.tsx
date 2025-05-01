import Image from "next/image";
import candle_stick from "../../../public/assets/candle_stick.png"
export default function Hero(){

    return(
        <>
        <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn, Trading on Starknet</h1>
          <p className="text-xl text-gray-300 mb-8">Verified On Chain</p>
          <p className="text-xl text-gray-300 mb-8">Transform from beginner to skilled trader through verifiable education and live trading tournaments, all powered by StarkNet.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-purple-600 rounded-md hover:bg-purple-700">Start Learning Now</button>
            <button className="px-6 py-3 border border-gray-600 rounded-md hover:border-white">Join a Tournament</button>
          </div>
        </div>
      <div className="flex justify-center gap-8">

        <div className="mt-6 w-60 h-10 rounded bg-white text-black flex justify-center">Become a verified Tutor</div>
        <div><Image src={candle_stick} alt="" width={400} height={600}/></div>
        <div className="mt-6 mb-6 gap-30 flex flex-col">
            <div className="w-60 h-10 rounded bg-[#e36e08]">Be A Cryto Expert</div>
            <div className="w-60 h-10 rounded bg-[#e36e08]">Digital Finance</div>

        </div>

      </div>
      </section>




      </>
    )

};