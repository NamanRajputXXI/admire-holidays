import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  const [isDomesticHovered, setIsDomesticHovered] = useState(false);
  const [isInternationalHovered, setIsInternationalHovered] = useState(false);

  const handleDomesticHover = () => {
    setIsDomesticHovered(true);
    setIsInternationalHovered(false);
  };

  const handleInternationalHover = () => {
    setIsDomesticHovered(false);
    setIsInternationalHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDomesticHovered(false);
    setIsInternationalHovered(false);
  };
  return (
    <>
      <div
        className="font-semibold items-center flex rounded-lg p-2 relative"
        onMouseEnter={handleDomesticHover}
        onMouseLeave={handleMouseLeave}
      >
        Domestic
        <RiArrowDropDownLine size={40} />
        {isDomesticHovered && (
          <div className="dropdown-content font-light absolute z-50  bg-white p-2 top-12 ">
            <ul className="">
              <li>
                <Link href="/himachal">Himachal</Link>
              </li>
              <li>Goa</li>
              <li>Andaman</li>
              <li>Uttarakhand</li>
              <li>Kashmir</li>
              <li>Kerala</li>
              <li>Rajasthan</li>
              <li>West Bengal</li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="font-semibold items-center flex rounded-lg p-2 relative"
        onMouseEnter={handleInternationalHover}
        onMouseLeave={handleMouseLeave}
      >
        International
        <RiArrowDropDownLine size={40} />
        {isInternationalHovered && (
          <div className="font-light bg-white p-2 dropdown-content absolute top-12 ">
            <ul>
              <li>Switzerland</li>
              <li>Mauritious</li>
              <li>Thailand</li>
              <li>Bhutan</li>
              <li>Nepal</li>
              <li>Bangladesh</li>
              <li>Dubai</li>
              <li>Singapur</li>
              <li>Malasia</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
