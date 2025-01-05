import Image from "next/image";
import React from "react";
import Button from "./button";

const Subscribe = () => {
  return (
    <>
      <div className="w-full lg:h-screen bg-[#4b0005] flex max-lg:flex-col-reverse justify-evenly items-center max-lg:mt-5 max-lg:p-5">
        <div className="lg:w-[45%] lg:h-[60%] flex flex-col  gap-y-6 ">
          <h5 className="text-3xl sm:text-[45px] text-white leading-normal font-bold">
            Don't Miss Out on the Latest Fashion Trends!
          </h5>
          <p className="text-white max-sm:text-sm">
            Stay ahead and elevate your style with the hottest fashion trends.
            Don’t miss the chance to redefine your wardrobe with elegance and
            flair!
          </p>
          <div className="flex flex-col gap-y-8">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="focus:outline-none p-3 bg-gray-100"
            />
            <div>
              <Button btnText="Subscribe" />
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] lg:h-[60%] ">
          <Image
            src="/Images/subs.jpg"
            alt=""
            width={500}
            height={500}
            className="lg:w-full "
          />
        </div>
      </div>
      <Image
        src="/Images/subs2.jpg"
        alt=""
        width={500}
        height={500}
        className="w-full h-auto"
      />
    </>
  );
};

export default Subscribe;
