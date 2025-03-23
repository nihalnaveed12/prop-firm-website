"use client";

import Image from "next/image";

import { useState } from "react";
import { Copy, Star } from "lucide-react";

type Platform = {
  id: number;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  discount: {
    percentage: number;
    label: string;
  };
};

export default function BestSeller() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "crypto" | "futures"
  >("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState<
    "weekly" | "monthly"
  >("weekly");

  const platforms: Platform[] = [
    {
      id: 1,
      name: "Alpha Capital",
      logo: "/placeholder.svg?height=48&width=48",
      rating: 4.4,
      reviews: 638,
      discount: {
        percentage: 20,
        label: "OFF",
      },
    },
    {
      id: 2,
      name: "E8 Markets",
      logo: "/placeholder.svg?height=48&width=48",
      rating: 4.8,
      reviews: 286,
      discount: {
        percentage: 5,
        label: "OFF",
      },
    },
    {
      id: 3,
      name: "Blueberry Funded",
      logo: "/placeholder.svg?height=48&width=48",
      rating: 4.0,
      reviews: 42,
      discount: {
        percentage: 25,
        label: "OFF",
      },
    },
    {
      id: 4,
      name: "Breakout",
      logo: "/placeholder.svg?height=48&width=48",
      rating: 4.6,
      reviews: 35,
      discount: {
        percentage: 2,
        label: "OFF",
      },
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background images */}
      <div className="absolute left-0 top-0 h-full w-1/2 pointer-events-none">
        <Image
          src="/left-grad.webp"
          alt=""
          width={960}
          height={1080}
          className="object-cover h-full w-full opacity-85"
          priority
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <Image
          src="/right-grad.webp"
          alt=""
          width={960}
          height={1080}
          className="object-cover h-full w-full opacity-85"
          priority
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Best Seller</h1>
          <p className="text-gray-300">
            Discover the firms traders are choosing right now
          </p>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center mb-6">
            {/* Category Tabs */}
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-white text-black"
                    : "bg-[#1a1a2e] text-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory("crypto")}
                className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer ${
                  selectedCategory === "crypto"
                    ? "bg-white text-black"
                    : "bg-[#1a1a2e] text-white"
                }`}
              >
                Crypto
              </button>

              <button
                onClick={() => setSelectedCategory("futures")}
                className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer ${
                  selectedCategory === "futures"
                    ? "bg-white text-black"
                    : "bg-[#1a1a2e] text-white"
                }`}
              >
                Futures/Stocks
              </button>
            </div>

            {/* Timeframe Tabs - Only visible when "All" is selected */}
            {selectedCategory === "all" && (
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedTimeframe("weekly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer ${
                    selectedTimeframe === "weekly"
                      ? "bg-white text-black"
                      : "bg-[#1a1a2e] text-white"
                  }`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setSelectedTimeframe("monthly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer ${
                    selectedTimeframe === "monthly"
                      ? "bg-white text-black"
                      : "bg-[#1a1a2e] text-white"
                  }`}
                >
                  Monthly
                </button>
              </div>
            )}
          </div>

          {/* Platform List */}
          <div className="space-y-4">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="bg-neutral-900 rounded-[12px] p-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1a1a2e] rounded-full text-sm font-medium">
                    {platform.id}
                  </div>
                  <div className="w-12 h-12 relative flex items-center justify-center bg-white rounded-lg overflow-hidden">
                    {platform.name === "Alpha Capital" && (
                      <div className="w-full h-full flex items-center justify-center bg-[#0a0a14]">
                        <span className="text-white text-2xl font-bold">A</span>
                      </div>
                    )}
                    {platform.name === "E8 Markets" && (
                      <div className="w-full h-full flex items-center justify-center bg-white">
                        <span className="text-[#13131f] text-xl font-bold">
                          E8
                        </span>
                      </div>
                    )}
                    {platform.name === "Blueberry Funded" && (
                      <div className="w-full h-full flex items-center justify-center bg-[#6366f1]">
                        <span className="text-white text-2xl font-bold">B</span>
                      </div>
                    )}
                    {platform.name === "Breakout" && (
                      <div className="w-full h-full flex items-center justify-center bg-[#0ea5e9]">
                        <span className="text-white text-2xl font-bold">B</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{platform.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-bold mr-2">
                        {platform.rating}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < Math.floor(platform.rating)
                                ? "fill-[#f59e0b] text-[#f59e0b]"
                                : "fill-[#374151] text-[#374151]"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 ml-2">
                        ({platform.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-2 md:px-3 py-1 rounded-[8px] flex-shrink-0">
                    <h4 className="text-xs md:text-sm">
                      {platform.discount.percentage}% OFF
                    </h4>
                    <div className="bg-zinc-950 flex gap-1 rounded-[8px] p-1 items-center">
                      <h2 className="text-[10px]">MATCH</h2>
                      <Copy color="#ff1fc3" size={10} />
                    </div>
                  </div>

                  <button className="border border-pink-500 text-white px-4 py-2 rounded-[20px] text-sm">
                    See All Offers
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
