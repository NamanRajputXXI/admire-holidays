"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isClick, setIsClick] = useState();
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav>
        <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="">
                  <img src="../assets/logo.jpg" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4"></div>
              <a href="" className=" rounded-lg p-2">
                Home
              </a>
              <a href="" className=" rounded-lg p-2">
                About
              </a>
              <a href="" className=" rounded-lg p-2">
                Blog
              </a>

              <a href="" className="rounded-lg p-2">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
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
                    strokeLineJoin="round"
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
                    strokeLineJoin="round"
                    strokeWidth={2}
                    d="M4 6H16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="" className=" block rounded-lg p-2">
                Home
              </a>
              <a href="" className="block rounded-lg p-2">
                About
              </a>
              <a href="" className=" block rounded-lg p-2">
                Blog
              </a>
              <a href="" className=" block rounded-lg p-2">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
