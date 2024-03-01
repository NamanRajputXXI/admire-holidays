import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  const [isDomesticHovered, setIsDomesticHovered] = useState(false);
  const [isInternationalHovered, setIsInternationalHovered] = useState(false);
  const [travelData, setTravelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-deploy-gamma.vercel.app/allStatesData"
        );
        const data = await response.json();
        setTravelData(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const renderList = () => {
    if (loading) {
      return <p></p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div className="dropdown-content left-0  font-light text-base absolute z-50  bg-white p-8 top-12 ">
        <ul className="flex flex-col gap-4">
          {Object.entries(travelData).map(([category, destinations]) => {
            return (
              <li key={category}>
                <Link href={`/products/${category}`}>{category}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

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
        className="font-medium cursor-pointer  items-center md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleDomesticHover}
        onMouseLeave={handleMouseLeave}
      >
        Domestic
        <RiArrowDropDownLine size={30} />
        {isDomesticHovered && <div>{renderList()}</div>}
      </div>
      <div
        className="font-medium  cursor-pointer items-center  md:text-lg flex rounded-lg p-2 relative"
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
