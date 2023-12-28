import React from "react";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaYoutube,
  FaLocationDot,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="grid   md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:gap-0 gap-16 lg:grid-cols-4 mt-36 mb-20 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5  sm:items-start items-center  justify-center">
          <Image src={"/logo.jpg"} width={300} height={100} alt="Logo" />
          <p className="text-wrap">
            Admire Holidays helps you explore the world with seamless travel.
            We’ve been in business for 7 years. Contact us for a stress-free
            vacation.
          </p>
        </div>
        <div className="flex flex-col gap-5    items-center  ">
          <h5 className="font-semibold sm:ml-[-80px] ml-0 ">About</h5>
          <ul className="font-light sm:items-start items-center flex   flex-col gap-4">
            <li>Customer Support</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Contact Channels</li>
            <li>Privacy Policy </li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="flex flex-col    gap-5 items-center ">
          <h5 className="font-semibold">Trending</h5>
          <ul className=" font-light sm:items-start items-center flex flex-col gap-4">
            <li>Dubai</li>
            <li>London</li>
            <li>Sydney</li>
            <li>Malidives</li>
            <li>Instanbul </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5  sm:items-start items-center  ">
          <h5 className="font-semibold">Contact us</h5>
          <ul className="font-light flex sm:items-start  flex-col gap-4">
            <li className="flex   gap-4">
              <IoCallOutline color="red" size={30} /> +18001210140
            </li>
            <li className="flex  gap-4">
              <MdOutlineMessage color="red" size={30} />
              info@admireholidays.com
            </li>
            <li className="flex   gap-4">
              <FaLocationDot size={50} color="red" /> 34,Sewak park(1st floor),
              Dwarka more metro,Near metro piller no-772 New Delhi-110059.
            </li>

            <li className="flex items-center mt-10  gap-4">
              <FaFacebook color="	#1877F2" size={40} />
              <FaSquareXTwitter size={40} color="#14171A" />
              <FaLinkedin size={40} color=" #0077b5 " />
              <FaSquareInstagram size={40} color="#4c68d7" />
              <FaYoutube size={40} color="#FF0000" />
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-center py-10">
        © 2023 Admire Holidays, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
