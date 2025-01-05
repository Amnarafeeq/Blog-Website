import React from "react";
import Image from "next/image";
const MyStory = () => {
  return (
    <>
      <div className="w-full lg:h-[70vh]  flex max-lg:flex-col justify-evenly items-center max-lg:px-5 gap-y-5 my-5">
        <div className="w-full lg:w-[45%] h-[70%]  space-y-6 lg:space-y-12 ">
          <h6 className="sm:text-xl ">My Story</h6>
          <h3 className="text-3xl md:text-5xl font-bold">
            From Fashion Faux Pas to Fabulous
          </h3>
        </div>
        <div className="lg:w-[45%] h-[70%]  space-y-6 lg:space-y-12 max-sm:text-sm">
          <p>
            Fashion is a journey where every misstep can lead to bold
            discoveries. What seems like a faux pas might spark the creation of
            a unique, trendsetting look. By embracing mistakes, you redefine
            boundaries and explore your personal style. Every choice, even
            daring ones, contributes to your fabulous transformation.
          </p>
          <p>
            Moving from faux pas to fabulous is about confidence and creativity.
            It’s not just about trends but showcasing your individuality through
            bold choices. Fashion celebrates diversity and the courage to stand
            out. Some of the most iconic styles began as risks that redefined
            the norms.
          </p>
        </div>
      </div>
      <Image
        src="/Images/about3.jpg"
        alt="hero"
        width={1200}
        height={800}
        className="p-8 mx-auto"
      />
    </>
  );
};

export default MyStory;
