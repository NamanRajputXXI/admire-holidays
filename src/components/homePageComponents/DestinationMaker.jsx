import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";

const DestinationMaker = () => {
  const [result, setResult] = useState(" Enquire");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");

  const requestQuote = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");
    formData.append("destination", destination);
    formData.append("dates", dates);
    formData.append("guests", guests);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Submitted ");
      event.target.reset();
      setDestination("");
      setDates("");
      setGuests("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form action=" " onSubmit={requestQuote}>
      <div className="p-4 bg-white md:gap-6 gap-10 w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1 rounded-2xl grid lg:grid-cols-4 items-center justify-center">
        <div className="flex-col items-center justify-center w-full px-2 flex gap-4">
          <div className="flex items-center gap-4">
            <CiLocationOn color="#FD4A4C" size={30} />
            <label className="text-sm" htmlFor="destination">
              Destination
            </label>
          </div>
          <input
            type="text"
            id="destination"
            placeholder="Where you going"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="text-gray-500 text-sm w-full border-b border-gray-300 focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="flex-col items-center justify-center flex gap-5">
          <div className="flex items-center gap-4">
            <CgCalendarDates color="#FD4A4C" size={30} />
            <label className="text-sm" htmlFor="dates">
              Dates
            </label>
          </div>
          <input
            type="text"
            id="dates"
            placeholder="DD-MM-YY"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="text-gray-500 text-sm w-full border-b border-gray-300 focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="flex-col items-center justify-center flex gap-5">
          <div className="flex items-center gap-4">
            <IoMdPerson color="#FD4A4C" size={30} />
            <label className="text-sm" htmlFor="guests">
              Guests
            </label>
          </div>
          <input
            type="text"
            id="guests"
            placeholder="2 Persons"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="text-gray-500 text-sm w-full border-b border-gray-300 focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="flex-col items-center justify-center flex gap-5">
          <button
            type="submit"
            className="w-20 flex items-center text-sm rounded-lg justify-center p-4 h-16 bg-red-500 text-white"
          >
            {result}
          </button>
        </div>
      </div>
    </form>
  );
};

export default DestinationMaker;
