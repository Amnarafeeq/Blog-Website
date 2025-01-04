import Image from "next/image";
import React from "react";
import Header from "./header";

const HeroSec = () => {
  return (
    <div className="w-full h-screen relative ">
      <div className="absolute z-10 w-full">
        <Header />
      </div>
      <Image
        src="/Images/hero.jpg"
        alt="banner"
        className="w-auto relative h-screen object-cover"
        width={1900}
        height={100}
      />
      <div className="absolute  top-0 w-auto h-full bg-[#601c1a] bg-opacity-50 flex flex-col items-center justify-center px-10 md:px-56 text-center text-white gap-y-3">
        <h1 className="text-4xl lg:text-6xl leading-normal">
          Unveiling All the Latest Fashion Trends
        </h1>
        <p className="text-sm md:text-base leading-relaxed sm:px-10">
          Welcome to our fashion haven! Discover the latest trends, timeless
          style tips, and everything you need to inspire your wardrobe. From
          runway highlights to everyday elegance, explore a world where fashion
          meets passion.
        </p>
      </div>
      <div className="w-full flex justify-evenly items-end absolute top-[32rem] sm:top-[28rem] md:h-[400px] bg-red- max-sm:gap-x-4 max-sm:p-0 max-md:p-2">
        <Image
          src="/Images/hero1.jpg"
          alt="banner"
          width={300}
          height={300}
          className="sm:h-[380px] max-[340px]:w-[150px]"
        />
        <Image
          src="/Images/hero2.jpg"
          alt="banner"
          width={300}
          height={400}
          className="sm:h-full max-[340px]:w-[150px] "
        />
        <Image
          src="/Images/hero3.jpg"
          alt="banner"
          width={300}
          height={300}
          className="sm:h-[380px] max-lg:hidden "
        />
      </div>
    </div>
  );
};

export default HeroSec;
