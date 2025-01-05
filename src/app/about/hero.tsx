import React from "react";
import Header from "../components/header";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative ">
      <div className="absolute z-10 w-full">
        <Header />
      </div>
      <Image
        src="/Images/about1.jpg"
        alt="About"
        width={500}
        height={600}
        className="w-full  object-cover"
      />
      <h3 className="absolute text-2xl sm:text-6xl font-bold top-0 w-full h-full bg-[#601c1a] bg-opacity-70 flex items-center r text-white pl-6">
        About Me
      </h3>
    </div>
  );
};

export default Hero;
