// import React from "react";

// const QueryForm = () => {
//   return (
//     <div>
//       <section className="text-gray-700 mt-20 body-font relative">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-12">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
//               Get Response
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//               We're all ears! Share your query with us in a brief message box.
//             </p>
//           </div>
//           <div className="lg:w-1/2 md:w-2/3 mx-auto">
//             <div className="flex flex-wrap -m-2">
//               <div className="p-2 w-1/2">
//                 <div className="relative">
//                   <label
//                     htmlFor="name"
//                     className="leading-7 text-sm text-gray-600"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-1/2">
//                 <div className="relative">
//                   <label
//                     htmlFor="email"
//                     className="leading-7 text-sm text-gray-600"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full">
//                 <div className="relative">
//                   <label
//                     htmlFor="message"
//                     className="leading-7 text-sm text-gray-600"
//                   >
//                     Enter Your Query
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     className="w-full bg-gray-100 rounded border border-red-500 focus:border-red-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="p-2 w-full">
//                 <button className="flex  text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default QueryForm;
"use client";
import React from "react";

const QueryForm = () => {
  const handleContactLinkClick = () => {
    window.location.href = "mailto:info@gmail.com";
  };

  return (
    <div>
      <section className="text-gray-700 mt-20 body-font relative">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Get Response
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We are all ears! Share your query with us in a brief in message
              box.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Enter Your Query
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-red-500 focus:border-red-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex  text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full ">
                <a
                  href="mailto:info@gmail.com"
                  className=" underline cursor-pointer"
                  onClick={handleContactLinkClick}
                >
                  Not getting a response? Contact us via email.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueryForm;
