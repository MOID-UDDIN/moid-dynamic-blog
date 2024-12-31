import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              My Website
            </Link>
            <p className="mt-4 text-gray-300">
              Your gateway to modern insights and ideas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogsData"
                  className="text-gray-300 hover:text-white transition-all"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Stay Updated
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-gray-400">
          © {currentYear} My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
