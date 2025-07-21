import Navbar from "@/components/common/navbar";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-lg:max-w-[1400px] max-w-[100%] w-full mx-auto max-lg:px-3">
      <Navbar backFon="light" />

      {/* about title */}
      <div className="flex flex-col items-start text-[40px] leading-[40px] mt-10">
        <p>About</p>
        <p>Mayerfeld Consulting</p>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <p className="max-w-[800px] w-full text-center rounded-[25px] bg-stone-400 text-[25px] text-white p-5">
          At Mayerfeld Consulting, we’re committed to helping organizations
          succeed through thoughtful strategy, hands-on support, and a deep
          understanding of what drives long-term growth.
        </p>
      </div>

      {/* main text boxes */}
      <div className="mt-15 flex items-start justify-around flex-wrap gap-2">
        <p className="p-3 rounded-[20px] bg-black text-white text-[18px] max-w-[600px] w-full">
          Founded in late 2024 in Berlin, we bring together expertise in
          leadership development, process optimization, and strategic planning
          to help businesses meet the challenges of a changing world.
        </p>
        <p className="p-3 rounded-[20px] bg-black text-white text-[18px] max-w-[600px] w-full">
          We believe success stems from clear thinking, close collaboration, and
          tailored approaches. Every organization we work with is unique, and so
          are the strategies we design. Grounded in solid research and guided by
          practical experience, our work is focused on delivering measurable
          outcomes and building momentum that lasts.
        </p>
      </div>

      {/* about page footer */}
      <div className="flex flex-col gap-2 items-start justify-start w-[100%] mt-10">
        <div className="border-b-3 border-gray-600 pb-2 w-full text-[25px] flex items-center flex-wrap gap-2 ">
          <p className="rounded-[50px] border-1 border-black px-3 py-[2px] text-[12px] text-black ">
            unique strategies
          </p>
          <p className="rounded-[50px] border-1 border-black px-3 py-[2px] text-[12px] text-black ">
            tailored approaches
          </p>
          <p className="rounded-[50px] border-1 border-black px-3 py-[2px] text-[12px] text-black ">
            solid researches
          </p>
          <p className="rounded-[50px] border-1 border-black px-3 py-[2px] text-[12px] text-black ">
            measurable outcomes
          </p>
        </div>
        <p className="text-[12px]">MAYERFELD.CONSULTING</p>
      </div>
    </div>
  );
}
