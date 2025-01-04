import Link from "next/link";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const BlogsHeader = () => {
  return (
    <header>
      <div className="hidden md:flex justify-between items-center  p-6 bg-[#601c1a] text-white">
        <h1 className="text-3xl font-bold">Vogue Vibes</h1>
        <ul className="flex items-center space-x-3 group">
          <li>
            <Link href="/" className=" hover:text-customRed ">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link href="/about" className=" hover:text-customRed ">
              About
            </Link>{" "}
          </li>
          <li>
            <Link href="/blog" className=" hover:text-customRed ">
              Blog
            </Link>{" "}
          </li>
          <li>
            <Link href="/contact" className=" hover:text-customRed ">
              Contact
            </Link>{" "}
          </li>
        </ul>
      </div>
      <Sheet>
        <SheetTrigger className="p-5 md:hidden">
          <GiHamburgerMenu className="text-3xl " />{" "}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left text-3xl text-red-700">
              Vogue Vibes
            </SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col space-y-6 text-lg mt-20 ">
                <li>
                  <Link href="/" className=" hover:text-customRed ">
                    Home
                  </Link>{" "}
                </li>
                <li>
                  <Link href="/about" className=" hover:text-customRed ">
                    About
                  </Link>{" "}
                </li>
                <li>
                  <Link href="/blog" className=" hover:text-customRed ">
                    Blog
                  </Link>{" "}
                </li>
                <li>
                  <Link href="/contact" className=" hover:text-customRed ">
                    Contact
                  </Link>{" "}
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default BlogsHeader;
