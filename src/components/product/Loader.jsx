import { Spinner } from "@material-tailwind/react";
import React from "react";

const Loader = () => {
  return (
    <div className="sm:text-7xl text-5xl font-bold flex items-center justify-center h-screen">
      <Spinner className="h-64 animate-spin text-gray-500  w-64" />
    </div>
  );
};

export default Loader;
