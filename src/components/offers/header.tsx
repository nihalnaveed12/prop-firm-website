"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [activeTab, setActiveTab] = useState("launch");

  return (
    <div className="flex md:justify-between flex-col md:flex-row gap-6 items-center w-full p-4">
      <div className="flex  md:space-x-2 space-x-6">
        <Link
          href={"/extra-account-promo"}
          onClick={() => setActiveTab("launch")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "launch"
              ? "bg-[#1A1A1A] text-white"
              : "bg-transparent text-white/70 hover:text-white"
          }`}
        >
          {activeTab === "launch" && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#FF3B9A"
                fillOpacity="0.2"
                stroke="#FF3B9A"
                strokeWidth="2"
              />
              <path
                d="M8 12L11 15L16 9"
                stroke="#FF3B9A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          Launch Offers
        </Link>

        <Link
          onClick={() => setActiveTab("exclusive")}
          href={"/exclusive-offers"}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "exclusive"
              ? "bg-[#1A1A1A] text-white"
              : "bg-transparent text-white/70 hover:text-white"
          }`}
        >
          Exclusive Offers
        </Link>

        <Link
          href={"/offers"}
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "all"
              ? "bg-[#1A1A1A] text-white"
              : "bg-transparent text-white/70 hover:text-white"
          }`}
        >
          All Current Offers
        </Link>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400 cursor-pointer" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1A1A1A] text-white rounded-full py-2 pl-10 pr-4 w-full md:w-[250px] focus:outline-none focus:ring-1 focus:ring-[#FF3B9A] placeholder-gray-400"
        />
      </div>
    </div>
  );
}
