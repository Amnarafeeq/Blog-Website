import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { FaBookOpen, FaHatCowboy, FaRegNewspaper } from "react-icons/fa";

const FeaturedOn = () => {
  return (
    <div className="w-full bg-[#ff4d6d] py-5 space-y-8 text-white">
      <h4 className="text-center text-3xl font-bold">Featured On</h4>
      <div className=" flex justify-evenly max-[340px]:flex-col flex-wrap gap-x-5 gap-y-5 text-xl ">
        <span className="flex flex-col items-center">
          <FaBookOpen className="text-7xl" /> Vogue{" "}
        </span>
        <span className="flex flex-col items-center">
          <FaRegNewspaper className="text-7xl" /> Elle{" "}
        </span>
        <span className="flex flex-col items-center">
          <BiBookAlt className="text-7xl" /> Harper’s Bazaar{" "}
        </span>
        <span className="flex flex-col items-center">
          <AiOutlineStar className="text-7xl" /> Cosmopolitan{" "}
        </span>
        <span className="flex flex-col items-center">
          <FaHatCowboy className="text-7xl" /> InStyle{" "}
        </span>
      </div>
    </div>
  );
};

export default FeaturedOn;
