"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FollowerPointerCard } from "./FollowerPointerCard";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const images = [
    "/Images/border1.png",
    "/Images/border2.png",
    "/Images/border3.png",
    "/Images/border4.png",
    "/Images/border5.png",
    "/Images/border6.png",
    "/Images/border7.png",
    "/Images/border8.png",
    "/Images/border9.png",
    "/Images/border10.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <nav className="bg-[#0A0708] border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-lg md:text-xl font-semibold whitespace-nowrap text-white">
            The <span className="ml-2">Pluriversity</span> <span className="text-xl md:text-2xl ml-2">لاھور</span>
          </span>
          <Image src="/Images/logo-f.png" height={50} width={50} alt="Pluriversity Logo" />
        </a>
        <button
          onClick={() => setHidden(!hidden)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-[#89BE63] hover:text-[white] rounded-lg md:hidden hover:bg-[#89BE63] focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-[#0A0708] md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#0A0708]">
            <li>
              <Link
                href="/"
                className={`block py-1.5 px-2.5 text-white rounded md:p-0 ${
                  isActive("/") ? "bg-[#89BE63] md:bg-transparent md:text-[#89BE63]" : "hover:bg-gray-900 md:hover:bg-transparent md:hover:text-[#89BE63]"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className={`block py-1.5 px-2.5 text-white rounded md:p-0 ${
                  isActive("/aboutus") ? "bg-[#89BE63] md:bg-transparent md:text-[#89BE63]" : "hover:bg-gray-900 md:hover:bg-transparent md:hover:text-[#89BE63]"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                className={`block py-1.5 px-2.5 text-white rounded md:p-0 ${
                  isActive("/teams") ? "bg-[#89BE63] md:bg-transparent md:text-[#89BE63]" : "hover:bg-gray-900 md:hover:bg-transparent md:hover:text-[#89BE63]"
                }`}
              >
                Core Teams
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className={`block py-1.5 px-2.5 text-white rounded md:p-0 ${
                  isActive("/partners") ? "bg-[#89BE63] md:bg-transparent md:text-[#89BE63]" : "hover:bg-gray-900 md:hover:bg-transparent md:hover:text-[#89BE63]"
                }`}
              >
                Partners & Advisors
              </Link>
            </li>
            <li>
              <Link
                href="/becomeinvolved"
                className={`block py-1.5 px-2.5 text-white rounded md:p-0 ${
                  isActive("/becomeinvolved") ? "bg-[#89BE63] md:bg-transparent md:text-[#89BE63]" : "hover:bg-gray-900 md:hover:bg-transparent md:hover:text-[#89BE63]"
                }`}
              >
                Become Involved
              </Link>
            </li>
            <li>
              <Link
                href="/channel"
                className={`block py-1.5 px-2.5 text-white rounded md:p-0 ${
                  isActive("/channel") ? "bg-[#89BE63] md:bg-transparent md:text-[#89BE63]" : "hover:bg-gray-900 md:hover:bg-transparent md:hover:text-[#89BE63]"
                }`}
              >
                Channel
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <FollowerPointerCard title="Celebrating Tile Craft in Pakistan, a traditional art form with deep historical roots, especially in Sindh and Punjab known for its intricate geometric patterns and vibrant colors.">
        <div className="bg-white w-full h-8 overflow-hidden relative">
          <Image 
            src={images[currentImageIndex]} 
            alt="event" 
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 block" 
          />
        </div>
      </FollowerPointerCard>

      <div className="bg-[#89BE63] w-full h-0.5 mt-1"></div>

    </nav>
  );
};
