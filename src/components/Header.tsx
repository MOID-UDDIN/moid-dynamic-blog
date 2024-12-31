"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-blue-600 shadow-lg z-50">
      <nav className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-blue-200 transition duration-300"
        >
          My Blogs
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/blogsData"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            About
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white my-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-4">
          <Link
            href="/"
            className="block text-white hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/blogsData"
            className="block text-white hover:text-blue-200 transition duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-blue-200 transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-blue-200 transition duration-300"
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
