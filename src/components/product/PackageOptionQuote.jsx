import Link from "next/link";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const PackageOptionQuote = ({ openRequestQuotePopup, closeQuotepopup }) => {
  const [result, setResult] = React.useState("Submit");

  const submitForm = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    if (formData.name && formData.phone && formData.email) {
      setFormValid(true);
    }

    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div
      className={`fixed z-[9999] top-0 left-0 px-4 h-full w-full items-center justify-center bg-gray-700 bg-opacity-90 ${
        openRequestQuotePopup === true ? "flex" : "hidden"
      } `}
    >
      <div className=" text-white cursor-pointer  text-7xl absolute right-4 top-4">
        <RxCross1 color="white" size={30} onClick={closeQuotepopup} />
      </div>
      <div className="bg-white sm:p-8 p-4 rounded-xl gap-8 flex flex-col items-center justify-center">
        <form onSubmit={submitForm} className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className=" font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" Your Name"
              className="mt-2 py-2  px-5 w-full border rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className=" font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Number"
              className="mt-2 py-2  px-5 w-full border rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className=" font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter Email"
              className="mt-2 py-2  px-5 w-full border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <Link
            href={"/payment"}
            className="py-4 bg-[#FD4A4C] mt-5 w-full px-5  text-sm text-white rounded-lg  flex justify-center items-center"
          >
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PackageOptionQuote;
