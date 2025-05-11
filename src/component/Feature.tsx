import Image from "next/image";
import Icon_container from "../../public/assets/Icon_container.png";

export default function Feature() {
  const Features = [
    {
      Icon: (
        <Image
          src={Icon_container}
          alt="icon-container"
          width={200}
          height={200}
        />
      ),
      Title: "On-Chain Verification",
      Description:
        "All education and trading results are verified on StarkNet, ensuring complete transparency and trust.",
    },
    {
      Icon: (
        <Image
          src={Icon_container}
          alt="icon-container"
          width={200}
          height={200}
        />
      ),
      Title: "Live Trading Tournaments",
      Description:
        "All education and trading results are verified on StarkNet, ensuring complete transparency and trust.",
    },
    {
      Icon: (
        <Image
          src={Icon_container}
          alt="icon-container"
          width={200}
          height={200}
        />
      ),
      Title: "NFT Certifications",
      Description:
        "All education and trading results are verified on StarkNet, ensuring complete transparency and trust.",
    },
    {
      Icon: (
        <Image
          src={Icon_container}
          alt="icon-container"
          width={200}
          height={200}
        />
      ),
      Title: "Vetted Tutors",
      Description:
        "All education and trading results are verified on StarkNet, ensuring complete transparency and trust.",
    },
    {
      Icon: (
        <Image
          src={Icon_container}
          alt="icon-container"
          width={200}
          height={200}
        />
      ),
      Title: "On-Chain Comprehensive Learning",
      Description:
        "All education and trading results are verified on StarkNet, ensuring complete transparency and trust.",
    },
    {
      Icon: (
        <Image
          src={Icon_container}
          alt="icon-container"
          width={200}
          height={200}
        />
      ),
      Title: "Airdrop Opportunities",
      Description:
        "All education and trading results are verified on StarkNet, ensuring complete transparency and trust.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-5xl font-bold mb-2 text-center">Why Choose Us?</h2>
        <p className="text-gray-400 text-2xl mb-12 text-center">
          Our platform delivers exceptional capabilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="w-10 h-10 bg-purple-600 rounded-md mb-4 flex items-center justify-center">
                <span className="text-xl">{feature.Icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.Title}</h3>
              <p className="text-gray-400">{feature.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
