import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

interface Post {
  slug: string;
  title: string;
  summary: string;
  mainImage: string;
  publishDate: string;
  readTime: number;
}

const Blogs = async () => {
  const FPosts = `*[_type=="post"]{
    summary, title, mainImage,
    publishDate, readTime,
    "slug": slug.current,
  }`;
  const posts: Post[] = await client.fetch(FPosts);

  return (
    <div className="w-full p-10 bg-[#fff8fc]">
      <h2 className="text-4xl font-extrabold text-center">Latest Blog Posts</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-4 flex flex-col justify-between hover:scale-105 transition duration-200 cursor-pointer"
          >
            <Image
              width={500}
              height={300}
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              className="mt-4 w-full h-64 object-cover"
            />
            {/* Display publish date and read time above the title */}
            <div className="mt-2 text-sm text-gray-500 flex justify-between mb-3">
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
    </div>
  );
};

export default Blogs;

// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import React from 'react'

// const Blogs = async() => {
//     const FPosts = `*[_type=="post"]{
//         summary, title, mainImage,
//           publishDate,readTime,
//         "slug": slug.current,

//       }`
//       const posts = await client.fetch(FPosts)
//   return (
//     <div className='w-full p-10 bg-[#fff8fc] '>
//           <h2 className='text-4xl font-extrabold text-center'>Latest Blog Posts</h2>
//           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
//             {posts.map((post:any) => (
//               <div key={post.slug} className=' p-4  flex flex-col justify-between hover:scale-105  transition duration-200 cursor-pointer '>
//                 <img src={urlFor(post.mainImage).url()} alt={post.title} className='mt-4 w-full h-64 object-cover ' />
//                 <h3 className='text-xl font-bold hover:underline'>{post.title}</h3>
//                 <p className='text-sm mt-2'>{post.summary}</p>
//                 <a href={`/blogs/${post.slug}`} className='text-customRed mt-3 block hover:text-red-600 hover:underline'>Read more</a>
//               </div>
//             ))}
//           </div>

//         </div>
//   )
// }

// export default Blogs
