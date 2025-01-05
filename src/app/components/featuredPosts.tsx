import { client } from "@/sanity/lib/client";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  summary: string;
  mainImage: string;
  publishDate: string;
  readTime: number;
}

const FeaturedPosts = async () => {
  const FPosts = `*[_type=="post"]{
    summary, title, mainImage,
     publishDate, readTime,
    "slug": slug.current
  }`;
  const posts: Post[] = await client
    .fetch(FPosts)
    .then((data) => data.slice(0, 3));

  return (
    <>
      <div className="w-full  max-[480px]:pt-[10rem] pt-[20rem] bg-[#fff8fc] ">
        <h2 className="text-center text-4xl font-extrabold mb-6 ">Featured Posts</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((post) => (
            <div
              key={post.slug}
              className=" p-4 flex flex-col justify-between  hover:scale-105 cursor-pointer transition duration-200  space-y-2"
            >
              <Image
                width={400}
                height={400}
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="mt-4 w-full h-64 object-cover "
              />
              <div className="mt-2 text-xs sm:text-sm text-gray-500 flex justify-between mb-3">
                <p>
                  Published on:{" "}
                  {new Date(post.publishDate).toLocaleDateString()}
                </p>
                <p>Read time: {post.readTime} minutes</p>
              </div>
              <h3 className="text-xl font-bold hover:underline">
                {post.title}
              </h3>
              <p className="text-sm mt-2">{post.summary}</p>
              <a
                href={`/blogs/${post.slug}`}
                className="text-customRed hover:text-red-600 mt-3 block hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
