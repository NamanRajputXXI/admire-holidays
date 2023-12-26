"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropDown from "./DropDown";
import Button from "./Button";
import Link from "next/link";
const Navbar = () => {
  const [isClick, setIsClick] = useState();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="fixed z-20  bg-white  top-0 w-screen">
        <div className=" py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="">
                  <Image src={"/logo.jpg"} width={150} height={30} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center space-x-4">
              <Link href="" className="font-semibold rounded-lg p-2">
                Home
              </Link>
              <DropDown />
              <Link href="/about" className="font-semibold rounded-lg p-2">
                About
              </Link>
              <Link href="/blog" className="font-semibold rounded-lg p-2">
                Blog
              </Link>
              <Link href="/contact" className="font-semibold rounded-lg p-2">
                Contact
              </Link>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M4 6H16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            <Button display={"lg:flex hidden"} />
          </div>

          {isClick && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/" className=" font-semibold block rounded-lg p-2">
                  Home
                </Link>

                <DropDown />
                <Link
                  href="/about"
                  className="font-semibold block rounded-lg p-2"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="font-semibold block rounded-lg p-2"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="font-semibold block rounded-lg p-2"
                >
                  Contact
                </Link>
                <Button display={"flex"} />
              </div>
            </div>
          )}
        </div>

        <hr />
      </nav>
    </>
  );
};

export default Navbar;
