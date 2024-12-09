"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Menu icon
import { RxCross1 } from "react-icons/rx"; // Close icon
import { MdOutlineShoppingCart } from "react-icons/md"; // Shopping cart icon
import { IoIosSearch } from "react-icons/io"; // Search icon

const navLinks = [
  { title: "Plant pots", link: "/", id: "1" },
  { title: "Ceramics", link: "/ceramics", id: "2" },
  { title: "Tables", link: "/tables", id: "3" },
  { title: "Chairs", link: "/chairs", id: "4" },
  { title: "Crockery", link: "/crockery", id: "5" },
  { title: "Tableware", link: "/tableware", id: "6" },
  { title: "Cutlery", link: "/cutlery", id: "7" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-30 w-full bg-white py-2 backdrop-blur-3xl print:hidden">
        {/* Header Container */}
        <div className="relative flex items-center justify-between px-6">
          {/* Left: Search Icon */}
          <IoIosSearch className="w-6 h-6 cursor-pointer text-black" />

          {/* Center: Avion */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-shadow text-[24px] font-extrabold text-black">
            Avion
          </h1>

          {/* Right: Shopping Cart Icon */}
          <MdOutlineShoppingCart className="w-6 h-6 cursor-pointer text-black" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden mt-2 pt-2 items-center justify-center border-t border-zinc-400 gap-5 text-black sm:flex lg:gap-10">
          {navLinks.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="capitalize">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed left-0 top-0 z-40 h-full w-full bg-black bg-opacity-70 print:hidden">
          <div className="absolute right-5 top-5">
            <RxCross1
              className="text-white cursor-pointer"
              size={25}
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white">
            {navLinks.map((item) => (
              <Link
                href={item.link}
                onClick={() => setOpen(false)}
                key={item.id}
              >
                <div className="border-b border-[#1468a5] py-5 capitalize">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
