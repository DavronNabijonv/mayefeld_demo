"use client";

import Image from "next/image";
import LogoImg from "../../public/logo.png";
import { NavbarProps } from "@/types";
import { useState } from "react";
import { navbarLinks } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ pathName, backFon }: NavbarProps) {
  const [navbarTogle, setNavbarTogle] = useState<Boolean>(false);

  const pathname = usePathname();

  return (
    <div className="max-w-[1200px] w-full m-auto my-5 ">
      {/* Logo image */}
      <Image
        src={LogoImg}
        alt="Logo image"
        width={200}
        height={200}
        className=""
        priority
      />

      {/* page path name */}
      <div
        className={`text-[30px]  absolute duration-[0.4s] ${
          backFon === "light" ? "text-bg-dark" : "text-bg-light"
        } top-[66px] bg-[#161616] right-0 w-[60%] h-[100vh] p-[15px] ${
          navbarTogle
            ? "transform translate-x-[0%] z-[22222] "
            : "transform translate-x-[100%]"
        } `}
      >
        | {pathName}
      </div>

      {/* navbar menu btn */}
      {pathName !== "/" && (
        <div className="">
          {/* main navbar items */}
          <div className="">
            <div className="flex flex-col gap-5 px-3 ">
              {navbarLinks.map((item, index) => (
                <Link key={index} href={item.route}>
                  <div
                    className={` border-b-1 pb-2 pl-2 hover:text-[#08528f] ${
                      backFon === "light" ? "border-bg-dark" : "border-bg-light"
                    } ${
                        pathname === item.route ? "text-blue-500 font-bold" : ""
                    }`}
                  ></div>
                </Link>
              ))}
            </div>
          </div>

          {/* overflow */}
          <div
            className={`absolute w-full h-full z-[999] top-0 left-0 right-0 bottom-0 ${
              navbarTogle ? "flex" : "hidden"
            } `}
            onClick={() => setNavbarTogle(false)}
          ></div>
          {/* overflow */}
        </div>
      )}
    </div>
  );
}
