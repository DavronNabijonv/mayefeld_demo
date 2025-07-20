import Navbar from "@/components/common/navbar";
import { navbarLinks } from "@/constants/data";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {


    // keyingi shu prayektga kirganingda linklar hover effectini sihlatib qo`y hozir ishlamaybdi.

  return (
    <div className="min-lg:max-w-[1400px] max-lg:px-4 w-full mx-auto">
      <Navbar backFon="light" />

      <div className="main_section flex flex-col gap-10 items-start justify-between h-full ">
        {/* home page main title */}
        <div className="text-light text-[60px] min-[1200px]:w-[60%] ">
          Mayerfeld Practicum Program — Frontend Developer
        </div>

        {/* page links */}
        <div className="w-full grid grid-cols-2 gap-2 ">
          {navbarLinks.map((link, index) => (
            <Link
              href={link.route}
              key={index}
              className="group max-w-[500px] w-full border-b-2 px-3 pb-1 mt-3 text-[20px] flex gap-4 items-center justify-between hover:text-white transition-all duration-300"
            >
              {link.title}
              <span className="rotate-45 transition-transform duration-300 group-hover:rotate-0! group-hover:text-white">
                <FaArrowRight size={18} />
              </span>
            </Link>
          ))}
        </div>

        {/* footer part */}
        <div className="flex flex-col gap-2 items-start justify-start w-[100%]">
          <p className="border-b-3 border-gray-600 pb-2 w-full text-[25px]">
            by Meyrfeld Consulting
          </p>
          <p className="text-[12px]">MAYERFELD.CONSULTING</p>
        </div>
      </div>
    </div>
  );
}
