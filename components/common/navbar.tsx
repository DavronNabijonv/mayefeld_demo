"use client";

import Image from "next/image";
import LogoImg from "../../public/logo2.png";
import { NavbarProps } from "@/types";
import { useState } from "react";
import { navbarLinks } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ backFon }: NavbarProps) {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const pathNamePage = usePathname();

  // Null check va bosh sahifa tekshiruvi
  const shouldShowNavbar = pathNamePage && pathNamePage !== "/home";

  // Faol linkni aniqlash
  const isActive = (path: string) => {
    return (
      pathNamePage === path || (path !== "/" && pathNamePage?.startsWith(path))
    );
  };

  return (
    <div className="max-w-[1400px] w-full m-auto my-5 flex items-center">
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
        } p-[15px] ${
          navbarToggle ? "translate-x-0 z-[22222]" : "translate-x-full"
        }`}
      >
        {pathNamePage.toUpperCase() || "Loading..."}
      </div>

      {/* Navbar menyusi */}
      {shouldShowNavbar && (
        <div>
          <div className="flex flex-col gap-5 px-3">
            {navbarLinks.map((item) => (
              <Link key={item.route} href={item.route}>
                <div
                  className={`border-b-1 pb-2 pl-2 hover:text-[#08528f] ${
                    backFon === "light" ? "border-bg-dark" : "border-bg-light"
                  } ${isActive(item.route) ? "text-blue-500 font-bold" : ""}`}
                >
                  {item.title}
                </div>
              </Link>
            ))}
          </div>

          {navbarToggle && (
            <div
              className="fixed inset-0 z-[999] bg-black bg-opacity-50"
              onClick={() => setNavbarToggle(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
