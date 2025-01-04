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

const SingleBlogData = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blogsData = `*[_type=="post" && slug.current == "${slug}" ] {
    title,summary,mainImage,content,  publishDate, readTime, author->{bio,name,image}
}[0]`;
  const blogs: ISingleBlog = await client.fetch(blogsData);

  return (
    <div className="bg-[#fff8fc]">
      <BlogsHeader />
      <div className="w-[90%] mx-auto bg-white shadow-lg my-8 space-y-8">
        <Image
          width={800}
          height={400}
          src={urlFor(blogs.mainImage).url()}
          alt={blogs.title}
          className="w-full h-[400px] object-cover rounded-md p-"
        />
        <div className="mt-2 text-sm text-gray-500 flex justify-between px-8">
          <p>
            Published on: {new Date(blogs.publishDate).toLocaleDateString()}
          </p>
          <p>Read time: {blogs.readTime} minutes</p>
        </div>
        <div className="p-8 space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight text-red-800">
            {blogs.title}
          </h1>
          <p className="text-lg text-gray-600">{blogs.summary}</p>

          <PortableText value={blogs.content} components={CustomComponents} />

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
