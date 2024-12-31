"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { blogData } from "../../dataBase/myBlogs";

const BlogCard = () => {
  const router = useRouter();

  const handleReadMore = (id: number) => {
    router.push(`/blogData/${id}`);
  };

  return (
    <div className="bg-blue-50 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8">My Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(blogData).map((blog) => (
            <div
              key={blog.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={blog.imageSrc || "/default-image.png"}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 hover:text-blue-600 hover:underline transition-colors duration-200">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm hover:text-blue-600 hover:underline transition-colors duration-200">
                  {blog.content.slice(0, 100)}...
                </p>
                <p className="text-blue-500 text-xs font-semibold mt-4">
                  {blog.datePublished}
                </p>
                <button
                  onClick={() => handleReadMore(blog.id)}
                  className="mt-4 inline-block px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition-transform transform hover:scale-105"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
