"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Candle = {
  open: number;
  high: number;
  low: number;
  close: number;
  isUp: boolean;
};

const TradingChat = () => {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateCandles = (): Candle[] => {
      const initialPrice = 100;
      const newCandles: Candle[] = [];

      for (let i = 0; i < 15; i++) {
        const prevClose = i === 0 ? initialPrice : newCandles[i - 1].close;
        const open = prevClose;
        const close = open * (1 + (Math.random() * 0.02 - 0.01));
        const high = Math.max(open, close) * (1 + Math.random() * 0.01);
        const low = Math.min(open, close) * (1 - Math.random() * 0.01);
        const isUp = close > open;

        newCandles.push({ open, high, low, close, isUp });
      }

      return newCandles;
    };

    setCandles(generateCandles());

    const interval = setInterval(() => {
      setCandles((prevCandles) => {
        const updatedCandles = [...prevCandles];
        const lastCandle = { ...updatedCandles[updatedCandles.length - 1] };

        lastCandle.close =
          lastCandle.close * (1 + (Math.random() * 0.01 - 0.005));
        lastCandle.high = Math.max(lastCandle.high, lastCandle.close);
        lastCandle.low = Math.min(lastCandle.low, lastCandle.close);
        lastCandle.isUp = lastCandle.close > lastCandle.open;

        updatedCandles[updatedCandles.length - 1] = lastCandle;
        return updatedCandles;
      });
    }, 2000);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimer);
    };
  }, []);

  const handleStartTrading = () => {
    alert("Starting trading session...");
  };

  const SkeletonComponent =
    Skeleton ||
    (() => (
      <div className="animate-pulse bg-gray-800/50 rounded-md w-full h-full" />
    ));

  return (
    <div className="space-y-4">
      <div className="bg-gray-900/50 rounded-lg p-4 h-64 relative overflow-hidden">
        {isLoading ? (
          <div className="w-full h-full">
            <SkeletonComponent className="w-full h-full" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-end justify-center space-x-2 px-4 pb-4">
            {candles.map((candle, i) => {
              const maxVal = Math.max(...candles.map((c) => c.high));
              const minVal = Math.min(...candles.map((c) => c.low));
              const range = maxVal - minVal || 1; // Prevent division by zero
              const height = 150;
              const padding = 10;

              const scale = (val: number) =>
                height * (1 - (val - minVal) / range) + padding;

              const candleTop = scale(Math.max(candle.open, candle.close));
              const candleBottom = scale(Math.min(candle.open, candle.close));
              const candleHeight = Math.max(1, candleBottom - candleTop);
              const wickTop = scale(candle.high);
              const wickBottom = scale(candle.low);

              return (
                <div
                  key={i}
                  className="flex flex-col items-center"
                  style={{ width: "12px" }}
                >
                  <div
                    className="w-1 absolute"
                    style={{
                      height: `${wickBottom - wickTop}px`,
                      top: `${wickTop}px`,
                      backgroundColor: candle.isUp ? "#10b981" : "#ef4444",
                    }}
                  />
                  <div
                    className={`w-2 absolute rounded-sm ${
                      candle.isUp ? "bg-green-500" : "bg-red-500"
                    }`}
                    style={{
                      height: `${candleHeight}px`,
                      top: `${candleTop}px`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="absolute top-4 left-4 text-green-400 text-sm font-mono">
          ETH/USD: $
          {candles.length > 0
            ? candles[candles.length - 1].close.toFixed(2)
            : "0.00"}
          (
          {candles.length > 0
            ? (candles[candles.length - 1].isUp ? "+" : "") +
              (
                (candles[candles.length - 1].close /
                  candles[candles.length - 1].open -
                  1) *
                100
              ).toFixed(2)
            : "0.00"}
          %)
        </div>
      </div>

      <Button
        onClick={handleStartTrading}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3"
      >
        Start Trading
      </Button>
    </div>
  );
};

export default TradingChat;
