import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  const [isDomesticHovered, setIsDomesticHovered] = useState(false);
  const [isInternationalHovered, setIsInternationalHovered] = useState(false);
  const [travelData, setTravelData] = useState(null);
  const [internationalData, setInternationalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTravelData = async (url, storageKey, setData) => {
    try {
      const cachedData = sessionStorage.getItem(storageKey);
      if (cachedData) {
        setData(JSON.parse(cachedData));
      } else {
        const response = await fetch(url);
        const data = await response.json();
        sessionStorage.setItem(storageKey, JSON.stringify(data));
        setData(data);
      }
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTravelData(
      "https://server-deploy-gamma.vercel.app/allStatesData",
      "travelData",
      setTravelData
    );
    fetchTravelData(
      "https://server-deploy-gamma.vercel.app/internationalData",
      "internationalData",
      setInternationalData
    );
  }, []);

  const renderDropdown = (data) => {
    if (loading) {
      return <p></p>;
    }
    if (error) {
      return <p>{error}</p>;
    }

    if (!data) {
      return null; // Return null if data is not available yet
    }
    return (
      <div className="dropdown-content left-0  font-light text-base absolute z-50  bg-white p-8 top-12 ">
        <ul className="flex flex-col gap-4">
          {Object.entries(data).map(([category, destinations]) => (
            <li key={category}>
              <Link href={`/products/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </li>
          ))}
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
        className="font-medium cursor-pointer items-center md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleDomesticHover}
        onMouseLeave={handleMouseLeave}
      >
        Domestic
        <RiArrowDropDownLine size={30} />
        {isDomesticHovered && renderDropdown(travelData)}
      </div>
      <div
        className="font-medium cursor-pointer items-center md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleInternationalHover}
        onMouseLeave={handleMouseLeave}
      >
        International
        <RiArrowDropDownLine size={30} />
        {isInternationalHovered && renderDropdown(internationalData)}
      </div>
    </>
  );
};

export default DropDown;
