import React, { useState, useEffect } from "react";

const EnquiryForm = ({
  homePickupAdultPrice,
  homePickupBabyPrice,
  homePickupChildPrice,
  openModalFunc,
}) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Get current date
    const currentDate = new Date();
    const currentDateString = formatDate(currentDate);

    // Generate Choose Time options dynamically
    const generatedOptions = [];
    for (let i = 0; i < 3; i++) {
      const startDate = new Date(currentDate);
      const endDate = new Date(currentDate);
      endDate.setDate(endDate.getDate() + 6); // Assuming 7 days duration

      const optionString = `From ${formatDate(startDate)} - ${formatDate(
        endDate
      )}`;
      generatedOptions.push({
        value: `option${i + 1}`,
        label: optionString,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      });

      currentDate.setDate(currentDate.getDate() + 7); // Move to next week
    }

    setOptions(generatedOptions);
    setSelectedTime(generatedOptions[0].value);

    // Set default Check-in and Check-out dates
    setCheckinDate(generatedOptions[0].startDate);
    setCheckoutDate(generatedOptions[0].endDate);
  }, []);

  const handleTimeChange = (event) => {
    const selectedOption = options.find(
      (opt) => opt.value === event.target.value
    );

    setSelectedTime(event.target.value);
    setCheckinDate(selectedOption.startDate);
    setCheckoutDate(selectedOption.endDate);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <div className="mt-8 w-full ">
      <form action="" className="w-full">
        <div className="mb-4">
          <label htmlFor="name" className=" font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            placeholder=" Your Name"
            className="mt-2 py-2  px-5 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className=" font-medium text-gray-700">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone"
            className="mt-2 py-2  px-5 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className=" font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="mt-2 py-2  px-5 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className=" font-medium text-gray-700">
            Destination *
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Enter Destination"
            className="mt-2 py-2  px-5 w-full border rounded-md"
            required
          />
        </div>

        <button className="py-4 border-[#FD4A4C] border-2 mt-5 w-full px-5  text-base  rounded-lg text-[#FD4A4C] flex justify-center items-center">
          Request a Quote
        </button>
      </form>
      <p className="text-center text-lg my-5 text-gray-600">or</p>
      <button className="py-4  bg-[#3a2f5b]  mb-5 w-full px-5  text-sm text-white rounded-lg  flex justify-center items-center">
        Add to Cart
      </button>

      <p
        className="tex-sm text-red-600 mt-5  cursor-pointer hover:text-[#3a2f5b] text-center"
        onClick={openModalFunc}
      >
        Download as pdf
      </p>
    </div>
  );
};

export default EnquiryForm;
