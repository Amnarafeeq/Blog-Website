import React from "react";
import Button from "../components/button";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="w-full lg:h-[120vh]  flex max-lg:flex-col max-lg:gap-y-5 justify-evenly lg:items-center  p-5">
      <div className="lg:w-[50%] lg:h-[85%]  flex flex-col justify-between  max-lg:space-y-5">
        <h4 className="text-3xl md:text-5xl font-bold">Let’s Get In Touch</h4>
        <p>
          Feel free to reach out—let's connect and make something great
          together!
        </p>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold text-lg my-2">
            Name
          </label>
          <input
            type="text"
            className="p-3 border border-black focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold text-lg my-2">
            Email
          </label>
          <input
            type="text"
            className="p-3 border border-black focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold text-lg my-2">
            Message
          </label>
          <textarea
            rows={6}
            className="p-3 border border-black focus:outline-none"
          ></textarea>
        </div>
        <Button btnText="Submit" />
      </div>
      <div className="lg:w-[45%] lg:h-[85%] bg-slate-300 ">
        <Image
          width={500}
          height={400}
          src="/images/contact2.jpg"
          alt="contact"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
