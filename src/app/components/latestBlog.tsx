import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Button from "./button";
import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  summary: string;
  mainImage: string;
  publishDate: string;
  readTime: number;
}

const LatestBlogs = async () => {
  const FPosts = `*[_type=="post"]{
        summary, title, mainImage,
        publishDate, readTime,
        "slug": slug.current
      }`;
  const posts: Post[] = await client
    .fetch(FPosts)
    .then((data) => data.slice(0, 6));
  return (
    <div className="w-full  sm:p-10 bg-[#fff8fc] ">
      <h2 className="text-4xl mt-10 font-extrabold text-center text-customRed ">Latest Blog Posts</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {posts.map((post) => (
          <div
            key={post.slug}
            className=" p-4  flex flex-col justify-between hover:scale-105 cursor-pointer transition duration-200"
          >
            <Image
              width={400}
              height={400}
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              className="mt-4 w-full  object-cover "
            />
            <div className="mt-2 text-xs sm:text-sm text-gray-500 flex justify-between mb-3">
              <p>
                Published on: {new Date(post.publishDate).toLocaleDateString()}
              </p>
              <p>Read time: {post.readTime} minutes</p>
            </div>
            <h3 className="text-xl font-bold hover:underline">{post.title}</h3>
            <p className="text-sm mt-2">{post.summary}</p>
            <a
              href={`/blogs/${post.slug}`}
              className="text-customRed mt-3 block hover:text-red-600 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <Link href="/blog">
          <Button btnText="View All" />
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogs;
