import { Card, CardContent } from "@/components/ui/card";
import { Shield, Trophy, Award, Users, BookOpen, Gift } from "lucide-react";
import { motion } from "framer-motion";

import { Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const  // Type assertion for the ease array
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Feature() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "On-Chain Verification",
      description: "All your trading achievements and certifications are permanently recorded and verified on the StarkNet blockchain."
    },
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      title: "Live Trading Tournaments",
      description: "Compete with traders worldwide in real-time tournaments and win prizes while improving your skills."
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "NFT Certifications",
      description: "Earn unique NFT certificates for completing courses and achieving trading milestones that prove your expertise."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Vetted Tutors",
      description: "Learn from experienced traders who have been thoroughly vetted and have proven track records in the market."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "On-Chain Comprehensive Learning",
      description: "Access a complete curriculum covering everything from basics to advanced strategies, all verified on-chain."
    },
    {
      icon: <Gift className="w-6 h-6 text-white" />,
      title: "Airdrop Mastery",
      description: "Learn how to identify and participate in top airdrop projects, whether you're a developer or trader in the Web3 space."
    }
  ];

  return (



    <section id="features" className="relative overflow-hidden py-5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent" />

      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center space-y-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Why Stark{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Academy</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Become the most efficient trader with our comprehensive, on-chain verified trading education platform.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>

              <Card className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 h-full">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-300 flex-grow">{feature.description}</p>
                  <div className="pt-2">
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
