"use client";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/our-story", label: "Our Story" },
    { path: "/our-operations", label: "Our Operations" },
    { path: "/tracking", label: "Track Shipment" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#040e26] shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="" />
          
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleNav}
          className="md:hidden z-20 bg-[#fc5e28] w-12 h-12 flex items-center justify-center transition-colors duration-300 hover:bg-[#040e26]"
        >
          {nav ? (
            <X className="text-white" size={25} />
          ) : (
            <Menu className="text-white" size={25} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`${
            nav
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } transition-all duration-300 fixed inset-0 bg-black/95 md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={handleNav}
                className="text-white text-2xl font-bold py-4 hover:text-[#fc5e28] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;