"use client";
import { useState } from "react";
import Hero from "@/component/Homepage/Hero_section";
import Feature from "@/component/Homepage/Feature";
import HowItWorks from "@/component/Homepage/HowItWorks";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Who_for from "@/component/Homepage/Who_for";
import Why_starknet from "@/component/Homepage/Why_starknet";
import Cta from "@/component/Homepage/Cta";
export default function Home() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <Hero />

      <HowItWorks />

      <Why_starknet />

      <Feature />

      <Cta />

      <Who_for />
      <Footer />
    </div>
  );
}
