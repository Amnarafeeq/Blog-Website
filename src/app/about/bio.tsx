import Image from "next/image";
import React from "react";

const Biography = () => {
  return (
    <div className="w-full h-auto lg:max-h-screen px-6 lg:px-12 my-10 sm:my-20 flex max-md:flex-col justify-between items-center max-md:gap-y-4">
      <div className="md:w-1/2 h-full ">
        <Image
          src="/Images/about2.jpg"
          alt=""
          width={600}
          height={400}
          className="h-full object-cover"
        />
      </div>
      <div className="md:w-[45%] md:h-[80%]  space-y-5 ">
        <h3 className="text-xl font-semibold">Biography</h3>
        <h2 className="text-3xl sm:text-5xl font-bold ">
          A Fashion Expert Born & Raised in Italy
        </h2>
        <p className="text-sm sm:text-base">
          Born and raised in the heart of Italy, I was immersed in a culture
          where fashion is more than an industry—it’s a way of life. Growing up
          in cities like Milan and Florence, I witnessed firsthand the artistry
          and craftsmanship that make Italian fashion iconic. This upbringing
          instilled in me a deep appreciation for timeless elegance, bold
          creativity, and the power of self-expression through style.
        </p>
        <p>
          As a fashion expert, I combine Italy’s rich heritage with contemporary
          trends to create looks that are both classic and fresh. My approach
          goes beyond fabrics and patterns; it’s about helping others embrace
          fashion as a tool for confidence and individuality. Whether curating
          designs or sharing insights, my goal is to bring the charm of Italian
          fashion to inspire wardrobes worldwide.
        </p>
      </div>
    </div>
  );
};

export default Biography;
