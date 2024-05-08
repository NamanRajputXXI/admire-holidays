"use client";
import React, { useState } from "react";

const QueryForm = () => {
  const [isQuery, setIsQuery] = useState(true);

  const handleToggle = () => {
    setIsQuery(!isQuery);
    // hello
  };

  return (
    <div className="flex md:flex-row flex-col items-center justify-center h-fit mt-32 max-w-7xl px-3 mx-auto overflow-hidden">
      <div className="md:w-1/2 w-full h-fit">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlcnZpY2VzfGVufDB8fDB8fHww"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="md:w-1/2 w-full">
        <div className="flex">
          <div
            className={`w-1/2 py-4 text-center font-bold cursor-pointer ${
              isQuery ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={handleToggle}
          >
            Suggestions or Complaints
          </div>
          <div
            className={`w-1/2 py-4 text-center font-bold cursor-pointer ${
              isQuery ? "bg-gray-200 text-gray-700" : "bg-red-500 text-white"
            }`}
            onClick={handleToggle}
          >
            Not getting response
          </div>
        </div>
        <div className="p-6">
          {isQuery ? (
            <form>
              <div className="mb-2">
                <label htmlFor="name" className="block text-gray-700  mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="block text-gray-700  mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows="1"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-gray-700  mb-4">
                If you are not getting any response, please mail us at
              </p>
              <a
                href="mailto:info@gmail.com"
                className="bg-red-500 text-white  py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Send Mail
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
