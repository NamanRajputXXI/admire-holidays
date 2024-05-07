"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropDown from "./DropDown";
import Button from "./Button";
import Link from "next/link";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="fixed z-[100]  px-1 top-0 w-screen ">
        <div className="py-4 max-w-7xl mx-auto  backdrop-blur-lg mt-1 rounded-xl bg-black/30 px-4">
          <div className="flex text-white items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="">
                  <Image src={"/logo.jpg"} width={140} height={50} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center space-x-4">
              <Link href="/" className="font-medium md:text-lg rounded-lg p-2">
                Home
              </Link>
              <DropDown />
              <Link
                href="/about"
                className="font-medium md:text-lg rounded-lg p-2"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="font-medium md:text-lg rounded-lg p-2"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-medium md:text-lg rounded-lg p-2"
              >
                Contact
              </Link>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toggleNavbar}
              >
                {/* {isClick ? (
                  <AnimatedHamburgerButton isClick={isClick} />
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )} */}
                <AnimatedHamburgerButton isClick={isClick} />
              </button>
            </div>
            <Button display={"lg:flex hidden"} />
          </div>

          {isClick && (
            <div className="lg:hidden text-white">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="md:text-lg font-medium block rounded-lg p-2"
                >
                  Home
                </Link>

                <DropDown />
                <Link
                  href="/about"
                  className="font-medium md:text-lg block rounded-lg p-2"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="font-medium md:text-lg block rounded-lg p-2"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="font-medium md:text-lg block rounded-lg p-2"
                >
                  Contact
                </Link>
                <Button display={"flex"} />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
