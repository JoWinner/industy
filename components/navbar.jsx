"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/our-story", label: "Our Story" },
    { path: "/our-operations", label: "Our Operations" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20"> GREENROOTS TRADING COMPANY LIMITED </h1>
      {nav ? (
        <div className="z-20 bg-[#fc5e28] flex items-center justify-center w-12 h-12">
          <X
            onClick={handleNav}
            className=" text-white cursor-pointer"
            size={25}
          />
        </div>
      ) : (
        <div className="z-20 bg-[#fc5e28] flex items-center justify-center w-12 h-12">
          <Menu
            onClick={handleNav}
            className=" text-white cursor-pointer"
            size={25}
          />
        </div>
      )}
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="font-bold text-3xl p-8 hover:text-[#fc5e28] transition-all duration-500"
            >
              <Link href={link.path} onClick={handleNav}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
