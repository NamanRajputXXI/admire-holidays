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
        className="font-medium  items-center md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleDomesticHover}
        onMouseLeave={handleMouseLeave}
      >
        Domestic
        <RiArrowDropDownLine size={30} />
        {isDomesticHovered && (
          <div className="dropdown-content font-light text-base absolute z-50  bg-white p-8 top-12 ">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/product-category/india/himachal-pradesh">
                  Himachal
                </Link>
              </li>

              <li>
                <Link href="/product-category/india/goa">Goa</Link>
              </li>
              <li>
                <Link href="/product-category/india/andaman">Andaman</Link>
              </li>
              <li>
                <Link href="/product-category/india/uttarakhand">
                  Uttarakhand
                </Link>
              </li>
              <li>
                <Link href="/product-category/india/kashmir">Kashmir</Link>
              </li>
              <li>
                <Link href="/product-category/india/rajasthan">Rajasthan</Link>
              </li>
              <li>
                <Link href="/product-category/india/west-bengal">
                  West Bengal
                </Link>
              </li>
              <li>
                <Link href="/product-category/india/kerala">Kerala</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="font-medium  items-center  md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleInternationalHover}
        onMouseLeave={handleMouseLeave}
      >
        International
        <RiArrowDropDownLine size={30} />
        {isInternationalHovered && (
          <div className="font-light bg-white text-base p-8 dropdown-content absolute top-12 ">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/product-category/international/switzerland">
                  Switzerland
                </Link>
              </li>
              <li>
                <Link href="/product-category/international/mauritious">
                  Mauritious
                </Link>
              </li>
              <li>
                <Link href="/product-category/international/thailand">
                  Thailand
                </Link>
              </li>
              <li>
                <Link href="/product-category/international/bhutan">
                  Bhutan
                </Link>
              </li>
              <li>
                <Link href="/product-category/international/nepal">Nepal</Link>
              </li>
              <li>
                <Link href="/product-category/international/bangladesh">
                  Bangladesh
                </Link>
              </li>
              <li>
                <Link href="/product-category/international/dubai">Dubai</Link>
              </li>
              <li>
                <Link href="/product-category/international/singapore">
                  Singapore
                </Link>
              </li>
              <li>
                <Link href="/product-category/international/malasia">
                  Malasia
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
