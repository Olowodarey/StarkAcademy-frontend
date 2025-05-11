import Image from "next/image";
// import avater2 from '../../../public/assets/avater2.jpg';
// import avater3 from '../../../public/assets/avater3.jpg';
// import Rating from '../../../public/assets/Rating.jpg';
// import Rating2 from '../../../public/assets/Rating2.jpg';
// import badge from '../../../public/assets/badge.jpg';
import youtube_image from "../../public/assets/youtube_image.png";

// import verified_badge from '../../../public/assets/verified_badge.jpg';

export default function Learn_frm_verified_tutor() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 px-4">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Learn From <span className="text-purple-500">Verified Tutors</span>
        </h1>
        <p className="text-gray-400">
          Our Tutors Have Proven Their Skills Through On-Chain Verification And
          Competitive Tournaments.
        </p>
      </section>

      {/* Tutor Cards */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-4">
              <Image
                src={`/avatar${num}.png`} // You can replace with your real images
                alt={`Trading Expert ${num}`}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-sm text-purple-400 font-semibold mb-1">
              ✅ Verified Expert
            </div>
            <h2 className="text-2xl font-bold mb-2">Trading Expert {num}</h2>
            <p className="text-gray-400 mb-4">
              {num === 1
                ? "Specializes in DIFI Strategies"
                : num === 2
                ? "Specializes in Technical Analysis"
                : "Specializes in Market Fundamentals"}
            </p>
            <div className="text-yellow-400 text-sm mb-6">⭐ Top 1% Trader</div>
            <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full font-semibold">
              View Profile
            </button>
          </div>
        ))}
      </section>

      {/* Become a Tutor Button */}
      <div className="text-center mt-12">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-lg font-semibold">
          Become a Tutor
        </button>
      </div>

      {/* Upload Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* YouTube Embed */}
        <div className="w-full">
          <div className="aspect-w-16 aspect-h-9">
            {/* <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your real video
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 rounded-xl"
            ></iframe> */}
            <Image
              src={youtube_image}
              alt="youtube-Image"
              width={600}
              height={400}
            ></Image>
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Upload <span className="text-purple-500">Your Own Courses</span>
          </h2>
          <p className="text-gray-400">
            Share Your Knowledge On Crypto And Trading. <br />
            Create Exclusive Educational Content. <br />
            Earn Rewards For Your Expertise And Knowledge.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full font-semibold">
            Start Creating
          </button>
        </div>
      </section>
    </main>
  );
}
