"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogPage = () => {
  const router = useRouter();

  const blogData = [
    {
      id: 1,
      title: "What is Next.js?",
      content:
        "Next.js is a popular React framework that enables developers to build powerful and scalable web applications...",
      datePublished: "31 December 2024",
      imageSrc: "/next.png",
    },
    {
      id: 2,
      title: "What is Agentic AI?",
      content:
        "Agentic AI is an advanced branch of AI designed to act autonomously in decision-making processes...",
      datePublished: "31 December 2024",
      imageSrc: "/Agentic.png",
    },
    {
      id: 3,
      title: "Understanding TypeScript",
      content:
        "TypeScript is a statically typed superset of JavaScript that enhances the development process by adding type annotations...",
      datePublished: "31 December 2024",
      imageSrc: "/typescript.png",
    },
    {
      id: 4,
      title: "What is Python?",
      content:
        "Python is a versatile programming language known for its readability and ease of use...",
      datePublished: "31 December 2024",
      imageSrc: "/python.jpg",
    },
    {
      id: 5,
      title: "Exploring Machine Learning",
      content:
        "Machine learning is a field of AI that focuses on developing algorithms that allow computers to learn from data...",
      datePublished: "31 December 2024",
      imageSrc: "/ml.png",
    },
    {
      id: 6,
      title: "Introduction to Web Development",
      content:
        "Web development involves the creation of websites and web applications. It encompasses both front-end (client-side) and back-end (server-side) development...",
      datePublished: "31 December 2024",
      imageSrc: "/webdev.png",
    },
  ];

  return (
    <div className="bg-blue-50 py-12 font-[sans-serif]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">
          My Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                onClick={() => router.push(`/blogData/${post.id}`)}
                className="cursor-pointer"
              >
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3
                  onClick={() => router.push(`/blogData/${post.id}`)}
                  className="cursor-pointer text-lg font-bold text-blue-800 mb-3 hover:text-blue-600 hover:underline transition-colors duration-300 "
                >
                  {post.title}
                </h3>

                <p
                  onClick={() => router.push(`/blogData/${post.id}`)}
                  className="cursor-pointer text-gray-600 text-sm truncate hover:text-blue-600 transition-colors duration-300"
                >
                  {post.content}
                </p>

                <p className="text-blue-600 text-[13px] font-semibold mt-4">
                  Published on: {post.datePublished}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
