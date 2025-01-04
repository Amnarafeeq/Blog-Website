import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./button";

const Intro = () => {
  return (
    <div className="w-full h-auto  flex max-lg:flex-col justify-evenly">
      <div className="lg:w-[50%]  h-full flex  justify-between items-center max-lg:mx-auto max-lg:gap-x-5 px-2">
        <Image
          src="/Images/intro1.jpg"
          alt=""
          width={280}
          height={400}
          className=""
        />
        <Image
          src="/Images/intro2.jpg"
          alt=""
          width={280}
          height={300}
          className="mt-20"
        />
      </div>
      <div className="lg:w-[40%]   flex flex-col justify-evenly  max-lg:gap-y-7 max-lg:mt-5 max-lg:px-5 lg:h-screen">
        <h3 className="text-3xl lg:text-5xl leading-relaxed font-bold">
          I’m Emily Carter, a Fashion Expert and a Professional Writer
        </h3>
        <p className="leading-normal">
          A passionate stylist and writer blending trends with timeless fashion
          to inspire wardrobes worldwide. With a love for storytelling and
          style, I create captivating narratives that empower and elevate. Let’s
          make fashion an extension of your personality, one trend at a time.
        </p>
        <Link href="/about">
          <Button btnText="Learn More" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
