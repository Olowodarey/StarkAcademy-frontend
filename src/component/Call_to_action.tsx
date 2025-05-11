// import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <div className="w-full bg-black relative overflow-hidden">
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready To Transform Your Trading <span className="text-gray-400">Skills?</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-base mb-8">
            Join Stark Academy Today And Start Your Journey From Beginner To Expert Trader With Verified, On-Chart
            Education.
          </p>

          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-md">Download App</Button>

            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-2 rounded-md">
              Learn more
            </Button>
          </div> */}
        </div>
      </div>

      {/* Frame number */}
      <div className="absolute bottom-2 left-2 text-gray-500 text-xs">Frame 14146</div>
    </div>
  )
}
