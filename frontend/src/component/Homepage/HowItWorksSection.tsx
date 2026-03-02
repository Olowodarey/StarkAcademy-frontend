export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create an Event",
      description:
        "Creators set up prediction or giveaway events by choosing a topic, defining the question, and selecting at least 3 possible outcomes. Optional rewards can be locked upfront.",
    },
    {
      number: "02",
      title: "Play for Free",
      description:
        "Users join events and submit predictions with zero entry fees. All predictions are recorded on-chain with timestamps for fairness.",
    },
    {
      number: "03",
      title: "Results Are Verified",
      description:
        "When the event ends: Numeric results are resolved using trusted oracles. For major events, the creator submits the correct outcome and an admin only verifies that submission. No manual winner selection. No disputes.",
    },
    {
      number: "04",
      title: "Climb the Leaderboard",
      description:
        "Scores update automatically, rewards are distributed, NFT badges are minted, and users climb event and monthly leaderboards.",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-[200px]">
          {/* Left side - Title and illustration */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-lg mx-auto lg:mx-0">
              TrueCall facilitates seamless blockchain-based predictions,
              enhancing transparency in the gaming process.
            </p>
          </div>

          {/* Right side - Steps with curved connecting line */}
          <div className="relative space-y-8">
            {/* Curved connecting line SVG */}
            <svg
              className="absolute left-8 top-8 opacity-30 pointer-events-none"
              width="2"
              height="calc(100% - 64px)"
              viewBox="0 0 2 400"
              fill="none"
              style={{ left: "32px", top: "32px" }}
            >
              <path
                d="M1 0 Q50 100 1 200 Q-50 300 1 400"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>
            </svg>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gray-900 border-2 border-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-orange-400">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-0 lg:pt-2">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
