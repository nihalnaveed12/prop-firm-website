"use client";

import { useState } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"question" | "suggestion">(
    "question"
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background images */}
      <div className="absolute left-0 top-0 h-full w-1/2 pointer-events-none">
        <Image
          src="/left-grad.webp"
          alt=""
          width={960}
          height={1080}
          className="object-cover h-full w-full opacity-30"
          priority
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <Image
          src="/right-grad.webp"
          alt=""
          width={960}
          height={1080}
          className="object-cover h-full w-full opacity-30"
          priority
        />
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Contact</h1>
          <p className="text-gray-300">
            Use the form below or select Contact Support to be paired with our
            Support team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {/* Contact Form */}
          <div className="bg-neutral-900 backdrop-blur-sm rounded-[16px] border border-zinc-800 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-6">Contact Us</h2>

              {/* Tabs */}
              <div className="flex mb-6  mx-auto rounded-full p-1 gap-3 w-full max-w-md">
                <button
                  onClick={() => setActiveTab("question")}
                  className={`flex-1 py-2 px-4 rounded-full text-sm transition-colors cursor-pointer ${
                    activeTab === "question"
                      ? "border text-white"
                      : "text-gray-400 hover:text-white "
                  }`}
                >
                  Question
                </button>
                <button
                  onClick={() => setActiveTab("suggestion")}
                  className={`flex-1 py-2 px-4 rounded-full text-sm transition-colors cursor-pointer ${
                    activeTab === "suggestion"
                      ? "border text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Suggestion
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="inquiry" className="block text-sm text-white">
                    Inquiry
                  </label>
                  <div className="relative">
                    <select
                      id="inquiry"
                      className="w-full border border-gray-800/50 rounded-md py-2 px-3 text-zinc-400 appearance-none"
                    >
                      <option value="" disabled selected>
                        Select inquiry
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm text-white">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="border-gray-800/50 text-gray-300 placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-gray-800/50 text-gray-300 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Write your message"
                    className=" border-gray-800/50 text-gray-300 placeholder-gray-500 min-h-[150px]"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-neutral-900 backdrop-blur-sm rounded-[16px] border border-gray-800/50 p-6 flex flex-col min-h-[450px]">
            <div className="mb-auto">
              <div className="w-10 h-10 bg-[#3b1357] rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="mt-auto">
              <h2 className="text-2xl font-bold text-white mb-2">Need Help?</h2>
              <p className="text-gray-300">
                Our support team is delighted to assist you
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
