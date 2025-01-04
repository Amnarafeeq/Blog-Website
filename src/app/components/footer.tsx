import Image from "next/image";
import React from "react";
import Button from "./button";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#4b0005] text-white mt-9 ">
      <div className="relative h-[75vh]">
        <Image
          src="/Images/footer.jpg"
          alt=""
          width={1500}
          height={200}
          className="h-full object-cover"
        />
        <div className="absolute  top-0 w-full h-full bg-[#601c1a] bg-opacity-70 flex flex-col items-center justify-center px-10 md:px-56 text-center text-white gap-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-normal">
            Let’s Collaborate
          </h1>
          <p className="sm:text-xl leading-relaxed sm:px-10">
            Join hands to create innovative solutions and bring ideas to life.
            Together, we can achieve excellence and make a meaningful impact.
          </p>
          <Link href="/contact">
            <Button btnText="Contact Me" />
          </Link>
        </div>
      </div>
      <footer>
        <div className="flex justify-around px-8 py-16 max-sm:flex-col max-sm:gap-y-6 max-lg:gap-x-4 ">
          <div className="space-y-6">
            <h1 className="mb-6 text-2xl font-bold">Vogue Vibes</h1>
            <p>
              Join our newsletter to stay up to date on features and releases.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 focus:outline-none text-black"
            />
            <Button btnText="Subscribe" />
          </div>
          <div className="space-y-4">
            <h2 className="mb-6 text-xl md:text-2xl font-bold">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-customRed transition duration-300"
                >
                  Home
                </Link>{" "}
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-customRed transition duration-300"
                >
                  About
                </Link>{" "}
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-customRed transition duration-300"
                >
                  Blog
                </Link>{" "}
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-customRed transition duration-300"
                >
                  Contact
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="mb-6 text-xl md:text-2xl font-bold">Follow Me</h2>
            <Link
              href="/"
              className="flex items-center gap-x-2 hover:text-customRed transition duration-300"
            >
              {" "}
              <FaFacebook /> Facebook{" "}
            </Link>
            <Link
              href="/"
              className="flex items-center gap-x-2 hover:text-customRed transition duration-300"
            >
              {" "}
              <FaInstagram /> Instagram{" "}
            </Link>
            <Link
              href="/"
              className="flex items-center gap-x-2 hover:text-customRed transition duration-300"
            >
              {" "}
              <FaTwitter />
              Twitter
            </Link>
            <Link
              href="/"
              className="flex items-center gap-x-2 hover:text-customRed transition duration-300"
            >
              {" "}
              <FaYoutube />
              Youtube{" "}
            </Link>
          </div>
        </div>
        <hr className="w-[95%] mx-auto h- bg-white  mt-12" />
        <p className="py-8 text-center">
          Copyright © 2025 Fashion Blogger | Powered by Fashion Blogger
        </p>
      </footer>
    </div>
  );
};

export default Footer;
