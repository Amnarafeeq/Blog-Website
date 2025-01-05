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
        src="/Images/contact1.jpg"
        alt="About"
        width={1200}
        height={900}
        className="w-full  object-cover"
      />
      <h3 className="absolute text-3xl md:text-6xl font-bold top-0 w-full h-full bg-[#601c1a] bg-opacity-80 flex items-center r text-white pl-12">
        Contact Me
      </h3>
    </div>
  );
};

export default Hero;
