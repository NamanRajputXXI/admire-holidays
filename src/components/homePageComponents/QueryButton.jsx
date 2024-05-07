import Link from "next/link";
import React from "react";

const Query = () => {
  return (
    <div className="fixed z-10 right-2 bottom-20">
      <button className="rounded-2xl border-2 sm:border-2  border-red-500 bg-white px-3 sm:px-6 py-1 sm:py-3 font-semibold uppercase text-red-500 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#ef4444] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        <Link href={"/query"}> Any Query ?</Link>
      </button>
    </div>
  );
};

export default Query;
