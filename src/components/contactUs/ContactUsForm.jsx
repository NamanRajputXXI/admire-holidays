import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall, MdOutlineMessage, MdChat } from "react-icons/md";
const ContactUsForm = () => {
  return (
    <div className="px-4">
      <section className="max-w-7xl  border-[1px] border-gray-200 py-10 shadow-xl rounded-2xl my-20 mx-auto flex-col  flex gap-10 px-4 md:px-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-xl font-medium text-[#00BB98] my-4 italic">
            Contact us
          </p>
          <h1 className="text-center md:text-5xl  text-3xl  font-bold">
            Get in touch
          </h1>
        </div>
        <div className="flex gap-10 md:flex-row flex-col  justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center ">
              <div className="flex justify-center bg-[#c2fff4] items-center sm:p-4 p-2  rounded-xl">
                <IoLocationOutline color="#00BB98" size={50} />
              </div>
              <p className="text-base text-gray-500">
                34,Sewak park(1st floor), Dwarka more metro,Near metro <br />{" "}
                piller no-772 New Delhi-110059.
              </p>
            </div>
            <div className="flex gap-5 items-center ">
              <div className="flex justify-center bg-[#c2fff4]  sm:p-4 p-2  items-center rounded-xl">
                <MdOutlineAddIcCall color="#00BB98" size={50} />
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-base">Phone Number</p>
                <p className="text-base text-gray-500">+18001210140</p>
              </div>
            </div>
            <div className="flex gap-5 items-center ">
              <div className="flex justify-center bg-[#c2fff4] sm:p-4 p-2  items-center  rounded-xl">
                <MdOutlineMessage color="#00BB98" size={50} />
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-base">Email Us</p>
                <p className="text-base text-gray-500">
                  info@admireholidays.com
                </p>
              </div>
            </div>

            <div className="p-10 border-[1px] gap-8 flex flex-col border-gray-300 rounded-xl">
              <div className="flex gap-5 items-center ">
                <div className="flex justify-center items-center  rounded-xl">
                  <img
                    className="mx-auto h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-4 ">
                  <p className="text-base">Need help?</p>
                  <p className="text-base text-gray-500">+18001210140</p>
                </div>
              </div>
              <div className="w-[100%] mx-auto h-[1px] bg-gray-300"></div>
              <button className="border-red-500 flex gap-2 mx-auto items-center justify-center rounded-lg text-red-500 border-[1px] w-[100%] h-14">
                <MdChat /> Chat with us
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start">
            <h1 className="text-xl font-medium text-center">Leave a reply</h1>
            <form action="" className=" flex flex-col gap-5  ">
              <div className="flex gap-5 justify-between">
                <input
                  type="text"
                  placeholder="Name *"
                  className="border-[1px] w-[50%] border-gray-300 rounded-lg py-3 px-4"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="border-[1px] w-[50%] border-gray-300 rounded-lg py-3 px-4"
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                className="border-[1px]  border-gray-300 rounded-lg py-3 px-4"
              />
              <textarea
                placeholder="Textarea *"
                cols="30"
                rows="10"
                className="border-[1px]  border-gray-300 rounded-lg py-3 px-4"
              ></textarea>
              <button className=" text-white bg-red-500 rounded-lg w-64 md:p-10 p-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsForm;
