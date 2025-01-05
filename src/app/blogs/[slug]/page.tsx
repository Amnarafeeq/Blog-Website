import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import React from "react";
import { TypedObject } from "sanity";
import BlogsHeader from "../header";
import CommentSection from "../commentSection";
import CustomComponents from "@/app/components/customComponents";
import Image from "next/image";

interface ISingleBlog {
  title: string;
  summary: string;
  mainImage: string;
  content: TypedObject[];
  author: {
    bio: string;
    name: string;
    image: string;
  };
  publishDate: string;
  readTime: number;
}
interface IPageProps {
  params: Promise<{ slug: string }>;
  // other properties...
}

const SingleBlogData = async ({ params }:IPageProps) => {
  const { slug } = await params;
  const blogsData = `*[_type=="post" && slug.current == "${slug}" ] {
    title,summary,mainImage,content,  publishDate, readTime, author->{bio,name,image}
}[0]`;
  const blogs: ISingleBlog = await client.fetch(blogsData);

  return (
    <div className="bg-[#fff8fc]">
      <BlogsHeader />
      <div className="w-[90%] mx-auto bg-white shadow-lg my-8 sm:space-y-8">
        <Image
          width={800}
          height={400}
          src={urlFor(blogs.mainImage).url()}
          alt={blogs.title}
          className="w-full h-[400px] object-cover rounded-md p-"
        />
        <div className="mt-2 text-xs sm:text-sm text-gray-500 flex justify-between px-3 sm:px-8">
          <p>
            Published on: {new Date(blogs.publishDate).toLocaleDateString()}
          </p>
          <p>Read time: {blogs.readTime} minutes</p>
        </div>
        <div className="p-4 sm:p-8 space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight text-red-800">
            {blogs.title}
          </h1>
          <p className="text-xs sm:text-lg text-gray-600">{blogs.summary}</p>
            {/* <div className="max-sm:text-sm"> */}
          <PortableText value={blogs.content} components={CustomComponents}/>
          {/* </div> */}
          <div className="flex flex-col gap-y-5 mt-8 border-t pt-5">
            <div className="flex items-center space-x-4">
              <Image 
                width={64}
                height={64}
                src={urlFor(blogs.author.image).url()}
                alt={blogs.author.name}
                className="rounded-full w-16 h-16 border shadow-[0px_0px_20px_rgba(0,0,0,0.6)]"
              />
              <p className="text-md font-medium text-gray-700">
                By {blogs.author.name}
              </p>
            </div>
            <p className="text-sm text-gray-600">{blogs.author.bio}</p>
          </div>
        </div>
      </div>
      <CommentSection />
    </div>
  );
};

export default SingleBlogData;
