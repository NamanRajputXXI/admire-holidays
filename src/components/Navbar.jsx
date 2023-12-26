"use client";
import React, { useState } from "react";
import { Ri24HoursFill, RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
import Button from "./Button";
const Navbar = () => {
  const [isClick, setIsClick] = useState();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <div className="fixed z-20 bg-white  top-0 w-screen">
        <nav className="">
          <div className="max-w-8xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/" className="">
                    <Image
                      src={"/logo.jpg"}
                      width={150}
                      height={30}
                      alt="Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center space-x-4">
                <a href="" className="font-semibold rounded-lg p-2">
                  Home
                </a>
                <DropDown />
                <a href="" className="font-semibold rounded-lg p-2">
                  About
                </a>
                <a href="" className="font-semibold rounded-lg p-2">
                  Blog
                </a>
                <a href="" className="font-semibold rounded-lg p-2">
                  Contact
                </a>
                {/* <Button /> */}
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
                        // strokeLineJoin="round"
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
                        // strokeLineJoin="round"
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
                  <a href="" className=" font-semibold block rounded-lg p-2">
                    Home
                  </a>

                  <DropDown />
                  <a href="" className="font-semibold block rounded-lg p-2">
                    About
                  </a>
                  <a href="" className="font-semibold block rounded-lg p-2">
                    Blog
                  </a>
                  <a href="" className="font-semibold block rounded-lg p-2">
                    Contact
                  </a>
                  <Button display={"flex"} />
                </div>
              </div>
            )}
          </div>

          <hr />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
