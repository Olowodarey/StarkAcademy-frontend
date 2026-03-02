"use client";

import React from "react";
import Antigravity from "./Antigravity";

interface UnifiedBackgroundProps {
  variant?: "hero" | "section" | "minimal";
  showParticles?: boolean;
  showDecorative?: boolean;
  showNetworkLines?: boolean;
  particleCount?: number;
  opacity?: number;
  className?: string;
}

export default function UnifiedBackground({
  variant = "section",
  showParticles = true,
  showDecorative = false,
  showNetworkLines = false,
  particleCount = 150,
  opacity = 0.4,
  className = "",
}: UnifiedBackgroundProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-br from-gray-900 via-black to-gray-900";
      case "section":
        return "bg-gradient-to-br from-black via-gray-900 to-black";
      case "minimal":
        return "bg-black";
      default:
        return "bg-black";
    }
  };

  return (
    <div className={`absolute inset-0 ${getBackgroundClass()} ${className}`}>
      {/* Antigravity particle system */}
      {showParticles && (
        <div className="absolute inset-0" style={{ opacity }}>
          <Antigravity
            count={particleCount}
            magnetRadius={variant === "hero" ? 10 : 8}
            ringRadius={variant === "hero" ? 7 : 5}
            waveSpeed={0.4}
            waveAmplitude={0.4}
            particleSize={variant === "hero" ? 1.5 : 1.2}
            lerpSpeed={0.05}
            color="#3b82f6"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
      )}

      {/* Decorative elements */}
      {showDecorative && (
        <>
          <div className="absolute top-20 left-10 w-8 h-8 bg-orange-500 rounded transform rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400 rounded transform rotate-45 animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 bg-orange-600 rounded transform rotate-45 animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-40 w-7 h-7 bg-yellow-500 rounded transform rotate-45 animate-pulse delay-500"></div>
        </>
      )}

      {/* Network lines */}
      {showNetworkLines && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200,400 Q400,300 600,400 T1000,400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50,600 Q250,500 450,600 T850,600"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
}
