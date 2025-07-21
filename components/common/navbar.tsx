"use client";

import Image from "next/image";
import LogoImg from "../../public/logo2.png";
import { NavbarProps } from "@/types";
import { useState } from "react";
import { navbarLinks } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar({ backFon }: NavbarProps) {
  const pathNamePage = usePathname();

  // togle navbar variable
  const [tog, setTog] = useState<boolean>(false);

  // Null check va bosh sahifa tekshiruvi
  const shouldShowNavbar = pathNamePage && pathNamePage !== "/home";

  // Faol linkni aniqlash
  const isActive = (path: string) => {
    return (
      pathNamePage === path || (path !== "/" && pathNamePage?.startsWith(path))
    );
  };

  return (
    <div className="max-w-[1400px] w-full m-auto flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={LogoImg}
          alt="Logo image"
          width={200}
          height={50}
          className="rounded-[100%] object-cover object-center h-[80px]"
          priority
        />

        {/* Pathname ko'rsatish */}
        <div
          className={`text-[30px] duration-[0.4s] ${
            backFon === "light" ? "text-bg-dark" : "text-bg-light"
          } p-[15px]`}
        >
          {pathNamePage.toUpperCase() || "Loading..."}
        </div>
      </div>

      <div className="relative">
        {/* Navbar menyusi */}
        {shouldShowNavbar && (
          <div className="relative z-50">
            {/* open navbar */}
            <div
              className="flex flex-col items-end gap-[8px] cursor-pointer"
              onClick={() => setTog(!tog)}
            >
              <div
                className={` ${
                  tog
                    ? " transform -rotate-[45deg] -translate-x-[10px] translate-y-[5px] "
                    : "  "
                } w-[1.5rem] h-[0.12rem] bg-black duration-[0.4s]`}
              ></div>
              <div
                className={` ${
                  tog ? "opacity-[0]" : "opacity-[1]"
                } w-[0.8rem] h-[0.12rem] bg-black duration-[0.4s]`}
              ></div>
              <div
                className={` ${
                  tog
                    ? "transform rotate-[45deg] -translate-x-[10px] -translate-y-[15px]"
                    : ""
                } w-[1.5rem] h-[0.12rem] bg-black duration-[0.4s]`}
              ></div>
            </div>

            {/* navbar links */}
            <div
              className={`fixed top-20 transition-transform duration-300 ${
                tog ? "translate-x-0 right-10" : "translate-x-full right-0"
              }`}
            >
              <div className="flex flex-col bg-black rounded-xl gap-5 p-10 items-end max-w-[500px] w-full ">
                {navbarLinks.map((item) => (
                  <Link
                    key={item.route}
                    href={item.route}
                    className="w-full"
                    onClick={() => setTog(false)}
                  >
                    <div
                      className={`border-b pb-1 w-[100%] hover:text-[#08528f] text-white ${
                        backFon === "light"
                          ? "border-bg-dark"
                          : "border-bg-light"
                      } ${
                        isActive(item.route) ? "text-blue-500 font-bold" : ""
                      }`}
                    >
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
