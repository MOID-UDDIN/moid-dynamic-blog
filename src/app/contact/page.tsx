"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold text-gray-800">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Feel free to reach out! I'm always open to new ideas and
              collaborations.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Email</h2>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10">
                  <Image
                    src="/email-icon.png"
                    alt="Email Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <a
                  href="mailto:moiduddin990@gmail.com"
                  className="text-gray-600 hover:text-blue-600 text-base font-medium"
                >
                  <strong>moiduddin990@gmail.com</strong>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10">
                  <Image
                    src="/phone-icon.png"
                    alt="Phone Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <a
                  href="tel:03002977077"
                  className="text-gray-600 hover:text-blue-600 text-base font-medium"
                >
                  <strong>03002977077</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Send a Message
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 text-sm"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 text-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 text-sm"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
